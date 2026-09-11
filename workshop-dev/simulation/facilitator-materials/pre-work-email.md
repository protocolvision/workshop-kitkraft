# Pre-work email — as sent Tue Sep 15, 2026

To: all registrants (form Q2) · From: Rafa · Cc: Sachin
Subject: AI Kitcraft — paste this into your harness before Monday

---

Hi,

You are in AI Kitcraft (Sep 21–22, online). This email is written for your AI harness (Claude Code or Codex). Install one, open it, paste **Block A** below, and say "do this". It sets you up and tells you what it did. If you have no GitHub account, paste **Block B** first. Times, the one decision we need from you, and two links are at the end.

**Block A — paste into your harness**

```
You are the participant's harness for the AI Kitcraft workshop (Sep 21–22, 2026). Do the pre-work below for them. Ask them for anything you cannot find; never guess a name or a credential.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=main (dry run only: simulation/dry-run-01)  NAME=<participant's Discord handle without @, lowercase, no spaces; ask if unknown>

Preconditions (check each; if one fails, do the fix and re-check before going on):
- `git --version` works. Fix: macOS `xcode-select --install`; Windows https://git-scm.com/download/win; Debian/Ubuntu `sudo apt install git`.
- `gh --version` works. Fix: macOS `brew install gh`; Windows `winget install GitHub.cli`; Linux https://cli.github.com/.
- `gh auth status` shows a logged-in github.com account. Fix: tell the participant to run `gh auth login` (GitHub.com, HTTPS, login with browser) in a separate terminal; you cannot complete the browser step. Then run `gh auth setup-git`.
- `gh repo view protocolvision/workshop-kitkraft` succeeds. Fix on "not found"/404: the collaborator invite is not accepted; tell the participant to open https://github.com/notifications (or the invite email), accept, then rerun. Stop here if it still fails.

Steps:
1. Clone, unless the current folder already is the clone (`git rev-parse --show-toplevel` ends in `workshop-kitkraft` and `AGENTS.md` mentions "AI Kitcraft"). Command: `gh repo clone protocolvision/workshop-kitkraft` in the participant's home or projects folder. Artifact: folder `workshop-kitkraft/`.
2. If you are not running inside that folder, stop and tell the participant: "cd workshop-kitkraft, then open me again from there, then paste this block again." Everything after this requires being inside the clone.
3. `git checkout BRANCH` and `git pull --rebase origin BRANCH`. Artifact: up-to-date clone.
4. Ask the participant for three recurring tasks from their work that they have done, or tried, with AI. For each, ask two yes/no questions: is it recurring? does doing it well depend on something they know that a stranger would not? Record the answers.
5. Write `inventory/NAME.md` containing: line 1 `# NAME`; a section `## Recurring tasks` with the three tasks and both answers each; a section `## Log` with one line `<ISO-8601 UTC now> | async | NAME | progress | pre-work stub written by harness`. Do not create any other file. Artifact: that file.
6. `git add inventory/NAME.md && git commit -m "async: NAME: pre-work inventory stub"`.
7. `git pull --rebase origin BRANCH && git push origin BRANCH`. Artifact: the commit is on GitHub. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- inventory/NAME.md` shows your commit.

Failures:
- Push asks for a username/password: do not enter anything. Tell the participant to run `gh auth setup-git` in a terminal, then retry step 7.
- Push rejected ("fetch first", "non-fast-forward"): `git pull --rebase origin BRANCH`, then push again; up to 3 tries. If a CONFLICT appears, it can only be in `inventory/NAME.md`; keep both versions' lines, `git add` it, `git rebase --continue`, push.
- "Permission denied" / 403: invite not accepted or wrong account (`gh auth status`). Stop and report.
- Anything else you cannot fix in two attempts: stop, report the exact error text, and say "bring this to the 1A clinic, Mon Sep 21 16:30 UTC, #kafka".

Do not: create branches, force-push, edit any file other than `inventory/NAME.md`, edit `README.md`/`AGENTS.md`/other people's files, store or print tokens, or paste anything private into the file.

Finally, report to the participant in five lines or fewer: what exists on GitHub (link to the file), the three tasks as recorded, and anything still needed from them.
```

**Block B — only if you have no GitHub account yet**

```
You are the participant's harness for the AI Kitcraft workshop. They have no GitHub account. Do this:
1. Tell them to create one at https://github.com/signup (free, five minutes) and to reply to the pre-work email with the username; the facilitators send the repo invite to it. You cannot create the account for them.
2. Meanwhile, do step 4 of Block A (three recurring tasks) and save the result locally as `kitcraft-inventory-draft.md` in the current folder, same format as step 5 of Block A.
3. When the invite arrives, run Block A from the top; in step 5 use the local draft.
4. If no account exists by Mon Sep 21 15:30 UTC: tell them to send `kitcraft-inventory-draft.md` to Sachin in Discord #kitcraft; a facilitator pushes it under their name.
Report: what you saved, where, and the two things the participant must do (sign up, reply with the username).
```

**When (UTC · Berlin · Pacific)**

| Session | Day | UTC | Berlin | Pacific |
|---|---|---|---|---|
| S1 Kits | Mon Sep 21 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| 1A Beginner clinic (optional) | Mon Sep 21 | 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Recap | Tue Sep 22 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

Discord https://discord.gg/s2WbZBDqM: voice **#kafka**, links pinned in **#kitcraft**, breakouts in **breakout-1** and **breakout-2**. No harness by Monday? Come to 1A at 16:30 UTC; 30 minutes, we fix it together.

**One decision: public or private kit.** Public: your kit lives in the repo above, readable by anyone. Private: the content stays on your own machine; only a stub `kits/<your-name>/README.md` (job, inputs, outputs, no content) goes into the public repo, and on Tuesday other people's agents reach your kit through you and your agent. There is no private repo. Either way, put nothing in a public kit you would not put on a public website.

**Also:** take the AI postures survey (5 min) https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843 and note your posture; read Durable AI Adoption ch. 1–3 https://ai.protocolized.dev/. Optional: https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory

**Recording.** Plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into the public repo. Breakouts are not recorded. Your harness writes short log lines into public files. Ask either of us to remove any line at any time.

See you Monday. Rafa and Sachin
