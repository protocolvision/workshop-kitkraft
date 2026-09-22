/* check-ids.js — run with node, never in the browser.
 *
 *   node check-ids.js
 *
 * Cross-references every element id app.js reaches for against the ids that
 * actually exist in index.html, and every aria-controls / for / labelledby in
 * index.html against the same set. Exits non-zero on any dangling reference.
 *
 * This exists because the same bug shipped three times: stepDefinitions, then
 * fitFor, now lang-strip. Every one was a rename or a removal that left a
 * reference behind, and every one got through because the check that ran was
 * not the check that would have caught it. A page that boots is not evidence;
 * this is. Run it before every publish.
 */

var fs = require('fs');
var path = require('path');

var dir = __dirname;
var html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
var js = fs.readFileSync(path.join(dir, 'app.js'), 'utf8');

function matchAll(source, re, group) {
  var out = [], m;
  while ((m = re.exec(source)) !== null) { out.push({ value: m[group], index: m.index }); }
  return out;
}

function lineOf(source, index) {
  return source.slice(0, index).split('\n').length;
}

/* ids that exist in the markup */
var declared = {};
matchAll(html, /\sid="([^"]+)"/g, 1).forEach(function (m) { declared[m.value] = true; });

/* ids created at run time, which will not be in the HTML */
var runtimeIds = {};
matchAll(js, /\.id\s*=\s*'([^']+)'/g, 1).forEach(function (m) { runtimeIds[m.value] = true; });
matchAll(js, /\.id\s*=\s*"([^"]+)"/g, 1).forEach(function (m) { runtimeIds[m.value] = true; });
/* ids built from a template, e.g. 'f-' + key or 'lang-' + name — skipped, and
   listed at the end so they are visible rather than silently ignored. */
var dynamic = [];

var problems = [];

function checkJs(re, label) {
  matchAll(js, re, 1).forEach(function (m) {
    if (declared[m.value] || runtimeIds[m.value]) { return; }
    problems.push({ file: 'app.js', line: lineOf(js, m.index), id: m.value, how: label });
  });
}

checkJs(/getElementById\('([^']+)'\)/g, "getElementById");
checkJs(/setText\('([^']+)'/g, "setText");
checkJs(/\bshow\('([^']+)'/g, "show");
checkJs(/highlight\('([^']+)'/g, "highlight");
checkJs(/scrollTo\('([^']+)'/g, "scrollTo");

/* concatenated lookups are real and cannot be resolved statically: surface them */
matchAll(js, /getElementById\('([^']*)'\s*\+/g, 1).forEach(function (m) {
  dynamic.push("app.js:" + lineOf(js, m.index) + "  getElementById('" + m.value + "' + ...)");
});

/* markup that points at an id: aria-controls, for, aria-labelledby, href="#..." */
[['aria-controls', /aria-controls="([^"]+)"/g],
 ['for',           /\sfor="([^"]+)"/g],
 ['aria-labelledby', /aria-labelledby="([^"]+)"/g]].forEach(function (pair) {
  matchAll(html, pair[1], 1).forEach(function (m) {
    m.value.split(/\s+/).forEach(function (id) {
      if (declared[id]) { return; }
      problems.push({ file: 'index.html', line: lineOf(html, m.index), id: id, how: pair[0] });
    });
  });
});

matchAll(html, /href="#([^"]+)"/g, 1).forEach(function (m) {
  if (declared[m.value]) { return; }
  problems.push({ file: 'index.html', line: lineOf(html, m.index), id: m.value, how: 'href anchor' });
});

console.log('check-ids: ' + Object.keys(declared).length + ' ids in index.html, ' +
            Object.keys(runtimeIds).length + ' created at run time');
if (dynamic.length) {
  console.log('check-ids: ' + dynamic.length + ' lookup(s) built from a template, not checkable statically:');
  dynamic.forEach(function (d) { console.log('    ' + d); });
}

if (!problems.length) {
  console.log('check-ids: OK, every referenced id exists');
  process.exit(0);
}

console.error('\ncheck-ids: ' + problems.length + ' DANGLING REFERENCE(S)\n');
problems.forEach(function (p) {
  console.error('  ' + p.file + ':' + p.line + '  ' + p.how + " -> '" + p.id + "' does not exist");
});
console.error('');
process.exit(1);
