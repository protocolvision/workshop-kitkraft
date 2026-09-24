/* build-fonts.js — run with node, never in the browser.
 *
 *   node build-fonts.js
 *
 * Generates fonts.css: @font-face blocks for Inter (Latin and Cyrillic) and
 * Noto Naskh Arabic, each at weights 400 and 600, with the files embedded as
 * base64 data: URIs. Inter contains no Arabic glyphs at all, which is why the
 * second family is not optional.
 *
 * Why embedded rather than linked: the page must make zero network requests,
 * which rules out a font CDN, and font files loaded over a *relative* URL from
 * a file:// path are blocked as cross-origin in some browsers, which rules out
 * url("fonts/Inter-400.woff2"). A data: URI is neither.
 *
 * Inputs:
 *
 *   fonts/Inter-400.woff2             fonts/Inter-600.woff2
 *   fonts/NotoNaskhArabic-400.woff2   fonts/NotoNaskhArabic-600.woff2
 *   fonts/OFL.txt                     covers Inter
 *   fonts/OFL-NotoNaskhArabic.txt     covers Noto Naskh Arabic
 *
 * Both families are under the SIL Open Font License, which permits
 * redistribution but requires the licence to travel with the files. This
 * script refuses to generate anything for a family whose licence file is
 * missing, and copies both licences up to app/, so the repo cannot end up
 * carrying a redistributed font without its licence.
 *
 * If a family is absent, fonts.css is still written for whatever is present
 * and the missing one falls back to the system stack. Nothing breaks.
 */

var fs = require('fs');
var path = require('path');

var appDir = __dirname;
var fontDir = path.join(appDir, 'fonts');

var FAMILIES = [
  {
    family: 'Inter',
    licence: 'OFL.txt',
    licenceAs: 'OFL.txt',
    /* U+0000-024F Latin, U+0370-03FF Greek, U+0400-04FF Cyrillic, plus the
       punctuation and symbols Inter actually covers. Declaring the range lets
       the browser skip this file entirely for an Arabic run. */
    unicodeRange: 'U+0000-00FF, U+0100-024F, U+0259, U+0300-036F, U+0370-03FF, ' +
                  'U+0400-04FF, U+1E00-1EFF, U+2000-206F, U+2070-209F, U+20A0-20BF, ' +
                  'U+2100-214F, U+2190-21BB, U+2212, U+2215, U+FEFF, U+FFFD',
    faces: [
      { weight: 400, file: 'Inter-400.woff2' },
      { weight: 600, file: 'Inter-600.woff2' }
    ]
  },
  {
    family: 'Noto Naskh Arabic',
    licence: 'OFL-NotoNaskhArabic.txt',
    licenceAs: 'OFL-NotoNaskhArabic.txt',
    /* Arabic, Arabic Supplement, Arabic Extended-A, and the presentation forms. */
    unicodeRange: 'U+0600-06FF, U+0750-077F, U+0870-088E, U+08A0-08FF, ' +
                  'U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FEFF',
    faces: [
      { weight: 400, file: 'NotoNaskhArabic-400.woff2' },
      { weight: 600, file: 'NotoNaskhArabic-600.woff2' }
    ]
  }
];

function bail(message) {
  console.error('build-fonts: ' + message);
  console.error('build-fonts: fonts.css left as it is; the page falls back to the system stack.');
  process.exit(1);
}

if (!fs.existsSync(fontDir)) {
  bail('no fonts/ directory. Put the Inter .woff2 files and their OFL.txt in ' + fontDir + '.');
}

var blocks = [];
var embedded = 0, skipped = [];

FAMILIES.forEach(function (fam) {
  var present = fam.faces.filter(function (f) {
    return fs.existsSync(path.join(fontDir, f.file));
  });
  if (!present.length) {
    skipped.push(fam.family + ' (no files)');
    return;
  }

  /* The licence guard, applied per family: a font may not be redistributed
     here without the licence it ships under sitting beside it. */
  var licencePath = path.join(fontDir, fam.licence);
  if (!fs.existsSync(licencePath)) {
    bail(fam.licence + ' is missing, but ' + fam.family + ' files are present. ' +
         'Both families are under the SIL Open Font License, and the licence has to ' +
         'travel with the files. Add it before generating.');
  }

  fam.faces.forEach(function (face) {
    var full = path.join(fontDir, face.file);
    if (!fs.existsSync(full)) { skipped.push(fam.family + ' ' + face.weight); return; }

    var bytes = fs.readFileSync(full);
    if (bytes.slice(0, 4).toString('ascii') !== 'wOF2') {
      bail(face.file + ' is not a woff2 file (bad magic bytes).');
    }

    blocks.push(
      '@font-face {\n' +
      '  font-family: "' + fam.family + '";\n' +
      '  font-style: normal;\n' +
      '  font-weight: ' + face.weight + ';\n' +
      '  font-display: swap;\n' +
      '  unicode-range: ' + fam.unicodeRange + ';\n' +
      '  src: url("data:font/woff2;base64,' + bytes.toString('base64') + '") format("woff2");\n' +
      '}'
    );
    embedded++;
    console.log('build-fonts: embedded ' + face.file + ' (' + bytes.length + ' bytes)');
  });

  fs.copyFileSync(licencePath, path.join(appDir, fam.licenceAs));
});

if (!embedded) { bail('no font files found in fonts/.'); }
if (skipped.length) { console.log('build-fonts: skipped ' + skipped.join(', ')); }

var out =
  '/* GENERATED FILE - do not edit by hand. Run: node build-fonts.js\n' +
  ' *\n' +
  ' * Inter (Latin, Greek, Cyrillic) and Noto Naskh Arabic, weights 400 and 600,\n' +
  ' * embedded as base64 so the page makes no network request and needs no\n' +
  ' * relative font URL over file://, which some browsers block.\n' +
  ' *\n' +
  ' * unicode-range on each family means the browser only decodes the one it\n' +
  ' * needs for a given run of text.\n' +
  ' *\n' +
  ' * Both families are under the SIL Open Font License. The licences sit beside\n' +
  ' * this file as OFL.txt and OFL-NotoNaskhArabic.txt. */\n\n' +
  blocks.join('\n\n') + '\n';

fs.writeFileSync(path.join(appDir, 'fonts.css'), out);
console.log('build-fonts: fonts.css written (' + out.length + ' bytes), ' +
            embedded + ' faces, licences copied alongside it');
