# S2 — Factories · slides (60 min, Mon Sep 21, 20:00–21:00 UTC)

Timestamps are minutes from session start. Presenter on each heading (presenter split: Sachin opens; kit-phase, precommodification, brand kit, comms layer, rooms and close → Sachin; F2F case, factory = kit + interface, ladder, build briefing → Rafa). Sachin screen-shares throughout; the presenter talks. Triads per the S2 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5.

## Slide 1 — Where we are (00:00) (presenter: Sachin)
- Recording on; consent as pinned; breakouts off the record
- S1 awareness check: `<tally from workshop-dev/transcripts/S1/awareness-check.md>` — say whether the expected winner (precommodification) held
- `<n>` sources chosen since S1 (`<o>` own kits, `<f>` facilitator kits); `<k>` stubs (content on the owner's machine)
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
- Tonight's deliverable is rung one done properly; the README's `Interface:` line names the rung and how to call it. Rungs 2+ are stretch
> Speaker note: answers the question that always comes: for a document kit, the README *is* the interface.

## Slide 5 — Convert a kit into a factory (15:00 → 35:00) (presenter: Rafa; comms layer at 30:00: Sachin)
- Take the kit you chose in Async 1 — your own (`## Kit` task or `## Built / use` item) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and make it a factory: a kit with a declared interface a stranger's agent can use without talking to you
- Paste `instructions/S2-factory.md`'s block. Rung 1, done properly: `README.md` with an `Interface:` line (the rung and how to call it) · `SKILL.md` whose `description` triggers · `examples/input.*` + `output.*` produced cold from SKILL.md
- Facilitator kit: copied into your folder, adapted to your organisation and data (inputs, constraints, do-nots), `Source:` on the README's first line
- Rungs 2+ (static page, MCP, API/A2A) only after rung 1 works; never claim a rung you did not build
- **30:00, Sachin — comms layer:** cut what adds nothing · remove the AI tells · rewrite the README by hand
- Push at 33:00; unfinished is fine, absent is not
> Speaker note: Rafa calls 5, 10 min; Sachin takes over at 15 for the comms rules, calls "push" at 18. Private kits: content local, stub only. Commit is `S2: <name>: factory from <source>`.

## Slide 6 — Triad critique (35:00 → 48:00, breakouts) (presenter: Sachin)
- Ring inside each triad, from the pin: A reads B · B reads C · C reads A; a pair reads each other
- `<triad 1>` in breakout-1, `<triad 2>` in breakout-2, … (the pinned table)
- Your agent uses the target factory through its declared interface (README + SKILL.md only) and runs the example cold; report in ≤5 lines where the interface was insufficient
- Owner logs every failure as a `blocker` line; no explaining out loud until it is in the kit
- Block: `instructions/S2-critique.md` (pinned as a link); the text is the facilitator
> Speaker note: `/stop`, post "rooms open", move people. Facilitators split the rooms between them and swap at minute 6. A stub goes to the strongest reader in its triad; an absent member makes a pair.

## Slide 7 — What the other agent got wrong (48:00) (presenter: Sachin)
- Round, one sentence each, in the pinned order (≈40 s each)
- Captured into `workshop-dev/transcripts/S2/awareness-check.md` alongside the check below
- Expected: it failed where your knowledge was tacit — that is the kit's next line, not a bug
> Speaker note: recorder back on before the first speaker; wait for the live line.

## Slide 8 — Awareness check (53:00) (presenter: Sachin)
- Which quadrant did this hour expand? Precommodification · Traces · Anchored in reality · Playability
- One word each; tallied in #kitcraft
- Expected: *anchored in reality* — the agent failed exactly where your context was not in the file
> Speaker note: do not lead the answer; the S4 profile only means something if this is honest.

## Slide 9 — Async 2, overnight (56:00) (presenter: Sachin)
- Fix the failure your triad's agent found: paste `instructions/async-2.md`. Push v2 with a `progress` line saying what changed
- Anyone async tonight: push your factory (`instructions/S2-factory.md`); your assigned reader's agent uses it and posts the report in #kitcraft; log the blockers, fix
- S3 triads (rotated) posted in #kitcraft at 09:00 UTC; alternative targets in `facilitator/README.md`
- Tomorrow 15:30 UTC: bridges. Bring the kit you did *not* critique in mind
> Speaker note: posted verbatim to #kitcraft at 20:58 (the async post in `../discord-pins.md`); `/stop` at 21:00.
