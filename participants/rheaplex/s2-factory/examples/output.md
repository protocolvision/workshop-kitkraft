Demonstration run — this file stands in for `docs/aesthetic-spec.md`, the path given in the brief. Steps 6 (build one slice) and 7 (review with the person) were not run: no person was available, so there are no verdicts.

# Tide Tables — aesthetic spec

## Pitch

Bauhaus plus railway timetable plus deep-sea bioluminescence — not a copy of any of them, and especially not a retro-poster pastiche.

## Layers

| layer | reference | what to take | what to leave |
| --- | --- | --- | --- |
| structure | Bauhaus | A strict modular grid with few units; asymmetric placement inside it; plain geometric forms doing the work of ornament; rules and blocks as the only dividers. | The primary red/yellow/blue palette; the circle-square-triangle motif as decoration; Bauhaus display lettering; anything that reads as a 1920s poster. |
| density | railway timetable | Packed rows with no air between them; hairline rules; tabular lining figures that align in a column; a narrow abbreviation column carrying state; headers that repeat rather than explain. | Cream paper and print texture; serif station names; the ticket-poster look; engraved or letterpress effects. |
| mood | deep-sea bioluminescence | One colour emits while everything else recedes; a near-neutral ground that stays out of the way; light that appears at the point of change rather than across the surface; slow, unhurried temporal behaviour. | Photographic glow, bloom and blur; black-ocean imagery; gradients used as decoration; creature shapes. |

Every layer has a reference; nothing falls back.

## Tokens

All values below are **provisional** — the shape is right, the numbers are a starting point for the first review to overrule. A single web page, opened from a file: plain CSS custom properties, no build step.

```css
:root {
  /* type — density layer (railway timetable) */
  --type-face: ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif;
  --type-figures: ui-monospace, "SF Mono", "DejaVu Sans Mono", Menlo, monospace;
  --type-numeric: tabular-nums lining-nums;   /* font-variant-numeric on every data cell */
  --type-size-data: 0.9375rem;
  --type-size-label: 0.6875rem;
  --type-tracking-label: 0.08em;              /* labels are uppercase, letterspaced, never bold */
  --type-leading-row: 1.15;                   /* rows are tight by intent */
  --type-weight-body: 400;
  --type-weight-key: 600;                     /* the only weight step; no third weight */

  /* grid / canvas — structure layer (Bauhaus) */
  --grid-columns: 12;
  --grid-unit: 8px;                           /* every spacing value is a multiple of this */
  --grid-gutter: calc(var(--grid-unit) * 2);
  --grid-margin: calc(var(--grid-unit) * 3);
  --grid-max-width: 68ch;
  --rule-weight: 1px;
  --rule-weight-major: 3px;                   /* one heavy rule per block, never more */
  --radius: 0;                                /* nothing is rounded */

  /* ground / ink / signal — mood layer (deep-sea bioluminescence) */
  --ground: #f2f1ee;
  --ground-sunk: #e6e4e0;                     /* alternating row band, barely there */
  --ink: #17191a;
  --ink-quiet: #5c6163;                       /* labels, units, past rows */
  --rule: #c9c7c2;
  --signal: #00786b;                          /* the one emitting colour, light room */
  --signal-quiet: #00786b1f;                  /* the same colour as a fill, not a second hue */
}

@media (prefers-color-scheme: dark) {
  :root {
    --ground: #0d1112;
    --ground-sunk: #141a1b;
    --ink: #e8eaea;
    --ink-quiet: #8a9295;
    --rule: #2a3234;
    --signal: #3fe0c8;                        /* same hue, now emitting against the dark */
    --signal-quiet: #3fe0c82e;
  }
}

/* motion — mood layer (deep-sea bioluminescence) */
:root {
  --motion-update: 1200ms;                    /* a changed value fades in over this */
  --motion-ease: cubic-bezier(0.4, 0.0, 0.2, 1);   /* no overshoot, no bounce */
  --motion-pulse-period: 6s;                  /* slack markers breathe at this period */
  --motion-pulse-range: 0.55 1;               /* opacity floor and ceiling of that breath */
}
@media (prefers-reduced-motion: reduce) {
  :root { --motion-update: 0ms; --motion-pulse-period: 0s; }
}
```

Mapping check: type comes from density, grid and rules from structure, ground/ink/signal and motion from mood. No token is unassigned. `--type-face` and `--type-figures` are system stacks because the constraints forbid web fonts; both light and dark values exist because the page must read in a bright room and a dark one.

## Terms

### swell (v1)

A swell is how a rising series of values is drawn: a run of consecutive rows whose value increases, marked as one object rather than row by row. The marking is the signal colour applied to the figures and a filled bar in the abbreviation column that grows across the run, so the eye finds the shape of the rise in the column before reading any number. The run's own peak row carries the only weight step; the rest of the run stays at body weight. A swell ends at the last increasing row, not at the peak of the day.

**Examples**
- Six consecutive half-hour rows from 1.1 m to 2.8 m: signal-coloured figures, the abbreviation column filling from hairline to full width across those six rows, the 2.8 m row at key weight.
- A short two-row rise inside an otherwise flat afternoon, marked the same way at the same intensity — a swell is not scaled by how impressive it is.
- A rise that runs off the bottom of the visible window: the bar is drawn as far as the rows go and simply stops, with no arrow or continuation glyph.

**Anti-examples**
- A line chart or sparkline drawn beside the rows: the table is the drawing.
- A gradient behind the run, or a glow around the figures — the signal colour is applied to marks, never as an atmosphere.
- Colouring by magnitude, so that a large swell is a stronger colour than a small one; there is one signal colour and one intensity.
- An upward arrow, triangle or emoji in the abbreviation column.

### slack (v1)

Slack is how a still period is drawn: consecutive rows whose value does not meaningfully change, marked by absence rather than by a mark. The figures stay at body weight in `--ink-quiet`, the hairline rules between those rows are omitted so the run reads as one unbroken block, and a single slack marker sits in the abbreviation column at the run's midpoint, breathing between the opacity floor and ceiling at `--motion-pulse-period`. Slack is the resting state of the table, so it should look like the table is doing nothing, not like it is announcing stillness.

**Examples**
- Four rows all within 5 cm of each other: no rules between them, quiet ink, one breathing marker on the second row.
- A slack run that meets a swell: the rules resume at the first rising row, and the slack marker stays at the still run's midpoint rather than moving to the boundary.
- With reduced motion requested, the same marker holds still at full opacity and nothing else changes.

**Anti-examples**
- A "SLACK" label, badge or pill in the row — the state is shown by what is missing.
- Greying the rows out to near-invisibility; quiet ink still has to be readable in a bright room.
- The signal colour used on a slack run, which would make stillness compete with change.
- A pulse fast enough to notice as animation, or one applied to more than one marker per run.

## Touchstones

None yet — no review has happened.

## Do not

- Do not pastiche a 1920s poster, Bauhaus lettering, or the Bauhaus primary palette; take the grid discipline and leave the style.
- Do not reproduce the printed look of a railway timetable — no cream paper, no print or letterpress texture, no serif station names; take the density and leave the paper.
- Do not draw sea creatures, black-ocean photography, glow, bloom or blur; take the one-colour-emits behaviour and leave the imagery.
- Do not treat any of the three references as a target to match, and do not reproduce a named designer's or artist's work.
- Do not add a build step, a framework, or a dependency: the page is opened from a file, with no server.
- Do not load a web font. System font stacks only, on both stacks in the type tokens.
- Do not ship a state that reads in only one room: every combination of ground, ink and signal must hold in the light theme and the dark theme.
- Do not defend a provisional token value against the person's eye; the first review overrules numbers freely.
- Do not clean up, repair or re-render the first slice before the person sees it, and do not cherry-pick among regenerations.
- Do not assign the verdicts. They come from the person, recorded in their words.

## Changelog

`v1 — 2026-09-22 — first spec written from the pitch. Layers, tokens and both terms derived from the brief alone; every token value provisional, no slice built and no review held, so Touchstones is empty.`

Version: 1
