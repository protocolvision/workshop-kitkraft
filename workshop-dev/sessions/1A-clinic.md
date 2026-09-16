# 1A — Tech Support: harness installed but something is wrong, 30 min (Mon Sep 21, 16:30–17:00 UTC, #kafka, not recorded)

Rafa runs 1A and its #workshop-kitkraft threads; Sachin is not needed. Everyone has a harness and a GitHub account; 1A is for a harness that is installed but something is wrong. Expected: anyone without a push by the Sep 19 check, anyone whose harness opened outside the clone (no autolog), wrong account, wrong clone, wrong branch, push rejected, anyone who does not trust the push. Nothing is installed here beyond what the setup checklist's "Verify only" block checks. Exit, per person: the harness reports all seven checks below as passed. Everything after "Before the block" is one pasteable block; the participant pastes it and says "do this", Rafa reads the report.

## Before the block (human, 00:00–00:08)
git, `gh` and one harness are already installed (pre-work step 1; `setup-checklist.md`). If a verify command there fails, the participant runs the checklist's "Verify only" block first; anything it reports as missing is theirs to install, not 1A's.
- Say the failed step in one sentence (auth, wrong clone, wrong branch, push rejected, harness opened outside the clone); Rafa opens a #workshop-kitkraft thread per person for pasted errors.
- Open a terminal in the home folder and start the harness (`claude` or `codex`). Then paste the block. Rafa says commands; participants type. Nobody types on someone else's machine.

## Block — paste into the harness (00:08–00:28)

```
You are the participant's harness at AI Kitcraft 1A Tech Support. Run these seven checks in order; each has a command and a proof. Fix what fails, then re-check.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

1. Tools. `git --version` and `gh --version` print versions. Fix: none here — you install nothing; the participant follows the matching row of `workshop-dev/sessions/setup-checklist.md` themselves (it needs their password), then you re-check. Proof: both versions printed.
2. Login. `gh auth status` shows a logged-in github.com user; `gh api user --jq .login` equals NAME; `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. Fix: the participant runs `gh auth login` (GitHub.com, HTTPS, browser) in another terminal; you cannot do the browser step. Wrong account, `false` or 403: `gh auth switch --user NAME` (or `gh auth login` as NAME). Then `git config --global user.name` must equal NAME and `git config --global user.email` must be set; if not, set them (`git config --global user.name NAME`; the email from `gh api user --jq .email`, or ask). Then `gh auth setup-git`; tell the participant first that it writes one line, `credential.helper=!gh auth git-credential`, to `~/.gitconfig`, and show `git config --global --list | grep credential` before and after. Proof: login = NAME, git user.name = NAME and user.email set, push permission `true`, credential line present.
3. Invite. `gh repo view protocolvision/workshop-kitkraft --json name` succeeds. Fix on 404: accept the invite at https://github.com/notifications, retry. Proof: JSON with `"name":"workshop-kitkraft"`.
4. One clone only. `find ~ -maxdepth 4 -type d -name workshop-kitkraft`. Zero results: `gh repo clone protocolvision/workshop-kitkraft`. One: use it. Two or more: for each, `git -C <path> status -sb` and `git -C <path> log origin/BRANCH..HEAD --oneline`; the real one is the one that is not behind and has the participant's commits; rename the others to `<name>-old` (never delete). Then in the real one: `git checkout BRANCH && git pull --rebase origin BRANCH`; if `participants/NAME/` is missing, `cp -R PARTICIPANT_TEMPLATE participants/NAME`. Proof: exactly one clone; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; print its absolute path.
5. At the clone root. If `git rev-parse --show-toplevel` does not equal `pwd`, or the remote does not match (check the remote, never the folder name), stop and say: "Quit me, run `cd <absolute path from check 4>`, start me again, paste this block again." When restarted there: `git branch --show-current` prints BRANCH (else `git checkout BRANCH`); read `AGENTS.md` and state in one line what it says to append after each step. Proof: that line mentions a LOG table row with time | session | name | type | note. (Codex: `AGENTS.md` is your file; `CLAUDE.md` is not for you.)
6. Log line. `participants/NAME/LOG.md` exists (it came with the template; if it is missing, copy `PARTICIPANT_TEMPLATE/LOG.md` in). Append `| <ISO-8601 UTC now> | S1 | NAME | progress | harness opened at the clone root at 1A |`. Proof: `tail -1 participants/NAME/LOG.md` shows that line.
7. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Push. `git add participants/NAME && git commit -m "S1: NAME: 1A push" && git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Proof: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/LOG.md` shows "1A push". Then tell the participant to say "pushed" in #workshop-kitkraft.

Failures:
- username/password prompt → never type a token; the participant runs `gh auth setup-git`; retry 7.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times (everyone on one branch; normal).
- CONFLICT → only possible inside `participants/NAME/`; keep both versions, `git add`, `git rebase --continue`, push.
- `error: src refspec main does not match any` → not on BRANCH or nothing committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- "Permission denied" / 403 → check 3 (invite) or wrong account (check 2): `gh auth switch --user NAME` / `gh auth login`.
- anything else after two attempts → stop, print the exact error for the #workshop-kitkraft thread.
Do not: create branches, force-push, edit anything outside `participants/NAME/`, delete anything, store credentials.
Report as a seven-line checklist, PASS/FAIL per check with the proof, then any error text verbatim.
```

## Close (00:28–00:30)
- Rafa reads each report; a FAIL on 7 means the participant retries the push at the start of S2 with the fix from their thread (the kit exercise needs it); nobody's file is committed for them.
- Every fix goes into the facilitator notes with the exact error text; the next cohort's pre-work is built from it.
