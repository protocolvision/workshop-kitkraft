/* preflight.js — run with node before every publish.
 *
 *   node preflight.js
 *
 * Refuses to pass if:
 *   1. any element id referenced from app.js is missing from index.html,
 *      or any aria-controls / for / labelledby / href anchor points at nothing
 *   2. data.js has drifted from data/*.json
 *   3. app.js or strings.js does not parse
 *
 * Three bugs of exactly class 1 shipped before this existed: stepDefinitions,
 * fitFor, lang-strip. Each was a rename or a removal that left a reference
 * behind, and each got through because the check that ran was not the check
 * that would have caught it. "The page loaded" is not evidence. This is.
 */

var cp = require('child_process');
var fs = require('fs');
var path = require('path');

var dir = __dirname;
var failures = [];

function step(name, fn) {
  process.stdout.write('preflight: ' + name + ' ... ');
  try { fn(); process.stdout.write('ok\n'); }
  catch (e) { process.stdout.write('FAIL\n'); failures.push(name + ': ' + e.message); }
}

step('app.js and strings.js parse', function () {
  ['app.js', 'strings.js'].forEach(function (f) {
    /* eslint-disable no-new-func */
    new Function(fs.readFileSync(path.join(dir, f), 'utf8'));
  });
});

step('every referenced id exists', function () {
  try { cp.execSync('node ' + JSON.stringify(path.join(dir, 'check-ids.js')), { stdio: 'pipe' }); }
  catch (e) {
    throw new Error('\n' + (e.stdout || '').toString() + (e.stderr || '').toString());
  }
});

step('data.js matches data/*.json', function () {
  var before = fs.readFileSync(path.join(dir, 'data.js'), 'utf8');
  cp.execSync('node ' + JSON.stringify(path.join(dir, 'build-data.js')), { stdio: 'pipe' });
  var after = fs.readFileSync(path.join(dir, 'data.js'), 'utf8');
  if (before !== after) { throw new Error('data.js had drifted; it has now been regenerated'); }
});

step('no network references outside the allowed content links', function () {
  var html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
  var js = fs.readFileSync(path.join(dir, 'app.js'), 'utf8');
  [['fetch(', html + js], ['type="module"', html], ['XMLHttpRequest', html + js],
   ['Math.random', js.split('\n').filter(function (l) { return l.indexOf('*') === -1; }).join('\n')]
  ].forEach(function (pair) {
    if (pair[1].indexOf(pair[0]) !== -1) { throw new Error('found ' + pair[0]); }
  });
});

if (failures.length) {
  console.error('\npreflight: ' + failures.length + ' FAILURE(S) — do not publish\n');
  failures.forEach(function (f) { console.error('  ' + f); });
  process.exit(1);
}
console.log('preflight: all checks passed');
