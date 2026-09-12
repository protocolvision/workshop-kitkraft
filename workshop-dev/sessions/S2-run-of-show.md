# S2 — Factories · run of show (Mon Sep 21, 20:00–21:00 UTC)

Facilitation split: Rafa — first minute (recording, consent, S1 tally), build briefing and time calls, push check, rooms, the round, awareness check, Async 2, close; keeps #kitcraft, recorder and repo; screen-shares all session; floats the low-numbered rooms. Sachin — kit-phase thesis, the Rao–Dixon case, brand kit, factory as a flexible job shop and the ladder, the comms layer; floats the high-numbered rooms.

Pre-session (Rafa): 19:30 pull; list in #kitcraft who chose which source (own kit / facilitator kit, from the Async 1 `decision` lines); 19:50 re-post the S2 breakout groups pin; 19:55 screen-share check.

| UTC | min | Presenter | Rafa (ops) | Sachin (theory) | Participants | Artifact | Recorder |
|---|---|---|---|---|---|---|---|
| 20:00 | 00 | Rafa → Sachin | Slide 1: welcome, consent one-liner, S1 tally, sources; "Recording on (KITCRAFT-S2)" in #kitcraft; hands over at 20:01 | Slide 1, last two lines (kit time; a kit is what stays), straight into slide 2 | harness open at the clone root | — | `/record channel:#kafka name:KITCRAFT-S2` |
| 20:03 | 03 | Sachin | drops the F2F link in #kitcraft | Slide 2: book factory, Rao → Dixon in intermediates and interface terms | — | — | on |
| 20:07 | 07 | Sachin | puts the brand kit page, then `llms.txt`, on screen | Slide 3: brand kit / Jamverse | — | — | on |
| 20:11 | 11 | Sachin | links `facilitator/README.md`, Agent Skills spec | Slide 4: factory as a flexible job shop; intermediates; the interface as mechanism; ladder; CMM; the interface question, if asked | — | — | on |
| 20:15 | 15 | Rafa | Slide 5: convert-to-factory briefing; starts the clock; time calls at 5, 10; pulls; helps anyone with a facilitator-kit copy or a stub, in #kitcraft | answers theory questions in voice; stays off chat | agent converts the chosen kit: README with `Interface:`, SKILL, cold example (`instructions/S2-factory.md`) | `participants/<name>/kit/` as a factory, rung 1 | on; a facilitator speaks every ≤15 min |
| 20:30 | 30 | Sachin | posts the three rules in #kitcraft | **comms layer**: cut, de-tell, rewrite the README in their own words | edit README in own words | README v1 | on |
| 20:33 | 33 | Rafa | "push now"; confirms pushes on `main`; answers push errors in #kitcraft | — | commit `S2: <name>: factory from <source>`, push, pull --rebase | one factory or stub per participant | on |
| 20:35 | 35 | Rafa | Slide 6 (60 s); `/stop`; "Recording off · rooms open"; posts the S2 breakout post (`../breakout-instructions.md`); moves people; goes to breakout-1 | goes to the highest-numbered room | move to rooms | — | `/stop` |
| 20:41 | 41 | — | swaps rooms | swaps rooms | reports read aloud; owners log `blocker` lines | `participants/<name>/LOG.md` | off |
| 20:47 | 47 | — | "Reconvene now"; moves stragglers; back in #kafka | back in #kafka | one sentence each ready; push | — | off |
| 20:48 | 48 | Rafa | `/record` again; "Recording on"; waits for the live line | in #kafka | in #kafka | — | `/record channel:#kafka name:KITCRAFT-S2` |
| 20:49 | 49 | Rafa | Slide 7: round, pinned order; captures sentences | listens | speak (≈40 s each) | `workshop-dev/transcripts/S2/awareness-check.md` | on |
| 20:53 | 53 | Rafa | Slide 8: awareness check; tallies in #kitcraft | — | one word each | tally | on |
| 20:56 | 56 | Rafa | Slide 9: Async 2; posts text + S3 timing in #kitcraft | — | — | — | on |
| 20:58 | 58 | Rafa | "Recording off"; reminds anyone async of the path | — | leave / stay in #kitcraft | — | `/stop` at 21:00 |

Post-session (Rafa, by 21:30): both S2 segments + summaries → `workshop-dev/transcripts/S2/transcript.md`, `summary.md`, `awareness-check.md`; commit `S2: rafa: transcript + summary`. Check one `blocker` line per present participant's `LOG.md`; ping anyone missing. Overnight: watch for async pushes; ping their assigned readers.

Fallbacks: harness cannot push → the error goes in #kitcraft, Rafa points at the fix in text, the participant retries at the reconvene. Recorder does not restart at 20:48 → Rafa retries once, then the close is reconstructed from #kitcraft posts. Kit not pushed by 20:35 → read anyway from whatever is on `main`.
