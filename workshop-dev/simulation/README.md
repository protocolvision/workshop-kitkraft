# Dry run 01 — simulated AI Kitcraft (branch `simulation/dry-run-01`)

An agent-run rehearsal of the whole workshop. The kits, inventories and bridges on this branch are **fictional**; the findings in `OBSERVATIONS.md` and `REPORT.md` are the deliverable. Nothing here merges to `main`.

## Setup

- 6 fictional participants (composites from public research on the Symposium audience; no real people), in two triads.
- 2 facilitator agents playing Rafa (lead) and Sachin (co-facilitator).
- Each participant agent works in its own clone and pushes to this branch, so git contention is tested for real.
- Discord is simulated as files under `discord/`: `kitcraft.md` (text channel, pins first), `kafka/S<n>.md` (OpenRecapper transcripts, produced by simulated `/record` … `/stop`), `breakouts/breakout-<1|2>-S<n>.md`.
- No live external services are called (C3PO, Discord, OpenRecapper are simulated).

## Schedule (fixed by the Symposium, confirmed by Rafa 2026-09-11)

| Session | Date | UTC | Berlin | Pacific | Room |
|---|---|---|---|---|---|
| S1 Kits | Mon Sep 21 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 | #kafka |
| S1A clinic | Mon Sep 21 | 16:30–17:00 | 18:30–19:00 | 09:30–10:00 | #kafka |
| S2 Factories | Mon Sep 21 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 | #kafka + breakout-1/2 |
| S3 Bridges | Tue Sep 22 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 | #kafka + breakout-1/2 |
| S4 Recap | Tue Sep 22 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 | #kafka |

Two consequences the outline (v7) does not yet reflect: **S1 is 60 min, not 90**, and **S2 is Monday evening**, so Async 1 is ~3 h and Async 2 is overnight. Logged in `OBSERVATIONS.md`.

## Layout

```
simulation/
  README.md               this file
  OBSERVATIONS.md         running log of every gap, guess, or rule break (meta layer)
  REPORT.md               final findings, ranked (written after S4)
  personas/<name>.md      the six participants + two facilitators
  facilitator-materials/  what the facilitators had to produce that the scaffold lacked
  discord/                simulated channels
```

## Checkpoints (Rafa is asked questions at each)

1. Personas + pre-work materials ready
2. After S1 + 1A
3. After S2
4. After S3 + S4, with REPORT.md
