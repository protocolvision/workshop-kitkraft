# fonts/

Four faces, two families, both under the SIL Open Font License. Both licence files sit here and
are copied up to `app/` by the build, because the OFL permits redistribution but requires the
licence to travel with the files.

| file | family | weight | source |
|---|---|---|---|
| `Inter-400.woff2` | Inter | 400 | rsms/inter v4.1, `web/Inter-Regular.woff2` |
| `Inter-600.woff2` | Inter | 600 | rsms/inter v4.1, `web/Inter-SemiBold.woff2` |
| `NotoNaskhArabic-400.woff2` | Noto Naskh Arabic | 400 | notofonts/arabic, `full/ttf`, converted |
| `NotoNaskhArabic-600.woff2` | Noto Naskh Arabic | 600 | notofonts/arabic, `full/ttf`, converted |
| `OFL.txt` | — | — | Inter's `LICENSE.txt`, renamed to what `build-fonts.js` looks for |
| `OFL-NotoNaskhArabic.txt` | — | — | Noto Arabic's `OFL.txt` |

## Why two families

Inter has no Arabic glyphs at all. Without a second family the entire Arabic interface falls
through to whatever the system happens to have, at Latin leading, which clips the diacritics —
text a reader cannot read, in the language of a group this page exists to serve. Each family is
declared with a `unicode-range`, so the browser only decodes the one a given run of text needs.

## Reproducing the Arabic conversion

The Noto Naskh Arabic release ships `ttf` and `otf` but no `woff2`. The two faces here were
converted from `full/ttf` with fontTools, which is lossless re-containering rather than a
re-render:

```
python3 -m venv /tmp/fontenv && /tmp/fontenv/bin/pip install fonttools brotli
/tmp/fontenv/bin/python -c "
from fontTools.ttLib import TTFont
for src, dst in [('NotoNaskhArabic-Regular.ttf','NotoNaskhArabic-400.woff2'),
                 ('NotoNaskhArabic-SemiBold.ttf','NotoNaskhArabic-600.woff2')]:
    f = TTFont(src); f.flavor = 'woff2'; f.save(dst)
"
```

They are renamed to the `Family-Weight.woff2` convention `build-fonts.js` expects.

## Building

```
node ../build-fonts.js
```

Embeds all four as base64 `data:` URIs in `app/fonts.css` (~578K) and copies both licences up to
`app/`. The script refuses to run for a family whose licence file is missing.

Nothing here is ever fetched at runtime. The files are embedded rather than linked because the
page must make no network request, and a relative font URL over `file://` is blocked in some
browsers.
