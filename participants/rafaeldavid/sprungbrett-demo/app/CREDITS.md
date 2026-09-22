# Credits

Everything in this demo is invented except the recognition programmes named in "What you're
missing", the two typefaces, and the banner image. Those three are real and are credited here.

## Banner

> **In flux.** The band currently carries the marbled paper below. A cityscape is being
> sourced to replace it, and this section must be rewritten to describe whatever actually
> ships — source object, licence, verification URLs, and the crop and resize applied to it —
> before this is called finished. The marble entry stays afterwards as the alternative, not as
> the shipped credit.

### Currently in the band, and likely to be replaced

**Marbled paper**, `banner.jpg`.

| | |
|---|---|
| Object | Rijksmuseum **RP-D-2018-68** |
| Maker | anonymous |
| Licence | **CC0 1.0** — public domain dedication, no attribution required |
| Object page | https://id.rijksmuseum.nl/200736995 |
| Verified | Wikimedia file page and the Rijksmuseum object page above, 2026-09-22 |

Attribution is not required under CC0. It is recorded anyway, because a public repository
carrying someone's digitised collection object should say where it came from.

**What was done to it.** The source is 3840x2974, 4.4 MB. The cream paper margin visible on all
four edges was cropped off — it reads as a scanning artefact rather than as design — by
detecting the first row and column on each edge that is not near-cream and then pulling in a
further 6% so the crop comes from the interior of the pattern rather than its edge. The result
was cut to a 9:1 slice through the middle, resized to 2880x320 (2x the band's rendered size)
and re-encoded as progressive JPEG at quality 78, which lands at 298 KB. The 4.4 MB original is
not in this repository.

It is used as a shallow 160px band at the top of the page with no text over it, so there is no
contrast question. `alt=""`, because it carries nothing a reader needs.

### The fallback

`banner.svg`, generated from the brand seed by `brand/generate-brand.js`, stays in the tree. It
was designed to be quiet enough to sit behind text, which the photograph is not. A readable page
with no photograph is shippable; a photograph the text fights is not.

### Swapping the image

Two lines in `app/index.html`: the `src` on `.banner`, and `--band-focus`, which places the crop
inside the band. An all-over pattern is happy centred; a skyline wants its horizon placed
deliberately.

## Typefaces

| family | licence | source |
|---|---|---|
| Inter | SIL OFL 1.1 | rsms/inter v4.1 |
| Noto Naskh Arabic | SIL OFL 1.1 | notofonts/arabic, converted from ttf |

Both licences ship in `app/` as `OFL.txt` and `OFL-NotoNaskhArabic.txt`, which the OFL requires
for redistribution. See `app/fonts/README.md` for the conversion step.

## Programme data

The programmes in "What you're missing" are real, and each row carries the URL it was taken
from, the HTTP status and the date it was checked. See `app/data/archetypes.json`. Everything
else — profiles, listings, employers — is invented.
