# How a session is simulated — dry run 01

## Agents
- **Facilitator agents** (Rafa, Sachin): own clones under `~/Documents/protocolvision/sim-clones/facilitator-<name>/`. They produce materials before sessions and, during a session, the plenary transcript.
- **Participant agents** (6): own clones under `~/Documents/protocolvision/sim-clones/<handle>/`, git identity `<handle> (sim)`. Each is briefed with its persona file, and only with what that participant would actually have: the pre-work email, the pinned message, and whatever is in the repo at that moment. They do not read `workshop-dev/` (participants never would) except the slides Rafa shows, which they receive as "what you heard".
- **Meta** (the orchestrator): reads everything, writes `OBSERVATIONS.md`, never edits participant files.

## One session, in order
1. **Pre-session.** Sachin posts the day's messages to `discord/kitcraft.md`. Rafa's slides and run-of-show exist. The recorder command is issued at minute 0 (`discord/kafka/S<n>.md` starts with it).
2. **Plenary.** Rafa's agent writes the plenary transcript `discord/kafka/S<n>.md` in OpenRecapper style (`[hh:mm:ss] Name: …`), covering only what the run-of-show says the lead says; participant lines in the plenary are written by the participant agents in a second pass (round-robin answers, questions), then the facilitator agent closes the transcript with `/stop` and an AI summary block.
3. **Exercise.** Each participant agent runs in parallel: reads its persona's behaviour rules, the instructions as pinned, and its own clone; does the work (inventory / kit / bridge); appends autolog lines; commits and pushes with the AGENTS.md procedure. Pushes are real and concurrent.
4. **Breakouts.** The triad's agents co-write `discord/breakouts/breakout-<n>-S<m>.md` (voice, not recorded in reality, so this file exists only as the rehearsal's window into the room); each participant appends its own lines to its own files in the repo.
5. **Close.** Rafa's agent runs the awareness check in the plenary transcript; Sachin posts the async assignment to `#kitcraft`.
6. **Meta pass.** The orchestrator diffs the branch, checks: one autolog line per participant, push failures, files edited outside the owner's folder, instructions the agents could not follow, questions raised. Appends to `OBSERVATIONS.md`. Then stops at the checkpoint if one is due.

## What counts as a finding
Anything a participant agent had to guess, ask, or work around; any git rejection or conflict; any instruction that took more than one reading; any place the run-of-show timing did not survive contact; any decision that only the human Rafa can make.

## Realism limits (stated once)
All agents run on Claude Code, including the two Codex personas. Absence, time zones and IT restrictions are enacted by the briefs, not by the clock. No live services are called.
