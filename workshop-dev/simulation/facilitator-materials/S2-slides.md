# S2 — Factories · slides (60 min, Mon Sep 21, 20:00–21:00 UTC)

Timestamps are minutes from session start. Rafa presents unless marked; Sachin presents the brand-kit case (James is not booked). Screen share in #kafka. Live in the room: ingrid, devr, marisol, tomasr, kwame. Async: aiko.

## Slide 1 — Where we are (00:00)
- S1 awareness check result: N of 6 said *precommodification* (fill from `transcripts/S1/awareness-check.md`)
- Five README drafts pushed since S1; one stub (marisol)
- Tonight: kit → factory. You leave with a kit another agent has tried to run
- Recording on; consent as pinned; breakouts off the record
- Note: this is *not* the kit. A kit is what stays after the agent has failed at it once.
> Speaker note: one sentence per bullet; the room has had three hours, not a night. Sachin confirms "Recording on" in #kitcraft before you start.

## Slide 2 — Book factory, F2F (03:00)
- Rao's manuscript factory → Jenna Dixon's production factory
- Handoff = a shared Dropbox folder + a transmittal server; nothing else
- Two non-coders; **domain knowledge > coding knowledge**
- What flowed was intermediates (manuscript states), not the finished book
- Neither factory changed for the other; the folder layout was the agreement
> Speaker note: this is the shape every bridge tomorrow will have; say "folder + transmittal" twice.

## Slide 3 — Protocolized visual identity (07:00) — Sachin
- TITLES → two narrow models → PI brand kit → Monstrous Times
- One kit, several derived worlds; standards that no longer need to be uniform
- The brand kit is a *factory*: `llms.txt` → `brand.json`, readable by an agent, no human in the loop
- Historical analogue: type foundries sold matrices, not typeset pages
- This is the "different software outcomes" case: the same kit yields different products for different users
> Speaker note: show https://npc.here.now/protocolintstitutebrandkit/ for 30 s, then the repo's `llms.txt`; do not explain the models.

## Slide 4 — Factory = kit + interface (11:00)
- Kit: folder, `SKILL.md`, `README.md`, `examples/` (Agent Skills, open standard)
- Factory: the same kit with an interface someone else's agent can use without you
- The ladder, ascending effort: README a person hands to their agent → static page → MCP → API / A2A
- CMM: Discover → Encode = Kit · Prove = Factory (an interface a stranger can test) · Harvest = Bridge
- Every kit in this repo is rung one. That is enough for tomorrow
> Speaker note: one minute on the ladder, one on the mapping; kwame's S3 question ("what interface for a document?") is answered here: the README *is* the interface.

## Slide 5 — Build the kit (15:00 → 35:00)
- Copy `KIT_TEMPLATE/` to `kits/<you>/` (agent does it); keep your README draft
- `README.md` — human: job, for whom, inputs, outputs, one example run, not-for
- `SKILL.md` — agent: `name`, `description` (the trigger line), when to use, steps, constraints, do-nots
- `examples/` — one input, the output it produced; synthetic or redacted
- **Minute 15 of 20 — comms layer:** cut what adds nothing · remove the AI tells · rewrite the README by hand
- Push at 20:33 (Sachin calls it); unfinished is fine, absent is not
> Speaker note: Rafa calls time at 5, 10, 15 (comms layer), 18 (push). Sachin answers #kitcraft and pushes for anyone whose harness cannot. Private kit (marisol): content stays local, stub README only.

## Slide 6 — Triad critique (35:00 → 48:00, breakouts)
- breakout-1: ingrid reads devr · devr reads marisol (stub) · marisol reads ingrid
- breakout-2: tomasr reads kwame · kwame reads tomasr · aiko's kit read async when it lands
- Your agent reads the target kit cold and runs the example; report in ≤5 lines
- Owner logs every failure as a `blocker` line; no explaining out loud until it is in the kit
- Instructions are pinned in #kitcraft; the text is the facilitator
> Speaker note: Sachin `/stop`s the recorder, posts "rooms open", moves people. Rafa floats breakout-1, Sachin breakout-2, swap at minute 6.

## Slide 7 — What the other agent got wrong (48:00)
- Round, one sentence each, cycle order (≈40 s × 5)
- Sachin captures each sentence into `transcripts/S2/awareness-check.md` alongside the check below
- Expected pattern: it failed where your knowledge was tacit — that is the kit's next line, not a bug
> Speaker note: recorder is back on before the first speaker; wait for the live line in #kitcraft-transcripts.

## Slide 8 — Awareness check (53:00)
- Which quadrant did this hour expand? Precommodification · Traces · Anchored in reality · Playability
- One word each; Sachin tallies in #kitcraft
- Expected: *anchored in reality* — the agent failed exactly where your context was not in the file
> Speaker note: do not lead the answer; the profile in S4 only means something if this is honest.

## Slide 9 — Async 2, overnight (56:00)
- Fix the failure your triad's agent found. Push v2 with a `progress` line saying what changed
- aiko: push your kit; tomasr's agent reads it and posts the report in #kitcraft; you log the blockers and fix
- S3 triads (rotated) posted in #kitcraft at 09:00 UTC; read `facilitator/README.md` for alternative targets
- Tomorrow 15:30 UTC: bridges. Bring the kit you did *not* critique in mind
> Speaker note: Sachin posts this slide's text verbatim to #kitcraft at 20:58 and `/stop`s at 21:00.
