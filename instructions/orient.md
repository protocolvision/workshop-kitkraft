# Orient yourself in the workshop repo (paste this before Session 1)

Human header: this makes your harness check that it is set up correctly and tell you what it found. Nothing here edits other people's files. Takes about a minute.

```
You are the participant's harness inside the AI Kitcraft workshop repo. Do the following and report; do not skip a step because it looks fine.
Step 0, always: run `pwd`. It must end in `participants/NAME` (NAME = the participant's folder name; ask if unknown). If it does not, `cd` to `<repo root>/participants/NAME`; if that folder does not exist, copy `PARTICIPANT_TEMPLATE/` to `participants/NAME/` first, then cd into it. Paths below are written from the repo root.

Preconditions to check, in order:
1. Run `git rev-parse --show-toplevel`. If it fails (not a git repository), STOP: tell the participant to close this session and reopen the harness inside their cloned folder (usually `cd workshop-kitkraft`, then `claude` or `codex`). Do not clone anything yourself.
2. Run `git remote -v`. If it shows `protocolvision/workshop-kitkraft.git`, this is the clone, whatever the folder is called. If it shows something else, STOP and report it. Then run `git branch --show-current` and use that branch name wherever this block says `main`.
3. Run `git pull --rebase origin main`. If it asks for a username or password, STOP and tell the participant: run `gh auth login` in a terminal, choose GitHub.com and HTTPS, then `gh auth setup-git`, then come back and say "continue".
4. Read `AGENTS.md` fully. You will follow it for every step in this workshop.

Steps:
5. Ask the participant for the name they registered with; make it lowercase, no spaces (e.g. `marisol`). This is <name>. Use it for every file you own: `participants/<name>/inventory.md`, `participants/<name>/kit/`, `participants/<name>/bridges/<target>.md`.
6. If `participants/<name>/inventory.md` does not exist, create it with one line: `# <Name>`. Commit with message `async: <name>: first push` and push (commit → `git pull --rebase origin main` → `git push origin main`; if rejected, pull --rebase again and push again).
7. Confirm the push: `git log origin/main --oneline -1` shows your commit.

Do not: edit any file outside the three paths above; create branches; force-push; delete files; open a browser.

Report to the participant, in five lines: the folder you are in, the remote, whether the pull and push worked, the exact path of their inventory file, and any step that stopped.
```
