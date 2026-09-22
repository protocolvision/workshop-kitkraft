<!-- Demonstration run. In real work this file is written to spec/aesthetic-spec.md (the path named in the brief). Steps 7 (build one slice) and 8 (review with the person) were not run: no person was available, so no slice was built and no verdict exists. Every token value below is therefore provisional in the strict sense of the skill — the shape is settled, the numbers are a starting point for step 8 to overrule. -->

# Marginalia — aesthetic spec

## Pitch

Medieval manuscript marginalia plus oscilloscope Lissajous figures plus frost on a window — not a copy of any of them: no pastiche of illuminated manuscripts, no fake vellum texture, no green CRT nostalgia.

## Layers

The medium is a generative drawing series: a script draws one SVG per token, seeded from the token id, black line on unbleached ground, also read at print size. It has no type, no motion and no reading order. The layers it does have are where marks go, how a single line behaves, how marks multiply, and how one drawing differs from the next.

| layer | reference | what to take | what to leave |
| --- | --- | --- | --- |
| Composition — what the canvas reserves and what grows at its edges | medieval manuscript marginalia | a reserved central field the marks never enter; growth that starts at an edge and works along it; unequal occupancy between edges; small figures allowed to break scale against the field | gold, illumination, colour hierarchy; vellum texture or tone; letterforms, glyphs, historical iconography; any drawn text block (the field is left empty, not filled with fake script) |
| Line — how one continuous mark behaves | oscilloscope Lissajous figures | one continuous parametric line per figure; small-integer harmonic ratios; phase offset as the thing that varies; near-closure — a figure that almost meets itself; even weight along the whole path | green, glow, phosphor persistence, bloom, scanlines, instrument bezels and graticules; anything that reads as a screen |
| Accumulation — how marks multiply and thin out | frost on a window | nucleation at points along an edge, then branching inward; a repeating branch angle; each generation shorter and sparser than the last; coverage that is uneven between edges and stops well short of the middle | photographic texture; fills, washes, blur, soft edges; the blue-white of ice; any suggestion of a pane, a frame or a wet surface |
| Series variation — how seed N differs from seed N+1 | *(empty — three references, four layers)* | — | — |

Fallback for the empty layer: the build takes Series variation from the **Lissajous** row. What varies seed to seed is the harmonic ratio and phase of the figures, and the count and position of nucleation points; what does not vary is the reserved field, the branch angle, the palette and the stroke weights. A viewer should be able to tell two drawings apart at a glance and still read the set as one body of work.

## Tokens

Plain JavaScript, no build step and no dependencies, so the tokens are one frozen object the drawing script reads. Units are millimetres at print size; the SVG `viewBox` is set in millimetres so screen and paper share one coordinate system. **Every value here is provisional** — first-run numbers, written to be overruled by the first review, not defended.

```js
// aesthetic-spec tokens — Marginalia — v1 — ALL VALUES PROVISIONAL
const TOKENS = Object.freeze({

  // --- Surface (no layer owns this; it is the brief's hard constraint) ---
  ground: '#EAE3D2',        // unbleached, not white; no texture, no noise, flat fill
  ink:    '#16130E',        // near-black; the only colour of a normal mark
  signal: '#A8341F',        // the ONE further colour permitted across the whole series
  signalBudget: 0.02,       // max fraction of total drawn path length that may be signal
  signalRule: 'at most one figure per drawing may be signal, and most drawings have none',

  // --- Type ---
  // EMPTY. No row in the layer table governs type, and the series draws no text.
  // Left empty rather than filled in. Any caption, edition number or signature is
  // outside the drawing, set by whoever prints it.

  // --- Line (layer: Line — Lissajous) ---
  stroke: {
    hair:  0.18,            // mm — innermost frost generations
    line:  0.35,            // mm — default weight for every figure
    heavy: 0.70,            // mm — reserved for at most one figure per drawing
    cap:   'round',
    join:  'round',
    fill:  'none'           // hard constraint: line only, never a fill
  },
  figure: {
    ratios: [[3,2],[5,4],[7,5],[9,8],[11,7]],  // harmonic ratios a seed may pick from
    phaseSteps: 32,         // phase offsets are k*(2*PI/32)
    samples: 1200,          // points per figure, resampled to path commands
    closure: 'near',        // end point lands 0.5-2.0 mm from the start; never joined
    sizeRange: [6, 34]      // mm, long axis of a single figure
  },

  // --- Accumulation (layer: Accumulation — frost) ---
  growth: {
    nucleiPerEdge: [3, 11], // inclusive range, drawn per active edge
    branchAngleDeg: 60,     // repeating, not random
    branchJitterDeg: 6,     // the only permitted departure from it
    generations: 5,         // max branching depth
    lengthDecay: 0.62,      // each generation's length x previous
    countDecay: 0.55,       // each generation's branch count x previous
    inwardLimit: 0.34       // growth stops at this fraction of the short side
  },

  // --- Composition (layer: Composition — marginalia) ---
  canvas: {
    // Geometry is DISCOVERED, not specified — see Layout. These are placeholders the
    // first drawings exist to test, not measures the brief settled.
    units: 'mm',
    reservedFieldArea: 0.55, // fraction of canvas the marks never enter
    edgeBand: 0.16,          // fraction of the short side that marks may occupy from an edge
    activeEdges: [1, 3],     // how many of the four edges carry growth in one drawing
    edgeBalance: 'never all four, never symmetrical'
  },

  // --- Series variation (layer: Series variation — falls back to Lissajous) ---
  seeding: {
    source: 'token id, as an integer',
    rng: 'mulberry32 seeded from that integer — one stream, drawn in a fixed order',
    varies: ['ratio', 'phase', 'nuclei count', 'nuclei position', 'active edges', 'signal present'],
    fixed:  ['reservedFieldArea', 'branchAngleDeg', 'palette', 'stroke weights'],
    rule:   'the same seed must produce a byte-identical SVG, now and later'
  }
});
```

## Layout

`discovered` — the brief has not decided the geometry, so the first drawings answer these, and the values that survive review are written back here as tokens:

- Canvas ratio and print size. What sheet is this printed at, and does the SVG `viewBox` match the sheet or sit inside it?
- Margin. How wide is the band between the trim edge and the first mark, and is it the same on all four edges?
- Zones. Does the canvas divide into named zones (edge band, reserved field, gutter), or only into "reserved" and "not reserved"?
- The centre. May a figure cross the centre of the canvas, and if so, at most how many per drawing? Currently forbidden by `reservedFieldArea`, untested.
- Reach. Does `inwardLimit: 0.34` leave the field legible, or does the drawing read as a frame?
- Smallest legible mark. Does `stroke.hair` at 0.18 mm hold on paper, and does the fifth generation survive the printer?
- Density ceiling. How many figures and how many nuclei before the drawing reads as texture rather than as marks?

Until these are answered, nothing in `canvas` is settled. They were not invented as measures; they are questions with a starting number attached.

## Terms

### infestation (v1)

Infestation is how small figures accumulate along one edge of the canvas until that edge reads as occupied rather than decorated. It starts from scattered nucleation points, not from an even run, and each figure sits close enough to its neighbour to be read as part of the same growth while never touching it. The accumulation thins as it works inward, so the edge is dense and the interior is nearly empty. It is growth, not arrangement: nothing about it should look placed by hand.

Examples:
- Nine figures along the lower edge, largest at the two ends and smallest near the middle, each one within two of its own widths of a neighbour, none reaching more than a third of the way up.
- A cluster of four on the left edge and a thinner run of six on the bottom, the two runs meeting at the corner without overlapping.
- A run that begins tight and coherent and loosens as it travels, the last three figures spaced twice as far apart as the first three.

Anti-examples:
- Figures spaced at an even pitch along the whole edge — that is a border, not an infestation.
- Figures scattered evenly across the entire canvas including the reserved field — that is a field, not an edge.
- A run of identical figures at identical scale — repetition without growth.

### lockstep (v1)

Lockstep is a run of marks that holds one rhythm — the same interval, the same angle, the same size — for long enough to be recognised as a rhythm, and then breaks it once. The holding matters as much as the break: too short and there is no rhythm to break, too long and the drawing reads as mechanical. The break is a single event, not a decay into noise, and after it the run either stops or resumes at a new rhythm. It is the only place in a drawing where regularity is allowed to be conspicuous.

Examples:
- Seven branches at 60° at an even pitch, then an eighth at 38° and half the length, then nothing.
- A run of marks at a constant interval that suddenly doubles its interval and continues at that new rate for three more marks.
- Five figures of identical size in a row, the sixth at twice the size, with no sixth-and-a-half.

Anti-examples:
- A run whose interval drifts a little on every mark — that is jitter, not lockstep.
- A run that breaks twice or three times — the first break stops being an event.
- Three marks in a row at the same angle, then a change; too short to establish the rhythm that the change is supposed to break.

## Touchstones

None yet — no review has happened. Steps 7 and 8 were not run in this demonstration, so no reference has been cited by a person while judging a drawing, and nothing has earned touchstone status.

## Do not

From the not-a-copy clause, one per reference:
- Do not pastiche an illuminated manuscript: no gold, no initials, no glyphs, no drawn script, no vellum texture or tone standing in for the ground.
- Do not render a CRT: no green, no glow, no phosphor persistence, no scanlines, no graticule, no instrument framing.
- Do not photograph frost: no fills, no washes, no blur, no soft edges, no blue-white, nothing suggesting a pane or a wet surface.
- Do not treat any of the three as a target to match. They own one layer each and nothing beyond it.

From the constraints, which have no value form:
- No build step, no framework, no dependencies. Plain JavaScript drawing SVG in the browser, and nothing added later that the brief did not ask for.
- Line only. No fill anywhere, at any weight, for any reason.
- One further colour across the whole series, total. Not one per drawing, not one per layer.
- Every drawing reproducible from its seed: the same seed gives the same SVG, byte for byte, forever. No wall-clock, no `Math.random`, no unordered iteration.
- Each drawing must stand alone at print size, and the set must read as one body of work. Both, not either.

Review rules:
- The verdict is the person's. Do not judge a drawing, score it, or argue a provisional token against their eye.
- Show the raw output. Do not clean up, repair or re-render before they see it.
- No best-of-N. Do not regenerate until something passes; the failures are the evidence.

## Changelog

v1 — 2026-09-22 — First spec, written from the "Marginalia" brief. Four layers named for this medium (composition, line, accumulation, series variation) rather than the visual default of structure/density/mood, since a static seeded drawing series has no motion and no mood layer to assign; three references took one layer each and series variation falls back to the Lissajous row. Type left empty — nothing in the table governs it. Layout recorded as discovered, with seven open measures. Terms "infestation" and "lockstep" defined at v1 as the brief asked. Steps 7 and 8 (build a slice, review it) were not run — no person was available — so all token values are provisional and Touchstones is empty.

Version: 1
