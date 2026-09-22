# Sprungbrett brand

The demo used to wear the Protocol Institute's colours. It should not: it is a standalone product inside the demo, and the workshop's palette carries meaning it has no business borrowing. So Sprungbrett has its own, and it is generated rather than chosen.

## The rule

> The brand is the first seed, counting from 1, whose palette passes every contrast pair the app actually uses at WCAG AA.

That is the whole rule. It is written down so the palette is reproducible and so nobody has to defend a taste decision they cannot justify. Running `node contrast-check.js --find` applies it from scratch.

**The seed is 789.** 788 seeds were rejected before it:

| rejected by | count |
|---|---|
| white on primary | 571 |
| secondary on band | 214 |
| primary on band | 3 |

The first pair does most of the rejecting, which is the point: a primary light enough to look friendly is a primary that white text cannot sit on.

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
| `--primary` | `#13799A` | the single primary action, links, focus rings |
| `--primary-pressed` | `#0F5C76` | the pressed and hover state |
| `--primary-tint` | `#E7F8FE` | the highlight that shows what just changed |
| `--support` | `#6D2A22` | fit, and nothing else |
| `--ink` | `#262A2B` | body text |
| `--secondary` | `#676D6F` | secondary lines, captions, labels |
| `--page` | `#FFFFFF` | the page |
| `--band` | `#F9FBFB` | full-width bands that separate sections |
| `--hairline` | `rgba(38,42,43,0.07)` | every separator on the page |
| `--radius` / `--radius-control` | `14px` / `12px` | the few surfaces that need one |
| `--motion` | `180ms` | every transition |
| `--wordmark-weight` / `--wordmark-tracking` | `700` / `-0.02em` | the wordmark |

## Contrast table

```
seed 789  PASS
  pair                    fg        bg        ratio   min   
  body on page            #262A2B   #FFFFFF   14.50   4.5   pass
  secondary on page       #676D6F   #FFFFFF    5.26   4.5   pass
  body on band            #262A2B   #F9FBFB   13.96   4.5   pass
  secondary on band       #676D6F   #F9FBFB    5.06   4.5   pass
  white on primary        #FFFFFF   #13799A    4.97   4.5   pass
  white on pressed        #FFFFFF   #0F5C76    7.47   4.5   pass
  primary on page         #13799A   #FFFFFF    4.97   4.5   pass
  primary on band         #13799A   #F9FBFB    4.78   4.5   pass
  fit colour on page      #6D2A22   #FFFFFF   10.48   3.0   pass
  fit colour on band      #6D2A22   #F9FBFB   10.09   3.0   pass
```

Re-run with `node contrast-check.js`. It exits non-zero if the recorded seed stops passing.

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
