# participants/ — one folder per person

Your folder is `participants/<your-name>/`, copied from `PARTICIPANT_TEMPLATE/`: `inventory.md` (Session 1, schema in the template), `kit/` (Session 2), `bridges/<target>.md` (Session 3), `LOG.md` (your harness writes it). Blocks for each session are in `instructions/`. Session 1 block: paste it into your harness (open at the clone root, the folder containing `AGENTS.md`) and say "do this". Rule: read other people's inventories only through your agent, never in the browser.

```
You are the participant's harness in the AI Kitcraft repo, in the Session 1 exercise. Read `AGENTS.md` first. Ask the participant for <name> (lowercase, no spaces) if unknown.
Step 0, always: `git rev-parse --show-toplevel` must equal `pwd` and `git remote get-url origin` must contain `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root (the folder containing `AGENTS.md`) and check again. NAME = the participant's folder name under `participants/` (ask if unknown); if `participants/NAME/` does not exist, copy `PARTICIPANT_TEMPLATE/` to it. You read anywhere in the repo; you write only inside `participants/NAME/`.

Preconditions: `git rev-parse --show-toplevel` succeeds and `git remote -v` shows `protocolvision/workshop-kitkraft.git` (else stop: reopen the harness inside the clone; the folder name does not matter); `git pull --rebase origin main` succeeds (auth prompt → `gh auth login`, `gh auth setup-git`, continue).

Steps:
1. Ask the participant, one question at a time, and write the answers into `participants/<name>/inventory.md` using the headings of `PARTICIPANT_TEMPLATE/inventory.md` (example: `participants/_example/inventory.md`):
   - `## Recurring tasks`: three tasks they have done or tried with AI. For each, record two tests in the participant's words: is it recurring? does doing it well depend on something they know that a stranger would not?
   - `## Built / use`: anything AI-native they built or use that others could use (name or link), or "nothing shareable".
   - `## Kit`: which task becomes the kit, and `Public` or `Private`.
   - `## Posture`: their survey posture (Partnership / Hypervigilance / Overreliance / Compliance).
   - Then append to `participants/<name>/LOG.md` (create it from `PARTICIPANT_TEMPLATE/LOG.md` if missing): `<ISO timestamp> | S1 | <name> | progress | inventory written by harness`. One line per line, blank line after the header (GitHub renders adjacent lines as one paragraph; the raw file is what counts). `inventory.md` keeps its `## Log` heading with nothing under it.
2. Commit `S1: <name>: inventory`, `git pull --rebase origin main`, push; if rejected, pull --rebase and push again; if rejected twice, tell the participant to paste the file into #kitcraft for Sachin.
3. Pull again. Read every other `participants/*/inventory.md` (skip folders starting with `_` and any folder containing `WITHDREW.md`). Tell the participant the two entries closest to theirs and why, in three lines. Append `<ISO timestamp> | S1 | <name> | memory | closest: <a>, <b> — <why>` to `participants/<name>/LOG.md`; commit `S1: <name>: closest entries`, pull --rebase, push.

Do not: write the file in a browser or outside this folder; edit any other inventory; put client names, credentials or NDA material in the file; write more than the participant said.

Report: the file path, the kit they chose, the two closest entries, and the push result.
```
