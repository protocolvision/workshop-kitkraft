# Sprungbrett brand

The demo used to wear the Protocol Institute's colours. It should not: it is a standalone product inside the demo, and the workshop's palette carries meaning it has no business borrowing. So Sprungbrett has its own, and it is generated rather than chosen.

## The rule

> The brand is the first seed, counting from 1, whose palette
> **(a)** passes every contrast pair the app actually uses at WCAG AA, **and**
> **(b)** puts the supporting hue between 95° and 165°.

Clause (b) was added after the fact, and the reason is worth recording. Seed 789 passed every
contrast pair comfortably and still produced a dark rust, `#6D2A22`, for the fit indicator — so
a "strong fit" read as a warning. Contrast is not the only thing a colour says. The fix was to
put the constraint in the rule and re-run it, not to edit the generated value.

95–165° is green through to blue-green. It excludes the yellow-greens below it, which read as
caution rather than good.

Running `node contrast-check.js --find` applies both clauses from scratch.

**The seed is 1412.** 1411 seeds were rejected before it:

| rejected by | count |
|---|---|
| white on primary | 601 |
| support hue out of positive range | 544 |
| secondary on band | 245 |
| primary on band | 21 |

**A note for whoever picks this up.** Adding clause (b) moved the *primary* as well, from the
teal `#13799A` of seed 789 to `#7D20AC`, because the rule selects a whole palette and not one
colour. That was not the intent of the change — the intent was only to stop the support colour
reading as a warning — and it is flagged here rather than quietly kept. To go back to the teal,
`node generate-brand.js 789` reverts every generated file, at the cost of the rust fit colour
returning. Both seeds are recorded so either is one command away.

## What the seed decides

A small LCG turns the seed into a repeatable sequence; every token is a function of it. No `Math.random`, no clock, no hand-editing.

- a base hue, quantised to 5° so near-identical seeds do not pretend to be different brands
- a primary, a deeper pressed state, and a tint of it
- one supporting hue for positive signals, held 110–179° away from the primary so it can never read as a shade of it
- ink and secondary grey carrying a little of the base hue, so the neutrals belong to the family
- a page white and one warm off-white band tone
- a radius step, a hairline alpha, and a motion duration, each from a small set
- the wordmark's weight and letter-spacing

It does **not** decide the typeface. Inter is already chosen and licensed; the seed gets colour, shape and timing only.

## Tokens (seed 789)

| token | value | used for |
|---|---|---|
| `--primary` | `#7D20AC` | the single primary action, links, focus rings |
| `--primary-pressed` | `#64198A` | the pressed and hover state |
| `--primary-tint` | `#F6E8FD` | the highlight that shows what just changed |
| `--support` | `#3E6C1E` | fit, and nothing else |
| `--ink` | `#2F2B31` | body text |
| `--secondary` | `#6A646D` | secondary lines, captions, labels |
| `--page` | `#FFFFFF` | the page |
| `--band` | `#FAF9FB` | full-width bands that separate sections |
| `--hairline` | `rgba(47,43,49,0.1)` | every separator on the page |
| `--radius` / `--radius-control` | `10px` / `8px` | the few surfaces that need one |
| `--motion` | `250ms` | every transition |
| `--wordmark-weight` / `--wordmark-tracking` | `700` / `-0.015em` | the wordmark |

## Contrast table

```
seed 1412  PASS
  support hue 95 deg  (95-165 required)  pass
  pair                    fg        bg        ratio   min   
  body on page            #2F2B31   #FFFFFF   13.90   4.5   pass
  secondary on page       #6A646D   #FFFFFF    5.74   4.5   pass
  body on band            #2F2B31   #FAF9FB   13.24   4.5   pass
  secondary on band       #6A646D   #FAF9FB    5.47   4.5   pass
  white on primary        #FFFFFF   #7D20AC    7.85   4.5   pass
  white on pressed        #FFFFFF   #64198A   10.25   4.5   pass
  primary on page         #7D20AC   #FFFFFF    7.85   4.5   pass
  primary on band         #7D20AC   #FAF9FB    7.48   4.5   pass
  fit colour on page      #3E6C1E   #FFFFFF    6.23   3.0   pass
  fit colour on band      #3E6C1E   #FAF9FB    5.94   3.0   pass
```

Re-run with `node contrast-check.js`. It exits non-zero if the recorded seed stops passing.

## What else the seed produces

`node generate-brand.js <seed>` writes five things, all from the one integer:

- `brand/brand.json` — the tokens, with the seed recorded in the file
- `app/brand.css` — the same tokens as custom properties, which is all the app reads
- `brand/favicon.svg` and `brand/favicon-datauri.txt` — a board-and-arc mark in `--primary`
- `app/banner.svg` — the hero banner, abstract arcs in the primary and the two tints
- and it rewrites the `<link rel="icon">` and `<meta name="theme-color">` in `app/index.html`,
  because those two cannot read a CSS custom property and would otherwise go stale on a reseed

The banner keeps its left 78% as flat `--band` with nothing drawn on it, which is where the
hero text sits, and the image is anchored `object-position: left center` so that edge survives
the `object-fit: cover` crop. Measured on the rendered pixels rather than assumed: the
headline, the greeting and the lede each sit on exactly one colour, `#FAF9FB`, at **13.24:1**.

## The wordmark

"Sprungbrett" means springboard, which is the whole idea of the product, so the wordmark is the name set plainly in Inter at the weight and tracking the seed picked. No image, no logo file, nothing to load.

## Flags

`showFlags` lives in `app/strings.js` and is **`false`**.

A flag is a country, not a language. German would need at least three, Spanish twenty-odd, Arabic more than twenty — which is why that entry carries a globe rather than a country even when the switch is on. And the failure mode is not neutral: showing a Russian flag to a Ukrainian speaker, or a Saudi flag to a Syrian one, is the worst possible first impression for exactly the people this page is for. Autonyms carry no such claim, and each script is its own recognition cue, which is what somebody scanning for their own language actually needs.

The switch exists so the question can be looked at rather than argued about. Set it to `true` and the emoji appears before the autonym; nothing loads either way.

## Do and don't

**Do** change the seed and regenerate if the palette needs to move. **Do** run `contrast-check.js` after, and keep the rule.

**Don't** hand-edit `brand.json` or `app/brand.css`: both are generated, and an edit will be overwritten. **Don't** add a hex value to `index.html` or `app.js` — the app reads custom properties only, which is what makes reseeding a one-command change. **Don't** treat a generated colour that shouts as a licence to nudge it: that is the seed failing the rule, so take the next seed that passes.

## One thing the rule does not cover

The rule tests contrast and nothing else. At seed 789 the supporting hue landed warm — a deep rust, `#6D2A22` — rather than the green a "positive signal" colour is usually expected to be. It passes every pair comfortably and reads as calm next to the teal primary, but it is not what a person would have picked for "fit". If that matters, the fix is to add a hue constraint to the rule in `generate-brand.js` and re-run `--find`, not to edit the value.
