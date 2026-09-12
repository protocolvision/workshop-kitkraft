# Pre-work email — send as registrations arrive, from Tue Sep 15, 2026

To: each registrant (form Q2) · From: Rafa · Cc: Sachin
Subject: AI Kitcraft — one thing to do yourself, then paste this into your harness

---

Hi,

You are in AI Kitcraft (Sep 21–22, online). Two things before Monday. **Item 0** you do yourself; it needs your computer password and no AI harness can do it. Then you open your harness, paste **Block A**, and say "do this": it sets you up, writes your first file, pushes it and reports. If the harness is not working by Friday, come to 1A (Mon Sep 21, 16:30 UTC, #kafka). Times, the one decision we need from you, and the links are at the end.

**Item 0 — before Friday Sep 18, done by you (needs your computer password; a harness cannot do this)**

Three must-haves: `git`, the GitHub CLI `gh`, and one harness (Claude Code or Codex). The full checklist — what each is for, the install command per system, and how to verify — is https://github.com/protocolvision/workshop-kitkraft/blob/main/workshop-dev/sessions/setup-checklist.md. In short:

1. Install `git` and `gh` (the GitHub command-line tool).
   - macOS: open Terminal, run `xcode-select --install` (installs git; a window appears, accept it, wait) and then `brew install gh` — or, if you have no Homebrew, the gh installer at https://cli.github.com/.
   - Windows: Git for Windows https://git-scm.com/download/win, then the gh installer at https://cli.github.com/.
2. In a terminal run `gh auth login` — choose GitHub.com, HTTPS, log in with the browser — then `gh auth setup-git`. Log in as the GitHub account you gave on the form.
3. Install a harness. Claude Code needs a Claude Pro or Max subscription: https://docs.claude.com/en/docs/claude-code. Codex needs a ChatGPT plan: https://developers.openai.com/codex/cli. One is enough.
4. Accept the GitHub invite to https://github.com/protocolvision/workshop-kitkraft (in the invite email or at https://github.com/notifications).

**For you, not your harness:** everything goes straight to `main`. No branches, no pull requests. Your harness knows this; please do not branch yourself either.

**Block A — paste into your harness, then say "do this"**

```
You are the participant's harness for the AI Kitcraft workshop (Sep 21–22, 2026). Do the pre-work below for them. Ask them for anything you cannot find; never guess a name, a task, or a credential.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions (check each; if one fails, do the fix and re-check before going on):
- `git --version` and `gh --version` print versions. If either fails: STOP; the participant must do Item 0 of the email themselves (it needs their computer password). Do not try to install them.
- `gh api user --jq .login` prints NAME (compare case-insensitively). If it prints another name or fails: STOP; tell the participant "run `gh auth login` as NAME in a terminal, then say continue". When it matches, run `gh auth setup-git` yourself (it asks for nothing).
- `gh repo view protocolvision/workshop-kitkraft --json name` succeeds. On 404: the invite is not accepted; tell the participant to accept it at https://github.com/notifications, then retry.

Steps:
1. Are you at the clone root? Yes when `git rev-parse --show-toplevel` succeeds and equals `pwd`, AND `git remote get-url origin` contains `workshop-kitkraft`. Never test the folder name. If the toplevel differs from `pwd`, `cd` to it. If yes, go to step 3.
2. If not: if a folder `workshop-kitkraft` exists in the current folder and its remote matches, `cd` into it; otherwise `gh repo clone protocolvision/workshop-kitkraft` here, then `cd workshop-kitkraft`. Continue in this same run; do not ask the participant to paste again.
3. `git checkout BRANCH && git pull --rebase origin BRANCH`. Your folder: if `participants/NAME/` does not exist, `cp -R PARTICIPANT_TEMPLATE participants/NAME`. Stay at the clone root. Read `AGENTS.md`; follow it for everything below: you write only inside `participants/NAME/`, read anywhere. In the report, tell the participant to open the harness at the clone root (the folder that contains `AGENTS.md`) from now on. Artifact: an up-to-date clone and your folder.
4. If `participants/NAME/inventory.md` already exists on BRANCH with three tasks in it: report "already done" with its GitHub link and stop.
5. The three recurring tasks. Ask the participant for three recurring tasks from their work that they have done, or tried, with AI. If they have not given them to you in this conversation: STOP and ask, one at a time. Never draft, invent, or complete a task yourself. For each, ask two yes/no questions and record the answers in their words: is it recurring? does doing it well depend on something they know that a stranger would not? (one line why).
6. Ask: will the kit be public or private? Public = the kit content goes into the public repo, readable by anyone; private = the content stays on this machine and only a stub README goes into the repo. If they do not know yet, record `undecided`; do not choose for them.
7. Write `participants/NAME/inventory.md` with exactly the sections of `participants/README.md`: line 1 `# NAME`; `## Recurring tasks` (the three, numbered, both answers each); `## Built / use` (leave empty or `none`); `## Kit` (`Public`, `Private` or `undecided`; the task is chosen in S1); `## Posture` (empty). Then append to `participants/NAME/LOG.md`: `<ISO-8601 UTC now> | async | NAME | progress | pre-work inventory written by harness`. Do not create any other file. Artifact: that file, 10–25 lines, and the log line.
8. `git add participants/NAME && git commit -m "async: NAME: pre-work inventory"` (the whole folder, the first time).
9. `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/inventory.md` shows your commit. Artifact: the file on GitHub.
10. Append further autolog lines as AGENTS.md says if you do anything else in the repo; one extra commit is fine.

Failures:
- Push asks for a username/password: type nothing. Tell the participant to run `gh auth setup-git` in a terminal, then retry step 9.
- Push rejected ("fetch first", "non-fast-forward"): `git pull --rebase origin BRANCH`, then push again; up to 3 tries. If a CONFLICT appears, it can only be inside `participants/NAME/`: keep both versions' lines, `git add` it, `git rebase --continue`, push.
- "Permission denied" / 403: invite not accepted, or the wrong account (`gh api user --jq .login`). STOP and report which.
- Anything else you cannot fix in two attempts: STOP, report the exact error text, and say "bring this to the 1A clinic, Mon Sep 21, 16:30 UTC, #kafka".

Do not: create branches, force-push, edit anything outside `participants/NAME/` (`README.md`, `AGENTS.md`, other people's folders), store or print tokens, or put anything private into the file.

Report to the participant in five lines or fewer: the GitHub link of the file, the three tasks as recorded, public/private as recorded, the folder to open the harness in from now on, and anything still needed from them.
```

**If the harness is not working by Friday:** come to 1A (Mon Sep 21, 16:30 UTC, #kafka, 30 minutes) with the exact error text; that is the one fallback. Everyone in the workshop has a harness and a GitHub account.

**When (UTC · Berlin · Pacific)**

| Session | Day | UTC | Berlin | Pacific |
|---|---|---|---|---|
| S1 Kits | Mon Sep 21 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| 1A Beginner clinic (optional) | Mon Sep 21 | 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Recap | Tue Sep 22 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

Your local time: S1 = 15:30 UTC on Monday Sep 21; convert it here: https://www.timeanddate.com/worldclock/fixedtime.html?iso=20260921T1530 (east of UTC+8 it is already Tuesday).

Discord https://discord.gg/s2WbZBDqM: voice **#kafka**, links and instructions pinned in **#kitcraft**, breakouts in **breakout-1 … breakout-5**. Harness installed but not working? Come to 1A at 16:30 UTC Monday; 30 minutes, we fix it together.

**One decision: public or private kit.** Public: your kit lives in the repo above, readable by anyone. Private: the content stays on your own machine; only a stub `participants/<name>/kit/README.md` (job, inputs, outputs, no content) goes into the public repo, and on Tuesday other people's agents reach your kit through you and your agent. There is no private repo. Either way, your inventory file is public: "public" there means task names and one-line descriptions, never client names, numbers or data. Put nothing in a public file you would not put on a public website.

**Also:** take the AI postures survey (5 min) https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843 and note your posture; read Durable AI Adoption ch. 1–3 https://ai.protocolized.dev/. Optional: https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory

**Recording.** Plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into the public repo. Breakouts and 1A are not recorded. Your harness writes short log lines into public files. Ask either of us to remove any line at any time. After the workshop the repo stays public and the synthesis is posted in Discord within 48 hours; nothing else is planned.

See you Monday. Rafa and Sachin
