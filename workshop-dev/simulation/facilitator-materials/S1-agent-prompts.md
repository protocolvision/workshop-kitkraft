# S1 agent prompts — pinned in #kitcraft by Sachin at 16:05 and 16:18 UTC

Two blocks. Participants paste each into their harness (open inside the clone) and say "do this". Slide 12 = Block 1, slide 13 = Block 2. No interpretation needed from the participant.

## Block 1 — inventory (slide 12, 16:05 UTC)

```
You are the participant's harness in the AI Kitcraft repo, Session 1. Write their inventory file and push it. Settings: BRANCH=<from `git branch --show-current`>, NAME=<Discord handle without @, lowercase; ask if unknown>.

Preconditions:
- You are inside the clone: `git remote get-url origin` contains `protocolvision/workshop-kitkraft` (the folder name does not matter). If the command fails: stop; tell the participant the absolute path of their clone if you can find one (`find ~ -maxdepth 3 -type d -name 'workshop-kitkraft*'`), and to open you there and paste again. If two clones exist, the one whose `git status -sb` is not behind and has their commits is the real one; do not clone again.
- Set BRANCH to the output of `git branch --show-current`; do not guess it from these instructions.
- `gh auth status` shows an account that can push: `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. If `false` or 403: the active account is wrong; tell the participant to run `gh auth switch` to the account they registered, then `gh auth setup-git` (it writes one line, `credential.helper=!gh auth git-credential`, to `~/.gitconfig`). Stop and report if it still fails.
- `git pull --rebase origin BRANCH` succeeds. If it says "unstaged changes", `git stash`, pull, `git stash pop`.

Steps:
1. Read `inventory/README.md`. If `inventory/NAME.md` exists (pre-work stub), keep its `## Log` lines and the three tasks; otherwise ask the participant for the three tasks now.
2. Write `inventory/NAME.md` with exactly these sections: `# NAME`; `## Recurring tasks` (three, each with: recurring? yes/no; depends on tacit knowledge? yes/no, one line why); `## Built / use` (anything AI-native they built or use, link or name, or "none"); `## Kit` (which task becomes the kit, and `Public` or `Private`; ask if not stated); `## Posture` (Partnership / Hypervigilance / Overreliance / Compliance; ask if unknown); `## Log`.
3. Append to `## Log`: `<ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness`. Artifact: the file, 15–40 lines.
4. `git add inventory/NAME.md && git commit -m "S1: NAME: inventory"`.
5. `git pull --rebase origin BRANCH && git push origin BRANCH`. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- inventory/NAME.md` shows your commit.

Failures: auth prompt → do not type credentials; tell the participant to run `gh auth setup-git` and retry. Rejected push → pull --rebase and retry, up to 3 times; a CONFLICT can only be in `inventory/NAME.md`: keep both, `git add`, `git rebase --continue`, push. Still failing after 3 tries → stop, print the exact error, tell the participant to post it in #kitcraft; Sachin pushes for them.
Do not: create branches, force-push, touch any other file, read other inventories yet, log anything private.
Report in three lines: file link on GitHub, the kit chosen and public/private, any error.
```

## Block 2 — the two nearest (slide 13, 16:18 UTC)

```
You are the participant's harness in the AI Kitcraft repo, Session 1, second prompt. Find the two inventories nearest to theirs. Settings as in Block 1.
Preconditions: inside the clone; `git pull --rebase origin BRANCH` done (others' files arrive only through the pull).
Steps:
1. List `inventory/*.md` excluding `README.md`, `NAME.md`, and any file whose name starts with `_` (examples, not participants). If fewer than 2 remain, report "only N inventories landed yet" and stop.
2. Read each. Compare against `inventory/NAME.md` on: the kind of recurring task, the input type (documents, transcripts, spreadsheets, calendars), and the output type.
3. Name the two nearest, one line each: `<name> — <why>`.
4. Confirm `inventory/NAME.md` has at least one line under `## Log`; if not, append `<ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness` now, commit `S1: NAME: log line`, pull --rebase, push.
5. Append `<ISO-8601 UTC now> | S1 | NAME | memory | nearest: <name1>, <name2>` to `## Log`, commit `S1: NAME: nearest two`, pull --rebase, push.
Do not: edit any file except `inventory/NAME.md`; open GitHub in a browser; quote other people's files back at length.
Report in three lines: the two names with reasons, and whether the log line exists on GitHub.
```
