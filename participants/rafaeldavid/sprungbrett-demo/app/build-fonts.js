/* build-fonts.js — run with node, never in the browser.
 *
 *   node build-fonts.js
 *
 * Generates fonts.css: an @font-face block for Inter at weights 400 and 600,
 * with the font files embedded as base64 data: URIs.
 *
 * Why embedded rather than linked: the page must make zero network requests,
 * which rules out a font CDN, and font files loaded over a *relative* URL from
 * a file:// path are blocked as cross-origin in some browsers, which rules out
 * url("fonts/Inter-400.woff2"). A data: URI is neither.
 *
 * Inputs, none of which are in this repo yet:
 *
 *   fonts/Inter-400.woff2   latin subset, weight 400
 *   fonts/Inter-600.woff2   latin subset, weight 600
 *   fonts/OFL.txt           the SIL Open Font License the files ship under
 *
 * Inter is licensed under the OFL, which permits redistribution but requires
 * the licence to travel with the files. This script refuses to generate
 * anything unless OFL.txt is present, and copies it to app/OFL.txt, so the
 * repo cannot end up carrying a redistributed font without its licence.
 *
 * Until the files are added, fonts.css stays a placeholder and the page falls
 * back to the system stack. Nothing breaks either way.
 */

var fs = require('fs');
var path = require('path');

var appDir = __dirname;
var fontDir = path.join(appDir, 'fonts');

var FACES = [
  { weight: 400, file: 'Inter-400.woff2' },
  { weight: 600, file: 'Inter-600.woff2' }
];

function bail(message) {
  console.error('build-fonts: ' + message);
  console.error('build-fonts: fonts.css left as it is; the page falls back to the system stack.');
  process.exit(1);
}

if (!fs.existsSync(fontDir)) {
  bail('no fonts/ directory. Put the Inter .woff2 files and their OFL.txt in ' + fontDir + '.');
}

var licence = path.join(fontDir, 'OFL.txt');
if (!fs.existsSync(licence)) {
  bail('fonts/OFL.txt is missing. Inter ships under the SIL Open Font License, ' +
       'and the licence has to travel with the files. Add it before generating.');
}

var blocks = [];
for (var i = 0; i < FACES.length; i++) {
  var face = FACES[i];
  var full = path.join(fontDir, face.file);
  if (!fs.existsSync(full)) { bail('missing ' + face.file + ' in fonts/.'); }

  var bytes = fs.readFileSync(full);
  if (bytes.slice(0, 4).toString('ascii') !== 'wOF2') {
    bail(face.file + ' is not a woff2 file (bad magic bytes).');
  }

  blocks.push(
    '@font-face {\n' +
    '  font-family: "Inter";\n' +
    '  font-style: normal;\n' +
    '  font-weight: ' + face.weight + ';\n' +
    '  font-display: swap;\n' +
    '  src: url("data:font/woff2;base64,' + bytes.toString('base64') + '") format("woff2");\n' +
    '}'
  );
  console.log('build-fonts: embedded ' + face.file + ' (' + bytes.length + ' bytes)');
}

var out =
  '/* GENERATED FILE - do not edit by hand. Run: node build-fonts.js\n' +
  ' *\n' +
  ' * Inter, weights 400 and 600, latin subset, embedded as base64 so the page\n' +
  ' * makes no network request and needs no relative font URL over file://.\n' +
  ' * Inter is licensed under the SIL Open Font License; see OFL.txt beside this\n' +
  ' * file. */\n\n' +
  blocks.join('\n\n') + '\n';

fs.writeFileSync(path.join(appDir, 'fonts.css'), out);
fs.copyFileSync(licence, path.join(appDir, 'OFL.txt'));
console.log('build-fonts: fonts.css written (' + out.length + ' bytes), OFL.txt copied alongside it');
