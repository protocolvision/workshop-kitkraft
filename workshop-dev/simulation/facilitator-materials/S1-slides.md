# S1 — Kits. Slide outline, 60 min (Mon Sep 21, 15:30–16:30 UTC)

Presenters split by expertise (checkpoint-1 decision): Sachin opens (slides 1–4), hard problem (11) and logistics (15); Rafa does grids, CMM, kit, traces, C3PO (5–10) and runs the exercise and check (12–14). Sachin keeps chat, recorder, repo. Cohort: 6, two triads. Cut from the 90-min outline: ice-breaker 15→9, situating 15→7, theory 20→14, exercise 30→17, close 5→7. Minute marks are from session start.

## Slide 1 — AI Kitcraft: Kit → Factory → Bridge (00:00) (presenter: Sachin)
- Two days, four sessions, one public repo
- Today: where you are, what a kit is, your inventory
- Tonight 20:00 UTC: you build the kit. Tomorrow: bridge it, then recap
- One rule for the room: everything you make lands in the repo
> Note: Sachin opens. Recorder is already on (started 15:28). One minute.

## Slide 2 — Consent (00:01) (presenter: Sachin)
- Plenary audio in #kafka is recorded and transcribed with speaker names; transcript goes to `workshop-dev/transcripts/` in the public repo
- Breakout rooms are not recorded
- Your harness writes log lines into public `LOG.md` files; ask either of us to remove any line
- Put nothing in a public kit you would not put on a public website
- After Tuesday: the repo stays public; the synthesis is posted in Discord within 48 h; nothing else
> Note: Sachin reads his `consent-notice.md` script verbatim; it ends with "Recording starts now". Ask "anyone want to be off-transcript?" and wait two seconds.

## Slide 3 — Ice-breaker (00:03) (presenter: Sachin)
- Name, organisation, one line
- Your posture from the survey: Partnership / Hypervigilance / Overreliance / Compliance
- One recent surprise or one personal protocol you use with AI
- 75 seconds each; Sachin calls the order in #kitcraft
> Note: Sachin seeds with his own example; Rafa goes second with water-rate PDFs and the rule "the agent never converts units". Tomás will run long; cut at 90 s.

## Slide 4 — What this is not (00:12) (presenter: Sachin)
- Not workflow optimisation, not build-a-website, not prompt tricks
- The tractor: farmers ran corn shellers off jacked-up Model Ts for years before Ford built the tractor. We are in the kit phase; the tractor is not here yet
- Not "adopt a tool": the tools that hide the assembly are the townships
- It is: notice the protocols being assembled around you, and keep the space to choose
- You leave with a folder another person's agent can use
> Note: Sachin, two minutes; the tractor is his thesis. Hands to Rafa at 00:14.

## Slide 5 — Frame: the Expanded Awareness 2×2 (00:14) (presenter: Rafa)
- Axes: **External / Internal** × **Archive / Live** (confirmed by Rafa, checkpoint 1)
- External + Archive: **precommodification patterns** — your idea is already in the latent space; provenance is scarce, not novelty
- External + Live: **traces / pheromones** — what others' agents leave in shared files and repos
- Internal + Archive: **anchored in reality** — your data, constraints, domain knowledge; the check against confident fiction
- Internal + Live: **playability** — you can act in the space, not only consume from it
- We come back to this grid at the end of every session: which quadrant did the last hour expand?
> Note: Ashcroft's internal/external is the borrowed axis; the quadrant names are ours.

## Slide 6 — Positioning: the movement 2×2 (00:18) (presenter: Rafa)
- One vs. many × interior vs. exterior
- Journal (one, interior) · Novel (many, interior) · **Exposed kit** (one, exterior) · Stigmergy (many, exterior)
- This workshop moves you from journal to exposed kit
- Bridges are how exposed kits start behaving stigmergically; traces are what make that quadrant reachable
> Note: point at the top-right of the previous grid when saying "traces".

## Slide 7 — CMM ↔ Kit / Factory / Bridge (00:21) (presenter: Rafa)
- AI CMM: five levels, governed/cultivated pairs; gates Discover → Encode → Prove → Harvest
- Kit = L2 cultivated = Discover → Encode
- Factory = Prove: an interface someone else can test
- Bridge = Harvest: another factory consumes it
- The room is at Kit; the guide's timeline puts Factories at 2026–28. The frontier is Factory
> Note: this is the one slide with two vocabularies side by side; everything after uses Kit/Factory/Bridge only.

## Slide 8 — What a kit is (00:24) (presenter: Rafa)
- A folder: `SKILL.md` for the agent (name, description, when, steps, constraints, do-nots), `README.md` for humans, `examples/`, `LOG.md`
- Now an open standard: Agent Skills (Anthropic, Dec 2025) stewarded with AGENTS.md under the Linux Foundation's Agentic AI Foundation
- A kit is encoded domain knowledge, not code. If it does not trigger, the fix is the description
- Kits now: you work with archival selves of others through a model that changes. Paper fixes words; LLMs fix the archive, roughly, but not the reader
> Note: show `PARTICIPANT_TEMPLATE/` on screen for 20 seconds; that is the whole spec.

## Slide 9 — Traces (00:27) (presenter: Rafa)
- Heylighen: indirect coordination in which the trace an action leaves in a medium stimulates the next action; no plan, no message, no simultaneous presence
- Sematectonic trace: the work itself — your kit
- Marker-based trace: signs about the work — your `LOG.md`
- The repo is the medium. This workshop is stigmergy with a two-day half-life
> Note: the parallel hackathon owns the security side of stigmergy; stay on coordination.

## Slide 10 — Worked example: C3PO (00:30) (presenter: Rafa)
- One corpus (the PI archive), one ingest pipeline
- Three interfaces: web, Discord @C3PO, MCP (`search_corpus`, no key)
- Same kit, three doors; the doors are the factory part
- Not called live today; the shape is the point
> Note: two minutes. Do not demo.

## Slide 11 — The hard problem (00:32) (presenter: Sachin)
- Bespoke use makes tooling solipsistic: your setup only makes sense to you
- Precommodification (Benny): the idea is already in the model; what is scarce is provenance
- Cognitive farmsteading (Rao): automation, bespokification, pensievification — three ways to build a home nobody else can enter
- Grocery cart: fine to push around the store, useless in someone else's kitchen. Digital homelessness is the other failure
- Sharing needs public records and interfaces, not shared apps
> Note: Sachin's section (precommodification and farmsteading are his essays). End on "public records and interfaces"; hand back to Rafa for the exercise.

## Slide 12 — Exercise: your inventory (00:35) (presenter: Rafa)
- Paste **Block 1** from `S1-agent-prompts.md` (Sachin pins it now) into your harness, inside the clone, and say "do this". It writes `participants/<name>/inventory.md`, commits, pushes, and reports
- Private means: content stays on your machine; only a stub README goes in the repo. There is no private repo
- 12 minutes. Push failed after three tries? Post the error the harness printed in #kitcraft; Sachin commits under your name
- Rule: you read other people's inventories only through your agent, never in the browser
- At 00:48 I will give the second prompt
> Note: Ingrid and Aiko have no harness: they write the file by hand from `participants/README.md` and send it to Sachin; they get the autolog at 1A. Marisol asks Sachin to push.

## Slide 13 — Second prompt: the two nearest (00:48) (presenter: Rafa)
- Paste **Block 2** from `S1-agent-prompts.md` and say "do this". It pulls, reads every inventory, names the two nearest, and checks your `## Log` line
- Note the two names; that is the seed for the triads' work tomorrow
- If it reports no log line on GitHub, say so in #kitcraft
> Note: Sachin's agent checks every inventory for a Log line at 00:52 and posts the list; missing lines go to 1A (expect Ingrid, Kwame).

## Slide 14 — Awareness check (00:53) (presenter: Rafa)
- Which quadrant did this hour expand? One word each, in the order Sachin posts
- Expected: precommodification — the two nearest inventories overlapped more than you thought
- Sachin's agent tallies the six answers into #kitcraft
- Focus question to carry to tomorrow: how will bridges emerge across the kit era?
> Note: do not correct anyone's quadrant.

## Slide 15 — Async 1 and what is next (00:56) (presenter: Sachin)
- Async 1 is three hours (17:00–20:00 UTC), not an evening: paste `instructions/async-1.md`: choose the kit you will convert into a factory tonight — your own (the `## Kit` task or a `## Built / use` item) or a facilitator kit — and your harness drafts the README's Job and Interface lines. Push. Nothing else
- If you are going to 1A, do this after 1A
- 1A now, 16:30–17:00 UTC, here in #kafka: install, clone, one log line, one push
- S2 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): you build the kit. Aiko: async instructions will be in #kitcraft
- Take-home reading order is pinned; nothing is required before S2
> Note: Sachin presents and closes at 00:59, then `/stop`s the recorder after the last question.
