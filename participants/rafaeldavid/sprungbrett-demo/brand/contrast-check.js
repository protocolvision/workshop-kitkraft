/* contrast-check.js — run with node.
 *
 *   node contrast-check.js            test the seed recorded in brand.json
 *   node contrast-check.js --find     apply the rule: first passing seed from 1
 *
 * The rule: the brand is the first seed, counting from 1, whose palette passes
 * every contrast pair the app actually uses at WCAG AA. Nothing is hand-tuned;
 * if a palette shouts or a pair fails, the seed is rejected and the next one
 * is tried.
 *
 * Pairs tested, all of which appear on screen:
 *   body on page, secondary on page, body on band, white on primary,
 *   primary on page (links), support on page (the fit dots).
 */

var gen = require('./generate-brand.js');

var AA_NORMAL = 4.5;   /* body text and anything small */
var AA_LARGE  = 3.0;   /* the fit dots are a graphic, held to the 3:1 bar */

function srgbToLinear(v) {
  v = v / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function luminance(rgb) {
  return 0.2126 * srgbToLinear(rgb[0]) + 0.7152 * srgbToLinear(rgb[1]) + 0.0722 * srgbToLinear(rgb[2]);
}

function hexToRgb(h) {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}

function ratio(a, b) {
  var la = luminance(hexToRgb(a)), lb = luminance(hexToRgb(b));
  var hi = Math.max(la, lb), lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

function pairsFor(brand) {
  var c = brand.color;
  return [
    { name: 'body on page',        fg: c.ink,       bg: c.page,    min: AA_NORMAL },
    { name: 'secondary on page',   fg: c.secondary, bg: c.page,    min: AA_NORMAL },
    { name: 'body on band',        fg: c.ink,       bg: c.band,    min: AA_NORMAL },
    { name: 'secondary on band',   fg: c.secondary, bg: c.band,    min: AA_NORMAL },
    { name: 'white on primary',    fg: '#FFFFFF',   bg: c.primary, min: AA_NORMAL },
    { name: 'white on pressed',    fg: '#FFFFFF',   bg: c.primaryPressed, min: AA_NORMAL },
    { name: 'primary on page',     fg: c.primary,   bg: c.page,    min: AA_NORMAL },
    { name: 'primary on band',     fg: c.primary,   bg: c.band,    min: AA_NORMAL },
    { name: 'fit colour on page',  fg: c.support,   bg: c.page,    min: AA_LARGE  },
    { name: 'fit colour on band',  fg: c.support,   bg: c.band,    min: AA_LARGE  }
  ];
}

function evaluate(seed) {
  var brand = gen.generate(seed);
  var rows = pairsFor(brand).map(function (p) {
    var r = ratio(p.fg, p.bg);
    return { name: p.name, fg: p.fg, bg: p.bg, min: p.min, ratio: r, pass: r >= p.min };
  });
  var failed = rows.filter(function (r) { return !r.pass; });
  return { seed: seed, brand: brand, rows: rows, pass: failed.length === 0, firstFail: failed[0] };
}

function table(result) {
  console.log('seed ' + result.seed + (result.pass ? '  PASS' : '  FAIL'));
  console.log('  pair                    fg        bg        ratio   min   ');
  result.rows.forEach(function (r) {
    console.log('  ' + r.name.padEnd(22) + '  ' + r.fg + '   ' + r.bg + '   ' +
      r.ratio.toFixed(2).padStart(5) + '   ' + r.min.toFixed(1) + '   ' + (r.pass ? 'pass' : 'FAIL'));
  });
}

if (require.main === module) {
  if (process.argv.indexOf('--find') !== -1) {
    var rejected = [];
    for (var seed = 1; seed <= 5000; seed++) {
      var res = evaluate(seed);
      if (res.pass) {
        console.log('rule: first seed from 1 that passes every pair at AA');
        console.log('rejected ' + rejected.length + ' seed(s) before this one');
        var why = {};
        rejected.forEach(function (r) { why[r.pair] = (why[r.pair] || 0) + 1; });
        Object.keys(why).forEach(function (k) {
          console.log('  rejected by ' + k + ': ' + why[k]);
        });
        console.log('');
        table(res);
        process.exit(0);
      }
      rejected.push({ seed: seed, pair: res.firstFail.name });
    }
    console.error('no passing seed below 5000');
    process.exit(1);
  }

  var fs = require('fs'), path = require('path');
  var file = path.join(__dirname, 'brand.json');
  if (!fs.existsSync(file)) { console.error('brand.json missing; run generate-brand.js first'); process.exit(1); }
  var current = JSON.parse(fs.readFileSync(file, 'utf8'));
  var r = evaluate(current.seed);
  table(r);
  process.exit(r.pass ? 0 : 1);
}
