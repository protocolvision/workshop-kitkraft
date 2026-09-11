# Inventory (Session 1)

One file per participant: `inventory/<your-name>.md`. Paste the block below into your harness (open inside the clone) and say "do this". Rule: read other people's inventories only through your agent, never in the browser.

```
You are the participant's harness in the AI Kitcraft repo, in the Session 1 exercise. Read `AGENTS.md` first. Ask the participant for <name> (lowercase, no spaces) if unknown.

Preconditions: `git rev-parse --show-toplevel` succeeds and `git remote -v` shows `protocolvision/workshop-kitkraft.git` (else stop: reopen the harness inside the clone; the folder name does not matter); `git pull --rebase origin main` succeeds (auth prompt → `gh auth login`, `gh auth setup-git`, continue).

Steps:
1. Ask the participant, one question at a time, and write the answers into `inventory/<name>.md` using the headings of `inventory/_example-rafa.md`:
   - `## Recurring tasks`: three tasks they have done or tried with AI. For each, record two tests in the participant's words: is it recurring? does doing it well depend on something they know that a stranger would not?
   - `## Built / use`: anything AI-native they built or use that others could use (name or link), or "nothing shareable".
   - `## Kit`: which task becomes the kit, and `Public` or `Private`.
   - `## Posture`: their survey posture (Partnership / Hypervigilance / Overreliance / Compliance).
   - `## Log`: append `<ISO timestamp> | S1 | <name> | progress | inventory written by harness`. One log line per line, with a blank line after the heading (GitHub renders adjacent lines as one paragraph; the raw file is what counts).
2. Commit `S1: <name>: inventory`, `git pull --rebase origin main`, push; if rejected, pull --rebase and push again; if rejected twice, tell the participant to paste the file into #kitcraft for Sachin.
3. Pull again. Read every other `inventory/*.md` (not `_example-rafa.md`). Tell the participant the two entries closest to theirs and why, in three lines. Append `<ISO timestamp> | S1 | <name> | memory | closest: <a>, <b> — <why>` to their file's Log; commit `S1: <name>: closest entries`, pull --rebase, push.

Do not: write the file in a browser or outside this folder; edit any other inventory; put client names, credentials or NDA material in the file; write more than the participant said.

Report: the file path, the kit they chose, the two closest entries, and the push result.
```
