# fonts/

Empty on purpose. Two typefaces have to be dropped in here, and neither is in the repo.

## Latin and Cyrillic — Inter

```
Inter-400.woff2
Inter-600.woff2
OFL.txt
```

Then `node ../build-fonts.js`. The script refuses to run without `OFL.txt`, because Inter is
licensed under the SIL Open Font License, which permits redistribution but requires the licence
to travel with the files.

## Arabic — Inter has none

Inter contains no Arabic glyphs. Until an Arabic face is here, `:lang(ar)` falls back to
`Noto Naskh Arabic`, `Geeza Pro`, `Segoe UI`, `Tahoma` — declared in `index.html` so the
fallback is a decision rather than an accident. Noto Naskh Arabic is also OFL; the same rule
applies, licence alongside the files.

Nothing here is fetched at runtime under any circumstances: `build-fonts.js` embeds the files
as base64 `data:` URIs into `fonts.css`, because the page must make no network request and a
relative font URL over `file://` is blocked in some browsers.
