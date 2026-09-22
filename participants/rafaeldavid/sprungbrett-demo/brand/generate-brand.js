/* generate-brand.js — run with node, never in the browser.
 *
 *   node generate-brand.js [seed]
 *
 * Derives the whole Sprungbrett palette from one integer seed, deterministically:
 * the same seed always gives the same tokens. Nothing here is hand-picked, and
 * nothing is random — a small LCG turns the seed into a repeatable sequence,
 * and every token is a function of that sequence.
 *
 * The seed itself is chosen by the rule written down in brand/README.md: the
 * first seed from 1 upwards whose palette passes every contrast pair the app
 * actually uses at WCAG AA. contrast-check.js is what applies that rule.
 *
 * The seed picks colour, shape and timing. It does not pick the typeface:
 * Inter is already chosen and licensed, and the wordmark is the name set
 * plainly, so the seed only gets its weight and letter-spacing.
 *
 * Writes brand/brand.json and app/brand.css.
 */

var fs = require('fs');
var path = require('path');

/* ---------- a small deterministic sequence ---------- */

function lcg(seed) {
  var state = (seed >>> 0) || 1;
  return function () {
    /* Numerical Recipes LCG: fixed constants, no Math.random anywhere. */
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/* ---------- colour helpers ---------- */

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360; s = s / 100; l = l / 100;
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  var m = l - c / 2;
  var r = 0, g = 0, b = 0;
  if (h < 60)       { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else              { r = c; g = 0; b = x; }
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

function hex(rgb) {
  return '#' + rgb.map(function (v) {
    var h = Math.max(0, Math.min(255, v)).toString(16).toUpperCase();
    return h.length === 1 ? '0' + h : h;
  }).join('');
}

function hsl(h, s, l) { return hex(hslToRgb(h, s, l)); }

/* ---------- the derivation ---------- */

function generate(seed) {
  var rnd = lcg(seed);

  /* Base hue anywhere on the wheel, quantised to 5 degrees so seeds that land
     a degree apart do not pretend to be different brands. */
  var baseHue = Math.floor(rnd() * 72) * 5;

  /* Primary: saturated enough to carry a button, dark enough for white text. */
  var primarySat   = 62 + Math.floor(rnd() * 20);        /* 62-81 */
  var primaryLight = 34 + Math.floor(rnd() * 10);        /* 34-43 */

  /* The supporting hue sits a controlled distance away, never adjacent. */
  var spread       = 110 + Math.floor(rnd() * 70);       /* 110-179 degrees */
  var supportHue   = baseHue + spread;
  var supportSat   = 48 + Math.floor(rnd() * 22);
  var supportLight = 24 + Math.floor(rnd() * 8);

  /* Ink and the warm band borrow a little of the base hue so the neutrals
     belong to the same family rather than being grey by accident. */
  var inkHue       = baseHue;
  var inkLight     = 14 + Math.floor(rnd() * 5);
  var secondaryL   = 40 + Math.floor(rnd() * 6);
  var bandLight    = 96 + Math.floor(rnd() * 3);
  var bandSat      = 12 + Math.floor(rnd() * 14);

  var radiusStep   = [8, 10, 12, 14][Math.floor(rnd() * 4)];
  var hairAlpha    = [0.07, 0.08, 0.1, 0.12][Math.floor(rnd() * 4)];
  var motionMs     = [150, 180, 200, 220, 250][Math.floor(rnd() * 5)];

  var wordWeight   = [500, 600, 700][Math.floor(rnd() * 3)];
  var wordTracking = [-0.02, -0.015, -0.01, 0][Math.floor(rnd() * 4)];

  var ink = hslToRgb(inkHue, 6, inkLight);

  return {
    seed: seed,
    generated_by: 'brand/generate-brand.js',
    note: 'Every value below is a function of the seed. Do not hand-edit: change the seed and regenerate.',
    hues: { base: baseHue, support: supportHue % 360, spread: spread },
    color: {
      primary:        hsl(baseHue, primarySat, primaryLight),
      primaryPressed: hsl(baseHue, primarySat, Math.max(18, primaryLight - 8)),
      primaryTint:    hsl(baseHue, Math.min(96, primarySat + 14), 95),
      support:        hsl(supportHue, supportSat, supportLight),
      supportTint:    hsl(supportHue, Math.min(96, supportSat + 16), 94),
      ink:            hex(ink),
      secondary:      hsl(inkHue, 4, secondaryL),
      page:           '#FFFFFF',
      band:           hsl(baseHue, bandSat, bandLight)
    },
    shape:  { radius: radiusStep, radiusControl: Math.max(6, radiusStep - 2), hairlineAlpha: hairAlpha },
    motion: { duration: motionMs },
    wordmark: { weight: wordWeight, tracking: wordTracking + 'em' },
    inkRgb: ink
  };
}

function css(brand) {
  var c = brand.color, rgb = brand.inkRgb;
  return '/* GENERATED FILE - do not edit by hand.\n' +
    ' * node brand/generate-brand.js ' + brand.seed + '\n' +
    ' *\n' +
    ' * Sprungbrett\'s own palette, derived from seed ' + brand.seed + '. The seed was\n' +
    ' * chosen by rule, not by taste: see brand/README.md. The app reads these\n' +
    ' * custom properties and never a hex value. */\n\n' +
    ':root {\n' +
    '  --brand-seed: ' + brand.seed + ';\n\n' +
    '  --primary:         ' + c.primary + ';\n' +
    '  --primary-pressed: ' + c.primaryPressed + ';\n' +
    '  --primary-tint:    ' + c.primaryTint + ';\n' +
    '  --support:         ' + c.support + ';\n' +
    '  --support-tint:    ' + c.supportTint + ';\n' +
    '  --ink:             ' + c.ink + ';\n' +
    '  --secondary:       ' + c.secondary + ';\n' +
    '  --page:            ' + c.page + ';\n' +
    '  --band:            ' + c.band + ';\n' +
    '  --hairline:        rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + brand.shape.hairlineAlpha + ');\n\n' +
    '  --radius:          ' + brand.shape.radius + 'px;\n' +
    '  --radius-control:  ' + brand.shape.radiusControl + 'px;\n' +
    '  --motion:          ' + brand.motion.duration + 'ms;\n\n' +
    '  --wordmark-weight:   ' + brand.wordmark.weight + ';\n' +
    '  --wordmark-tracking: ' + brand.wordmark.tracking + ';\n' +
    '}\n';
}


/* The banner, from the same seed as the palette, so it is on-brand by
   construction rather than by eye. Abstract and calm: broad overlapping arcs
   echoing the springboard, warm rather than corporate-cold.
 *
 * The left 62% is deliberately left as flat --band with nothing drawn over it,
 * because that is where the hero text sits. Contrast there is therefore exactly
 * ink-on-band, which is a known quantity rather than an assumed average — and
 * it is checked against the rendered pixels as well, see brand/README.md. */
function banner(brand) {
  var rnd = lcg(brand.seed + 7777);
  var c = brand.color;
  var W = 1600, H = 500;
  /* The left fraction kept completely clear. It is deliberately generous:
     object-fit: cover crops the sides when the hero is taller than 500/1600,
     so the quiet zone has to survive that crop at any sensible viewport. Paired
     with object-position: left center, which anchors this edge. */
  var QUIET = 0.78;

  var parts = [];
  parts.push('<rect width="' + W + '" height="' + H + '" fill="' + c.band + '"/>');

  /* Soft fields, all starting beyond the quiet zone. */
  for (var i = 0; i < 5; i++) {
    var cx = Math.round(W * (QUIET + 0.06 + rnd() * 0.42));
    var cy = Math.round(H * (0.1 + rnd() * 0.8));
    var r  = Math.round(H * (0.35 + rnd() * 0.55));
    var fill = i % 2 === 0 ? c.primaryTint : c.supportTint;
    parts.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + r +
               '" fill="' + fill + '" opacity="' + (0.5 + rnd() * 0.3).toFixed(2) + '"/>');
  }

  /* Three broad arcs: the springboard motif, thrown to the right. */
  for (var a = 0; a < 3; a++) {
    var y0 = Math.round(H * (0.72 + a * 0.06));
    var lift = Math.round(H * (0.30 + rnd() * 0.28));
    var x0 = Math.round(W * (QUIET - 0.04));
    parts.push('<path d="M' + x0 + ' ' + y0 +
               ' C' + Math.round(W * 0.78) + ' ' + (y0 - lift) +
               ' ' + Math.round(W * 0.9) + ' ' + (y0 - lift) +
               ' ' + W + ' ' + Math.round(y0 - lift * 0.55) + '"' +
               ' stroke="' + c.primary + '" stroke-width="' + (10 + a * 6) +
               '" fill="none" stroke-linecap="round" opacity="' + (0.16 + a * 0.06).toFixed(2) + '"/>');
  }

  /* A single confident arc, the one thing that reads at a glance. */
  parts.push('<path d="M' + Math.round(W * (QUIET - 0.02)) + ' ' + Math.round(H * 0.86) +
             ' C' + Math.round(W * 0.8) + ' ' + Math.round(H * 0.2) +
             ' ' + Math.round(W * 0.88) + ' ' + Math.round(H * 0.12) +
             ' ' + Math.round(W * 0.99) + ' ' + Math.round(H * 0.22) + '"' +
             ' stroke="' + c.primary + '" stroke-width="16" fill="none"' +
             ' stroke-linecap="round" opacity="0.5"/>');

  /* And the board it springs from. */
  parts.push('<path d="M' + Math.round(W * (QUIET - 0.02)) + ' ' + Math.round(H * 0.86) +
             ' L' + Math.round(W * 0.78) + ' ' + Math.round(H * 0.86) + '"' +
             ' stroke="' + c.primary + '" stroke-width="16" fill="none"' +
             ' stroke-linecap="round" opacity="0.28"/>');

  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" ' +
         'width="' + W + '" height="' + H + '" role="presentation">' +
         parts.join('') + '</svg>';
}

/* The mark: Sprungbrett means springboard, so the mark is a board and the arc
   coming off it. One shape, no text, no gradient, and it has to survive being
   16px, which is why the strokes are heavy and there is exactly one of them. */
function favicon(brand) {
  var c = brand.color.primary;
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
    '<path d="M4 25h14" stroke="' + c + '" stroke-width="4" stroke-linecap="round" fill="none"/>' +
    '<path d="M6 19C12 7 22 5 28 7" stroke="' + c + '" stroke-width="4" ' +
    'stroke-linecap="round" fill="none"/>' +
    '</svg>';
}

/* Inlined as a data URI in <link rel="icon">, so it survives file:// and costs
   no request. Only # needs escaping for a URI-encoded SVG. */
function faviconDataUri(brand) {
  return 'data:image/svg+xml,' + favicon(brand).split('#').join('%23').split('"').join("'");
}

module.exports = {
  generate: generate, css: css, hslToRgb: hslToRgb, hex: hex,
  favicon: favicon, faviconDataUri: faviconDataUri, banner: banner
};

if (require.main === module) {
  var seed = parseInt(process.argv[2], 10);
  if (!seed) { console.error('usage: node generate-brand.js <seed>'); process.exit(1); }
  var brand = generate(seed);
  delete brand.inkRgb;
  var brandDir = __dirname;
  fs.writeFileSync(path.join(brandDir, 'brand.json'), JSON.stringify(brand, null, 2) + '\n');
  var full = generate(seed);
  fs.writeFileSync(path.join(brandDir, '..', 'app', 'brand.css'), css(full));
  fs.writeFileSync(path.join(brandDir, 'favicon.svg'), favicon(full) + '\n');
  fs.writeFileSync(path.join(brandDir, 'favicon-datauri.txt'), faviconDataUri(full) + '\n');
  fs.writeFileSync(path.join(brandDir, '..', 'app', 'banner.svg'), banner(full) + '\n');

  /* The two places a brand colour has to appear as a literal rather than as a
     custom property: the favicon data URI and the theme-color meta. Neither can
     read CSS, so the generator writes them into index.html itself. That keeps
     the single source of truth and means a reseed cannot leave them stale. */
  var indexPath = path.join(brandDir, '..', 'app', 'index.html');
  var html = fs.readFileSync(indexPath, 'utf8');
  var before = html;
  html = html.replace(/<link rel="icon" href="[^"]*">/,
    '<link rel="icon" href="' + faviconDataUri(full) + '">');
  html = html.replace(/<meta name="theme-color" content="[^"]*">/,
    '<meta name="theme-color" content="' + full.color.primary + '">');
  if (html !== before) {
    fs.writeFileSync(indexPath, html);
    console.log('  index.html favicon and theme-color updated to match the seed');
  } else {
    console.log('  index.html favicon and theme-color already current');
  }
  console.log('brand: seed ' + seed + ' -> brand.json and app/brand.css');
  console.log('  primary ' + full.color.primary + '  support ' + full.color.support +
              '  ink ' + full.color.ink + '  band ' + full.color.band);
  console.log('  favicon.svg, favicon-datauri.txt and app/banner.svg written');
}
