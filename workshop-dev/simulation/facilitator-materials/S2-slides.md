# S2 — Factories · slides (60 min, Mon Sep 21, 20:00–21:00 UTC)

Timestamps are minutes from session start. Presenter on each heading (checkpoint-1 split: Sachin opens; kit-phase, precommodification, brand kit, comms layer, rooms and close → Sachin; F2F case, factory = kit + interface, ladder, build briefing → Rafa). Sachin screen-shares throughout; the presenter talks. Live: ingrid, devr, tomasr, marisol — four, in two pairs (Kwame and Aiko withdrew Monday).

## Slide 1 — Where we are (00:00) (presenter: Sachin)
- Recording on; consent as pinned; breakouts off the record
- S1 awareness check: anchored 3, traces 2, precommodification 1 — not the expected winner (`workshop-dev/transcripts/S1/awareness-check.md`)
- Four of us tonight (Kwame and Aiko withdrew; their inventories stay); three README drafts and one stub (marisol, content on her machine)
- Kit time is carnival time: three hours ago these were tasks in your head; tonight they become things a stranger's agent can fail at
- A kit is what stays after the agent has failed at it once
> Speaker note: one sentence per bullet; the room has had three hours, not a night. Confirm "Recording on" in #kitcraft first.

## Slide 2 — Book factory, F2F (03:00) (presenter: Rafa)
- Rao's manuscript factory → Jenna Dixon's production factory
- Handoff = a shared Dropbox folder + a transmittal server; nothing else
- Two non-coders; **domain knowledge > coding knowledge**
- Intermediates flowed (manuscript states), not the finished book
- Neither factory changed for the other; the folder layout was the agreement
> Speaker note: this is the shape every bridge tomorrow will have; say "folder + transmittal" twice.

## Slide 3 — Protocolized visual identity (07:00) (presenter: Sachin)
- TITLES → two narrow models → PI brand kit → Monstrous Times; Jamverse as the fiction-side sibling
- One kit, several derived worlds: standards that no longer need to be uniform
- The brand kit is already a factory: `llms.txt` → `brand.json`, readable by an agent, no human in the loop
- Type foundries sold matrices, not typeset pages; the kit is the matrix
- The idea you had is already in the archive; provenance, not novelty, is what your kit adds
> Speaker note: show the brand kit page 30 s, then `llms.txt`; do not explain the models.

## Slide 4 — Factory = kit + interface (11:00) (presenter: Rafa)
- Kit: folder, `SKILL.md`, `README.md`, `examples/` (Agent Skills, open standard)
- Factory: the same kit with an interface someone else's agent can use without you
- The ladder, ascending effort: README handed to an agent → static page → MCP → API / A2A
- CMM: Discover → Encode = Kit · Prove = Factory · Harvest = Bridge
- Every kit in this repo is rung one; the template now has an `Interface:` line — write "file handoff"
> Speaker note: answers the recurring question: for a document kit, the README *is* the interface.

## Slide 5 — Build the kit (15:00 → 35:00) (presenter: Rafa; comms layer at 30:00: Sachin)
- copy `PARTICIPANT_TEMPLATE/` to `participants/<name>/`; keep your README draft
- `README.md` — job, for whom, inputs, outputs, interface, one example run, not-for
- `SKILL.md` — `name`, `description` (the trigger line), when to use, steps, constraints, do-nots
- `examples/` — one input, the output it produced; synthetic or redacted
- **30:00, Sachin — comms layer:** cut what adds nothing · remove the AI tells · rewrite the README by hand
- Push at 33:00; unfinished is fine, absent is not
> Speaker note: Rafa calls 5, 10 min; Sachin takes over at 15 for the comms rules, calls "push" at 18. Private kit (marisol): content local, stub only.

## Slide 6 — Pair critique (35:00 → 48:00, breakouts) (presenter: Sachin)
- breakout-1: ingrid reads devr · devr reads ingrid
- breakout-2: tomasr reads marisol (stub) · marisol reads tomasr
- Your agent reads the target cold and runs the example; report in ≤5 lines
- Owner logs every failure as a `blocker` line; no explaining out loud until it is in the kit
- Instructions pinned in #kitcraft; the text is the facilitator
> Speaker note: `/stop`, post "rooms open", move people. Rafa floats breakout-1, Sachin breakout-2, swap at minute 6.

## Slide 7 — What the other agent got wrong (48:00) (presenter: Sachin)
- Round, one sentence each (≈40 s × 4)
- Captured into `workshop-dev/transcripts/S2/awareness-check.md` alongside the check below
- Expected: it failed where your knowledge was tacit — that is the kit's next line, not a bug
> Speaker note: recorder back on before the first speaker; wait for the live line.

## Slide 8 — Awareness check (53:00) (presenter: Sachin)
- Which quadrant did this hour expand? Precommodification · Traces · Anchored in reality · Playability
- One word each; tallied in #kitcraft
- Expected: *anchored in reality* — the agent failed exactly where your context was not in the file
> Speaker note: do not lead the answer; the S4 profile only means something if this is honest.

## Slide 9 — Async 2, overnight (56:00) (presenter: Sachin)
- Fix the failure your partner's agent found. Push v2 with a `progress` line saying what changed
- S3 pairs posted in #kitcraft at 09:00 UTC: your partner's kit, or a facilitator kit (`facilitator/README.md`)
- Tomorrow 15:30 UTC: bridges. Your partner's kit is the one you just read; tomorrow you use it
> Speaker note: posted verbatim to #kitcraft at 20:58; `/stop` at 21:00.
