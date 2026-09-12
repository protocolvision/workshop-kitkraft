# S3 — Bridges: how do two private practices reach each other? Slide outline, 60 min (Tue Sep 22, 15:30–16:30 UTC)

Facilitation split: Rafa opens (slides 1–2: the question, what S2 left in the repo), briefs the exercise, runs the rooms, the reconvene, the check and the close, and keeps #workshop-kitkraft, breakouts, recorder, repo and the screen share. Sachin presents the theory (slides 3–8: the hard problem again, the precedents as evidence, three configurations to try, the examples, trust, what we are looking for) starting right after Rafa's first two minutes, and states the hypothesis once at the close (slide 11). Breakout groups per the S3 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5. Evidence 14, exercise brief 1 (groups are posted beforehand), breakout 40 (15:45–16:25, Rafa's window), close 5. Rotation and posts: `../breakout-instructions.md`; the block participants paste: `instructions/S3-bridge.md`; these slides repeat them, they do not replace them. Tone: we do not know yet; the logs will tell us. Nothing before the close defines a bridge.

## Lede

Yesterday each of you built something only you can run — and the question that leaves is whether anyone else can reach it, which is what this hour is for.

## Thesis

We do not have a definition yet, and we are not going to hand you one. The workshop's spine is Kit → Factory → Bridge, and the third term is deliberately still open: we know the hard problem it has to answer — bespoke practice makes tooling private, so sharing needs public records and interfaces rather than a shared app — and we know a handful of cases where people have made something like it work. What we do not know is what it actually is when a room of non-technical operators tries it on a Tuesday afternoon with their own kits. So this session is arranged the other way round from the usual: you get the problem, the evidence, three configurations to try and forty minutes, and the paragraph each of you writes at the end of the breakout — "what a bridge turned out to be" — is the finding. Tomorrow we read those paragraphs before anybody, us included, says a word.

## The argument

1. Monday ended on a question nobody in the room has answered: how do two private practices reach each other without a shared app (slide 1).
2. The material for answering it is already in the repo, including the failures S2's critique found, which mark exactly where the knowledge stayed in somebody's head (slide 2).
3. The hard problem says why a shared app is not the answer, and one documented case shows two people moving intermediates between bespoke setups instead (slide 3).
4. So there are three configurations you might be in, and other people have left traces and standards you can check your own log against (slide 4).
5. One target is open to you today and its interface is nothing more exotic than the shape of a row (slide 5).
6. Another is further along and not open, which shows you what the far end of the same road looks like (slide 6).
7. Whichever target you pick, your agent will load somebody else's instructions, so trust is part of the mechanics rather than an aside (slide 7).
8. Which is why what we want from you is your paragraph and not our definition (slide 8).
9. So go and find out: make your agent use the target to do one thing yours cannot, log every unblock, and write the paragraph in your own words (slide 9).

## Slides at a glance

| # | Min | Presenter | On screen | Purpose |
|---|---|---|---|---|
| 1 | 00:00 | Rafa | Text only, question headline | Open, consent, name today's output |
| 2 | 00:01 | Rafa | Two real `LOG.md` lines | Show the material already in the repo |
| 3 | 00:02 | Sachin | Text only, essay title | Restate the hard problem; first evidence |
| 4 | 00:05 | Sachin | Two small tables in deck | Three configurations; what others tried |
| 5 | 00:08 | Sachin | Rafa's kit and `output.csv` | A target with a visible interface |
| 6 | 00:10 | Sachin | Prime Radiant site | What rung three looks like |
| 7 | 00:11 | Sachin | Text only, two numbers | Trust as part of the mechanics |
| 8 | 00:13 | Sachin | Text only, four prompts | Name the data we want back |
| 9 | 00:14 | Rafa | `instructions/S3-bridge.md` | Brief the exercise, open rooms |
| 10 | 00:55 | Rafa | Sentence frame, text only | Collect what each agent needed |
| 11 | 00:58 | Rafa / Sachin | Hypothesis line, text only | Check, hypothesis once, Async 3 |

## Slide 1 — S3: how do two private practices reach each other? (00:00) (presenter: Rafa)
**On screen.** Headline "How do two private practices reach each other?" Under it: "Recorder is on — same consent as Monday" · "Your agent uses someone else's kit today" · "Output: `participants/<you>/bridges/<target>.md`". Text only.
**Say.** Recording has started, same consent as Monday, and breakouts may be recorded too. Monday's hard problem left one question open, and it is the one on the slide: how do two private practices reach each other without a shared app? Today we try it rather than answer it — your agent uses someone else's kit or factory, and by half past you each have a file that ends in a paragraph on what a bridge turned out to be.
- Recorder is on; same consent as Monday; breakouts may be recorded
- Monday's hard problem left one question open: how do two private practices reach each other without a shared app? Today we try it: your agent uses someone else's kit or factory
- Output: one file per person, `participants/<you>/bridges/<target>.md`, ending in a paragraph on what a bridge turned out to be. We do not know yet what those paragraphs will say
> Note: one minute. Rafa has posted the groups already.

## Slide 2 — What did S2 leave in the repo? (00:01) (presenter: Rafa)
**On screen.** Screen share, live: the repo's `participants/` tree, then two anonymised blocker lines from real `participants/*/LOG.md` files, scrolled to. Headline "What S2 left in the repo".
**Say.** Here is what you built yesterday: one kit per folder, and in every `LOG.md` the failure the critique found. Look at these two lines — I am not saying whose — because almost all of them are description problems, not code problems. That makes them useful today: a failure is a trace, and it tells the next agent exactly where the knowledge was still in somebody's head.
- One `kit/` per participant folder in `participants/`
- Every kit has a `LOG.md` with the failure the critique found; most are description problems
- Those failures are traces: they tell the next agent where the tacit knowledge was
- Kits that landed async overnight count; their bridger is the first cold reader
> Note: read two blocker lines from real LOG.md files on screen. Do not name whose. Hand to Sachin at 00:02.

## Slide 3 — The hard problem, again: what did Rao and Dixon actually agree on? (00:02) (presenter: Sachin)
**On screen.** Headline "The hard problem, again". Three short lines: "Bespoke use → private practice" · "Sharing needs public records and interfaces, not shared apps" · "Evidence 1: manuscript factory → production factory". Text only, with the essay title credited at the foot.
**Say.** Go back to where Monday ended. Bespoke use makes your tooling solipsistic, precommodification means we all arrive at roughly the same ideas, and farmsteading makes each practice private — so sharing has to run on public records and interfaces, not on everybody adopting the same app. That is the problem; bridges are the question it leaves. The first piece of evidence is Rao's manuscript factory handing work to Jenna Dixon's production factory: what moved was intermediates, drafts and metadata, not the finished book, and neither of them was a coder.
- Bespoke use makes tooling solipsistic; precommodification means we all reach the same ideas; farmsteading makes each practice private. Sharing needs public records and interfaces, not shared apps. Bridges are the question that leaves
- First piece of evidence: Rao's manuscript factory → Jenna Dixon's production factory. What flowed was intermediates (drafts + metadata), not the finished book; the shared folder + metadata server was the interface; two non-coders, domain knowledge > coding knowledge
- The invisible 90%: high-trust links. Two people with significant mutual trust exchanging intermediates between bespoke infrastructures — one observed form of what we are calling a bridge. Whether it is *the* form is what today finds out
- Skills are industrial intermediates; the kit you wrote is one
**Reference.** [Have Your Factory Call My Factory](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory) · [Cognitive Farmsteading](https://contraptions.venkateshrao.com/p/cognitive-farmsteading) · [LLMs Pre-Commodify Ideas](https://summerlightning.substack.com/p/llms-pre-commodify-ideas)
> Note: three minutes. Evidence, not an answer.

## Slide 4 — Which configuration will you try? (00:05) (presenter: Sachin)
**On screen.** Two small tables drawn in the deck. Left: the three configurations — factory → factory, kit → kit, kit ↔ factory — with a one-line "what the interface is" column. Right: the ladder, file handoff → static page → MCP → A2A Agent Card, one standard name per rung. Headline "Three configurations to try".
**Say.** A target is any kit or factory in the repo, and the difference is one line: a factory declared an `Interface:` in S2, a kit did not. That gives three configurations you might find yourself in, and I want to be clear that this is a list of things to try, not a taxonomy — your harness works out which one you are in and writes it down. Other people have left evidence you can check your own log against: stigmergy, where the trace an action leaves in a medium prompts the next action, and a ladder of interface standards that climbs from a file handoff to an agent card. Everyone here is on rung one today, which is the right rung.
- Any kit or factory in the repo is a target: a **kit** has no declared interface; a **factory** has an `Interface:` line (S2); both facilitator kits are factories at rung 1
- Three configurations to try, not a taxonomy:
- **Factory → factory:** both sides are job shops that declared an interface for an intermediate (Rao's sense); your agent uses the target strictly through its declared interface
- **Kit → kit:** neither declared; the interface IS the README a person hands to their agent — your agent reads README + SKILL.md cold and the log records what it had to ask a human
- **Kit ↔ factory:** one side declared; the log records which direction and whether the declared interface was enough
- More evidence others have left: stigmergy — the trace an action leaves in a medium stimulates the next action (Heylighen), and the repo is the medium; interface standards as what others have tried — file handoff → static page → MCP → A2A Agent Card, each with an open standard (SKILL.md, AGENTS.md, MCP, A2A). Payments and identity are going to x402 and ERC-8004; named once, not taught
- The S2 question answered here: a kit that only produces a document has an interface too — the shape of the document is the interface
**Reference.** [Stigmergy as a universal coordination mechanism (Heylighen)](https://pespmc1.vub.ac.be/Papers/Stigmergy-Springer.pdf) · one standard per rung: [Agent Skills](https://agentskills.io/specification) · [AGENTS.md](https://agents.md/) · [MCP](https://modelcontextprotocol.io/specification/2025-06-18) · [A2A](https://a2a-protocol.org/latest/specification/) · [x402](https://www.x402.org/) · [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) · the rung-by-rung table: `../resources.md` §4
> Note: the ladder is effort, not virtue. Today everyone is on rung one; that is the correct rung.

## Slide 5 — Example: water-rate PDF → registry row (00:08) (presenter: Sachin)
**On screen.** Screen share, live: `facilitator/rafa/kit/README.md` with its `Interface:` line highlighted, then `facilitator/rafa/kit/examples/output.csv`. Headline "PDF in, one row per tier out".
**Say.** Here is a target that is open to all of you. Rafa's kit takes a utility's rate schedule PDF and produces one CSV row per tier, appended to a registry — and the interface is nothing more exotic than the shape of that row: fixed column order, units copied and never converted, a page reference required. Downstream the registry feeds a public site that never reads a PDF at all. If you want a target today, your agent can ask this one to produce a row from a PDF excerpt in your own domain.
- `facilitator/rafa/kit/`: a utility's rate schedule PDF in, one CSV row per tier out, appended to a registry
- The interface is the row shape: fixed column order, units copied not converted, page reference required
- Downstream, the registry feeds the water data strategy site; the site never reads a PDF
- A bridge target today: your agent can ask it to produce a row from a PDF excerpt in your own domain
**Reference.** [Water Data Strategy](https://npc.here.now/waterdatastrategy/)
> Note: two minutes; Rafa puts `examples/output.csv` on screen and answers questions about his kit. Prime Radiant (next slide) is an example only.

## Slide 6 — Example: Prime Radiant (00:10) (presenter: Sachin)
**On screen.** Screen share, live: the Prime Radiant site, one scroll down the machine cards. Headline "Prime Radiant — rung three, not a target". Two lines under it: "255 machine cards, DuckDB, a 17-tool query layer" · "No confirmed external interface — look, do not bridge".
**Say.** For contrast, this one is much further along: 255 machine cards behind a query layer you can cite. It is not a target today, because no external interface is confirmed and I am not going to send fifteen agents at something that has not agreed to receive them. Look at it as the far end of the same road.
- A factory with a citable query layer: 255 machine cards, DuckDB, a 17-tool query layer
- Not a target today: no external interface is confirmed. It shows what rung three looks like
**Reference.** [Prime Radiant](https://primeradiant.worldmachines.org/)
> Note: one minute.

## Slide 7 — Two minutes on trust (00:11) (presenter: Sachin)
**On screen.** Headline "Two minutes on trust". Three lines: "Their `SKILL.md` is instructions, not documentation" · "Agents cannot tell whose instructions are whose (CSA, May 2026)" · "26.1% of 31,132 public skills carried at least one vulnerability". Text only; the two numbers large.
**Say.** Two minutes on something you should know before your agent reads a stranger's folder. When it loads someone's `SKILL.md`, that file arrives as instructions, not as documentation, and the agent has no reliable way to tell a third party's instructions from yours. One survey this year found a vulnerability in 26.1% of 31,132 public skills. This room runs on trust, so I am not imposing a read-before-load rule — but that is a property of this room, not of the world, which is why identity and trust standards are being built at all.
- When your agent loads someone's `SKILL.md`, the file is instructions, not documentation
- Agents cannot tell developer instructions from third-party instructions in context (CSA, May 2026)
- One 2026 survey: 26.1% of 31,132 public skills carried at least one vulnerability
- This room runs on trust; no read-before-load rule is imposed. Outside this room that does not scale, which is why ERC-8004 and the trust-model literature exist
- A SKILL.md line that reaches outside the kit's job (an invented "always cite X" rule, say) is the benign version of the problem; you may have met one in the critique
**Reference.** [CSA: Agent Context Poisoning — SKILL.md and the new AI supply chain attack surface](https://labs.cloudsecurityalliance.org/research/csa-research-note-skill-md-agent-context-poisoning-20260506/) · [Agent Skills in the Wild — 26.1% of 31,132 skills](https://safedep.io/agent-skills-threat-model/) · [Inter-Agent Trust Models (Hu & Rong, ERC-8004 and beyond)](https://arxiv.org/pdf/2511.03434)
> Note: Sachin's two minutes (skills as intermediates, context poisoning). Recorded dissent from the v6 review: glance at the partner's SKILL.md before loading. Recommended, not required.

## Slide 8 — What are we looking for? (00:13) (presenter: Sachin)
**On screen.** Headline "What we are looking for". Four short prompts as a list: "What did your agent need from the target?" · "What did it find on its own?" · "What did a human have to supply?" · "What stayed fixed between the two sides?" Text only.
**Say.** We are not handing you a definition, and that is not modesty — the paragraph you write at the end of the breakout is the data, and tomorrow we read all of them before anyone says anything. While you work, watch for these four things: what your agent needed from the target, what it found on its own, what a person had to supply, and what stayed fixed between the two sides. Everything on the last few slides is evidence to check your own log against, not an answer to match.
- We are not handing you a definition. The paragraph you write at the end of the breakout — "what a bridge turned out to be" — is the data; tomorrow we read all of them before anyone says anything
- Watch for: what your agent needed from the target, what it found on its own, what a human had to supply, what stayed fixed between the two sides
- The precedents on the last slides are evidence to check against your log, not answers
> Note: one minute. No hypothesis here; it comes once, at the close, and we say so.

## Slide 9 — Exercise: can your agent use theirs? (00:14) (presenter: Rafa)
**On screen.** Screen share, live: the pinned S3 groups post in #workshop-kitkraft, then `instructions/S3-bridge.md` scrolled to the TARGET / TASK settings line, then `PARTICIPANT_TEMPLATE/bridges/TEMPLATE.md`. Headline "Can your agent use theirs? 40 minutes".
**Say.** Your group and your target are in the pinned post; the default is the kit you did not critique, and anyone can swap to a facilitator kit, because nobody critiqued those. Open `instructions/S3-bridge.md`, fill in TARGET and the one thing your kit cannot do alone, paste it and say "do this" — it will refuse to invent the task, so that part is yours. The rule is agent → repo → agent: talk to a human only to unblock, and every unblock becomes one line in your log. At minute 30 stop building and write the two paragraphs; push by 38.
- Breakout groups of 2–4, one per room. Any kit or factory in the repo is a valid target; the pinned default is the kit you did **not** critique in S2; a pair bridges to the partner's kit or a facilitator kit. Your harness works out which configuration it is (factory-factory / kit-kit / kit-factory) and writes it in the log
- Targets as pinned in #workshop-kitkraft (the S3 groups post is the only roster).
- Anyone may swap their target for `facilitator/rafa/kit/` or `facilitator/sachin/kit/`; nobody critiqued those
- The question: make your agent use the target to do one thing yours cannot; log everything. Fill TARGET and TASK in the block in `instructions/S3-bridge.md` (pinned as a link), paste it, say "do this". It opens `participants/<you>/bridges/<target>.md`; you are its only writer
- Rule: agent → repo → agent. Human chat only to unblock, and every unblock is one `unblock` line in your log
- At minute 30 of the breakout, stop building; write "Did it work" and "What a bridge turned out to be", one paragraph each, in your own words. Push by minute 38
> Note: Rafa briefs, one minute; the table is already pinned. He opens the rooms at 00:15 sharp.

## Slide 10 — Reconvene: what did your agent need? (00:55) (presenter: Rafa)
**On screen.** Headline as the sentence frame, large: "My agent needed ___ from the target and found ___ on its own." Under it: "25 seconds each — order in #workshop-kitkraft". Text only.
**Say.** Welcome back. One line each, and I am going to hold you to twenty-five seconds, because the long version is already in your log. Fill in the sentence on the screen: my agent needed this from the target, and found this on its own. Order is posted in the channel.
- "My agent needed ___ from the target and found ___ on its own"
- 25 seconds each; Rafa posts the order
> Note: three minutes total for six; with ten or more, 15 s each. Cut on time; the paragraph in the log is the long version.

## Slide 11 — Awareness check, one hypothesis, Async 3 (00:58) (presenter: Rafa; hypothesis: Sachin)
**On screen.** Headline "One word, one hypothesis, Async 3". The four quadrant names in a row; then the hypothesis sentence, boxed and labelled "hypothesis — to test against your logs"; then "Async 3, by 20:00 UTC: finish the log, push" and "S4 at 20:00 UTC · 22:00 Berlin · 13:00 Pacific". Text only.
**Say.** One word each: which quadrant did this hour expand? Then Sachin has one sentence, said once — and note that it is a hypothesis we are going to test against your logs tomorrow, not a definition of the thing you just built. Tomorrow we read your paragraphs first and this second, in that order, and if they disagree your paragraphs win. Before 20:00, finish the log and push; the hard-mode rerun is optional and goes in the same file.
- Which quadrant did this hour expand? One word each
- Sachin, once, as a hypothesis to test against your logs tomorrow — not a definition: *a protocol between two factories — the smallest thing both sides agree not to change*. Rafa pins it. Tomorrow we read your paragraphs first, then this
- Async 3 (16:30–20:00 UTC): finish the bridge log, push. Optional hard-mode Wallfacer: redo the bridge agent-only, public record, no human chat; log it as a second section in the same file (`instructions/S3-bridge.md`)
- S4 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): 90 seconds per bridge, then your paragraphs against the hypothesis
> Note: end at 00:59. Rafa `/stop`s.
