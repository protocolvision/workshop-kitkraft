# S1 — Kits. Run of show (Mon Sep 21, 15:30–16:30 UTC)

Lead: Rafa. Co-facilitator: Sachin. Presenter column follows the checkpoint-1 split; the Lead/Co-facilitator columns still say who does what off-mic. Voice #kafka, text #kitcraft. Recorder commands are typed by Sachin in Discord. Slides: `S1-slides.md`.

| Clock (UTC) | Min | Presenter | Lead (Rafa) | Co-facilitator (Sachin) | Participants | Artifact expected | Recorder |
|---|---|---|---|---|---|---|---|
| 15:20 | −10 | — | Joins #kafka, screen share test, slides open | Re-pins in #kitcraft: repo link, times, consent, session order, breakout rooms; checks who is in voice | Trickle in | Pinned message current | — |
| 15:28 | −2 | — | Says "recording starts now" | Runs `/record channel:#kafka name:KITCRAFT-S1`; confirms live text appears in #kitcraft-transcripts | — | — | `/record channel:#kafka name:KITCRAFT-S1` |
| 15:30 | 00 | Sachin | Listens | Presents slide 1 (welcome); posts session order + slide link in #kitcraft | Listen | — | on |
| 15:31 | 01 | Sachin | Listens; watches for objections in voice | Reads `consent-notice.md` verbatim; consent text already pinned | Say if off-transcript | Consent in transcript | on |
| 15:33 | 03 | Sachin | Second seed (water-rate rule); then listens | Presents slide 3, seeds first; posts speaking order (Ingrid, Dev, Marisol, Tomás, Aiko, Kwame); times each at 75 s; nudges Tomás at 90 s | 75 s each: name, posture, surprise or protocol | Six postures noted in #kitcraft | on |
| 15:42 | 12 | Sachin | Listens | Presents slide 4 (what this is not, the tractor) | Listen | — | on |
| 15:44 | 14 | Rafa | Slide 5: Expanded Awareness 2×2 (axes confirmed) | Posts grid image or table in #kitcraft | Listen; may ask | — | on |
| 15:48 | 18 | Rafa | Slide 6: movement 2×2 | — | Listen | — | on |
| 15:51 | 21 | Rafa | Slide 7: CMM ↔ Kit/Factory/Bridge | Posts CMM link | Listen | — | on |
| 15:54 | 24 | Rafa | Slide 8: what a kit is; shows `KIT_TEMPLATE/` on screen | Posts `KIT_TEMPLATE/` link and the Agent Skills spec link | Listen | — | on |
| 15:57 | 27 | Rafa | Slide 9: traces | — | Listen | — | on |
| 16:00 | 30 | Rafa | Slide 10: C3PO, no demo | Posts c3po how-it-works link | Listen | — | on |
| 16:02 | 32 | Sachin | Listens | Presents slide 11 (precommodification, farmsteading) | Listen | — | on |
| 16:05 | 35 | Rafa | Slide 12: says "paste Block 1, say do this" | Pins Block 1 from `S1-agent-prompts.md`; opens a "push failed?" thread | Open harness inside clone; paste prompt | — | on |
| 16:07 | 37 | Rafa | Floats: answers theory questions in voice; stays off chat | Handles pushes: Marisol sends file, Sachin commits as `S1: marisol: inventory`; Ingrid and Aiko send hand-written files the same way | Agent writes `inventory/<name>.md`, commits, pushes | 6 × `inventory/<name>.md` on the branch | on |
| 16:12 | 42 | Rafa | Checks with Dev and Kwame in voice that their push went through | Runs `git pull`; posts which inventories have landed | Keep working; ask in #kitcraft if stuck | ≥4 files landed | on |
| 16:18 | 48 | Rafa | Slide 13: "paste Block 2" | Pins Block 2 from `S1-agent-prompts.md` | Agent pulls, reads `inventory/`, names two nearest | Each person has two names | on |
| 16:22 | 52 | Rafa | Asks the room to confirm a `## Log` line exists | His agent scans every inventory for a Log line; posts the list; missing → 1A (expect Ingrid: web editor; Kwame: Codex outside clone) | Confirm or say "no line" | Log-line check posted in #kitcraft | on |
| 16:23 | 53 | Rafa | Slide 14: awareness check, one word each | Posts order; his agent tallies six answers | One quadrant each | Tally in #kitcraft | on |
| 16:26 | 56 | Sachin | Asks for the last question | Presents slide 15: Async 1 (3 h), 1A, S2 time; posts Async 1 instruction and the 1A link/time; pins take-home reading order | Note assignment | Async 1 text pinned | on |
| 16:29 | 59 | Sachin | Closes; stays in #kafka for 1A | Runs `/stop`; waits for the transcript; copies transcript + summary to `transcripts/S1/`; commits `S1: sachin: transcript` | 1A people stay; others leave | `transcripts/S1/` | `/stop` |
| 16:30 | 60 | — | 1A begins (see `1A-clinic.md`) | Posts "1A now in #kafka" | — | — | off (1A not recorded) |
| 16:45 | 75 | — | — | Overnight-equivalent task moved forward: with the inventories in, confirms the two triads and posts S2 critique ring in #kitcraft before 19:30 UTC | — | Triad post in #kitcraft | — |

Contingencies
- Recorder auto-stops if #kafka empties or is silent 20 min; there are no breakouts in S1, so no re-run is expected. If the live transcript stops appearing, Sachin re-runs `/record` with the same name and notes it in the transcript folder.
- If fewer than 4 inventories have landed by 16:18, skip slide 13 and give the second prompt as part of Async 1.
- If the push path fails for everyone (rebase conflicts on the shared branch), Sachin collects files in #kitcraft and commits them in one batch; the log-line check then happens in 1A or at the S2 open.
