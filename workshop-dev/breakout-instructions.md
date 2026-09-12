# Breakout instructions — what Rafa posts in #kitcraft before each breakout

Breakout groups of 2–4 are the unit, sized by the facilitators from headcount (6 → two groups of 3; 10 → five pairs or two 3s + two 2s; 12 → four 3s or three 4s). S2 critique = a ring inside the group: A reads B, B reads C, …, the last reads A; a pair swaps. S3 bridge = each person bridges to the kit they did NOT critique; a pair bridges to the partner's kit or to a facilitator kit. Rooms: breakout-1 … breakout-5, one per group.

Discord's 2000-character limit means each post carries a 5-line human header and a file path; the canonical blocks are `instructions/S2-critique.md` and `instructions/S3-bridge.md` (with the STUB and ABSENT variants inside them) and, for the stub bridge, the two role blocks in `instructions/S3-bridge.md`. The posts below are the human text.

## Post at 20:35 UTC Mon — S2 critique (13 min)

> **Rooms open — 13 minutes. Back in #kafka at 20:48.**
> <one line per room: breakout-1: a reads b · b reads c · c reads a. Stub: "(stub)". Absent: "@x async (see the block's ABSENT variant)".>
> Paste `instructions/S2-critique.md` into your harness with your <name> and <target>; say "do this". It pushes your factory, uses the target through its declared interface (README + SKILL.md, example run cold), gives you a 5-line report on where the interface was insufficient to read aloud, then logs the blockers about your own kit when you say "log mine".
> Nobody explains their kit out loud until the reports are read. A facilitator visits each room once.

Rules the facilitators apply: a stub kit goes to the strongest reader in the breakout group (their agent reports what it would need). A breakout group that has lost a member becomes a pair for the night: the two present read each other; the absent kit is read asynchronously when it lands and the report posted in #kitcraft.

Facilitator sequence: `/stop` → post → move people → Rafa floats the odd rooms, Sachin the even rooms → swap at 20:41 → "Reconvene" at 20:47 → `/record`.

## Post at 15:45 UTC Tue — S3 bridge (40 min)

> **Rooms open — 40 minutes. Back in #kafka at 16:25.**
> Any kit or factory in the repo is a valid target (your harness works out the kind: factory-factory, kit-kit, kit-factory). Default targets (the kit you did not critique): <one line per room: a → c · b → a · c → b; pairs: both → a facilitator kit>. Anyone may switch to `facilitator/rafa/kit/` or `facilitator/sachin/kit/`; say so in your log.
> Paste `instructions/S3-bridge.md` into your harness with your <name> and <target>; say "do this". It creates `participants/<you>/bridges/<target>.md`, asks you for the one thing, works, and stops whenever it needs something not in the repo — get that from the owner next to you, hand it over, it logs the unblock.
> Stub targets: requester and owner also use the blocks in `instructions/S3-bridge.md` (request pushed → owner runs locally → response pushed).
> At 16:15 say "minute 30" to your harness: it stops building and writes the paragraph in your words. Push by 16:23.

Rules the facilitators apply: a pair bridges to the partner's kit or to a facilitator kit; in a group of 3 or 4 nobody gets the kit they critiqued. A room stuck for 5 minutes gets a facilitator, who supplies the missing thing; the participant logs it as `unblock`. Facilitators do not touch participants' files.

Facilitator sequence: `/stop` → post → move people → Rafa odd rooms, Sachin even rooms → swap at 15:55 → "minute 30" post at 16:15 → "Reconvene" at 16:24 → `/record`.

## Hard mode (optional, before S4)

> Rerun your bridge with no human chat. When the harness stops, the answer must go into the repo (target kit or your own), never be said aloud. Log it as a second section in the same file.
