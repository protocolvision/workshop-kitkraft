# S1 — Kits. Slide outline, 60 min (Mon Sep 21, 15:30–16:30 UTC)

Facilitation split: Rafa runs the first minute (welcome, consent), the ice-breaker timing, the exercise and both checks, Async 1 and the close (slides 1–3, 12–15); Sachin presents the theory (slides 4–11: what this is not, both grids, CMM, what a kit is, traces, C3PO, the hard problem) and opens the content right after Rafa's first minute. Rafa keeps #kitcraft, recorder, rooms and repo, and screen-shares; Sachin takes theory questions in voice. Breakout groups per the pinned table (`../discord-pins.md`), one per room, breakout-1 … breakout-5. Cut from the 90-min outline: ice-breaker 15→9, situating 15→7, theory 20→14, exercise 30→17, close 5→7. Minute marks are from session start.

## Slide 1 — AI Kitcraft: Kit → Factory → Bridge (00:00) (presenter: Rafa)
- Two days, four sessions, one public repo
- Today: where you are, what a kit is, your inventory
- Tonight 20:00 UTC: you build the kit. Tomorrow: bridge it, then recap
- One rule for the room: everything you make lands in the repo
> Note: Rafa opens. Recorder is already on (Rafa started it at 15:28). One minute.

## Slide 2 — Consent (00:01) (presenter: Rafa)
- Plenary audio in #kafka is recorded and transcribed with speaker names; transcript goes to `workshop-dev/transcripts/` in the public repo
- Breakout rooms are not recorded
- Your harness writes log lines into public `LOG.md` files; ask either of us to remove any line
- Put nothing in a public kit you would not put on a public website
- After Tuesday: the repo stays public; the synthesis is posted in Discord within 48 h; nothing else
> Note: Rafa reads `consent-notice.md` verbatim; it ends with "Recording starts now". Ask "anyone want to be off-transcript?" and wait two seconds.

## Slide 3 — Ice-breaker (00:03) (presenter: Rafa)
- Name, organisation, one line
- Your posture from the survey: Partnership / Hypervigilance / Overreliance / Compliance
- One recent surprise or one personal protocol you use with AI
- 75 seconds each for six people, 45 seconds for ten or more; Rafa posts the order in #kitcraft and keeps the time
> Note: Rafa seeds with water-rate PDFs and the rule "the agent never converts units"; Sachin goes second with his own example. Anyone running long is cut at 90 s. Rafa hands to Sachin at 00:12.

## Slide 4 — What this is not (00:12) (presenter: Sachin)
- Not workflow optimisation, not build-a-website, not prompt tricks
- The tractor: farmers ran corn shellers off jacked-up Model Ts for years before Ford built the tractor. We are in the kit phase; the tractor is not here yet
- Not "adopt a tool": the tools that hide the assembly are the townships
- It is: notice the protocols being assembled around you, and keep the space to choose
- You leave with a folder another person's agent can use
> Note: Sachin, two minutes; the tractor is his thesis. He continues straight into slide 5.

## Slide 5 — Frame: the Expanded Awareness 2×2 (00:14) (presenter: Sachin)
- Axes: **External / Internal** × **Archive / Live**
- External + Archive: **precommodification patterns** — your idea is already in the latent space; provenance is scarce, not novelty
- External + Live: **traces / pheromones** — what others' agents leave in shared files and repos
- Internal + Archive: **anchored in reality** — your data, constraints, domain knowledge; the check against confident fiction
- Internal + Live: **playability** — you can act in the space, not only consume from it
- We come back to this grid at the end of every session: which quadrant did the last hour expand?
> Note: Ashcroft's internal/external is the borrowed axis; the quadrant names are ours.

## Slide 6 — Positioning: the movement 2×2 (00:18) (presenter: Sachin)
- One vs. many × interior vs. exterior
- Journal (one, interior) · Novel (many, interior) · **Field notebook (Humboldt)** — exposed kit as the artifact form (one, exterior) · Stigmergy (many, exterior)
- Field notebook: a single observer facing the world, recording observations in a form others can build on before any coordination exists. Your inventory is your field notebook
- PI's own Humboldt agent is the live example (resources §0) and a bridge target later
- This workshop moves you from journal to field notebook
- Bridges are how field notebooks start behaving stigmergically; traces are what make that quadrant reachable
> Note: point at the top-right of the previous grid when saying "traces".

## Slide 7 — CMM ↔ Kit / Factory / Bridge (00:21) (presenter: Sachin)
- AI CMM: five levels, governed/cultivated pairs; gates Discover → Encode → Prove → Harvest
- Kit = L2 cultivated = Discover → Encode
- Factory = Prove: an interface someone else can test
- Bridge = Harvest: another factory consumes it
- The room is at Kit; the guide's timeline puts Factories at 2026–28. The frontier is Factory
> Note: this is the one slide with two vocabularies side by side; everything after uses Kit/Factory/Bridge only.

## Slide 8 — What a kit is (00:24) (presenter: Sachin)
- A technology in use before there is a standard product: loose components a user assembles and adapts to do their own job, in their own context, while the form is still open (interpretive flexibility before closure — Kline & Pinch's rural Model T owners running corn shellers off the rear axle were kit users; the tractor was the consensus that came later)
- In AI today: the prompts, contexts, files and steps you have adapted to one recurring task
- The workshop's artifact — a folder with a README, a SKILL.md and an example — is that adaptation written down so another agent can run it. A factory is a kit whose interface has closed for others
- The artifact's shape: `SKILL.md` for the agent (name, description, when, steps, constraints, do-nots), `README.md` for humans, `examples/`, `LOG.md` — now an open standard: Agent Skills (Anthropic, Dec 2025) stewarded with AGENTS.md under the Linux Foundation's Agentic AI Foundation. If it does not trigger, the fix is the description
- Kits now: you work with archival selves of others through a model that changes. Paper fixes words; LLMs fix the archive, roughly, but not the reader
> Note: Rafa puts `PARTICIPANT_TEMPLATE/` on screen for 20 seconds; that is the whole spec.

## Slide 9 — Traces (00:27) (presenter: Sachin)
- Heylighen: indirect coordination in which the trace an action leaves in a medium stimulates the next action; no plan, no message, no simultaneous presence
- Sematectonic trace: the work itself — your kit
- Marker-based trace: signs about the work — your `LOG.md`
- The repo is the medium. This workshop is stigmergy with a two-day half-life
> Note: the parallel hackathon owns the security side of stigmergy; stay on coordination.

## Slide 10 — Worked example: C3PO (00:30) (presenter: Sachin)
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
- Paste **Block 1** (`instructions/S1-inventory.md`; Rafa pins the link now) into your harness (open at the clone root) and say "do this". It writes `participants/<name>/inventory.md`, commits, pushes, and reports
- Private means: content stays on your machine; only a stub README goes in the repo. There is no private repo
- 12 minutes. Push failed after three tries? Post the error the harness printed in #kitcraft; the fix comes back in that thread or at 1A
- Rule: you read other people's inventories only through your agent, never in the browser
- At 00:48 I will give the second prompt
> Note: everyone has a harness; a push that fails is fixed in the #kitcraft thread or at 1A, never committed for them.

## Slide 13 — Second prompt: the two nearest (00:48) (presenter: Rafa)
- Paste **Block 2** (same file) and say "do this". It pulls, reads every inventory, names the two nearest, and checks your `LOG.md` line
- Note the two names; that is the seed for the breakout groups' work tomorrow
- If it reports no log line on GitHub, say so in #kitcraft
> Note: before Block 2, Rafa posts how many inventories are on `main` so nobody re-pulls needlessly. At 00:52 his agent checks every inventory for a Log line and posts the list; missing lines go to 1A.

## Slide 14 — Awareness check (00:53) (presenter: Rafa)
- Which quadrant did this hour expand? One word each, in the order Rafa posts
- Expected: precommodification — the two nearest inventories overlapped more than you thought
- Rafa's agent tallies the answers into #kitcraft and `workshop-dev/transcripts/S1/awareness-check.md`
- Focus question to carry to tomorrow: how will bridges emerge across the kit era?
> Note: do not correct anyone's quadrant.

## Slide 15 — Async 1 and what is next (00:56) (presenter: Rafa)
- Async 1 is three hours (17:00–20:00 UTC), not an evening: paste `instructions/async-1.md`; choose the kit you will convert into a factory tonight — your own (the `## Kit` task or a `## Built / use` item) or a facilitator kit — and your harness drafts the README's Job and Interface lines. Push. Nothing else
- If you are going to 1A, do this after 1A
- 1A now, 16:30–17:00 UTC, here in #kafka: harness installed but something wrong — auth, clone, branch, one log line, one push
- S2 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): you build the kit. Anyone async for S2: the async post in #kitcraft
- Take-home reading order is pinned; nothing is required before S2
> Note: Rafa presents and closes at 00:59, then `/stop`s the recorder after the last question; Sachin takes the last theory question if there is one. Rafa confirms the breakout groups from the inventories and pins them by 16:45.
