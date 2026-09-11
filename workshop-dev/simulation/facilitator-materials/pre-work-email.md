# Pre-work email — as sent Tue Sep 15, 2026

To: all registrants (form Q2) · From: Rafa · Cc: Sachin
Subject: AI Kitcraft — three things before Monday, plus your times

---

Hi,

You are in AI Kitcraft (Sep 21–22, online). Four short sessions, async work between them. Here are the times, the three things to do before Monday, and one decision.

**When (UTC · Berlin · Pacific)**

| Session | Day | UTC | Berlin | Pacific |
|---|---|---|---|---|
| S1 Kits | Mon Sep 21 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| 1A Beginner clinic (optional) | Mon Sep 21 | 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22 | 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Recap | Tue Sep 22 | 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

Where: Discord https://discord.gg/s2WbZBDqM. Voice channel **#kafka**. Links and instructions are pinned in **#kitcraft**. Breakouts happen in the voice rooms **breakout-1** and **breakout-2**.

**Three things to do before Monday 15:30 UTC**

1. **Install a harness and run one command.** Claude Code or Codex, your choice. Open it, type `hello`, get an answer. That is the whole test. If this fails, come to the 1A clinic on Monday at 16:30 UTC and we fix it together in 30 minutes.

2. **Get into the repo and push once.** You will get a GitHub collaborator invite for https://github.com/protocolvision/workshop-kitkraft today from the username you gave on the form. Accept it, then:
   ```
   git clone https://github.com/protocolvision/workshop-kitkraft.git
   cd workshop-kitkraft
   claude        # or: codex
   ```
   Then ask your harness, in plain words: *"Create `inventory/<my-name>.md` with just my name as the title, commit it, and push."* If it pushes, you are done. If it asks you to log in to GitHub, run `gh auth login` in a terminal and follow the prompts, then ask again. We check on Sep 19 that everyone has one push; anyone without one gets a personal 1A invite.
   Always open the harness *inside* the cloned folder. That is what makes it read the repo's instructions and keep the log for you.

3. **Bring three recurring tasks** from your own work that you have done, or tried, with AI. For each one ask: is it recurring? Does doing it well depend on something you know that a stranger would not? One of these becomes your kit on Monday evening. The one you put on the form is a good first candidate.

**No GitHub account?** Create one at https://github.com/signup (free, five minutes), reply to this email with the username, and we send the invite. If you would rather not, that is fine: bring your files to the 1A clinic or send them to Sachin in #kitcraft and we push under your name.

**Public or private kit — decide now.** Public: your kit lives in the repo above, readable by anyone. Private: the content goes into a collaborators-only repo (`workshop-kitkraft-private`) and only a one-paragraph stub (job, inputs, outputs) goes into the public one. The private repo is not created yet; reply "private" to this email and you get its invite before Monday. Either way, sanitizing is your job: put nothing in a public kit you would not put on a public website.

**Also**
- Take the AI postures survey (5 min): https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843 — note your posture; we use it in the first round on Monday.
- Read Durable AI Adoption, chapters 1–3: https://ai.protocolized.dev/ (PDF: https://ai.protocolized.dev/durable-ai-adoption.pdf).
- Optional: "Have Your Factory Call My Factory": https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory

**Recording.** Plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into the public repo. Breakouts are not recorded. Your harness writes short log lines into public files in the repo. You can ask either of us to remove any line at any time.

See you Monday.

Rafa and Sachin
