# Consent notice — AI Kitcraft 2026

Two versions. The short one is read aloud at the top of S1 by Rafa, who opens the room, and repeated in one sentence at the top of S2–S4. The pinned version is Rafa's "Recording Policy FYI" in #workshop-kitkraft (`../planning/discord-pins.md`). Both are on the record; the read-aloud is itself in the S1 transcript.

## Read aloud (about 45 seconds)

"Before we start, the record. This room, #kafka, is being recorded, and so is everything written in #workshop-kitkraft. A bot transcribes the audio with your Discord display name next to what you say, streams the transcript live to #meeting-notes, and after each session the transcript goes into the public workshop repo. Breakout rooms may be recorded too. Your harness writes one-line log entries into the public repo as you work; that is the autolog, and it is part of the record. Anything of yours — a transcript passage, a log line, a file — comes out on request; ask Sachin or me, no reason needed. After the workshop the repo stays public, the synthesis is posted in #workshop-kitkraft, and the recordings may be used for broader synthesis for Symposium write-ups and future research; if you would rather opt out, tell one of us. Put nothing in a public kit that you would not put on a public website. Recording starts now."

## Full notice (pinned)

**What is recorded.** Plenary voice in **#kafka** during the four sessions, and all text written in **#workshop-kitkraft**. Breakout rooms (breakout-1 … breakout-5) may be recorded when a recorder is available for them. Recorded by OpenRecapper, a self-hosted bot run by the Protocol Institute. Per-speaker audio; transcript diarized with Discord display names (Deepgram). An automated summary may be generated from the transcript.

**What is not recorded.** 1A Tech Support. Direct messages.

**Where it goes.**
- Live: #meeting-notes (https://discord.com/channels/1082444651946049567/1519549380791631903), visible to members of this Discord server; it is a shared, already-active channel, so other meetings' transcripts appear there too and ours are marked by the meeting name `KITCRAFT-S<n>`.
- After each session: `workshop-dev/transcripts/S<n>/` in https://github.com/protocolvision/workshop-kitkraft — a public repo, readable by anyone, indexable by search engines and by AI crawlers.
- Your harness's log lines: `participants/<name>/LOG.md`, in the same public repo. Bridge files in `participants/<name>/s3-bridges/` name the people involved.
- After the workshop: the repo stays public; the synthesis (`workshop-dev/transcripts/S4/SYNTHESIS.md`, with the room's awareness profile) is posted in #workshop-kitkraft; and the workshop recordings may be used for broader synthesis for Symposium write-ups and future research. If you would rather opt out of that, tell the facilitators.

**Retention.** Raw audio is pruned by the recorder after 7 days. Transcripts, summaries and log lines are kept indefinitely in the repo unless you ask for removal.

**Removal.** Ask Rafa (@rafa_0x) or Sachin (@sachbenny) in #workshop-kitkraft or by DM, during or after the workshop, no reason required. We remove the line or passage from the current files the same day. Because the repo is git, removed text remains in history until a facilitator rewrites it; say if you want that too and we do it (an admin bypass of the `main` ruleset, noted in `workshop-dev/transcripts/`).

**Opting out without leaving.** Join #kafka muted and use #workshop-kitkraft in text; ask your harness to write no `memory` lines that mention other people; keep any work you would rather not share in a private workspace on your machine and put in the repo only what you are comfortable sharing.

**Private data.** Never put credentials, client names, or anything under NDA into a kit, an example, or a log line. The kit template's `examples/` says "redact"; that is your responsibility, not the bot's. Sanitizing is yours; publishing is ours; deleting is on request.

**For your harness.** Your harness follows `AGENTS.md`; the rules that matter for consent are its Repo hygiene and Workshop autolog sections. Nothing is duplicated here.

**Who to ask.** Rafa runs the repo, the pins, the rooms and the recorder; Sachin presents the theory. Either can act on a removal request.
