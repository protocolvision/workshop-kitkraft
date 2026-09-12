# 1A — Beginner clinic, 30 min (Mon Sep 21, 16:30–17:00 UTC, #kafka, not recorded)

Lead: Rafa. Sachin in #kitcraft for pushes. Expected: Ingrid (no harness before S1), Kwame (Codex opened outside the clone, no autolog), Aiko (no harness), Marisol (does not trust push). Exit, per person: the harness reports all seven checks below as passed. Everything after "Before the harness exists" is one pasteable block; the participant pastes it and says "do this", Rafa reads the report.

## Before the harness exists (human, 00:00–00:08)
- Say the failed step in one sentence; Sachin opens a #kitcraft thread per person for pasted errors.
- No harness: Claude Code `curl -fsSL https://claude.ai/install.sh | bash`; Codex `npm i -g @openai/codex`. The vendor page wins if it disagrees. Org-managed laptop with no install rights: personal laptop, or the fallback at the end.
- Open a terminal in the home folder and start the harness (`claude` or `codex`). Then paste the block. Rafa says commands; participants type. Nobody types on someone else's machine.

## Block — paste into the harness (00:08–00:28)

```
You are the participant's harness at the AI Kitcraft 1A clinic. Run these seven checks in order; each has a command and a proof. Fix what fails, then re-check. Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=<output of `git branch --show-current` once inside the clone; this dry run: simulation/dry-run-01>  NAME=<Discord handle without @, lowercase; ask if unknown>.
Step 0, always: run `pwd`. It must end in `participants/NAME` (NAME = the participant's folder name; ask if unknown). If it does not, `cd` to `<repo root>/participants/NAME`; if that folder does not exist, copy `PARTICIPANT_TEMPLATE/` to `participants/NAME/` first, then cd into it. Paths below are written from the repo root.

1. Tools. `git --version` and `gh --version` print versions. Fix: git — macOS `xcode-select --install`, Windows https://git-scm.com/download/win, Debian/Ubuntu `sudo apt install git`; gh — macOS `brew install gh` (no `brew`? Homebrew first, one-liner from https://brew.sh, needs the Mac login password, 5–8 min, then its two "Next steps" PATH lines) / Windows `winget install GitHub.cli` / https://cli.github.com/. Proof: both versions printed.
2. Login. `gh auth status` shows a logged-in github.com user and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. Fix: participant runs `gh auth login` (GitHub.com, HTTPS, browser) in another terminal; you cannot do the browser step. Two accounts / 403: `gh auth switch --user <registered account>`. Then `gh auth setup-git`; tell the participant first that it writes one line, `credential.helper=!gh auth git-credential`, to `~/.gitconfig`, and show `git config --global --list | grep credential` before and after. Proof: push permission `true` and the credential line present.
3. Invite. `gh repo view protocolvision/workshop-kitkraft --json name` succeeds. Fix on 404: accept the invite at https://github.com/notifications, retry. Proof: JSON with `"name":"workshop-kitkraft"`.
4. Clone. First `find ~ -maxdepth 3 -type d -name 'workshop-kitkraft*'`. Zero results: `gh repo clone protocolvision/workshop-kitkraft`. One: use it. Two or more: for each, `git -C <path> status -sb` and `git -C <path> log origin/BRANCH..HEAD --oneline`; the real one is the one that is not behind and has the participant's commits; rename the others to `<name>-old` (never delete). Then in the real one: `git checkout BRANCH && git pull --rebase origin BRANCH`. Proof: exactly one clone, `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; print its absolute path.
5. Inside the clone. If the folder you were started in is not the clone (check the remote, not the folder name), stop and say: "Quit me, run `cd <absolute path from check 4>`, start me again, paste this block again." When restarted inside: read `AGENTS.md` and state in one line what it says to append after each step. Proof: that line mentions a LOG line with timestamp | session | name | type | text. (Codex: `AGENTS.md` is your file; `CLAUDE.md` is not for you.)
6. Log line. Ensure `participants/NAME/` exists (copy `PARTICIPANT_TEMPLATE/` if not) and `participants/NAME/LOG.md` exists (create from `PARTICIPANT_TEMPLATE/LOG.md`; if `inventory.md` exists without a `## Log` section — a file made in the GitHub web editor — keep it as is and add the section: a hand-made file counts as the inventory, not as the autolog). Append `<ISO-8601 UTC now> | S1 | NAME | progress | harness opened inside clone at 1A`. Proof: `tail -1 participants/NAME/LOG.md` shows that line.
7. Push. `git add participants/NAME && git commit -m "S1: NAME: 1A push" && git pull --rebase origin BRANCH && git push origin BRANCH`. Proof: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/inventory.md` shows "1A push". Then tell the participant to say "pushed" in #kitcraft.

Failures: username/password prompt → never type a token; participant runs `gh auth setup-git`, retry 7. "! [rejected]" / "fetch first" / "non-fast-forward" → `git pull --rebase origin BRANCH`, push again, up to 3 times (six people on one branch; normal). CONFLICT → only possible in `participants/NAME/inventory.md`; keep both versions, `git add`, `git rebase --continue`, push. "Permission denied"/403 → check 3 or wrong account in `gh auth status`. Anything else after two attempts → stop, print the exact error for the #kitcraft thread.
Do not: create branches, force-push, edit any file outside `participants/NAME/`, delete anything, store credentials.
Report as a seven-line checklist, PASS/FAIL per check with the proof, then any error text verbatim.
```

## Close (00:28–00:30)
- Rafa reads each report; a FAIL on 7 means Sachin pushes the file under that name and the participant retries the push at the start of S2 (the kit exercise needs it).
- Every fix goes into `observations/rafa.md` with the exact error text; next cohort's pre-work is built from it.
