# S2 — Factories · slides (60 min, Mon Sep 21, 20:00–21:00 UTC)

Timestamps are minutes from session start. Presenter on each heading (facilitation split: Rafa — first minute, build briefing, push check, rooms, the round, awareness check, Async 2, close; Sachin — kit-phase thesis, the Rao–Dixon case, brand kit, factory as a flexible job shop and the ladder, the comms layer). Rafa screen-shares throughout and keeps #kitcraft, recorder and repo; the presenter talks. Breakout groups per the S2 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5.

## Slide 1 — Where we are (00:00) (presenter: Rafa; Sachin from the fourth bullet)
- Recording on; consent as pinned; breakouts off the record
- S1 awareness check: `<tally from workshop-dev/transcripts/S1/awareness-check.md>`, read as counted
- `<n>` sources chosen since S1 (`<o>` own kits, `<f>` facilitator kits)
- Kit time is carnival time: three hours ago these were tasks in your head; tonight they become things a stranger's agent can fail at
- A kit is what stays after the agent has failed at it once
> Speaker note: one sentence per bullet; the room has had three hours, not a night. Rafa confirms "Recording on" in #kitcraft first and does the first three bullets; Sachin takes the last two and continues straight into slide 2.

## Slide 2 — Book factory: Rao → Dixon (03:00) (presenter: Sachin)
- Rao's manuscript factory produced **intermediates** — drafts + metadata — not a finished book
- Jenna Dixon's production factory consumed them; the shared Dropbox folder + metadata server was the **interface**
- Two non-coders; **domain knowledge > coding knowledge**
- Neither factory changed for the other; the folder layout and the metadata were the agreement
- Two people with significant mutual trust exchanging intermediates between bespoke infrastructures: one observed form of a bridge. Whether it is *the* form is what tomorrow finds out
> Speaker note: say "intermediates" and "interface" twice each; do not call it the shape of every bridge.

## Slide 3 — Protocolized visual identity (07:00) (presenter: Sachin)
- TITLES → two narrow models → PI brand kit → Monstrous Times; Jamverse as the fiction-side sibling
- One kit, several derived worlds: standards that no longer need to be uniform
- The brand kit is already a factory: `llms.txt` → `brand.json`, readable by an agent, no human in the loop
- Type foundries sold matrices, not typeset pages; the kit is the matrix
- The idea you had is already in the archive; provenance, not novelty, is what your kit adds
> Speaker note: Rafa puts the brand kit page on screen 30 s, then `llms.txt`; do not explain the models.

## Slide 4 — Factory: a flexible job shop (11:00) (presenter: Sachin)
- A factory is a flexible job shop: a folder hierarchy on your own machine where agent sessions work at specialised workstations and hand artifacts to each other, making varied things with a flexibly configured set of tools (Rao)
- A kit is one adaptation for one job; a factory is the infrastructure that runs kits and produces **intermediates** — work-in-progress and skills another factory can consume — not finished artifacts
- The declared interface is the mechanism: how a factory exposes an intermediate to a stranger's agent
- The ladder, ascending effort: README handed to an agent → static page → MCP → API / A2A
- CMM: Discover → Encode = Kit · Prove = Factory · Harvest = Bridge
- Tonight's deliverable is rung one done properly; the README's `Exports:` line names the intermediate and its `Interface:` line names the rung and how to call it. Rungs 2+ are stretch
> Speaker note: answers the question that always comes: for a document kit, the document *is* the intermediate and the README *is* the interface.

## Slide 5 — Convert a kit into a factory (15:00 → 35:00) (presenter: Rafa; comms layer at 30:00: Sachin)
- Take the kit you chose in Async 1 — your own (`## Kit` task or `## Built / use` item) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and make it a factory: (1) put it in a job-shop structure — its steps as workstations, its outputs as handoff artifacts, inside `participants/<you>/kit/` — (2) name the intermediate it exports for someone else's factory, (3) declare the interface for that intermediate
- Paste `instructions/S2-factory.md`'s block. Rung 1, done properly: `README.md` with an `Exports:` line (the intermediate) and an `Interface:` line (the rung and how to call it) · `SKILL.md` whose steps are the workstations and whose `description` triggers · `examples/input.*` + `output.*` (the intermediate) produced cold from SKILL.md
- Facilitator kit: copied into your folder, adapted to your organisation and data (inputs, constraints, do-nots), `Source:` on the README's first line
- Rungs 2+ (static page, MCP, API/A2A) only after rung 1 works; never claim a rung you did not build
- **30:00, Sachin — comms layer:** cut what adds nothing · remove the AI tells · rewrite the README in your own words
- Push at 33:00; unfinished is fine, absent is not
> Speaker note: Rafa briefs and calls 5, 10 min; Sachin takes over at 15 for the comms rules; Rafa calls "push" at 18. Commit is `S2: <name>: factory from <source>`.

## Slide 6 — Breakout group critique (35:00 → 48:00, breakouts) (presenter: Rafa)
- Ring inside each breakout group (2–4), from the pin: A reads B · B reads C · … · the last reads A; a pair swaps
- Groups and rooms as pinned in #kitcraft (PIN 3 is the only roster)
- Your agent uses the target factory through its declared interface (README + SKILL.md only) and runs the example cold; report in ≤5 lines where the interface was insufficient
- Owner logs every failure as a `blocker` line; no explaining out loud until it is in the kit
- Block: `instructions/S2-critique.md` (pinned as a link); the text is the facilitator
> Speaker note: Rafa: `/stop`, post "rooms open", move people. Facilitators split the rooms between them and swap at minute 6. An absent member makes a pair.

## Slide 7 — What the other agent got wrong (48:00) (presenter: Rafa)
- Round, one sentence each, in the pinned order (≈40 s each)
- Captured into `workshop-dev/transcripts/S2/awareness-check.md` alongside the check below
- Expected: it failed where your knowledge was tacit — that is the kit's next line, not a bug
> Speaker note: Rafa puts the recorder back on before the first speaker; wait for the live line.

## Slide 8 — Awareness check (53:00) (presenter: Rafa)
- Which quadrant did this hour expand? Precommodification · Traces · Anchored in reality · Playability
- One word each; tallied in #kitcraft
> Speaker note: do not lead the answer; the S4 profile only means something if this is honest.

## Slide 9 — Async 2, overnight (56:00) (presenter: Rafa)
- Fix the failure your breakout group's agent found: paste `instructions/async-2.md`. Push v2 with a `progress` line saying what changed
- Anyone async tonight: push your factory (`instructions/S2-factory.md`); your assigned reader's agent uses it and posts the report in #kitcraft; log the blockers, fix
- S3 breakout groups (rotated) posted in #kitcraft at 09:00 UTC; alternative targets in `facilitator/README.md`
- Tomorrow 15:30 UTC: bridges. Bring the kit you did *not* critique in mind
> Speaker note: Rafa posts it verbatim to #kitcraft at 20:58 (the async post in `../discord-pins.md`); `/stop` at 21:00.
