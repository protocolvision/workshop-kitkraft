# Orient yourself in the workshop repo (paste this before Session 1)

Human header: this makes your harness check that it is set up correctly, clone the repo if it has not, create your folder, make your first push, and tell you what it found. If you already pushed from the pre-work email it reports "already done". Nothing here edits other people's files. About a minute.

```
You are the participant's harness for the AI Kitcraft workshop. Check the setup, make the first push if it has not happened, and report. Do not skip a step because it looks fine.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions:
1. `git --version` and `gh --version` print versions. If either fails: STOP; tell the participant to do Item 0 of the pre-work email (install git and gh); a harness cannot install them.
2. `gh api user --jq .login` prints NAME (compare case-insensitively) and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. If not: STOP; tell the participant "run `gh auth switch --user NAME` (or `gh auth login` as NAME) in a terminal, then say continue". When it matches, run `gh auth setup-git` (you may run this yourself; it asks for nothing).

Steps:
3. Are you at the clone root? Yes when `git rev-parse --show-toplevel` succeeds, equals `pwd`, AND `git remote get-url origin` contains `protocolvision/workshop-kitkraft`. Never test the folder name. If the toplevel differs from `pwd`, `cd` to it. If yes, go to step 5.
4. If not: `find ~ -maxdepth 4 -type d -name workshop-kitkraft`. One result whose remote matches: `cd` into it. None: `gh repo clone protocolvision/workshop-kitkraft` here, then `cd workshop-kitkraft`. Two or more: STOP; the participant brings it to 1A; never make a second clone. Continue in this same run; do not ask the participant to paste again.
5. `git checkout BRANCH && git pull --rebase origin BRANCH`. If it asks for a username or password: type nothing; STOP and tell the participant "run `gh auth setup-git` in a terminal, then say continue".
6. Your folder. If `participants/NAME/` does not exist: `cp -R PARTICIPANT_TEMPLATE participants/NAME`. Stay at the clone root. In the report, tell the participant to open the harness at the clone root (the folder that contains `AGENTS.md`) from now on; that is what makes the autolog fire.
7. Read `AGENTS.md` fully. You follow it for every step in this workshop.
8. If `participants/NAME/inventory.md` is already on origin/BRANCH (`git log origin/BRANCH --oneline -1 -- participants/NAME/inventory.md` prints a commit): report "already done" with its GitHub link and go to the report. If not: replace `<name>` in `participants/NAME/inventory.md` with NAME (leave the other placeholders), append to `participants/NAME/LOG.md`: `<ISO-8601 UTC now> | async | NAME | progress | first push by harness`. Then `git add participants/NAME && git commit -m "async: NAME: first push"`.
9. `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Rejected ("fetch first", "non-fast-forward") → `git pull --rebase origin BRANCH` and push again, up to 3 times. A CONFLICT can only be inside `participants/NAME/`: keep both versions' lines, `git add` it, `git rebase --continue`, push.
10. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/LOG.md` shows your commit.

Failures: "Permission denied" / 403 / `permissions.push` false → the invite is not accepted or the wrong account is logged in; STOP, print `gh api user --jq .login`, tell the participant to accept the invite at https://github.com/notifications or to run `gh auth switch --user NAME` / `gh auth login`. `error: src refspec main does not match any` → not on BRANCH or nothing committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again. Anything else after two attempts → STOP, print the exact error text, tell the participant to post it in #kitcraft or bring it to 1A (Mon Sep 21, 16:30 UTC, #kafka).

Do not: edit anything outside `participants/NAME/`; create branches; force-push; delete files; store or print tokens; open a browser.

Report in five lines: the absolute path of `participants/NAME/`; the `gh api user` login; whether pull and push worked, or "already done"; the GitHub link of the folder; any step that stopped and what the participant must do.
```
