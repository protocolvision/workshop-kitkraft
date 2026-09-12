# S4 — Recap and showcase · run of show (Tue Sep 22, 20:00–21:00 UTC)

Presenter split: Sachin — opener, debrief round, synthesis read-back, verdict, awareness tally, close, recorder, chat. Rafa — recap, showcase, states the hypothesis. Sachin screen-shares all session. Room: #kafka only; one recorder segment.

## Before the session (Sachin, 19:30–19:55)

1. `git pull --rebase`; note the commit hash. Confirm one bridge log per participant exists; list any missing in #kitcraft with a 19:50 push deadline.
2. Start the synthesis agent (procedure below) → `bridges/SYNTHESIS.md` v0, not yet pushed.
3. With Rafa at 19:45: pick the three recap files (slide 2) and the three showcase bridges (slide 4); post the paths in #kitcraft.
4. 19:55: screen-share check.

## Minute table

| UTC | min | Presenter | Rafa | Sachin | Participants | Artifact | Recorder |
|---|---|---|---|---|---|---|---|
| 20:00 | 00 | Sachin | listens | Slide 1; consent one-liner; "Recording on (KITCRAFT-S4)" | listen | — | `/record channel:#kafka name:KITCRAFT-S4` |
| 20:02 | 02 | Rafa | Slide 2: recap in three files | drives the screen; posts the three paths | follow in own clone | — | on |
| 20:10 | 10 | Sachin | timer at 90 s | Slide 3: `<triad 1>` debrief; captures each report into SYNTHESIS §2 | three speak; questions | — | on |
| 20:16 | 16 | Sachin | timer | `<triad 2>` debrief (then the rest, 60 s each if more than two triads); reads an async member's #kitcraft note if no triad-mate does | speak; a triad-mate reads any absent member's paragraph; questions | — | on |
| 20:22 | 22 | — | questions | buffer | — | — | on |
| 20:24 | 24 | Rafa | Slide 4: showcase 1 (worked) | selects #kitcraft-transcripts since 20:00 → scratch file → agent merges into SYNTHESIS v1 | bridge owner talks to their log on screen | — | on |
| 20:28 | 28 | Rafa | showcase 2 (transmittal, a stub target) | agent finishes v1; reads it once | — | — | on |
| 20:32 | 32 | Rafa | showcase 3 (did not work) | pushes `bridges/SYNTHESIS.md` v1; posts link | — | SYNTHESIS v1 | on |
| 20:38 | 38 | Sachin | listens | Slide 5: read-back — numbers, the paragraphs verbatim; corrections typed live under §6 | correct out loud | SYNTHESIS §1, §2, §6 | on |
| 20:43 | 43 | Rafa → Sachin | states the hypothesis (60 s) | Slide 6: verdict rule, table, verdict | contest the classification | SYNTHESIS §3 | on |
| 20:50 | 50 | Sachin | keeps time | Slide 7: final round; tallies live in SYNTHESIS §5; adds async answers from #kitcraft | one word + one clause each | SYNTHESIS §5 profile | on |
| 20:57 | 57 | Sachin | — | Slide 8: take-home; posts verbatim to #kitcraft | — | — | on |
| 21:00 | 60 | Sachin | — | "Recording off"; pushes SYNTHESIS v1 with corrections | — | — | `/stop` |

After (Sachin, by 21:30): `transcripts/S4/transcript.md`, `summary.md`, `awareness-check.md`; commit `S4: sachin: transcript + summary`. Within 48 h: SYNTHESIS v2 with the S4 transcript folded in and the profile final; posted in Discord (#kitcraft, #symposium-2026). Nothing else is planned with the material.

## Synthesis procedure (what Sachin's agent reads, in order)

1. `bridges/*.md` (every bridge log; `TEMPLATE.md`, `README.md` excluded): *What a human had to supply*, *Request / Response* (stub bridges), *Did it work*, *What a bridge turned out to be*; the `## Log` lines, counting `unblock`.
2. `kits/*/LOG.md` and `facilitator/*/LOG.md`: all lines; S2 `blocker` lines matched against async `progress` lines (fixed / not fixed).
3. `inventory/*.md` `## Log` sections (S1 lines; the autolog-fired check).
4. `transcripts/S1/`, `S2/`, `S3/`: `awareness-check.md` (tallies), `summary.md`; `transcript.md` only for the S3 hypothesis statement and the S2 "got wrong" round.
5. At 20:24: the S4 live-channel scratch file (uncommitted), for the debrief reports.
6. The #kitcraft channel: async participants' reports and final-round answers.

Output `bridges/SYNTHESIS.md`, ≤120 lines: §1 numbers (kits, stubs, bridges attempted / worked, unblocks by kind, blockers fixed in v2) · §2 the paragraphs verbatim, then five lines of synthesis · §3 hypothesis table and verdict · §4 what the critique caught and what v2 changed · §5 awareness profile (quadrant × S1 / S2 / S3 / S4-final, expected vs actual) · §6 corrections from the room · §7 sources (paths + commit hash). Nothing in it that is not traceable to a file or a spoken line.

## Bridge hypothesis test (rule, read before the table)

For each bridge log's closing paragraph: **supports** if it names a specific thing both sides held fixed (a file, a field, a request layout, a folder); **contradicts** if it defines the bridge as something else (a person, a conversation, an unblock, trust); **silent** if it does neither. Verdict: retained if at least two thirds support and none contradict; amended if supports ≥ contradicts and the contradictions name one missing element (add it, record the amendment); rejected otherwise — the room's definition, drafted from the contradicting paragraphs in the read-back, is recorded in §3 and the hypothesis is marked rejected. Ties go to the room.

## Awareness profile (how it is tallied)

Four quadrants (External/Internal × Archive/Live, Rafa's slide). Rows: S1 check (expected precommodification), S2 (anchored in reality), S3 (traces), S4 final round "blind on Monday" (expected playability). Cell = count naming that quadrant; present and async answers marked separately. Actual column next to expected, one-line reading per row. Any cell holding at least half the room is the room's answer; even splits are recorded as splits, not resolved.
