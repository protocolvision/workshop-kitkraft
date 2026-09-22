/* build-data.js — run with node, never in the browser.
 *
 *   node build-data.js
 *
 * Regenerates data.js from the readable JSON in data/. The page cannot fetch
 * those files from a file:// path, so they ship twice: once as JSON anybody can
 * read and diff, once as a plain script that sets window.DATA. This script is
 * the only thing that writes data.js, so the two copies cannot drift.
 *
 * Deterministic by construction: it reads, it serialises, it writes. No clock,
 * no randomness, no network.
 */

var fs = require('fs');
var path = require('path');

var appDir = __dirname;
var dataDir = path.join(appDir, 'data');

function read(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf8'));
}

var DATA = {
  profiles: read('profiles.json'),
  listings: read('listings.json'),
  archetypes: read('archetypes.json'),
  credentialMap: read('credential-map.json'),
  contextMap: read('context-map.json')
};

var out =
  '/* GENERATED FILE - do not edit by hand.\n' +
  ' * Source of truth: data/*.json. Regenerate with: node build-data.js\n' +
  ' * Loaded by index.html through a plain script tag, because a page opened\n' +
  ' * from a file path cannot fetch its own JSON.\n' +
  ' *\n' +
  ' * Everything below is INVENTED for a workshop demo. Every profile, listing\n' +
  ' * and employer is synthetic and carries synthetic: true. None of the openings\n' +
  ' * is real and none of the employers exists. Nothing is read from LinkedIn,\n' +
  ' * nothing is fetched at all, and no model runs: the page looks up steps 1 to 3\n' +
  ' * and does the arithmetic for steps 4 to 6 in the browser.\n' +
  ' *\n' +
  ' * The recognition procedures named in credential-map.json and archetypes.json\n' +
  ' * are real and described factually. The comparison against a profile is\n' +
  ' * illustrative: what a procedure requires is set by the competent authority\n' +
  ' * and varies by Bundesland. See app/README.md. */\n' +
  'window.DATA = ' + JSON.stringify(DATA, null, 2) + ';\n';

var target = path.join(appDir, 'data.js');
var previous = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
fs.writeFileSync(target, out);

if (previous === null) {
  console.log('data.js written (' + out.length + ' bytes)');
} else if (previous === out) {
  console.log('data.js unchanged (' + out.length + ' bytes) - JSON and script agree');
} else {
  console.log('data.js regenerated (' + out.length + ' bytes) - it had drifted from data/*.json');
}
