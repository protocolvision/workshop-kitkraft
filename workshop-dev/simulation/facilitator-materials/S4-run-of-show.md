# S4 — Recap and showcase · run of show (Tue Sep 22, 20:00–21:00 UTC)

Facilitation split: Rafa — opener, debrief order and timer, showcase, final awareness round, take-home and close; keeps #kitcraft, recorder and repo; screen-shares all session. Sachin — recap in three files, synthesis read-back, the hypothesis and its verdict; his agent builds `SYNTHESIS.md`. Present: ingrid, devr, tomasr, marisol (two pairs; Kwame and Aiko withdrew). Room: #kafka only; one recorder segment.

## Before the session (19:30–19:55)

1. Rafa: `git pull --rebase`; note the commit hash. Confirm 4 bridge logs exist; list any missing in #kitcraft with a 19:50 push deadline.
2. Sachin: start the synthesis agent (procedure below) → `workshop-dev/transcripts/S4/SYNTHESIS.md` v0, not yet pushed.
3. Both, at 19:45: pick the three recap files (slide 2) and the three showcase bridges (slide 4); Rafa posts the paths in #kitcraft.
4. Rafa, 19:55: screen-share check.

## Minute table

| UTC | min | Presenter | Rafa (ops) | Sachin (theory) | Participants | Artifact | Recorder |
|---|---|---|---|---|---|---|---|
| 20:00 | 00 | Rafa | Slide 1; consent one-liner; "Recording on (KITCRAFT-S4)" | listens | listen | — | `/record channel:#kafka name:KITCRAFT-S4` |
| 20:02 | 02 | Sachin | drives the screen; posts the three paths | Slide 2: recap in three files | follow in own clone | — | on |
| 20:10 | 10 | Rafa | Slide 3: pair 1 debrief, 90 s per bridge log; timer at 90 s | his agent captures each report into SYNTHESIS §2 | ingrid, devr speak; questions | — | on |
| 20:16 | 16 | Rafa | pair 2 debrief; timer | captures | tomasr, marisol speak; questions | — | on |
| 20:22 | 22 | — | questions | buffer | — | — | on |
| 20:24 | 24 | Rafa | Slide 4: showcase 1 (worked) | selects #kitcraft-transcripts since 20:00 → scratch file → agent merges into SYNTHESIS v1 | bridge owner talks to their log on screen | — | on |
| 20:28 | 28 | Rafa | showcase 2 (tomasr ↔ marisol, a kit → kit bridge) | agent finishes v1; reads it once | — | — | on |
| 20:32 | 32 | Rafa | showcase 3 (did not work) | pushes `workshop-dev/transcripts/S4/SYNTHESIS.md` v1; posts link | — | SYNTHESIS v1 | on |
| 20:38 | 38 | Sachin | listens; keeps time | Slide 5: read-back — numbers, four paragraphs verbatim; corrections typed live under §6 | correct out loud | SYNTHESIS §1, §2, §6 | on |
| 20:43 | 43 | Sachin | keeps time | Slide 6: states the hypothesis (60 s), verdict rule, table, verdict | contest the classification | SYNTHESIS §3 | on |
| 20:50 | 50 | Rafa | Slide 7: final round; posts the order; reads async answers from #kitcraft | his agent tallies live in SYNTHESIS §5 | one word + one clause each | SYNTHESIS §5 profile | on |
| 20:57 | 57 | Rafa | Slide 8: take-home; posts verbatim to #kitcraft | — | — | — | on |
| 21:00 | 60 | Rafa | "Recording off"; `/stop` | pushes SYNTHESIS v1 with corrections | — | — | `/stop` |

After (Rafa, by 21:30): `workshop-dev/transcripts/S4/transcript.md`, `summary.md`, `awareness-check.md`; commit `S4: rafa: transcript + summary`. Within 48 h (Sachin): SYNTHESIS v2 with the S4 transcript folded in and the profile final; Rafa posts it in Discord (#kitcraft, #symposium-2026). Nothing else is planned with the material.

## Synthesis procedure (what Sachin's agent reads, in order)

1. `participants/*/bridges/*.md` (every bridge file): *What a human had to supply*, *Did it work*, *What a bridge turned out to be*.
2. `participants/*/LOG.md` and `facilitator/*/LOG.md`: all lines — S1 lines (the autolog-fired check), S2 `blocker` lines matched against async `progress` lines (fixed / not fixed), S3 `unblock` lines counted per bridge. A folder counts for a session only if its `LOG.md` has a line from that session; a folder that is missing, empty, or unchanged is simply absent from that session's count, not a no-show to explain.
3. `participants/*/inventory.md`: the kit choice per person, for the numbers.
4. `workshop-dev/transcripts/S1/`, `S2/`, `S3/`: `awareness-check.md` (tallies), `summary.md`; `transcript.md` only for the S3 hypothesis statement and the S2 "got wrong" round.
5. At 20:24: the S4 live-channel scratch file (uncommitted), for the debrief reports.
6. `workshop-dev/simulation/discord/kitcraft.md` (rehearsal) / the #kitcraft channel (real): async participants' reports, final-round answers, and the two withdrawal posts, so the synthesis names who is in the record but not in the room.

Output `workshop-dev/transcripts/S4/SYNTHESIS.md`, ≤120 lines: §1 numbers (participants per session by `LOG.md` line, kits, factories with an `Interface:` line, bridges by kind — factory-factory / kit-kit / kit-factory — attempted / worked, unblocks by type, blockers fixed in v2) · §2 the paragraphs verbatim, then five lines of synthesis · §3 hypothesis table by bridge kind and verdict · §4 what the critique caught and what v2 changed · §5 awareness profile (quadrant × S1 / S2 / S3 / S4-final, expected vs actual) · §6 corrections from the room · §7 sources (paths + commit hash). Nothing in it that is not traceable to a file or a spoken line.

## Bridge hypothesis test (rule, read before the table)

Order: the room's paragraphs are read first (slide 5); only then the hypothesis, stated once at the S3 close, and the rule below.

For each bridge log's closing paragraph, grouped by its `Kind:` line: **supports** if it names a specific thing both sides held fixed (a file, a field, a request layout, a folder); **contradicts** if it defines the bridge as something else (a person, a conversation, an unblock, trust); **silent** if it does neither. Verdict: retained if at least two thirds support and none contradict; amended if supports ≥ contradicts and the contradictions name one missing element (add it, record the amendment); rejected otherwise — the room's definition, drafted from the contradicting paragraphs in the read-back, is recorded in §3 and the hypothesis is marked rejected. Ties go to the room. Report the verdict overall and per kind; a kit-kit bridge that supports the hypothesis is the strongest evidence, since neither side declared anything.

## Awareness profile (how it is tallied)

Four quadrants (External/Internal × Archive/Live, Rafa's slide). Rows: S1 check (expected precommodification), S2 (anchored in reality), S3 (traces), S4 final round "blind on Monday" (expected playability). Cell = count naming that quadrant; present and async answers marked separately. Actual column next to expected, one-line reading per row. Any cell holding at least half the room is the room's answer; even splits are recorded as splits, not resolved.
