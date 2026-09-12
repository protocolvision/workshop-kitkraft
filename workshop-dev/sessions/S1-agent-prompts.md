# S1 agent prompts — facilitator copy (pinned in #kitcraft by Sachin at 16:05 and 16:18 UTC as a link to `instructions/S1-inventory.md`)

Two blocks. Participants paste each into their harness (open inside the clone) and say "do this". Slide 12 = Block 1, slide 13 = Block 2. No interpretation needed from the participant. Pins never carry a block (2000-character cap); they link to the file. Keep this copy and `instructions/S1-inventory.md` identical.

## Block 1 — inventory (slide 12, 16:05 UTC)

```
You are the participant's harness in the AI Kitcraft repo, Session 1. Write their inventory file and push it.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions:
- Inside the clone: `git remote get-url origin` contains `protocolvision/workshop-kitkraft`. Never test the folder name. If the command fails: run `find ~ -maxdepth 4 -type d -name workshop-kitkraft`. One result: tell the participant its absolute path and "quit me, `cd` there, start me again, paste this again". None: `gh repo clone protocolvision/workshop-kitkraft`, `cd workshop-kitkraft`, continue here. Two or more: STOP; the participant brings it to 1A. Never make a second clone.
- `git branch --show-current` prints BRANCH. If not: `git checkout BRANCH`.
- `gh api user --jq .login` equals NAME (compare case-insensitively) and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. If either fails: STOP; see Failures.
- `git pull --rebase origin BRANCH` succeeds. "Unstaged changes" → `git stash`, pull, `git stash pop`. Username/password prompt → type nothing; STOP, "run `gh auth setup-git`, then say continue".

Steps:
1. Read `inventory/README.md` (the file shape). If `inventory/NAME.md` exists, keep its `## Log` lines and any tasks already in it; remove any draft note or "to be confirmed" preamble.
2. The three recurring tasks. If the file already has three, read them back and confirm. If fewer than three, and the participant has not supplied the missing ones in this conversation: STOP and ask for them, one at a time. Never draft, invent, or complete a task yourself; wait for the participant's words. For each task record two answers in the participant's words: recurring? (yes/no) · depends on something they know that a stranger would not? (yes/no, one line why).
3. Ask: which task becomes the kit, and will it be public or private? Public = the kit content goes into this public repo, readable by anyone. Private = the content stays on the participant's machine and only a stub README goes here. Record the task and `Public` or `Private` under `## Kit`. If they have not decided, STOP and ask; do not choose for them. If Private, create the stub now: `kits/NAME/README.md` from `KIT_TEMPLATE/README.md` with the Job and For lines filled and `Public / private: private`; nothing about the content. It goes in the same commit.
4. Ask for their posture from the survey (Partnership / Hypervigilance / Overreliance / Compliance); if not taken, write `not taken`. Ask for `## Built / use`: anything AI-native they built or use that others could use (link or name), or `none`.
5. Write `inventory/NAME.md` with exactly the sections in `inventory/README.md`: `# NAME` · `## Recurring tasks` (three, numbered, both answers each) · `## Built / use` · `## Kit` · `## Posture` · `## Log`. Append `<ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness` under `## Log`. 15–40 lines; only what the participant said. Task names and one-line descriptions are fine; no client names, numbers, credentials, or NDA material.
6. `git add inventory/NAME.md` (and `kits/NAME/README.md` if you made the stub) `&& git commit -m "S1: NAME: inventory"`, then `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times. A CONFLICT can only be in `inventory/NAME.md`: keep both, `git add`, `git rebase --continue`, push.
7. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- inventory/NAME.md` shows your commit.

Failures:
- `gh api user` prints another name, or `permissions.push` is `false`, or any 403 → STOP; tell the participant "run `gh auth switch --user NAME` (or `gh auth login` as NAME), then say continue"; when it matches, run `gh auth setup-git`.
- username/password prompt → type nothing; the participant runs `gh auth setup-git`; retry.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times.
- `error: src refspec main does not match any` → you are not on BRANCH or nothing is committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- still rejected after 3 tries → STOP, print the exact error, tell the participant to paste the file in #kitcraft; a facilitator commits it under their name.
Do not: create branches, force-push, touch any other file (the private stub excepted), read other inventories yet, log anything private.
Report in four lines: the absolute path of the clone you wrote in; the GitHub link of the file; the kit chosen and public/private; any error.
```

## Block 2 — the two nearest (slide 13, 16:18 UTC)

```
You are the participant's harness in the AI Kitcraft repo, Session 1, second prompt. Find the two inventories nearest to theirs.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions: inside the clone (`git remote get-url origin` contains `protocolvision/workshop-kitkraft`; never test the folder name); `git branch --show-current` prints BRANCH; run `git pull --rebase origin BRANCH` now — other people's files arrive only through the pull.

Steps:
1. List `inventory/*.md` excluding `README.md`, `NAME.md`, and every file whose name starts with `_` (those are examples, not participants). If fewer than 2 remain, report "only N inventories landed yet" and stop.
2. Read each. Compare against `inventory/NAME.md` on: the kind of recurring task, the input type (documents, transcripts, spreadsheets, calendars), the output type.
3. Name the two nearest, one line each: `<name> — <why>`.
4. Confirm `inventory/NAME.md` has at least one line under `## Log`; if not, append `<ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness`.
5. Append `<ISO-8601 UTC now> | S1 | NAME | memory | nearest: <name1>, <name2> — <why, short>` under `## Log`. Commit `S1: NAME: nearest two`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH`; rejected → pull --rebase and push again (3 tries; a conflict is only in your file: keep both, add, continue). Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- inventory/NAME.md`.

Do not: edit any file except `inventory/NAME.md`; open GitHub in a browser; quote other people's files back at length.
Report in three lines: the two names with reasons, and whether the log line is on GitHub.
```
