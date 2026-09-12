# S1 — Kits. Slide outline, 60 min (Mon Sep 21, 15:30–16:30 UTC)

Facilitation split: Rafa runs the first minute (welcome, consent), the ice-breaker timing, the exercise and both checks, Async 1 and the close (slides 1–3, 12–15); Sachin presents the theory (slides 4–11: what this is not, both grids, CMM, what a kit is, traces, C3PO, the hard problem) and opens the content right after Rafa's first minute. Rafa keeps #workshop-kitkraft, recorder, rooms and repo, and screen-shares; Sachin takes theory questions in voice. Breakout groups per the groups post in #workshop-kitkraft (`../discord-pins.md`), one per room, breakout-1 … breakout-5. Cut from the 90-min outline: ice-breaker 15→9, situating 15→7, theory 20→14, exercise 30→17, close 5→7. Minute marks are from session start.

## Lede

"Welcome. For the next two days we are not adopting a tool — we are writing down how you already work with AI, until someone else, or someone else's AI assistant, can pick it up and run it without asking you."

## Thesis

Most people using AI well today are doing it privately: a set of prompts, files and habits bent around one job they keep doing, understood by exactly one person. That is not a failure of discipline, it is the stage the technology is in — the parts are loose and nobody has built the standard machine yet. The cost of that stage is that none of it travels: your practice cannot reach anyone else's, and buying another tool does not fix it, because what is missing is not software but a public record and a way in. This hour claims that the way out starts with the cheapest possible move — write your own practice down, in public, in a shape another person's assistant can read — and that the four things you learn to notice while doing it are what let you keep choosing, instead of accepting whatever the next tool assembles around you.

## The argument

1. You are not behind; the technology is early, and we are all still running corn shellers off the back of a Model T (slide 4).
2. What you can notice is what you can still choose, so before naming any tool we name the four things worth noticing (slide 5).
3. Most of us work like a journal — private notes nobody else can pick up — and the one step out is a field notebook, written so someone else can build on it (slide 6).
4. That step has a name in the adoption guide: it is the level the guide calls a kit, and the frontier one level up is a factory (slide 7).
5. So a kit is not a bundle of files but a technology in use before it has settled into a product — your own adaptation, written down (slide 8).
6. Anything written down in a shared place leaves a trace, and traces are how people coordinate without meetings, plans, or being online at the same time (slide 9).
7. One worked example shows the shape: one body of work, three doors onto it, and the doors are what make it reachable (slide 10).
8. But a practice shaped entirely around you stops making sense to anyone else, so sharing needs public records and interfaces, not shared apps (slide 11).
9. So the room writes its practice down in public now — your inventory, in the repo, readable by someone else's assistant — and then finds the two people nearest to you (slides 12–13).

## Slides at a glance

| # | Min | Presenter | On screen | Purpose |
|---|---|---|---|---|
| 1 | 00 | Rafa | Title over the hero image | Say what the two days are and the one rule |
| 2 | 01 | Rafa | Consent notice, text only | Get informed consent on the record |
| 3 | 03 | Rafa | Four posture names, text only | Put every voice in the room once |
| 4 | 12 | Sachin | Kit-phase illustration, four lines | Kill the wrong expectations, set the kit phase |
| 5 | 14 | Sachin | The awareness 2×2 as a table | Give the room four things to notice |
| 6 | 18 | Sachin | The movement 2×2 as a table | Journal to field notebook as today's move |
| 7 | 21 | Sachin | Three-row mapping table | Locate the room: at kit, frontier is factory |
| 8 | 24 | Sachin | Kit definition, template on screen share | Define a kit and show its exact shape |
| 9 | 27 | Sachin | Two kinds of trace, text only | Name how the repo coordinates people |
| 10 | 30 | Sachin | One corpus, three doors, text only | Show a real kit with doors on it |
| 11 | 32 | Sachin | Four lines of the hard problem | Say why private practice does not travel |
| 12 | 35 | Rafa | Block 1 on the screen share | Brief the inventory and start the clock |
| 13 | 48 | Rafa | Block 2 on the screen share | Find the two nearest inventories |
| 14 | 53 | Rafa | The four quadrant names | Take the honest awareness tally |
| 15 | 56 | Rafa | Times and next steps, text only | Hand over Async 1, 1A and S2 |

## Slide 1 — AI Kitcraft: Kit → Factory → Bridge (00:00) (presenter: Rafa)
**On screen.** Headline "AI Kitcraft — Kit → Factory → Bridge" over `site/assets/hero-new-nature.png`; under it "Two days, four sessions, one public repo" · "Today: where you are, what a kit is, your inventory" · "Tonight 20:00 UTC: build the kit. Tomorrow: bridge it, then recap" · "One rule: everything you make lands in the repo".
**Say.** "Welcome. For the next two days we are not adopting a tool — we are writing down how you already work with AI, until someone else, or someone else's AI assistant, can pick it up and run it without asking you. Four sessions of an hour, with work in between, and one public repository that holds everything we make. That is the one rule I will keep repeating: whatever you make lands in the repo."
- Two days, four sessions, one public repo
- Today: where you are, what a kit is, your inventory
- Tonight 20:00 UTC: you build the kit. Tomorrow: bridge it, then recap
- One rule for the room: everything you make lands in the repo
> Note: Rafa opens. Recorder is already on (Rafa started it at 15:28). One minute.

## Slide 2 — Consent (00:01) (presenter: Rafa)
**On screen.** Headline "Consent"; "Voice in #kafka and text in #workshop-kitkraft are recorded and transcribed, with names" · "Transcripts go into the public repo" · "Ask either of us to remove any line, no reason needed" · "Nothing in a public kit you would not put on a public website". Text only; the full notice is already pinned.
**Say.** "Before anything else, the consent notice, and I will read it as it is pinned. The short version: the voice channel and the text channel are recorded and transcribed with your names on them, and the transcripts go into the public repo. You can ask either of us to take any line out at any point, and you do not have to give a reason. If you would rather be off the transcript, say so now."
- Plenary audio in #kafka and all text in #workshop-kitkraft are recorded and transcribed with speaker names; transcripts go to `workshop-dev/transcripts/` in the public repo
- Breakout rooms may be recorded
- Your harness writes log lines into public `LOG.md` files; ask either of us to remove any line, no reason needed
- Put nothing in a public kit you would not put on a public website
- After Tuesday: the repo stays public; the synthesis is posted in #workshop-kitkraft; recordings may be used for broader synthesis for Symposium write-ups and future research — tell us if you want to opt out
> Note: Rafa reads `consent-notice.md` verbatim; it ends with "Recording starts now". Ask "anyone want to be off-transcript?" and wait two seconds.

## Slide 3 — Ice-breaker (00:03) (presenter: Rafa)
**On screen.** Headline "Who is here"; "Name, organisation, one line" · "Your posture from the survey: Partnership · Hypervigilance · Overreliance · Compliance" · "One recent surprise, or one rule you use with AI" · "75 seconds each". Text only; the speaking order goes in #workshop-kitkraft.
**Say.** "Let's go round. Name, where you work and one line about what you do; then the posture you came out as in the survey — Partnership, Hypervigilance, Overreliance or Compliance; then either a recent surprise you had with AI, or one rule you personally follow with it. I will start, and I will keep the clock so everyone gets their turn."
- Name, organisation, one line
- Your posture from the survey: Partnership / Hypervigilance / Overreliance / Compliance
- One recent surprise or one personal protocol you use with AI
- 75 seconds each for six people, 45 seconds for ten or more; Rafa posts the order in #workshop-kitkraft and keeps the time
**Reference.** [AI Co-Working Effectiveness Survey — the four postures](https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843)
> Note: Rafa seeds with water-rate PDFs and the rule "the agent never converts units"; Sachin goes second with his own example. Anyone running long is cut at 90 s. Rafa hands to Sachin at 00:12.

## Slide 4 — What this is not (00:12) (presenter: Sachin)
**On screen.** Headline "What this is not"; "Not workflow optimisation" · "Not build-a-website" · "Not prompt tricks" · "We are in the kit phase; the tractor is not here yet"; visual: `site/assets/kitphase.png`, the technician working hands-on with equipment.
**Say.** "A quick word on what this is not. It is not workflow optimisation, it is not build-a-website, and it is not prompt tricks. Rural Model T owners ran corn shellers off the back axle for years before Ford watched them and built a tractor — real work, done with parts that were never meant for it, which is roughly where all of us are with AI right now. We are in the kit phase, the tractor is not here yet, and the tools that hide the assembly from you are not it."
- Not workflow optimisation, not build-a-website, not prompt tricks
- The tractor: farmers ran corn shellers off jacked-up Model Ts for years before Ford built the tractor. We are in the kit phase; the tractor is not here yet
- Not "adopt a tool": the tools that hide the assembly are the townships
- It is: notice the protocols being assembled around you, and keep the space to choose
- You leave with a folder another person's agent can use
**Reference.** Kline & Pinch, "Users as Agents of Technological Change" (1996) — bibliography entry in `resources.md` §1, no public URL. [Durable AI Adoption, appendix case](https://ai.protocolized.dev/)
> Note: Sachin, two minutes; the tractor is his thesis. He continues straight into slide 5.

## Slide 5 — Frame: the Expanded Awareness 2×2 (00:14) (presenter: Sachin)
**On screen.** Headline "Four things worth noticing"; the grid drawn as a table in the deck; footer "At the end of every hour: which quadrant did it expand?"

|  | **Archive** — what is already there | **Live** — what is happening now |
|---|---|---|
| **External** — the environment | **Precommodification patterns**: the idea you just had is already in the model; provenance, not novelty, is what is scarce | **Traces / pheromones**: what other people's assistants are leaving in shared files, repos and channels |
| **Internal** — you | **Anchored in reality**: your data, your constraints, your domain knowledge, as the check against confident fiction | **Playability**: you can act in the space, not only take things out of it |

**Say.** "Before we name a single tool, let's name what is worth noticing. Two questions: is it outside you or inside you, and is it already fixed or is it happening right now. Outside and fixed: the idea you just had is already in the model, which means novelty is cheap and the record of where something came from is not. Outside and live: the traces other people's assistants leave in shared files. Inside and fixed: what you actually know to be true in your own context. Inside and live: you can play in this space, not just consume from it. At the end of every hour I will ask which of the four that hour expanded."
- Axes: **External / Internal** × **Archive / Live**
- External + Archive: **precommodification patterns** — your idea is already in the latent space; provenance is scarce, not novelty
- External + Live: **traces / pheromones** — what others' agents leave in shared files and repos
- Internal + Archive: **anchored in reality** — your data, constraints, domain knowledge; the check against confident fiction
- Internal + Live: **playability** — you can act in the space, not only consume from it
- We come back to this grid at the end of every session: which quadrant did the last hour expand?
**Reference.** [Ashcroft, Expanding Awareness](https://expandingawareness.org/) · [What is the Alexander Technique?](https://expandingawareness.org/blog/what-is-the-alexander-technique/)
> Note: Ashcroft's internal/external is the borrowed axis; the quadrant names are ours.

## Slide 6 — Positioning: the movement 2×2 (00:18) (presenter: Sachin)
**On screen.** Headline "From journal to field notebook"; the grid drawn as a table in the deck; footer "Your inventory is your field notebook."

|  | **Interior** — kept to yourself | **Exterior** — exposed for others |
|---|---|---|
| **One** observer | Journal | **Field notebook (Humboldt)** — the exposed kit |
| **Many** | Novel | Stigmergy |

**Say.** "The same move, in a different grid. Working alone and keeping it to yourself is a journal, and that is where most AI practice sits today. Working alone but writing it so somebody else can build on it is a field notebook — Humboldt out in the field, recording observations nobody had asked for, in a form other people could use long before anyone coordinated anything. The Institute runs a Humboldt agent that does exactly that, and it is one of the things you could bridge to tomorrow. Today's move is journal to field notebook, and your inventory is the notebook."
- One vs. many × interior vs. exterior
- Journal (one, interior) · Novel (many, interior) · **Field notebook (Humboldt)** — exposed kit as the artifact form (one, exterior) · Stigmergy (many, exterior)
- Field notebook: a single observer facing the world, recording observations in a form others can build on before any coordination exists. Your inventory is your field notebook
- PI's own Humboldt agent is the live example (resources §0) and a bridge target later
- This workshop moves you from journal to field notebook
- Bridges are how field notebooks start behaving stigmergically; traces are what make that quadrant reachable
**Reference.** [Humboldt — PI's artificial researcher](https://humboldt.protocol-institute.org/)
> Note: point at the top-right of the previous grid when saying "traces".

## Slide 7 — CMM ↔ Kit / Factory / Bridge (00:21) (presenter: Sachin)
**On screen.** Headline "Where the room is"; the mapping drawn as a table; footer "The room is at Kit. The frontier is Factory."

| Gate in the adoption guide | This workshop | What it means |
|---|---|---|
| Discover → Encode (L2, cultivated) | **Kit** | your own practice, written down |
| Prove | **Factory** | a way in that someone else can test |
| Harvest | **Bridge** | another factory uses what yours produces |

**Say.** "One slide with two vocabularies, and then we drop one. The adoption guide has five levels and four gates. Working out what you already do and writing it down is what it calls level two — that is our kit. Proving it, by giving it a way in that someone else can test, is a factory, and the guide's own timeline puts factories at 2026 to 2028. So this room is at kit and the frontier is factory. From here on I will only say kit, factory, bridge."
- AI CMM: five levels, governed/cultivated pairs; gates Discover → Encode → Prove → Harvest
- Kit = L2 cultivated = Discover → Encode
- Factory = Prove: an interface someone else can test
- Bridge = Harvest: another factory consumes it
- The room is at Kit; the guide's timeline puts Factories at 2026–28. The frontier is Factory
**Reference.** [Durable AI Adoption (AI CMM)](https://ai.protocolized.dev/) · [PDF](https://ai.protocolized.dev/durable-ai-adoption.pdf)
> Note: this is the one slide with two vocabularies side by side; everything after uses Kit/Factory/Bridge only.

## Slide 8 — What a kit is (00:24) (presenter: Sachin)
**On screen.** Headline "A kit is a technology in use before there is a standard product"; "Loose parts you assemble and adapt to your own job, while the form is still open" · "In AI: the prompts, files and steps you bent around one recurring job" · "Written down: `README.md` for people · `SKILL.md` for the assistant · `examples/` · `LOG.md`" · "A factory is a kit whose way in has settled for other people". Visual: Rafa puts `PARTICIPANT_TEMPLATE/` on the screen share for 20 seconds.
**Say.** "So, a kit. A kit is a technology in use before there is a standard product: loose parts you assemble and adapt to your own job, in your own context, while the form is still open. In AI that is the prompts, the files and the steps you have bent around one thing you keep doing. What you write down today is that adaptation, as a folder — a README for people, a SKILL.md for the assistant, which is just a markdown file saying what the job is and when to use it, and one worked example. That folder shape is an open standard now, so a kit you build today still works in whatever assistant you use next month. Rafa, put the template up: that is the whole spec."
- A technology in use before there is a standard product: loose components a user assembles and adapts to do their own job, in their own context, while the form is still open (interpretive flexibility before closure — Kline & Pinch's rural Model T owners running corn shellers off the rear axle were kit users; the tractor was the consensus that came later)
- In AI today: the prompts, contexts, files and steps you have adapted to one recurring task
- The workshop's artifact — a folder with a README, a SKILL.md and an example — is that adaptation written down so another agent can run it. A factory is a kit whose interface has closed for others
- The artifact's shape: `SKILL.md` for the agent (name, description, when, steps, constraints, do-nots), `README.md` for humans, `examples/`, `LOG.md` — now an open standard: Agent Skills (Anthropic, Dec 2025) stewarded with AGENTS.md under the Linux Foundation's Agentic AI Foundation. If it does not trigger, the fix is the description
- Kits now: you work with archival selves of others through a model that changes. Paper fixes words; LLMs fix the archive, roughly, but not the reader
**Reference.** [Agent Skills specification](https://agentskills.io/specification) · Kline & Pinch (1996), `resources.md` §1 — no public URL
> Note: Rafa puts `PARTICIPANT_TEMPLATE/` on screen for 20 seconds; that is the whole spec.

## Slide 9 — Traces (00:27) (presenter: Sachin)
**On screen.** Headline "How people coordinate without meeting"; "A trace left in a shared medium prompts the next action — no plan, no message, nobody online at the same time" · "The work itself: your kit" · "Signs about the work: your `LOG.md`" · "The repo is the medium". Text only.
**Say.** "There is a word for how this repo is going to work, and it is stigmergy. You leave a trace in a shared medium, and the trace itself prompts somebody else's next action — no plan, no message, nobody online at the same time. Two kinds of trace: the work itself, which is your kit, and signs about the work, which is the line your assistant writes into your LOG.md. The repo is the medium, and we get about two days out of it."
- Heylighen: indirect coordination in which the trace an action leaves in a medium stimulates the next action; no plan, no message, no simultaneous presence
- Sematectonic trace: the work itself — your kit
- Marker-based trace: signs about the work — your `LOG.md`
- The repo is the medium. This workshop is stigmergy with a two-day half-life
**Reference.** [Heylighen, "Stigmergy as a Universal Coordination Mechanism" (PDF)](https://pespmc1.vub.ac.be/Papers/Stigmergy-Springer.pdf)
> Note: the parallel hackathon owns the security side of stigmergy; stay on coordination.

## Slide 10 — Worked example: C3PO (00:30) (presenter: Sachin)
**On screen.** Headline "One corpus, three doors"; "The corpus: the Protocol Institute archive, one ingest pipeline" · "Door 1: a web page" · "Door 2: a Discord bot, @C3PO" · "Door 3: a machine door any assistant can call (MCP)". Text only — the link goes in #workshop-kitkraft, no demo.
**Say.** "One worked example, then we move on. C3PO is one body of text — the Institute's archive — with one pipeline behind it and three doors onto it: a web page for people, a Discord bot for people in a hurry, and a machine door that any assistant can call directly. Same kit, three doors, and the doors are the part that makes it a factory. We are not going to run it now; the shape is the point."
- One corpus (the PI archive), one ingest pipeline
- Three interfaces: web, Discord @C3PO, MCP (`search_corpus`, no key)
- Same kit, three doors; the doors are the factory part
- Not called live today; the shape is the point
**Reference.** [C3PO — How It Works](https://c3po.protocolized.io/how-it-works)
> Note: two minutes. Do not demo.

## Slide 11 — The hard problem (00:32) (presenter: Sachin)
**On screen.** Headline "The hard problem"; "A practice shaped entirely around you stops making sense to anyone else" · "The idea is already in the model; the record of where it came from is not" · "A shopping trolley: fine in the shop, useless in someone else's kitchen" · "Sharing needs public records and ways in, not shared apps". Text only.
**Say.** "Now the problem that makes this hard, and it is the reason the workshop exists. When your setup is shaped entirely around you, it stops making sense to anyone else — Rao's word for that is farmsteading, building a home nobody else can enter. At the same time, the idea you just had is already sitting in the model, so what is scarce is not the idea but the record of where it came from and what you did with it. A shopping trolley is fine in the shop and useless in someone else's kitchen. The way out is not a shared app; it is public records and ways in."
- Bespoke use makes tooling solipsistic: your setup only makes sense to you
- Precommodification (Benny): the idea is already in the model; what is scarce is provenance
- Cognitive farmsteading (Rao): automation, bespokification, pensievification — three ways to build a home nobody else can enter
- Grocery cart: fine to push around the store, useless in someone else's kitchen. Digital homelessness is the other failure
- Sharing needs public records and interfaces, not shared apps
**Reference.** [Benny, "LLMs Pre-Commodify Ideas"](https://summerlightning.substack.com/p/llms-pre-commodify-ideas) · [Rao, "Cognitive Farmsteading"](https://contraptions.venkateshrao.com/p/cognitive-farmsteading) · [Rao, "Digital Homelessness"](https://contraptions.venkateshrao.com/p/digital-homelessness)
> Note: Sachin's section (precommodification and farmsteading are his essays). End on "public records and interfaces"; hand back to Rafa for the exercise.

## Slide 12 — Exercise: your inventory (00:35) (presenter: Rafa)
**On screen.** Headline "Your inventory — 12 minutes"; "Open your harness at the top of the clone" · "Paste Block 1, pinned now, and say 'do this'" · "It writes `participants/<you>/inventory.md`, commits, pushes, reports" · "Everything here is public — put in only what you are happy to share". Visual: Rafa screen-shares Block 1 of `instructions/S1-inventory.md`.
**Say.** "Over to you. Open your harness — the coding assistant you installed — at the top of the clone, paste Block 1, which I am pinning right now, and say 'do this'. It will ask you for three things you do regularly; it will not invent them for you. Two things before you start: everything in this repo is public, so keep anything sensitive in a private folder on your own machine, and if a push fails three times, paste the exact error into the channel instead of fighting it."
- Paste **Block 1** (`instructions/S1-inventory.md`; Rafa pins the link now) into your harness (open at the clone root) and say "do this". It writes `participants/<name>/inventory.md`, commits, pushes, and reports
- Everything in the repo is public. Keep private work in a private workspace on your machine; put in the repo only what you are comfortable sharing.
- 12 minutes. Push failed after three tries? Post the error the harness printed in #workshop-kitkraft; the fix comes back in that thread or at 1A
- Rule: you read other people's inventories only through your agent, never in the browser
- At 00:48 I will give the second prompt
> Note: everyone has a harness; a push that fails is fixed in the #workshop-kitkraft thread or at 1A, never committed for them.

## Slide 13 — Second prompt: the two nearest (00:48) (presenter: Rafa)
**On screen.** Headline "The two nearest"; "Same file — paste Block 2, say 'do this'" · "It pulls, reads every inventory, names the two nearest yours" · "Write those two names down" · "Through your agent, never in the browser". Visual: Rafa screen-shares Block 2 of `instructions/S1-inventory.md`.
**Say.** "Same file, Block 2 this time. Paste it and say 'do this'. It pulls everyone's folders, reads the inventories through your assistant rather than through your browser, and tells you the two people whose work sits nearest to yours. Note those two names down — that is the seed for the groups you will be working in tomorrow."
- Paste **Block 2** (same file) and say "do this". It pulls, reads every inventory, names the two nearest, and checks your `LOG.md` line
- Note the two names; that is the seed for the breakout groups' work tomorrow
- If it reports no log line on GitHub, say so in #workshop-kitkraft
> Note: before Block 2, Rafa posts how many inventories are on `main` so nobody re-pulls needlessly. At 00:52 his agent checks every inventory for a Log line and posts the list; missing lines go to 1A.

## Slide 14 — Awareness check (00:53) (presenter: Rafa)
**On screen.** Headline "Which quadrant did this hour expand?"; the four names, one per line: "Precommodification patterns" · "Traces" · "Anchored in reality" · "Playability"; footer "One word each, in the posted order."
**Say.** "Last thing before I let you go. Which of the four did this hour expand for you — precommodification, traces, anchored in reality, or playability? One word each, in the order I am posting now. There is no right answer, and I am not going to correct anybody."
- Which quadrant did this hour expand? One word each, in the order Rafa posts
- Rafa's agent tallies the answers into #workshop-kitkraft and `workshop-dev/transcripts/S1/awareness-check.md`
- Focus question to carry to tomorrow: how will bridges emerge across the kit era?
> Note: do not correct anyone's quadrant.

## Slide 15 — Async 1 and what is next (00:56) (presenter: Rafa)
**On screen.** Headline "Before tonight"; "Async 1, 17:00–20:00 UTC: paste `instructions/async-1.md`, choose your kit, draft the README's Job and Interface lines, push" · "1A now, 16:30–17:00 UTC, here in #kafka" · "S2 at 20:00 UTC — you build the kit" · "Reading order is pinned; nothing is required". Text only.
**Say.** "Async 1 is three hours, not a whole evening, so it is deliberately small: paste the async block, choose the kit you are going to turn into a factory tonight — your own, or one of ours — and let your assistant draft the first two lines of the README. Push, and stop there. If you are coming to 1A, do it afterwards; 1A starts here in #kafka in a minute, for anything that will not log in, clone or push. We are back at 20:00 UTC, and that is when you build the kit."
- Async 1 is three hours (17:00–20:00 UTC), not an evening: paste `instructions/async-1.md`; choose the kit you will convert into a factory tonight — your own (the `## Kit` task or a `## Built / use` item) or a facilitator kit — and your harness drafts the README's Job and Interface lines. Push. Nothing else
- If you are going to 1A, do this after 1A
- 1A now, 16:30–17:00 UTC, here in #kafka: harness installed but something wrong — auth, clone, branch, one log line, one push
- S2 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): you build the kit. Anyone async for S2: the async post in #workshop-kitkraft
- Take-home reading order is pinned; nothing is required before S2
**Reference.** [Durable AI Adoption, ch. 1–3](https://ai.protocolized.dev/) · [Have Your Factory Call My Factory](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory)
> Note: Rafa presents and closes at 00:59, then `/stop`s the recorder after the last question; Sachin takes the last theory question if there is one. Rafa confirms the breakout groups from the inventories and pins them by 16:45.
