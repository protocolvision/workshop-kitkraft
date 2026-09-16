# Pre-work email — send as registrations arrive, from Tue Sep 15, 2026

To: each registrant (form Q2) · From: Rafa · Cc: Sachin
Subject: AI Kitcraft — 15 minutes of setup before Monday

---

Hi <first name>,

Thanks for signing up for AI Kitcraft. Three things before Monday: install a few tools, say hello on Discord, and give your AI assistant one paste. About fifteen minutes in total. If any of it fights you, come to Tech Support on Monday rather than losing an evening to it.

**1. Install three things (by Friday, Sep 18)**

The workshop runs through an AI assistant, Claude Code or Codex, working in a shared GitHub repository. So your computer needs:

- **git** and the GitHub tool **gh**. On a Mac: `xcode-select --install`, then `brew install gh`, or the installer at https://cli.github.com/. On Windows: https://git-scm.com/download/win, then the same gh installer.
- **One AI assistant.** Claude Code needs a paid Claude plan (https://code.claude.com/docs/en/setup); Codex needs a paid ChatGPT plan (https://learn.chatgpt.com/docs/codex/cli). Either is fine.
- **Your GitHub login on this machine:** `gh auth login`, then `gh auth setup-git`. Use the account you gave us on the form, and accept the repo invitation we sent: https://github.com/protocolvision/workshop-kitkraft

These need your computer password, which is why your assistant can't do them for you. Commands for every system, and how to check each one worked: https://github.com/protocolvision/workshop-kitkraft/blob/main/workshop-dev/sessions/setup-checklist.md

**2. Say hello on Discord**

Join at https://discord.gg/s2WbZBDqM and post a hello in #workshop-kitkraft: https://discord.com/channels/1082444651946049567/1548286831232032778. Pins, session instructions and group lists all live there. Stuck on anything, including the step below? Ask there and tag Rafa (@rafa_0x) or Sachin (@sachbenny).

**3. Give your assistant this paste**

Open your AI assistant and paste the block below, then say "do this". It sets up your folder in the repo and asks you about the AI setups you already use at work: the prompts, projects and documents you have bent to your own jobs. Anything counts, however small. It won't invent anything, and it finishes with a link and a short report. If it stops with an error, copy the exact text into Discord or bring it to Tech Support.

```
You are the participant's AI assistant for the AI Kitcraft workshop (Sep 21–22, 2026). Do their pre-work. Never guess a name, a kit, or a credential; ask.
Settings: REPO=https://github.com/protocolvision/workshop-kitkraft  NAME=<the participant's GitHub username, lowercase; ask if unknown>

1. Find or clone the repo. `find ~ -maxdepth 4 -type d -name workshop-kitkraft`: one result whose `git remote get-url origin` contains `protocolvision/workshop-kitkraft`, `cd` into it; no result, run `gh repo clone protocolvision/workshop-kitkraft` here and `cd` into it; two or more, STOP, list them, and tell the participant to bring it to Tech Support.
2. Read `instructions/orient.md` and follow the block inside it exactly, in this same run. It checks the setup, makes the participant's folder and makes the first push.
3. Read `instructions/S1-inventory.md` and follow Block 1 only. It asks the participant about the AI kits they already use and writes their inventory. Ask about one kit at a time, record their words, and invent nothing; if they have none, record `none yet`.
4. Report in five lines: what step 2 reported, the GitHub link to the inventory, the folder to open your assistant in from now on, and anything still needed from them.
```

Everything in the repo is public, including your inventory. If you want to keep some work private, keep it on your own machine and put in only what you're comfortable sharing. One habit for the whole workshop: work goes straight to the `main` branch, so please don't create branches by hand.

**When**

| Session | Day | UTC | Berlin | Pacific |
|---|---|---|---|---|
| S1 Kits | Mon Sep 21 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| Tech Support (optional) | Mon Sep 21 | 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Show and tell | Tue Sep 22 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

Elsewhere in the world? S1 starts 15:30 UTC on Monday Sep 21: https://www.timeanddate.com/worldclock/fixedtime.html?iso=20260921T1530 (east of UTC+8 it is already Tuesday). We meet by voice in **#kafka**, break out into **breakout-1** to **breakout-5**, and write everything in **#workshop-kitkraft**.

**If you have time**

The AI postures survey takes five minutes and we use it in the first round: https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843. Chapters 1–3 of Durable AI Adoption are the background: https://ai.protocolized.dev/

**Recording**

Plenary audio in #kafka and everything written in #workshop-kitkraft is recorded and transcribed with speaker names, and goes into the public repo. Breakouts may be recorded; Tech Support is not. Your assistant writes short log lines into public files as it works. Want a line removed? Ask either of us, no reason needed. Afterwards the repo stays public, we post a summary in #workshop-kitkraft, and the recordings may feed Symposium write-ups and later research. Tell us if you'd rather opt out.

See you Monday.

Rafa and Sachin
