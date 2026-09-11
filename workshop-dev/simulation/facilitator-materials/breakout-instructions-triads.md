# Breakout instructions — triads (what Sachin posts in #kitcraft; the harness blocks live in `instructions/`)

Rewritten from `workshop-dev/breakout-instructions.md` (pairs) for two triads and 60-minute slots, then rewritten again to the agent-actionable standard (checkpoint 1): the participant pastes a file into their harness and says "do this". Discord's 2000-char limit means the posts below carry a 5-line human header and the file path; the canonical blocks are `instructions/S2-critique.md` and `instructions/S3-bridge.md` (with the stub and absence variants inside them) and, for the stub bridge, the two role blocks in `bridges/README.md`. Cycle: A reads B, B reads C, C reads A; S3 reversed, so you bridge to the kit you did not critique.

## Post at 20:35 UTC Mon — S2 critique (13 min)

> **Rooms open — 13 minutes. Back in #kafka at 20:48.**
> breakout-1: ingrid reads devr · devr reads marisol (stub) · marisol reads ingrid
> breakout-2: tomasr reads kwame · kwame reads tomasr · aiko async (see the block's ABSENT variant)
> Paste `instructions/S2-critique.md` into your harness with your <name> and <target>; say "do this". It pushes your kit, reads the target cold, gives you a 5-line report to read aloud, then logs the blockers about your own kit when you say "log mine".
> Nobody explains their kit out loud until the reports are read. A facilitator visits each room once.

Facilitator sequence: `/stop` → post → move people → Rafa breakout-1, Sachin breakout-2 → swap at 20:41 → "Reconvene" at 20:47 → `/record`.

## Post at 15:45 UTC Tue — S3 bridge (40 min)

> **Rooms open — 40 minutes. Back in #kafka at 16:25.**
> Targets (the kit you did not critique): ingrid → marisol (stub) · devr → ingrid · marisol → devr · tomasr → `facilitator/sachin-kit/` · aiko → tomasr · kwame → aiko. Anyone may switch to `facilitator/rafa-kit/` or `sachin-kit/`; say so in your log.
> Paste `instructions/S3-bridge.md` into your harness with your <name> and <target>; say "do this". It creates `bridges/<you>-<target>.md`, asks you for the one thing, works, and stops whenever it needs something not in the repo — get that from the owner next to you, hand it over, it logs the unblock.
> ingrid and marisol: also use the requester / owner blocks in `bridges/README.md` (request pushed → owner runs locally → response pushed).
> At 16:15 say "minute 30" to your harness: it stops building and writes the paragraph in your words. Push by 16:23.

Facilitator sequence: `/stop` → post → move people → Rafa breakout-1, Sachin breakout-2 → swap at 15:55 → "Reconvene" at 16:24 → `/record`.

## Hard mode (optional, before S4)

> Rerun your bridge with no human chat. When the harness stops, the answer must go into the repo (target kit or your own), never be said aloud. Log it as a second section in the same file.
