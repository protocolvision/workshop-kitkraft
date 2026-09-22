# Credits

Everything in this demo is invented except the recognition programmes named in "What you're
missing", the two typefaces, and the banner image. Those three are real and are credited here.

## Banner

**Dresden, the Elbe and the Altstadt**, c. 1890–1905. `banner.jpg`.

| | |
|---|---|
| Subject | Dresden from the Elbe: the Augustusbrücke, the Altstadt embankment, the Frauenkirche and Hofkirche beyond |
| Date | circa 1890–1905 |
| Author | unknown; Photoglob AG (Zürich) or Detroit Publishing Co. |
| Process | photochrom print |
| Rights | **Public domain** — published before 1931, and CC Public Domain Mark 1.0 on the Commons file page |
| Institution reference | LC-DIG-ppmsca-00937, Library of Congress Photochrom Prints Collection |
| Source | https://commons.wikimedia.org/wiki/File:Dresden_Elbe_Altstadt_1900.jpg |
| Verified | 2026-09-22 |

Attribution is not required for a public-domain work. It is recorded anyway, because a public
repository carrying a digitised collection object should say where it came from.

### Reproducing the shipped file from the original

The original is 3520×2596, 1.3 MB, and is **not** committed. From it:

1. **Crop** the full width at rows **36%–51%** of the height — `(0, 935, 3520, 1326)` — a 3520×391
   strip, which is exactly 9:1, the band's own aspect, so nothing is distorted.
2. **Resize** to **2880×320**, twice the band's rendered 1440×160, with Lanczos.
3. **Re-encode** as progressive JPEG, quality 82, optimised: **211 KB**.

The crop is deliberate rather than centred. It puts the roofline along the top edge, catches the
Augustusbrücke arches across the left half, and gives the lower two-thirds to the Elbe, whose
soft blue-green is close to the brand's `--primary` teal. It stays off the sky, which in this
print is a flat pale wash that would read as empty in a 160px band. `--band-focus` is set to
`center 40%` for the same reason: on a viewport wide enough to crop the band vertically, the
roofline and the arches survive rather than the open water.

`alt=""` — decorative. It carries nothing a reader needs, and the page says nothing about
Dresden.

### The alternatives, kept but not shipped

- **Marbled paper**, Rijksmuseum **RP-D-2018-68**, anonymous, **CC0 1.0**,
  https://id.rijksmuseum.nl/200736995, verified 2026-09-22. Used in the band before the
  cityscape and documented here because it may come back. Not committed.
- **`banner.svg`**, generated from the brand seed by `brand/generate-brand.js` and in the tree.
  It is the one designed to be quiet enough to sit *behind* text, which neither photograph is.

### Swapping the image

Two lines in `app/index.html`: the `src` on `.banner`, and `--band-focus`, which places the crop
inside the band.

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
