# app

The page lives here. Not built yet; `../spec_rafa_v2.md` is the build brief.

```
index.html              one screen: cards, five station tiles, shortlist table
app.js                  scoring and rendering; no Math.random, no Date.now
data.js                 window.DATA = { profiles, listings, credentialMap }
data/*.json             the same data, readable; never fetched
shortlist.schema.json   the export's column order and version
```

Constraints that are easy to break:

- It must open from a file path. A page on `file://` cannot `fetch()` its own JSON and cannot use ES modules, so the data arrives through a plain `<script src="data.js">`.
- No network at all: no CDN, no web fonts, no analytics.
- Deterministic: the same card and fields give the same rows every time.
- Desktop only, about 1100px wide, body 16pt and table 20pt, nothing on hover alone.
