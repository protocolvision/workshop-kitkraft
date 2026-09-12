# S2 — Factories · slides (60 min, Mon Sep 21, 20:00–21:00 UTC)

Timestamps are minutes from session start. Presenter on each heading (facilitation split: Rafa — first minute, build briefing, push check, rooms, the round, awareness check, Async 2, close; Sachin — kit-phase thesis, the Rao–Dixon case, brand kit, factory as a flexible job shop and the ladder, the comms layer). Rafa screen-shares throughout and keeps #workshop-kitkraft, recorder and repo; the presenter talks. Breakout groups per the S2 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5.

## Lede

"Recording is on, and here is where we are: three hours ago tonight's kit was still a habit in your head, and by the end of this hour it has to be a folder someone else's assistant can run without you in the room."

## Thesis

A kit is your own practice written down; a factory is where that practice lives and works — a folder on your own machine in which separate sessions of your assistant each do one step and hand the half-made thing to the next, the way a job shop moves a part between workstations. What makes a factory worth having is not the folder but what it hands out: not a finished piece of work but an intermediate, the work-in-progress somebody else's factory can pick up and carry further, together with a plain statement of how to get at it. That statement is the entire difference between a private practice and something another person can use, and it is cheap — tonight it is one line in a README naming what you export and one line naming how to call it. Two people have already run this at full scale with nothing more than a shared folder and a file of metadata, and neither of them was a coder, so the barrier was never technical. What stops it is that the interesting half of your practice is still in your head, and the only way to find out which half that is, is to hand the folder to someone else's assistant and watch where it fails.

## The argument

1. Three hours ago tonight's kit was a task in your head, and a kit is what stays after an assistant has failed at it once (slide 1).
2. Moving work between two private setups is already a solved thing in practice: drafts and metadata went from Rao's factory to Jenna Dixon's through a shared folder, and neither of them wrote code (slide 2).
3. The same pattern holds for a visual identity — the Institute's brand kit publishes a file any assistant can read, with no person in the loop (slide 3).
4. Generalise those two and you get the definition: a factory is a flexible job shop whose steps are workstations, and what it offers the outside world is an intermediate plus a plain way in (slide 4).
5. That way in has rungs, and rung one — a README, a SKILL.md and one worked example — is the whole of tonight's build (slides 4–5).
6. Which is why the build is over in twenty minutes and then someone else's assistant reads it cold, with you saying nothing (slides 5–6).
7. Where it fails is not a bug: it is the part of your practice that never made it out of your head (slide 7).
8. So convert the kit now, push it whether or not it is finished, and spend tonight fixing what the other agent could not do without you (slides 5, 9).

## Slides at a glance

| # | Min | Presenter | On screen | Purpose |
|---|---|---|---|---|
| 1 | 00 | Rafa → Sachin | Recording, S1 tally, sources | Land the room and name tonight's move |
| 2 | 03 | Sachin | Text only, two factories | Show a bridge that already worked |
| 3 | 07 | Sachin | Brand kit page, then `llms.txt` | A factory you can look at now |
| 4 | 11 | Sachin | The ladder as a table | Define factory, intermediate, the rungs |
| 5 | 15 | Rafa / Sachin | The factory block on screen | Brief the build, start the clock |
| 6 | 35 | Rafa | The reading ring as a table | Send the rooms to read each other cold |
| 7 | 48 | Rafa | Sentence frame, text only | Collect what the cold reader missed |
| 8 | 53 | Rafa | Four quadrant names, text only | Take the honest awareness tally |
| 9 | 56 | Rafa | Times and next steps, text only | Hand over Async 2 and S3 |

## Slide 1 — Where we are (00:00) (presenter: Rafa; Sachin from the fourth bullet)
**On screen.** Headline "Where we are"; "Recording on · consent as pinned · breakouts may be recorded" · "S1 awareness check, read as counted" · "`<n>` sources chosen: `<o>` your own kits, `<f>` ours" · "Tonight: your kit becomes something someone else can run". Text only; Rafa fills the tally and the counts before the session from `workshop-dev/transcripts/S1/awareness-check.md` and the Async 1 `decision` lines.
**Say.** Rafa: "Recording is on and the consent is the one we read this afternoon; breakout rooms may be recorded too. Here is the S1 tally exactly as it was counted, and here is what you chose in Async 1 — `<o>` of you are converting your own kit and `<f>` are taking one of ours. Sachin." Sachin: "Kit time is carnival time. Three hours ago these were tasks in your head, and tonight they become things someone else's assistant can fail at — and a kit is what stays after it has failed at it once."
- Recording on; consent as pinned; breakouts may be recorded
- S1 awareness check: `<tally from workshop-dev/transcripts/S1/awareness-check.md>`, read as counted
- `<n>` sources chosen since S1 (`<o>` own kits, `<f>` facilitator kits)
- Kit time is carnival time: three hours ago these were tasks in your head; tonight they become things a stranger's agent can fail at
- A kit is what stays after the agent has failed at it once
> Speaker note: one sentence per bullet; the room has had three hours, not a night. Rafa confirms "Recording on" in #workshop-kitkraft first and does the first three bullets; Sachin takes the last two and continues straight into slide 2.

## Slide 2 — Book factory: Rao → Dixon (03:00) (presenter: Sachin)
**On screen.** Headline "One factory calling another"; "Rao's manuscript factory made drafts plus metadata — not a book" · "Jenna Dixon's production factory took them from there" · "The agreement was a shared folder and a metadata server" · "Two non-coders: domain knowledge beat coding knowledge". Text only; Rafa drops the essay link in #workshop-kitkraft.
**Say.** "Here is the case this whole session hangs on. Rao's manuscript factory never produced a finished book — it produced intermediates, drafts with metadata attached, and Jenna Dixon's production factory picked them up from there. What the two of them agreed on was not software: it was a shared folder, a layout and a metadata server, and neither of them is a coder. Neither factory changed itself to suit the other, and that is the part to hold on to; this is one observed form of a bridge, and whether it is the form is what tomorrow finds out."
- Rao's manuscript factory produced **intermediates** — drafts + metadata — not a finished book
- Jenna Dixon's production factory consumed them; the shared Dropbox folder + metadata server was the **interface**
- Two non-coders; **domain knowledge > coding knowledge**
- Neither factory changed for the other; the folder layout and the metadata were the agreement
- Two people with significant mutual trust exchanging intermediates between bespoke infrastructures: one observed form of a bridge. Whether it is *the* form is what tomorrow finds out
**Reference.** [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory)
> Speaker note: say "intermediates" and "interface" twice each; do not call it the shape of every bridge.

## Slide 3 — Protocolized visual identity (07:00) (presenter: Sachin)
**On screen.** Headline "A factory you can look at right now"; "TITLES → two narrow models → the PI brand kit → Monstrous Times" · "Jamverse is the fiction-side sibling" · "`llms.txt` → `brand.json`: an assistant reads it, nobody in the loop" · "Type foundries sold matrices, not typeset pages". Visual: Rafa screen-shares the brand kit page for 30 seconds, then its `llms.txt`.
**Say.** "Same shape, much closer to home. TITLES fed two narrow image models, those fed the Institute's brand kit, and the brand kit feeds Monstrous Times; Jamverse is the fiction-side sibling of the same chain. Rafa, put the brand kit page up — and now the `llms.txt` behind it, which is the actual point: an assistant reads that one file and has the brand, with no person in the middle. A type foundry sold matrices rather than typeset pages, and the kit is the matrix; the idea you had is already in the archive, so what your kit adds is the record of where it came from."
- TITLES → two narrow models → PI brand kit → Monstrous Times; Jamverse as the fiction-side sibling
- One kit, several derived worlds: standards that no longer need to be uniform
- The brand kit is already a factory: `llms.txt` → `brand.json`, readable by an agent, no human in the loop
- Type foundries sold matrices, not typeset pages; the kit is the matrix
- The idea you had is already in the archive; provenance, not novelty, is what your kit adds
**Reference.** [Protocol Institute Brand Kit](https://npc.here.now/protocolintstitutebrandkit/) · [Langdon, "Protocol Fiction Aesthetics"](https://protocolized.summerofprotocols.com/p/protocol-fiction-aesthetics) · [Benny, "LLMs Pre-Commodify Ideas"](https://summerlightning.substack.com/p/llms-pre-commodify-ideas)
> Speaker note: Rafa puts the brand kit page on screen 30 s, then `llms.txt`; do not explain the models.

## Slide 4 — Factory: a flexible job shop (11:00) (presenter: Sachin)
**On screen.** Headline "A factory is a flexible job shop"; the ladder drawn as a table in the deck; footer "Tonight is rung one, done properly."

| Rung | What it is | The standard behind it |
|---|---|---|
| 1 | README + SKILL.md you hand to an agent, plus one worked example | Agent Skills |
| 2 | A static page that says how to call it | — |
| 3 | A machine door any assistant can call | MCP |
| 4 | One factory calling another, nobody in between | A2A |

**Say.** "Now the definition, and it is Rao's phrase: a factory is a flexible job shop. A folder hierarchy on your own machine where separate sessions of your assistant work at specialised stations and hand the half-made thing on to the next station — varied output, a flexibly configured set of tools. A kit is one adaptation for one job; the factory is the infrastructure that runs kits, and what it sends out is an intermediate, work in progress another factory can carry further, rather than anything finished. How you expose that intermediate is a ladder of four rungs, and tonight everybody is on rung one — rung one done properly beats a rung you claimed and did not build."
- A factory is a flexible job shop: a folder hierarchy on your own machine where agent sessions work at specialised workstations and hand artifacts to each other, making varied things with a flexibly configured set of tools (Rao)
- A kit is one adaptation for one job; a factory is the infrastructure that runs kits and produces **intermediates** — work-in-progress and skills another factory can consume — not finished artifacts
- The declared interface is the mechanism: how a factory exposes an intermediate to a stranger's agent
- The ladder, ascending effort: README handed to an agent → static page → MCP → API / A2A
- CMM: Discover → Encode = Kit · Prove = Factory · Harvest = Bridge
- Tonight's deliverable is rung one done properly; the README's `Exports:` line names the intermediate and its `Interface:` line names the rung and how to call it. Rungs 2+ are stretch
**Reference.** [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory) · [Agent Skills specification](https://agentskills.io/specification) · [Durable AI Adoption (AI CMM)](https://ai.protocolized.dev/)
> Speaker note: answers the question that always comes: for a document kit, the document *is* the intermediate and the README *is* the interface.

## Slide 5 — Convert a kit into a factory (15:00 → 35:00) (presenter: Rafa; comms layer at 30:00: Sachin)
**On screen.** Headline "Convert your kit — 20 minutes"; "Paste `instructions/S2-factory.md` at the clone root and say 'do this'" · "`README.md`: an `Exports:` line and an `Interface:` line" · "`SKILL.md`: the steps are the workstations; the description is what makes it trigger" · "`examples/input.*` + `output.*`, produced cold" · "30:00 comms · 33:00 push". Visual: Rafa screen-shares the block in `instructions/S2-factory.md`, with `PARTICIPANT_TEMPLATE/kit/` open alongside it.
**Say.** Rafa: "Your turn. Open your harness at the top of the clone, paste the block I am pinning now and say 'do this' — it will ask which kit you chose in Async 1, and it will not invent answers for you. Four things have to exist when I call push: a README with a line saying what this exports and a line saying how to call it, a SKILL.md whose numbered steps are the stations, one example your assistant produced cold from that SKILL.md alone, and all of it inside `participants/<you>/kit/`. Time calls at five and ten minutes; everything in this repo is public, so keep anything sensitive on your own machine." Sachin at 30:00: "Three rules before you push: cut every sentence that adds nothing, take out the AI tells — the hedges, the triple adjectives, the summary of what you just said — and rewrite the README's Job line in your own words."
- Take the kit you chose in Async 1 — your own (`## Kit` task or `## Built / use` item) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and make it a factory: (1) put it in a job-shop structure — its steps as workstations, its outputs as handoff artifacts, inside `participants/<you>/kit/` — (2) name the intermediate it exports for someone else's factory, (3) declare the interface for that intermediate
- Paste `instructions/S2-factory.md`'s block. Rung 1, done properly: `README.md` with an `Exports:` line (the intermediate) and an `Interface:` line (the rung and how to call it) · `SKILL.md` whose steps are the workstations and whose `description` triggers · `examples/input.*` + `output.*` (the intermediate) produced cold from SKILL.md
- Facilitator kit: copied into your folder, adapted to your organisation and data (inputs, constraints, do-nots), `Source:` on the README's first line
- Rungs 2+ (static page, MCP, API/A2A) only after rung 1 works; never claim a rung you did not build
- **30:00, Sachin — comms layer:** cut what adds nothing · remove the AI tells · rewrite the README in your own words
- Push at 33:00; unfinished is fine, absent is not
**Reference.** [Agent Skills specification](https://agentskills.io/specification) · [Chaudhary, "How to Turn Your AI Into a World-Class Designer"](https://lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world)
> Speaker note: Rafa briefs and calls 5, 10 min; Sachin takes over at 15 for the comms rules; Rafa calls "push" at 18. Commit is `S2: <name>: factory from <source>`.

## Slide 6 — Breakout group critique (35:00 → 48:00, breakouts) (presenter: Rafa)
**On screen.** Headline "Read each other cold — 13 minutes"; the ring drawn as a small table in the deck; under it "Your agent gets the README and SKILL.md, nothing else" · "It runs the example cold and reports in five lines where the way in was not enough" · "Owners log every failure as a `blocker` line" · "Nobody explains their kit out loud until the report is read". Visual: Rafa screen-shares the block in `instructions/S2-critique.md` and the pinned groups post.

| In a group of | Who reads whom |
|---|---|
| 3 or 4 | A reads B · B reads C · the last reads A |
| 2 | the pair swaps |

**Say.** "Rooms now. Inside your group you read in a ring, and the pin says who reads whom. Your assistant gets two files — the README and the SKILL.md — and nothing else: no questions to the owner, no explaining, and it runs the example cold and writes you five lines on where it had to guess. You read those five lines aloud to the owner, and the owner types nothing back except `blocker` lines. Reconvene here at 48."
- Ring inside each breakout group (2–4), from the pin: A reads B · B reads C · … · the last reads A; a pair swaps
- Groups and rooms as pinned in #workshop-kitkraft (the S2 groups post is the only roster)
- Your agent uses the target factory through its declared interface (README + SKILL.md only) and runs the example cold; report in ≤5 lines where the interface was insufficient
- Owner logs every failure as a `blocker` line; no explaining out loud until it is in the kit
- Block: `instructions/S2-critique.md` (pinned as a link); the text is the facilitator
> Speaker note: Rafa: `/stop`, post "rooms open", move people. Facilitators split the rooms between them and swap at minute 6. An absent member makes a pair.

## Slide 7 — What the other agent got wrong (48:00) (presenter: Rafa)
**On screen.** Headline "What the other agent got wrong about my kit"; "One sentence each, in the pinned order" · "About 40 seconds" · "Expect: it failed where your knowledge was tacit" · "That is the kit's next line, not a bug". Text only.
**Say.** "Recorder is back on. One sentence each, in the order I have pinned, about forty seconds: what did the other agent get wrong about your kit? I will predict most of the answers — it failed at the place where you know something you never wrote down, and that is the next line of your kit rather than a bug in it."
- Round, one sentence each, in the pinned order (≈40 s each)
- Captured into `workshop-dev/transcripts/S2/awareness-check.md` alongside the check below
- Expected: it failed where your knowledge was tacit — that is the kit's next line, not a bug
> Speaker note: Rafa puts the recorder back on before the first speaker; wait for the live line.

## Slide 8 — Awareness check (53:00) (presenter: Rafa)
**On screen.** Headline "Which quadrant did this hour expand?"; the four names, one per line: "Precommodification" · "Traces" · "Anchored in reality" · "Playability"; footer "One word each, in the order posted."
**Say.** "Same question as this afternoon. Which of the four did this hour expand for you — precommodification, traces, anchored in reality, or playability? One word each, in the order I am posting now. There is no right answer and I am not going to correct anybody."
- Which quadrant did this hour expand? Precommodification · Traces · Anchored in reality · Playability
- One word each; tallied in #workshop-kitkraft
**Reference.** [Ashcroft, Expanding Awareness](https://expandingawareness.org/)
> Speaker note: do not lead the answer; the S4 profile only means something if this is honest.

## Slide 9 — Async 2, overnight (56:00) (presenter: Rafa)
**On screen.** Headline "Before tomorrow"; "Paste `instructions/async-2.md`: one fix per `blocker` line, one `progress` line, push v2" · "Async tonight: push your factory; your reader's report comes back in #workshop-kitkraft" · "S3 groups posted at 09:00 UTC" · "Tomorrow 15:30 UTC: bridges". Text only; Rafa posts the same text in #workshop-kitkraft.
**Say.** "Overnight is small and specific: paste the async block, fix what your group's agent found — one fix per blocker line — re-run the example cold, and push a v2 with a `progress` line saying what changed. If you are doing tonight async, push your factory anyway and your assigned reader's agent will use it and post the report in the channel for you. We are back at 15:30 UTC tomorrow for bridges, and bring the kit you did not critique in mind."
- Fix the failure your breakout group's agent found: paste `instructions/async-2.md`. Push v2 with a `progress` line saying what changed
- Anyone async tonight: push your factory (`instructions/S2-factory.md`); your assigned reader's agent uses it and posts the report in #workshop-kitkraft; log the blockers, fix
- S3 breakout groups (rotated) posted in #workshop-kitkraft at 09:00 UTC; alternative targets in `facilitator/README.md`
- Tomorrow 15:30 UTC: bridges. Bring the kit you did *not* critique in mind
**Reference.** [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory)
> Speaker note: Rafa posts it verbatim to #workshop-kitkraft at 20:58 (the async post in `../discord-pins.md`); `/stop` at 21:00.
