# S4 — Recap and showcase · run of show (Tue Sep 22, 20:00–21:00 UTC)

Lead: Rafa. Co-facilitator: Sachin (synthesis, recorder, chat, tally). Present: ingrid, devr, marisol, tomasr, kwame. Async: aiko. Room: #kafka only, no breakouts. One recorder segment.

## Before the session (Sachin, 19:30–19:55)

1. `git pull --rebase`; note the commit hash. Confirm 6 bridge logs exist (`bridges/*.md`, excluding TEMPLATE/README); list any missing in #kitcraft with a 19:50 push deadline.
2. Start the synthesis agent (procedure below) → `bridges/SYNTHESIS.md` v0, not yet pushed.
3. With Rafa at 19:45: pick the three recap files (slide 2) and the three showcase bridges (slide 4); post the paths in #kitcraft.
4. 19:55: in #kafka, screen-share check.

## Minute table

| UTC | min | Lead (Rafa) | Co-facilitator (Sachin) | Participants | Artifact | Recorder |
|---|---|---|---|---|---|---|
| 20:00 | 00 | Slide 1; consent one-liner | `/record`; "Recording on (KITCRAFT-S4)" in #kitcraft | listen | — | `/record channel:#kafka name:KITCRAFT-S4` |
| 20:02 | 02 | Slide 2: recap in three files (screen) | posts the three paths | follow in own clone | — | on |
| 20:10 | 10 | Slide 3: triad 1 debrief, timer at 90 s | captures each report into SYNTHESIS §2 as spoken | ingrid, devr, marisol speak; 90 s questions | — | on |
| 20:16 | 16 | triad 2 debrief | same; reads aiko's #kitcraft note if kwame does not | tomasr, kwame speak; kwame reads aiko's paragraph; questions | — | on |
| 20:22 | 22 | buffer / questions | — | — | — | on |
| 20:24 | 24 | Slide 4: showcase 1 (worked) | selects all of #kitcraft-transcripts since 20:00 → scratch file → agent merges into SYNTHESIS v1 | owner of the bridge talks to their log on screen | — | on |
| 20:28 | 28 | showcase 2 (worked: transmittal, ingrid ↔ marisol) | agent finishes v1; Sachin reads it once | — | — | on |
| 20:32 | 32 | showcase 3 (did not work) | pushes `bridges/SYNTHESIS.md` v1; posts link | — | `bridges/SYNTHESIS.md` v1 | on |
| 20:38 | 38 | hands to Sachin | **Slide 5: read-back** — numbers, six paragraphs verbatim; corrections typed live under §6 with handle | correct out loud | SYNTHESIS §1, §2, §6 | on |
| 20:43 | 43 | — | **Slide 6: hypothesis test** — verdict rule, table, verdict | contest the classification | SYNTHESIS §3 | on |
| 20:50 | 50 | Slide 7: final round, keeps it moving | tallies quadrants live in SYNTHESIS §5; adds aiko's from #kitcraft | one word + one clause each | SYNTHESIS §5 profile | on |
| 20:57 | 57 | Slide 8: take-home | posts take-home verbatim to #kitcraft | — | — | on |
| 21:00 | 60 | close | "Recording off"; pushes SYNTHESIS v1 with corrections | — | — | `/stop` |

After (Sachin, by 21:30): `transcripts/S4/transcript.md`, `summary.md`, `awareness-check.md`; commit `S4: sachin: transcript + summary`. Within 48 h: SYNTHESIS v2 with the S4 transcript folded in and the profile final; post in #kitcraft and #symposium-2026.

## Synthesis procedure (what Sachin's agent reads, in order)

1. `bridges/*.md` (six logs; `TEMPLATE.md`, `README.md` excluded): sections *What a human had to supply*, *Did it work*, *What a bridge turned out to be*; the `## Log` lines, counting `unblock`.
2. `kits/*/LOG.md` and `facilitator/*/LOG.md`: all lines; `blocker` lines from S2 matched against `progress` lines from async (fixed / not fixed).
3. `inventory/*.md` `## Log` sections (S1 lines; the autolog-fired check).
4. `transcripts/S1/`, `S2/`, `S3/`: `awareness-check.md` (tallies), `summary.md`; `transcript.md` only for the S3 hypothesis statement and the S2 "got wrong" round.
5. At 20:24: the S4 live-channel scratch file (uncommitted), for the debrief reports.
6. `workshop-dev/simulation/discord/kitcraft.md` (rehearsal) / the #kitcraft channel (real): aiko's async report and final-round answer.

Output `bridges/SYNTHESIS.md`, ≤120 lines: §1 numbers (kits, stubs, bridges attempted / worked, unblocks by kind, blockers fixed in v2) · §2 the six paragraphs verbatim, then five lines of synthesis · §3 hypothesis table and verdict · §4 what the critique caught and what v2 changed · §5 awareness profile (table: quadrant × S1 / S2 / S3 / S4-final, expected vs actual) · §6 corrections from the room · §7 sources (paths + commit hash). Nothing in it that is not traceable to a file or a spoken line.

## Bridge hypothesis test (rule, stated before the table)

For each bridge log's closing paragraph: **supports** if it names a specific thing both sides held fixed (a file, a field, a request layout, a folder); **contradicts** if it defines the bridge as something else (a person, a conversation, an unblock, trust); **silent** if it does neither. Verdict: retained if ≥4 of 6 support and none contradict; amended if supports ≥ contradicts and the contradictions name one missing element (add it, record the amendment); rejected otherwise — the room's definition, drafted from the contradicting paragraphs in the read-back, is recorded in §3 and the hypothesis is marked rejected. Ties go to the room.

## Awareness profile (how it is tallied)

Four quadrants. Rows: S1 check (expected precommodification), S2 (anchored in reality), S3 (traces), S4 final round "blind on Monday" (expected playability). Cell = count of people naming that quadrant; present + async answers marked separately. The profile is the actual column next to the expected one, with a one-line reading per row. Six people: any cell ≥3 is the room's answer; 2–2 splits are recorded as splits, not resolved.
