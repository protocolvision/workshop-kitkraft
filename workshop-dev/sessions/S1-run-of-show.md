# S1 — Kits. Run of show (Mon Sep 21, 15:30–16:30 UTC)

Lead: Rafa. Co-facilitator: Sachin. Presenter column follows the presenter split; the Lead/Co-facilitator columns still say who does what off-mic. Voice #kafka, text #kitcraft. Recorder commands are typed by Sachin in Discord. Slides: `S1-slides.md`.

| Clock (UTC) | Min | Presenter | Lead (Rafa) | Co-facilitator (Sachin) | Participants | Artifact expected | Recorder |
|---|---|---|---|---|---|---|---|
| 15:20 | −10 | — | Joins #kafka, screen share test, slides open | Re-pins in #kitcraft: repo link, times, consent, session order, breakout rooms; checks who is in voice | Trickle in | Pinned message current | — |
| 15:28 | −2 | — | Says "recording starts now" | Runs `/record channel:#kafka name:KITCRAFT-S1`; confirms live text appears in #kitcraft-transcripts | — | — | `/record channel:#kafka name:KITCRAFT-S1` |
| 15:30 | 00 | Sachin | Listens | Presents slide 1 (welcome); posts session order + slide link in #kitcraft | Listen | — | on |
| 15:31 | 01 | Sachin | Listens; watches for objections in voice | Reads `consent-notice.md` verbatim; consent text already pinned | Say if off-transcript | Consent in transcript | on |
| 15:33 | 03 | Sachin | Second seed (water-rate rule); then listens | Presents slide 3, seeds first; posts the speaking order; times each; nudges at 90 s | 75 s each (45 s for ten or more): name, posture, surprise or protocol | Postures noted in #kitcraft | on |
| 15:42 | 12 | Sachin | Listens | Presents slide 4 (what this is not, the tractor) | Listen | — | on |
| 15:44 | 14 | Rafa | Slide 5: Expanded Awareness 2×2 | Posts grid image or table in #kitcraft | Listen; may ask | — | on |
| 15:48 | 18 | Rafa | Slide 6: movement 2×2 | — | Listen | — | on |
| 15:51 | 21 | Rafa | Slide 7: CMM ↔ Kit/Factory/Bridge | Posts CMM link | Listen | — | on |
| 15:54 | 24 | Rafa | Slide 8: what a kit is; shows `PARTICIPANT_TEMPLATE/` on screen | Posts `PARTICIPANT_TEMPLATE/` link and the Agent Skills spec link | Listen | — | on |
| 15:57 | 27 | Rafa | Slide 9: traces | — | Listen | — | on |
| 16:00 | 30 | Rafa | Slide 10: C3PO, no demo | Posts c3po how-it-works link | Listen | — | on |
| 16:02 | 32 | Sachin | Listens | Presents slide 11 (precommodification, farmsteading) | Listen | — | on |
| 16:05 | 35 | Rafa | Slide 12: says "paste Block 1, say do this" | Pins the link to `instructions/S1-inventory.md`; opens a "push failed?" thread | Open harness at the clone root; paste prompt | — | on |
| 16:07 | 37 | Rafa | Floats: answers theory questions in voice; stays off chat | Handles pushes: commits pasted or hand-written files under the sender's name (`S1: <name>: inventory`) after checking `main` for a copy already there | Agent writes `participants/<name>/inventory.md`, commits, pushes | One `participants/<name>/inventory.md` per participant on `main` | on |
| 16:12 | 42 | Rafa | Checks in voice that pushes went through | Runs `git pull`; posts which inventories have landed and how many | Keep working; ask in #kitcraft if stuck | Most files landed | on |
| 16:18 | 48 | Rafa | Slide 13: "paste Block 2" | Points at Block 2 in the same file | Agent pulls, reads `participants/*/inventory.md`, names two nearest | Each person has two names | on |
| 16:22 | 52 | Rafa | Asks the room to confirm a line in their `LOG.md` exists | His agent scans every `participants/*/LOG.md` for a line; posts the list; missing → 1A | Confirm or say "no line" | Log-line check posted in #kitcraft | on |
| 16:23 | 53 | Rafa | Slide 14: awareness check, one word each | Posts order; his agent tallies the answers into #kitcraft and `workshop-dev/transcripts/S1/awareness-check.md` | One quadrant each | Tally in #kitcraft | on |
| 16:26 | 56 | Sachin | Asks for the last question | Presents slide 15: Async 1 (3 h), 1A, S2 time; posts the Async 1 instruction and the 1A link/time; pins take-home reading order | Note assignment | Async 1 text pinned | on |
| 16:29 | 59 | Sachin | Closes; stays in #kafka for 1A | Runs `/stop`; waits for the transcript; copies transcript + summary to `workshop-dev/transcripts/S1/`; commits `S1: sachin: transcript + summary` | 1A people stay; others leave | `workshop-dev/transcripts/S1/` | `/stop` |
| 16:30 | 60 | — | 1A begins (see `1A-clinic.md`) | Posts "1A now in #kafka" | — | — | off (1A not recorded) |
| 16:45 | 75 | — | — | With the inventories in, confirms the triads (from the provisional ones of Sep 19) and pins the S2 critique ring in #kitcraft | — | Triad pin in #kitcraft | — |

Contingencies
- Recorder auto-stops if #kafka empties or is silent 20 min; there are no breakouts in S1, so no re-run is expected. If the live transcript stops appearing, Sachin re-runs `/record` with the same name and notes it in the transcript folder.
- If fewer than two thirds of the inventories have landed by 16:18, skip slide 13 and give the second prompt as part of Async 1.
- If the push path fails for everyone (rebase conflicts on `main`), Sachin collects files in #kitcraft and commits them in one batch; the log-line check then happens in 1A or at the S2 open.
