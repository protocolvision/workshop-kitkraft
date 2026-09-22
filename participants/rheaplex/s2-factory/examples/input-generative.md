# Brief — "Marginalia" (synthetic example)

A generative series: one drawing per token, each seeded from the token id, drawn to an SVG
canvas by a small script. It will be minted as an edition, so every output has to stand on its
own and the set has to read as one body of work.

References: medieval manuscript marginalia plus oscilloscope Lissajous figures plus frost on a
window. Not a copy of any of them — no pastiche of illuminated manuscripts, no fake vellum
texture, no green CRT nostalgia.

Medium: a generative piece — plain JavaScript drawing SVG in the browser, one canvas per token,
no build step, no dependencies. The drawing must also read at print size on paper.

Constraints: black line on unbleached ground, at most one further colour across the whole
series, line only (no fills), and every drawing must be reproducible from its seed.

Recurring features I keep drawing and want defined as terms: "infestation" (how small figures
accumulate along an edge) and "lockstep" (how a run of marks holds a rhythm before it breaks).

I have not decided the layout — how much margin, how many zones, whether a drawing may cross
the centre. Work it out in the first drawings.

Put the spec at spec/aesthetic-spec.md.
