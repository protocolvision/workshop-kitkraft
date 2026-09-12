# Pre-work email — send as registrations arrive, from Tue Sep 15, 2026

To: each registrant (form Q2) · From: Rafa · Cc: Sachin
Subject: AI Kitcraft — your setup before Monday (10 minutes, plus one paste)

---

Hi <first name>,

Thanks for signing up for AI Kitcraft. We're looking forward to working with you on Monday and Tuesday. This email is your pre-work. It's short: one thing to do yourself, one thing to hand to your AI harness, and one decision to make. If anything below doesn't work, the 1A clinic on Monday exists exactly for that, so please don't spend an evening fighting it.

**1. Set up your machine (before Friday, Sep 18)**

The workshop runs through a coding harness, Claude Code or Codex, working inside a shared GitHub repository. For that to work, your computer needs three things installed: `git`, the GitHub command-line tool `gh`, and the harness itself. These installs need your computer password, which is why a harness can't do them for you. The full checklist, with the command for each system and how to check it worked, is here:
https://github.com/protocolvision/workshop-kitkraft/blob/main/workshop-dev/sessions/setup-checklist.md

The short version:

- Install `git` and `gh`. On a Mac, open Terminal and run `xcode-select --install` (a window pops up; accept it and wait), then `brew install gh`, or use the installer at https://cli.github.com/ if you don't have Homebrew. On Windows, install Git for Windows from https://git-scm.com/download/win and then `gh` from https://cli.github.com/.
- Log in to GitHub from the terminal: `gh auth login` (choose GitHub.com, HTTPS, and log in through the browser), then `gh auth setup-git`. Use the GitHub account you gave us on the form.
- Install one harness. Claude Code needs a Claude Pro or Max subscription: https://code.claude.com/docs/en/setup. Codex needs a paid ChatGPT plan: https://learn.chatgpt.com/docs/codex/cli. Either is fine; one is enough.
- Accept the GitHub invitation to https://github.com/protocolvision/workshop-kitkraft. It's in the invite email, or at https://github.com/notifications.

One thing worth knowing for the whole workshop: everything goes straight to the `main` branch. No branches, no pull requests. Your harness has been told this; we'd ask you not to branch by hand either.

**2. Let your harness do the rest**

Once the installs are done, open your harness, paste the block below in full, and say "do this". It checks your setup, creates your folder in the repo, writes a first version of your inventory from three recurring tasks you'll give it, and pushes. It will ask you for the tasks; it shouldn't invent anything. It finishes with a short report and a GitHub link. If it stops with an error, copy the exact text and bring it to 1A.

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

**3. One decision: will your kit be public or private?**

On Monday evening you'll turn one of your recurring tasks into a kit. Public means the kit lives in the shared repo, readable by anyone. Private means the content stays on your own machine and only a stub README (job, inputs, outputs, no content) goes into the repo; on Tuesday, other people's agents reach your kit through you and your agent. There is no separate private repo. Your inventory file is public either way, so "public" there means task names and one-line descriptions, never client names, numbers or data. A good rule: put nothing in a public file you wouldn't put on a public website.

**When**

| Session | Day | UTC | Berlin | Pacific |
|---|---|---|---|---|
| S1 Kits | Mon Sep 21 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| 1A Setup clinic (optional) | Mon Sep 21 | 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Recap | Tue Sep 22 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

If you're outside those zones, S1 starts at 15:30 UTC on Monday Sep 21; this converts it for you: https://www.timeanddate.com/worldclock/fixedtime.html?iso=20260921T1530 (east of UTC+8 that's already Tuesday).

We meet on Discord at https://discord.gg/s2WbZBDqM. Plenary is in the voice channel **#kafka**; links, instructions and the day's pins are in **#kitcraft**; breakouts happen in **breakout-1** to **breakout-5**. The 1A clinic is for anyone whose harness is installed but not behaving: 30 minutes, we fix it together.

**Before Monday, if you can**

Take the AI postures survey (about five minutes) and note your result; we use it in the first round: https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843. Read chapters 1–3 of Durable AI Adoption: https://ai.protocolized.dev/. If you have time for one more piece, "Have Your Factory Call My Factory" sets up Tuesday: https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory

**A note on recording**

Plenary audio in #kafka is recorded and transcribed with speaker names, and the transcripts go into the public repo. Breakouts and the clinic are not recorded. Your harness writes short log lines into public files as it works. If you ever want a line removed, ask either of us and it's done. After the workshop the repo stays public and we post the synthesis in Discord within 48 hours; nothing else is planned with the material.

See you Monday.

Rafa and Sachin
