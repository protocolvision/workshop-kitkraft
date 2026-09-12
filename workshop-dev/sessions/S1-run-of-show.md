# S1 — Kits. Run of show (Mon Sep 21, 15:30–16:30 UTC)

Facilitation split: Rafa runs the session — first minute, ice-breaker timing, the exercise, push and log-line checks, awareness check, Async 1, close — and keeps #kitcraft, the recorder, the repo and the screen share. Sachin presents the theory (slides 4–11) and takes theory questions in voice. The Presenter column is the one to rehearse from; the Rafa/Sachin columns say who does what off-mic. Voice #kafka, text #kitcraft. Recorder commands are typed by Rafa in Discord. Slides: `S1-slides.md`.

| Clock (UTC) | Min | Presenter | Rafa (ops) | Sachin (theory) | Participants | Artifact expected | Recorder |
|---|---|---|---|---|---|---|---|
| 15:20 | −10 | — | Joins #kafka; screen-share test, slides open; re-pins in #kitcraft: repo link, times, consent, session order, breakout rooms; checks who is in voice | Joins #kafka | Trickle in | Pinned message current | — |
| 15:28 | −2 | — | Says "recording starts now"; runs `/record channel:#kafka name:KITCRAFT-S1`; confirms live text appears in #kitcraft-transcripts | — | — | — | `/record channel:#kafka name:KITCRAFT-S1` |
| 15:30 | 00 | Rafa | Slide 1 (welcome); posts session order + slide link in #kitcraft | Listens | Listen | — | on |
| 15:31 | 01 | Rafa | Reads `consent-notice.md` verbatim (text already pinned); watches for objections in voice | Listens | Say if off-transcript | Consent in transcript | on |
| 15:33 | 03 | Rafa | Slide 3: seeds first (water-rate rule); posts the speaking order; times each; nudges at 90 s | Second seed (his own example); then listens | 75 s each (45 s for ten or more): name, posture, surprise or protocol | Postures noted in #kitcraft | on |
| 15:42 | 12 | Sachin | Keeps time; stays on chat | Slide 4 (what this is not, the tractor) | Listen | — | on |
| 15:44 | 14 | Sachin | Posts grid image or table in #kitcraft | Slide 5: Expanded Awareness 2×2 | Listen; may ask | — | on |
| 15:48 | 18 | Sachin | — | Slide 6: movement 2×2 | Listen | — | on |
| 15:51 | 21 | Sachin | Posts CMM link | Slide 7: CMM ↔ Kit/Factory/Bridge | Listen | — | on |
| 15:54 | 24 | Sachin | Puts `PARTICIPANT_TEMPLATE/` on screen; posts its link and the Agent Skills spec link | Slide 8: what a kit is | Listen | — | on |
| 15:57 | 27 | Sachin | — | Slide 9: traces | Listen | — | on |
| 16:00 | 30 | Sachin | Posts c3po how-it-works link | Slide 10: C3PO, no demo | Listen | — | on |
| 16:02 | 32 | Sachin | Listens | Slide 11 (precommodification, farmsteading); hands to Rafa at 16:05 | Listen | — | on |
| 16:05 | 35 | Rafa | Slide 12: says "paste Block 1, say do this"; pins the link to `instructions/S1-inventory.md`; opens a "push failed?" thread | Answers theory questions in voice; stays off chat | Open harness at the clone root; paste prompt | — | on |
| 16:07 | 37 | Rafa | Handles the "push failed?" thread: reads each pasted error, points at the matching failure line of the block (account, invite, rebase); speaks once so the recorder does not time out | Floats in voice | Agent writes `participants/<name>/inventory.md`, commits, pushes | One `participants/<name>/inventory.md` per participant on `main` | on |
| 16:12 | 42 | Rafa | Runs `git pull`; posts which inventories have landed and how many; checks in voice that pushes went through | — | Keep working; ask in #kitcraft if stuck | Most files landed | on |
| 16:18 | 48 | Rafa | Slide 13: "paste Block 2"; points at Block 2 in the same file | — | Agent pulls, reads `participants/*/inventory.md`, names two nearest | Each person has two names | on |
| 16:22 | 52 | Rafa | Asks the room to confirm a line in their `LOG.md` exists; his agent scans every `participants/*/LOG.md` for a line; posts the list; missing → 1A | — | Confirm or say "no line" | Log-line check posted in #kitcraft | on |
| 16:23 | 53 | Rafa | Slide 14: awareness check, one word each; posts the order; his agent tallies the answers into #kitcraft and `workshop-dev/transcripts/S1/awareness-check.md` | Listens; does not correct anyone's quadrant | One quadrant each | Tally in #kitcraft | on |
| 16:26 | 56 | Rafa | Slide 15: Async 1 (3 h), 1A, S2 time; posts the Async 1 instruction and the 1A link/time; pins the take-home reading order | Asks for the last question | Note assignment | Async 1 text pinned | on |
| 16:29 | 59 | Rafa | Closes; runs `/stop`; waits for the transcript; copies transcript + summary to `workshop-dev/transcripts/S1/`; commits `S1: rafa: transcript + summary`; stays in #kafka for 1A | Stays in #kitcraft for theory questions | 1A people stay; others leave | `workshop-dev/transcripts/S1/` | `/stop` |
| 16:30 | 60 | — | 1A begins (see `1A-clinic.md`); posts "1A now in #kafka" | — | — | — | off (1A not recorded) |
| 16:45 | 75 | — | With the inventories in, confirms the breakout groups (from the provisional ones of Sep 19) and pins the S2 critique ring in #kitcraft | — | — | Breakout group pin in #kitcraft | — |

Contingencies
- Recorder auto-stops if #kafka empties or is silent 20 min; there are no breakouts in S1, so no re-run is expected. If the live transcript stops appearing, Rafa re-runs `/record` with the same name and notes it in the transcript folder.
- If fewer than two thirds of the inventories have landed by 16:18, skip slide 13 and give the second prompt as part of Async 1.
- If the push path fails for everyone (rebase conflicts on `main`), the exercise ends with files committed locally; the fix and the log-line check happen at 1A or at the S2 open.
