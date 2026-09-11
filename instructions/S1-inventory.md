# S1 — inventory (two blocks, paste each when the facilitator says so)

Human header: Block 1 writes `inventory/<name>.md` from your answers and pushes it; Block 2 pulls the others' files and names the two nearest to yours. Your harness will ask you for the three tasks if it does not have them; it never invents them. The file shape is in `inventory/README.md`. Read other people's inventories only through your agent, never in the browser.

## Block 1 — inventory (slide 12)

```
You are the participant's harness in the AI Kitcraft repo, Session 1. Write their inventory file and push it.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions:
- Inside the clone: `git remote get-url origin` contains `workshop-kitkraft`. If not: `gh repo clone protocolvision/workshop-kitkraft`, `cd workshop-kitkraft`, and continue here. Never test the folder name.
- `gh api user --jq .login` equals NAME. If not: STOP, "run `gh auth login` as NAME, then say continue".
- `git pull --rebase origin BRANCH` succeeds. "Unstaged changes" → `git stash`, pull, `git stash pop`. Auth prompt → type nothing; STOP, "run `gh auth setup-git`, then say continue".

Steps:
1. Read `inventory/README.md` (the file shape). If `inventory/NAME.md` exists, keep its `## Log` lines and any tasks already in it.
2. The three recurring tasks. If the file already has three, read them back and confirm. If fewer than three, and the participant has not given you the missing ones in this conversation: STOP and ask for them, one at a time. Never draft, invent, or complete a task yourself; wait for the participant's words. For each task record two answers in the participant's words: recurring? (yes/no) · depends on something they know that a stranger would not? (yes/no, one line why).
3. Ask: which task becomes the kit, and will it be public or private? Public = the kit content goes into this public repo, readable by anyone. Private = the content stays on the participant's machine and only a stub README goes here. Record the task and `Public` or `Private` under `## Kit`. If they have not decided, STOP and ask; do not choose for them.
4. Ask for their posture from the survey (Partnership / Hypervigilance / Overreliance / Compliance); if not taken, write `not taken`. Ask for `## Built / use`: anything AI-native they built or use that others could use (link or name), or `none`.
5. Write `inventory/NAME.md` with exactly the sections in `inventory/README.md`: `# NAME` · `## Recurring tasks` (three, numbered, both answers each) · `## Built / use` · `## Kit` · `## Posture` · `## Log`. Append `<ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness` under `## Log`. 15–40 lines; only what the participant said. Task names and one-line descriptions are fine; no client names, numbers, credentials, or NDA material.
6. `git add inventory/NAME.md && git commit -m "S1: NAME: inventory"`, then `git pull --rebase origin BRANCH && git push origin BRANCH`. Rejected → pull --rebase and push again, up to 3 times. CONFLICT can only be in `inventory/NAME.md`: keep both, `git add`, `git rebase --continue`, push.
7. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- inventory/NAME.md` shows your commit.

Failures: still rejected after 3 tries → STOP, print the exact error, tell the participant to paste the file in #kitcraft; a facilitator commits it under their name.
Do not: create branches, force-push, touch any other file, read other inventories yet, log anything private.
Report in three lines: the GitHub link of the file, the kit chosen and public/private, any error.
```

## Block 2 — the two nearest (slide 13)

```
You are the participant's harness in the AI Kitcraft repo, Session 1, second prompt. Find the two inventories nearest to theirs.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions: inside the clone (`git remote get-url origin` contains `workshop-kitkraft`); run `git pull --rebase origin BRANCH` now — other people's files arrive only through the pull.

Steps:
1. List `inventory/*.md` excluding `README.md`, `NAME.md`, and every file whose name starts with `_` (those are examples, not participants). If fewer than 2 remain, report "only N inventories landed yet" and stop.
2. Read each. Compare against `inventory/NAME.md` on: the kind of recurring task, the input type (documents, transcripts, spreadsheets, calendars), the output type.
3. Name the two nearest, one line each: `<name> — <why>`.
4. Confirm `inventory/NAME.md` has at least one line under `## Log`; if not, append `<ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness`.
5. Append `<ISO-8601 UTC now> | S1 | NAME | memory | nearest: <name1>, <name2> — <why, short>` under `## Log`. Commit `S1: NAME: nearest two`, `git pull --rebase origin BRANCH`, push; rejected → pull --rebase and push again (3 tries; conflict only in your file: keep both, add, continue). Verify with `git log origin/BRANCH --oneline -1 -- inventory/NAME.md`.

Do not: edit any file except `inventory/NAME.md`; open GitHub in a browser; quote other people's files back at length.
Report in three lines: the two names with reasons, and whether the log line is on GitHub.
```
