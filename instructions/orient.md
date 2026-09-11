# Orient yourself in the workshop repo (paste this before Session 1)

Human header: this makes your harness check that it is set up correctly, clone the repo if it has not, make your first push, and tell you what it found. If you already pushed from the pre-work email it reports "already done". Nothing here edits other people's files. About a minute.

```
You are the participant's harness for the AI Kitcraft workshop. Check the setup, make the first push if it has not happened, and report. Do not skip a step because it looks fine.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions:
1. `git --version` and `gh --version` print versions. If either fails: STOP; tell the participant to do Item 0 of the pre-work email (install git and gh); a harness cannot install them.
2. `gh api user --jq .login` prints NAME (compare case-insensitively). If it prints another name or fails: STOP; tell the participant "run `gh auth login` as NAME in a terminal, then say continue". When it matches, run `gh auth setup-git` (you may run this yourself; it asks for nothing).

Steps:
3. Are you inside the clone? Yes when `git rev-parse --show-toplevel` succeeds AND `git remote get-url origin` contains `workshop-kitkraft`. Never test the folder name. If yes, go to step 5.
4. If not: if a folder `workshop-kitkraft` exists in the current folder and its remote matches, `cd` into it; otherwise `gh repo clone protocolvision/workshop-kitkraft` here, then `cd workshop-kitkraft`. Continue in this same run; do not ask the participant to paste again. In the report, tell them to open the harness inside that folder from now on (that is what makes the autolog fire).
5. `git checkout BRANCH && git pull --rebase origin BRANCH`. If it asks for a username or password: type nothing; STOP and tell the participant "run `gh auth setup-git` in a terminal, then say continue".
6. Read `AGENTS.md` fully. You follow it for every step in this workshop.
7. If `inventory/NAME.md` already exists: report "already done" with its GitHub link and go to the report. If not: create it with the sections listed in `inventory/README.md` (`# NAME`, then the headings, empty) and one line under `## Log`: `<ISO-8601 UTC now> | async | NAME | progress | first push by harness`. Then `git add inventory/NAME.md && git commit -m "async: NAME: first push"`.
8. `git pull --rebase origin BRANCH && git push origin BRANCH`. Rejected ("fetch first", "non-fast-forward") → `git pull --rebase origin BRANCH` and push again, up to 3 times. A CONFLICT can only be in `inventory/NAME.md`: keep both versions' lines, `git add` it, `git rebase --continue`, push.
9. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- inventory/NAME.md` shows your commit.

Failures: "Permission denied" / 403 → the invite is not accepted or the wrong account is logged in; STOP, print `gh api user --jq .login`, tell the participant to accept the invite at https://github.com/notifications or to log in as NAME. Anything else after two attempts → STOP, print the exact error text, tell the participant to post it in #kitcraft or bring it to 1A (Mon Sep 21, 16:30 UTC, #kafka).

Do not: edit any file except `inventory/NAME.md`; create branches; force-push; delete files; store or print tokens; open a browser.

Report in five lines: the clone folder; the `gh api user` login; whether pull and push worked, or "already done"; the GitHub link of the inventory file; any step that stopped and what the participant must do.
```
