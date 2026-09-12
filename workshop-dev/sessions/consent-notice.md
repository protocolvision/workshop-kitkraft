# Consent notice — AI Kitcraft 2026

Two versions. The short one is read aloud at the top of S1 by Sachin, who opens the room, and repeated in one sentence at the top of S2–S4. The full one is the second pin in #kitcraft (`../discord-pins.md`). Both are on the record; the read-aloud is itself in the S1 transcript.

## Read aloud (about 45 seconds)

"Before we start, the record. This room, #kafka, is being recorded. A bot transcribes it with your Discord display name next to what you say, streams the transcript live to #kitcraft-transcripts, and after each session the transcript goes into the public workshop repo. Breakout rooms are not recorded. Your harness writes one-line log entries into the public repo as you work; that is the autolog, and it is part of the record too. Anything of yours — a transcript passage, a log line, a file — comes out on request; ask Rafa or me, no reason needed. If you would rather not be on the recording, stay muted and use #kitcraft; you lose nothing. The audio is deleted after seven days; the text stays. Put nothing in a public kit that you would not put on a public website. Questions go to #kitcraft. Recording starts now."

## Full notice (pinned)

**What is recorded.** Plenary voice in **#kafka** during the four sessions. The 1A clinic is not recorded. Recorded by OpenRecapper, a self-hosted bot run by the Protocol Institute. Per-speaker audio; transcript diarized with Discord display names (Deepgram). An automated summary may be generated from the transcript.

**What is not recorded.** The 1A clinic and the breakout rooms (breakout-1 … breakout-5). Direct messages. This text channel is public to the server but is not copied into the repo.

**Where it goes.**
- Live: #kitcraft-transcripts, visible to members of this Discord server.
- After each session: `workshop-dev/transcripts/S<n>/` in https://github.com/protocolvision/workshop-kitkraft — a public repo, readable by anyone, indexable by search engines and by AI crawlers.
- Your harness's log lines: `participants/<name>/LOG.md`, in the same public repo. Bridge files in `participants/<name>/bridges/` name the people involved.
- After the workshop: two things and nothing else. The repo stays public, and the synthesis (`workshop-dev/transcripts/S4/SYNTHESIS.md`, with the room's awareness profile) is posted in Discord within 48 hours. No further use of the material is planned; any new use would need a new notice.

**Retention.** Raw audio is pruned by the recorder after 7 days. Transcripts, summaries and log lines are kept indefinitely in the repo unless you ask for removal.

**Removal.** Ask either facilitator (@rafa, @sachin) in #kitcraft or by DM, during or after the workshop, no reason required. We remove the line or passage from the current files the same day. Because the repo is git, removed text remains in history until a facilitator rewrites it; say if you want that too and we do it (an admin bypass of the `main` ruleset, noted in `workshop-dev/transcripts/`).

**Opting out without leaving.** Join #kafka muted and use #kitcraft in text; ask your harness to write no `memory` lines that mention other people; choose a private kit (stub README only in the public repo).

**Private data.** Never put credentials, client names, or anything under NDA into a kit, an example, or a log line. The kit template's `examples/` says "redact"; that is your responsibility, not the bot's. Sanitizing is yours; publishing is ours; deleting is on request.

**For your harness** (this block is also in `AGENTS.md`; paste it if your harness did not read that file):

```
You are the participant's harness. Consent rules for everything you write in this repo:
- You may log: what was done, decisions, learnings, blockers, questions, unblocks — one line each, in `LOG.md` files and bridge logs, per `AGENTS.md`.
- Never log or commit: credentials, tokens, client or funder names, personal data about other people, NDA material, or the content of a private kit. If the participant pastes such a thing, do not write it; say why.
- Never delete or rewrite a log line or transcript passage, even when asked. Removal is a facilitator's action: tell the participant to ask @rafa or @sachin in #kitcraft, which they may do at any time without giving a reason.
- Plenary voice is recorded and transcribed to `workshop-dev/transcripts/`; breakouts and 1A are not. Do not transcribe breakout audio yourself.
Report to the participant anything you refused to write and why.
```

**Who to ask.** @sachin owns the repo, the pins and the recorder; the two facilitators split the presenting. Either can act on a removal request.
