# Discord — pins and session posts for #workshop-kitkraft

Paste-ready. Each block below is one Discord message, under 1,900 characters (Discord's cap is 2,000); the count after each block is an HTML comment. Pins stay light on purpose: anything that can change lives in the repo, and the pins point there. The three pins are Rafa's text, verbatim as he posted them on Discord (2026-09-12); their facts win over any other file. The session posts go up at the times given (they match the run-of-shows in `sessions/`). Rooms assumed: voice #kafka, voice breakout-1 … breakout-5, text #workshop-kitkraft (this channel, https://discord.com/channels/1082444651946049567/1548286831232032778), text #meeting-notes (existing, shared: https://discord.com/channels/1082444651946049567/1519549380791631903).

---

## PIN 1 — Recording Policy FYI

All text in this channel, and audio in #kafka is recorded and transcribed with your Discord display name next to what you say; the transcripts go into the public repo. Breakouts may also be recorded. For the exercises, the guidance asks your harness ("Claude") to write short log lines into public files as it works, and everything in the repo is public. If you ever want a line removed, ask @rafa (UTC+1) or @Sachin and it's done, no reason needed. After the workshop the repo stays public and we post the synthesis here; Workshop recordings may be used for broader synthesis for symposium write-ups and future research. If you'd like to opt-out let us know.

<!-- 659 characters, as posted by Rafa -->

## PIN 2 — Welcome to AI Kitcraft

This is a two-day hands-on workshop where you turn one of your own recurring tasks into a kit another person's agent can use, and then try to bridge it to someone else's.

Everything you need is in the repo: https://github.com/protocolvision/workshop-kitkraft. Start with the README; every instruction you'll need is a file in instructions/ that you paste into your harness and follow with "do this".

Sessions (UTC / Berlin / Pacific):
• S1 Kits — Mon Sep 21 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• 1A Tech Support — Mon · 16:30–17:00 / 18:30–19:00 / 09:30–10:00 [optional]
• S2 Factories — Mon · 20:00–21:00 / 22:00–23:00 / 13:00–14:00
• S3 Bridges — Tue Sep 22 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• S4 Recap — Tue · 20:00–21:00 / 22:00–23:00 / 13:00–14:00

Your local time: https://www.timeanddate.com/worldclock/fixedtime.html?iso=20260921T1530

Rooms: plenary in the voice channel #kafka; everything written here in #workshop-kitkraft; the live transcript in #meeting-notes (shared with other meetings); breakouts in breakout-1 to breakout-5.

Groups for each breakout are posted here before it starts. Questions, stuck installs, anything at all: ask here and tag @rafa (UTC+1) or @Sachin.

<!-- 1204 characters, as posted by Rafa -->

## PIN 3 — Quick Set-Up Pre-Workshop

Three things need to be on your machine before Monday; each needs your password or a browser login, so it's you, not your harness:

1. Git — your AI assistant uses it to contribute to the workshop folder.

2. The GitHub CLI gh — logs you in to where the workshop docs are (github) and hands git your credentials (gh auth login, then gh auth setup-git).

3. One AI Assistant (a.k.a. "Harness") — Claude Code (paid Claude plan) or Codex (paid ChatGPT plan).

Commands per system and how to check each one: https://github.com/protocolvision/workshop-kitkraft/blob/main/workshop-dev/sessions/setup-checklist.md

Then paste the block from the pre-work email (will be sent) into your harness and say "do this"; it tests your first push. If it doesn't behave, bring the exact error to the 1A clinic, Monday 16:30 UTC in #kafka.

<!-- 820 characters, as posted by Rafa -->

---

## POSTS (not pinned)

### Session open — template (at the start of S1–S4)

`<Sn>` starts now in #kafka. Recording on (KITCRAFT-`<Sn>`); the live transcript is in #meeting-notes. Have your harness open at the clone root; today's instruction files are in `instructions/` and I'll name them as we go.

<!-- 222 characters -->

### S1 exercise (Mon Sep 21, 16:05 UTC)

Your inventory. Open your harness at the clone root, paste `instructions/S1-inventory.md` (Block 1), say "do this". It asks you for what it needs and pushes. At 16:18 I'll say when to paste Block 2 from the same file. If a push fails, post the error here.

<!-- 255 characters -->

### Async 1 (Mon Sep 21, 16:32 UTC)

Recording off. Before S2 at 20:00 UTC: open your harness at the clone root, paste `instructions/async-1.md`, say "do this". Ten minutes. The S2 groups will be posted here by 16:45. 1A is in #kafka now for anyone whose harness is misbehaving.

<!-- 241 characters -->

### S2 groups and critique (Mon Sep 21, 16:45 UTC groups; 20:35 UTC rooms open)

Groups for tonight's breakout:
• breakout-1: `<names>`
• breakout-2: `<names>`
• breakout-3: `<names>`
At 20:35, rooms open for 13 minutes; back in #kafka at 20:48. In your room: open your harness at the clone root, paste `instructions/S2-critique.md`, say "do this". It tells you who you read and what to do.

<!-- 309 characters -->

### Async 2 (Mon Sep 21, 20:58 UTC)

Recording off. Before S3 at 15:30 UTC tomorrow: open your harness at the clone root, paste `instructions/async-2.md`, say "do this". The S3 groups will be posted here by 09:00 UTC.

<!-- 180 characters -->

### S3 groups and bridge (Tue Sep 22, 09:00 UTC groups; 15:45 UTC rooms open)

Groups for the S3 breakout, same rooms:
• breakout-1: `<names>` — targets `<name → name>`
• breakout-2: `<names>` — targets `<name → name>`
• breakout-3: `<names>` — targets `<name → name>`
At 15:45, rooms open for 40 minutes; back in #kafka at 16:25. In your room: open your harness at the clone root, paste `instructions/S3-bridge.md`, say "do this". It asks you for the one thing it needs from you.

<!-- 401 characters -->

### S3 close and Async 3 (Tue Sep 22, 16:29 UTC)

Recording off. Finish your bridge file and push by 20:00 UTC; your harness knows how. S4 at 20:00 UTC in #kafka: 90 seconds per bridge, then what you wrote against one hypothesis.

<!-- 179 characters -->

### S4 close (Tue Sep 22, 21:00 UTC)

Recording off, and that's the workshop. The synthesis is in the repo at `workshop-dev/transcripts/S4/SYNTHESIS.md`; a revised version with tonight's transcript folded in follows here within 48 hours. The repo stays public. Thank you all.

<!-- 237 characters -->
