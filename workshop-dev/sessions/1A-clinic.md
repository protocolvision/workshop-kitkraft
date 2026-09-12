# 1A — Beginner clinic, 30 min (Mon Sep 21, 16:30–17:00 UTC, #kafka, not recorded)

Rafa runs 1A and its #kitcraft threads; Sachin is not needed. Expected: anyone without a push by the Sep 19 check, anyone whose harness opened outside the clone (no autolog), anyone without a harness, anyone who does not trust the push. Exit, per person: the harness reports all seven checks below as passed. Everything after "Before the harness exists" is one pasteable block; the participant pastes it and says "do this", Rafa reads the report.

## Before the harness exists (human, 00:00–00:08)
Before the checks, the machine needs these: git, the GitHub CLI `gh`, and one harness — what to install, why, and how to verify each is in `setup-checklist.md` (its "Verify only" block is the quick test).
- Say the failed step in one sentence; Rafa opens a #kitcraft thread per person for pasted errors.
- No harness: Claude Code `curl -fsSL https://claude.ai/install.sh | bash`; Codex `npm i -g @openai/codex`. The vendor page wins if it disagrees. Org-managed laptop with no install rights: personal laptop, or the by-hand path (`instructions/no-harness.md`).
- Open a terminal in the home folder and start the harness (`claude` or `codex`). Then paste the block. Rafa says commands; participants type. Nobody types on someone else's machine.

## Block — paste into the harness (00:08–00:28)

```
You are the participant's harness at the AI Kitcraft 1A clinic. Run these seven checks in order; each has a command and a proof. Fix what fails, then re-check.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

1. Tools. `git --version` and `gh --version` print versions. Fix: git — macOS `xcode-select --install`, Windows https://git-scm.com/download/win, Debian/Ubuntu `sudo apt install git`; gh — macOS `brew install gh`, Windows `winget install GitHub.cli`, otherwise https://cli.github.com/. Proof: both versions printed.
   1b. Homebrew (macOS only, when `brew` is missing): the participant runs the one-liner from https://brew.sh in a terminal themselves — it needs the Mac login password, takes 5–8 min, and ends with two "Next steps" PATH lines they must also run. You cannot do this for them. Then `brew install gh` and re-check 1.
2. Login. `gh auth status` shows a logged-in github.com user; `gh api user --jq .login` equals NAME; `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. Fix: the participant runs `gh auth login` (GitHub.com, HTTPS, browser) in another terminal; you cannot do the browser step. Wrong account, `false` or 403: `gh auth switch --user NAME` (or `gh auth login` as NAME). Then `gh auth setup-git`; tell the participant first that it writes one line, `credential.helper=!gh auth git-credential`, to `~/.gitconfig`, and show `git config --global --list | grep credential` before and after. Proof: login = NAME, push permission `true`, credential line present.
3. Invite. `gh repo view protocolvision/workshop-kitkraft --json name` succeeds. Fix on 404: accept the invite at https://github.com/notifications, retry. Proof: JSON with `"name":"workshop-kitkraft"`.
4. One clone only. `find ~ -maxdepth 4 -type d -name workshop-kitkraft`. Zero results: `gh repo clone protocolvision/workshop-kitkraft`. One: use it. Two or more: for each, `git -C <path> status -sb` and `git -C <path> log origin/BRANCH..HEAD --oneline`; the real one is the one that is not behind and has the participant's commits; rename the others to `<name>-old` (never delete). Then in the real one: `git checkout BRANCH && git pull --rebase origin BRANCH`; if `participants/NAME/` is missing, `cp -R PARTICIPANT_TEMPLATE participants/NAME`. Proof: exactly one clone; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; print its absolute path.
5. At the clone root. If `git rev-parse --show-toplevel` does not equal `pwd`, or the remote does not match (check the remote, never the folder name), stop and say: "Quit me, run `cd <absolute path from check 4>`, start me again, paste this block again." When restarted there: `git branch --show-current` prints BRANCH (else `git checkout BRANCH`); read `AGENTS.md` and state in one line what it says to append after each step. Proof: that line mentions a LOG line with timestamp | session | name | type | text. (Codex: `AGENTS.md` is your file; `CLAUDE.md` is not for you.)
6. Log line. `participants/NAME/LOG.md` exists (it came with the template; if the folder was made by hand or in the GitHub web editor and has no `LOG.md`, copy `PARTICIPANT_TEMPLATE/LOG.md` in — a hand-made inventory counts as the inventory, not as the autolog). Append `<ISO-8601 UTC now> | S1 | NAME | progress | harness opened at the clone root at 1A`. Proof: `tail -1 participants/NAME/LOG.md` shows that line.
7. Push. `git add participants/NAME && git commit -m "S1: NAME: 1A push" && git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Proof: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/LOG.md` shows "1A push". Then tell the participant to say "pushed" in #kitcraft.

Failures:
- username/password prompt → never type a token; the participant runs `gh auth setup-git`; retry 7.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times (everyone on one branch; normal).
- CONFLICT → only possible inside `participants/NAME/`; keep both versions, `git add`, `git rebase --continue`, push.
- `error: src refspec main does not match any` → not on BRANCH or nothing committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- "Permission denied" / 403 → check 3 (invite) or wrong account (check 2): `gh auth switch --user NAME` / `gh auth login`.
- anything else after two attempts → stop, print the exact error for the #kitcraft thread.
Do not: create branches, force-push, edit anything outside `participants/NAME/`, delete anything, store credentials.
Report as a seven-line checklist, PASS/FAIL per check with the proof, then any error text verbatim.
```

## Close (00:28–00:30)
- Rafa reads each report; a FAIL on 7 means Rafa pushes the file under that name and the participant retries the push at the start of S2 (the kit exercise needs it).
- Every fix goes into the facilitator notes with the exact error text; the next cohort's pre-work is built from it.
