# S3 — Bridges. Run of show (Tue Sep 22, 15:30–16:30 UTC)

Facilitation split: Rafa — first two minutes (opener, what S2 left in the repo), exercise briefing, rooms, recorder, #kitcraft, reconvene, awareness check, Async 3, close; screen-shares; floats the low-numbered rooms. Sachin — F2F theory, the three kinds of bridge and the ladder, water-rate pipeline, Prime Radiant, trust, the hypothesis statement; floats the high-numbered rooms. Voice #kafka, breakouts breakout-1 … breakout-5 (one breakout group each, per the S3 pin), text #kitcraft. Slides: `S3-slides.md`.

| Clock (UTC) | Min | Presenter | Rafa (ops) | Sachin (theory) | Participants | Artifact expected | Recorder |
|---|---|---|---|---|---|---|---|
| 15:15 | −15 | — | Pulls `main`; picks two blocker lines from `participants/*/LOG.md` for slide 2; posts the S3 rotation table and the bridge post (`../breakout-instructions.md`) in #kitcraft; confirms the rotation against the real S2 critique assignment; pins the hypothesis text | Slides 3–8 ready | — | Pinned rotation + instructions | — |
| 15:28 | −2 | — | "Recording starts now"; `/record channel:#kafka name:KITCRAFT-S3` | — | — | — | `/record channel:#kafka name:KITCRAFT-S3` |
| 15:30 | 00 | Rafa | Slide 1 (opener); posts session order | Listens | Listen | — | on |
| 15:31 | 01 | Rafa | Slide 2: shows two anonymised blocker lines; hands to Sachin | — | Listen | — | on |
| 15:32 | 02 | Sachin | Posts the F2F essay link | Slide 3: F2F | Listen | — | on |
| 15:35 | 05 | Sachin | Posts standards table link (resources §4) | Slide 4: three kinds of bridge; the ladder; answers the S2 interface question | Listen | — | on |
| 15:38 | 08 | Sachin | Puts `facilitator/rafa/kit/` on screen, `examples/output.csv`; posts the path; answers questions about the kit | Slide 5: water-rate pipeline | Listen | — | on |
| 15:40 | 10 | Sachin | — | Slide 6: Prime Radiant, example only | Listen | — | on |
| 15:41 | 11 | Sachin | Times it; posts the CSA note link for later reading | Slide 7 (trust, two minutes) | Listen | — | on |
| 15:43 | 13 | Sachin | Pins the hypothesis (already prepared) | Slide 8: says the hypothesis twice; hands to Rafa | Write it down | Hypothesis pinned | on |
| 15:44 | 14 | Rafa | Slide 9, one minute: points at the pinned table and block; posts "Rooms open — breakout-1: … breakout-2: … Back at 16:25" | Listens | Note target; copy `PARTICIPANT_TEMPLATE/bridges/TEMPLATE.md` | — | on |
| 15:45 | 15 | Rafa (rooms) | `/stop` (channel empties; avoids a dangling auto-stop); moves people to rooms; goes to breakout-1 | Goes to the highest-numbered room | Move; start agents | `participants/<you>/bridges/<target>.md` created, header filled | `/stop` |
| 15:55 | 25 | Rafa (rooms) | Swaps rooms; watches #kitcraft for stuck rooms | Swaps rooms | Working; unblocks logged | First `unblock` lines | off |
| 16:05 | 35 | Rafa (rooms) | Floats between rooms; reads pushed bridge logs and unblock lines | Floats between rooms | Working | Progress lines in bridge logs | off |
| 16:15 | 45 | Rafa (rooms) | Posts "minute 30: stop building, write the two paragraphs" in every room and #kitcraft | — | Write "Did it work" and "What a bridge turned out to be" | Paragraphs in every log | off |
| 16:23 | 53 | Rafa (rooms) | Posts "push now, reconvene 16:25" | — | Push | One log per participant pushed | off |
| 16:25 | 55 | Rafa | Moves everyone back to #kafka; re-runs `/record channel:#kafka name:KITCRAFT-S3` (or `KITCRAFT-S3B`, see runbook); waits for the first live line; posts the speaking order; Slide 10: reconvene, one line each, 25 s | Back in #kafka; listens | 25 s each | One-liners in transcript | `/record channel:#kafka name:KITCRAFT-S3` |
| 16:28 | 58 | Rafa | Slide 11: awareness check; his agent tallies quadrants; posts Async 3, the hard-mode option and the S4 time | — | One quadrant each | Tally in #kitcraft | on |
| 16:29 | 59 | Rafa | Closes; `/stop`; copies both transcript parts into `workshop-dev/transcripts/S3/`; commits `S3: rafa: transcript + summary` | — | Leave | `workshop-dev/transcripts/S3/` (two parts) | `/stop` |
| 16:35 | 65 | — | Checks every `participants/*/bridges/*.md` has a paragraph and at least one log line; pings anyone missing | Reads all bridge logs; drafts the S4 comparison of definitions vs. hypothesis (his agent does the synthesis) | Async 3 | Every bridge log complete by 20:00 | — |

Contingencies
- Recorder: two segments. Whether a second `/record` with the same name appends or overwrites is settled at the Sep 17 tech rehearsal (`recorder-runbook.md`); if it overwrites, the second segment is `KITCRAFT-S3B`, added to `RECORD_MEETING_NAMES` on Sep 17.
- A stub target: its breakout group bridges through the owner's agent (transmittal blocks in `instructions/S3-bridge.md`). If the owner is not in the room, the bridger swaps to `facilitator/rafa/kit/` and logs the swap as a `decision` line.
- If a breakout group is a pair (a drop-out), the two bridge to each other's kits only if neither critiqued the other's in S2; otherwise both use facilitator kits.
- A room stuck for 5 minutes gets a facilitator; the facilitator supplies the missing thing and the participant logs it as `unblock`. Facilitators do not touch the participant's files.
- Two people editing the same bridge file is a rebase conflict; that is why each log has one writer. If a shared log appears anyway, Rafa splits it into two files after the session and notes it in the facilitator notes.
