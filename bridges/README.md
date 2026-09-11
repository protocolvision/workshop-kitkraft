# Bridges (Session 3)

One log per bridge, one writer: `bridges/<you>-<target>.md`, where `<target>` is the kit you bridge to (a participant or a facilitator kit). Copy `TEMPLATE.md`. Nobody else edits your log; the target's owner has their own.

Task: make your agent use the target kit to do one thing your own kit could not do alone. Targets: the kit your triad assigned you (pinned in #kitcraft), or a facilitator factory in `facilitator/`.

Rule: the exchange should go agent → repo → agent. Human chat is allowed to unblock; every unblock is logged as an `unblock` line.

Bridging to a stub (a private kit): the transmittal pattern. (1) Your agent writes a request — the input and what you want back — under `## Request` in your log, and you push. (2) The owner pulls, runs their kit locally on your request, and their agent appends the result under `## Response` in the same file, then pushes. (3) You pull and continue. Alternate pushes: never both edit the file at once. This is the only case where someone else writes in your log.

Hard mode (optional, async before S4): agent-only, public record, no human chat; log it as a second section in the same file.
