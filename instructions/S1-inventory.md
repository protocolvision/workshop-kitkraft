# S1 — inventory (two blocks, paste each when the facilitator says so)

Human header: Block 1 writes `participants/<name>/inventory.md` from your answers and pushes it; Block 2 pulls the others' folders and names the two nearest to yours. Your harness will ask you for the three tasks if it does not have them; it never invents them. The file shape is in `participants/README.md`. Read other people's inventories only through your agent, never in the browser.

## Block 1 — inventory (slide 12)

```
You are the participant's harness in the AI Kitcraft repo, Session 1. Write their inventory file and push it.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions:
0. Clone root. `git rev-parse --show-toplevel` equals `pwd` and `git remote get-url origin` contains `protocolvision/workshop-kitkraft` (never test the folder name). If the remote check fails: `find ~ -maxdepth 4 -type d -name workshop-kitkraft` — one result: tell the participant its path and "quit me, `cd <path>`, start me again, paste again"; none: `gh repo clone protocolvision/workshop-kitkraft`, `cd workshop-kitkraft`, continue; two or more: STOP, bring it to 1A; never make a second clone. If only `pwd` differs, `cd` to the clone root. If `participants/NAME/` is missing, `cp -R PARTICIPANT_TEMPLATE participants/NAME`.
- `git branch --show-current` prints BRANCH. If not: `git checkout BRANCH`.
- `gh api user --jq .login` equals NAME (case-insensitively) and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. If either fails: STOP; see Failures.
- `git pull --rebase origin BRANCH` succeeds. "Unstaged changes" → `git stash`, pull, `git stash pop`. Username/password prompt → type nothing; STOP, "run `gh auth setup-git`, then say continue".

Steps:
1. Read `participants/README.md` (the file shape). If `participants/NAME/inventory.md` has tasks in it already, keep them; remove any draft note or "to be confirmed" preamble.
2. The three recurring tasks. If the file already has three, read them back and confirm. If fewer than three, and the participant has not supplied the missing ones in this conversation: STOP and ask for them, one at a time. Never draft, invent, or complete a task yourself; wait for the participant's words. For each task record two answers in the participant's words: recurring? (yes/no) · depends on something they know that a stranger would not? (yes/no, one line why).
3. Ask: which task becomes the kit? Record it under `## Kit`. If they have not decided, STOP and ask; do not choose for them. Everything in the repo is public; if the participant wants to keep some of the work private, they do that work in a private workspace on their machine later and put here only what they are comfortable sharing.
4. Ask for their posture from the survey (Partnership / Hypervigilance / Overreliance / Compliance); if not taken, write `not taken`. Ask for `## Built / use`: anything AI-native they built or use that others could use (link or name), or `none`.
5. Write `participants/NAME/inventory.md` with exactly the sections in `participants/README.md`: `# NAME` · `## Recurring tasks` (three, numbered, both answers each) · `## Built / use` · `## Kit` · `## Posture`. 12–35 lines; only what the participant said. Task names and one-line descriptions are fine; no client names, numbers, credentials, or NDA material. Append `| <ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness |` to `participants/NAME/LOG.md`.
6. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. `git add participants/NAME && git commit -m "S1: NAME: inventory"`, then `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times. A CONFLICT can only be inside `participants/NAME/`: keep both, `git add`, `git rebase --continue`, push.
7. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/inventory.md` shows your commit.

Failures:
- `gh api user` prints another name, or `permissions.push` is `false`, or any 403 → STOP; tell the participant "run `gh auth switch --user NAME` (or `gh auth login` as NAME), then say continue"; when it matches, run `gh auth setup-git`.
- username/password prompt → type nothing; the participant runs `gh auth setup-git`; retry.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times.
- `error: src refspec main does not match any` → you are not on BRANCH or nothing is committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- still rejected after 3 tries → STOP, print the exact error; the participant posts it in #workshop-kitkraft, the fix comes back in that thread or at 1A, then they say "push again".
Do not: create branches, force-push, touch anything outside `participants/NAME/`, read other inventories yet, log secrets, client names or data.
Report in four lines: the absolute path of the folder you wrote in; the GitHub link of `inventory.md`; the kit chosen; any error.
```

## Block 2 — the two nearest (slide 13)

```
You are the participant's harness in the AI Kitcraft repo, Session 1, second prompt. Find the two inventories nearest to theirs.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions: at the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root); never test the folder name; `git branch --show-current` prints BRANCH; run `git pull --rebase origin BRANCH` now — other people's folders arrive only through the pull.

Steps:
1. List `participants/*/inventory.md` excluding `participants/NAME/`, every folder whose name starts with `_` (those are examples, not participants), and any file that is still the unfilled template. Work with what is there and tell the participant how many you found. Two or more: continue. Exactly one: name it as the nearest, say so, and skip to step 4. None: report "no other inventories yet", do step 4, and stop.
2. Read each. Compare against `participants/NAME/inventory.md` on: the kind of recurring task, the input type (documents, transcripts, spreadsheets, calendars), the output type.
3. Name the two nearest, one line each: `<name> — <why>`.
4. Confirm `participants/NAME/LOG.md` has at least one line below its header; if not, append `| <ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness |`.
5. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Append `| <ISO-8601 UTC now> | S1 | NAME | memory | nearest: <name1>, <name2> — <why, short> |` to `participants/NAME/LOG.md`. Commit `S1: NAME: nearest two`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH`; rejected → pull --rebase and push again (3 tries; a conflict is only in your folder: keep both, add, continue). Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/LOG.md`.

Do not: edit anything outside `participants/NAME/`; open GitHub in a browser; quote other people's files back at length.
Report in three lines: the two names with reasons, and whether the log line is on GitHub.
```
