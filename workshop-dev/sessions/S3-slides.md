# S3 — Bridges: how do two private practices reach each other? Slide outline, 60 min (Tue Sep 22, 15:30–16:30 UTC)

Facilitation split: Rafa opens (slides 1–2: the question, what S2 left in the repo), briefs the exercise, runs the rooms, the reconvene, the check and the close, and keeps #kitcraft, breakouts, recorder, repo and the screen share. Sachin presents the theory (slides 3–8: the hard problem again, the precedents as evidence, three configurations to try, the examples, trust, what we are looking for) starting right after Rafa's first two minutes, and states the hypothesis once at the close (slide 11). Breakout groups per the S3 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5. Evidence 14, exercise brief 1 (rotation is pinned beforehand), breakout 40 (15:45–16:25, Rafa's window), close 5. Rotation and posts: `../breakout-instructions.md`; the block participants paste: `instructions/S3-bridge.md`; these slides repeat them, they do not replace them. Tone: we do not know yet; the logs will tell us. Nothing before the close defines a bridge.

## Slide 1 — S3: how do two private practices reach each other? (00:00) (presenter: Rafa)
- Recorder is on; same consent as Monday; breakouts not recorded
- Monday's hard problem left one question open: how do two private practices reach each other without a shared app? Today we try it: your agent uses someone else's kit or factory
- Output: one file per person, `participants/<you>/bridges/<target>.md`, ending in a paragraph on what a bridge turned out to be. We do not know yet what those paragraphs will say
> Note: one minute. Rafa has posted the rotation table already.

## Slide 2 — What did S2 leave in the repo? (00:01) (presenter: Rafa)
- One `kit/` per participant folder in `participants/`; the stubs are reachable only through their owner's agent, by design
- Every kit has a `LOG.md` with the failure the critique found; most are description problems
- Those failures are traces: they tell the next agent where the tacit knowledge was
- Kits that landed async overnight count; their bridger is the first cold reader
> Note: read two blocker lines from real LOG.md files on screen. Do not name whose. Hand to Sachin at 00:02.

## Slide 3 — The hard problem, again: what did Rao and Dixon actually agree on? (00:02) (presenter: Sachin)
- Bespoke use makes tooling solipsistic; precommodification means we all reach the same ideas; farmsteading makes each practice private. Sharing needs public records and interfaces, not shared apps. Bridges are the question that leaves
- First piece of evidence: Rao's manuscript factory → Jenna Dixon's production factory. What flowed was intermediates (drafts + metadata), not the finished book; the shared folder + metadata server was the interface; two non-coders, domain knowledge > coding knowledge
- The invisible 90%: high-trust links. Two people with significant mutual trust exchanging intermediates between bespoke infrastructures — one observed form of what we are calling a bridge. Whether it is *the* form is what today finds out
- Skills are industrial intermediates; the kit you wrote is one
> Note: three minutes. Evidence, not an answer. The transmittal pattern is what any breakout group with a stub will do by necessity.

## Slide 4 — Which configuration will you try? (00:05) (presenter: Sachin)
- Any kit or factory in the repo is a target: a **kit** has no declared interface; a **factory** has an `Interface:` line (S2); both facilitator kits are factories at rung 1
- Three configurations to try, not a taxonomy:
- **Factory → factory:** both sides are job shops that declared an interface for an intermediate (Rao's sense); your agent uses the target strictly through its declared interface
- **Kit → kit:** neither declared; the interface IS the README a person hands to their agent — your agent reads README + SKILL.md cold and the log records what it had to ask a human
- **Kit ↔ factory:** one side declared; the log records which direction and whether the declared interface was enough
- More evidence others have left: stigmergy — the trace an action leaves in a medium stimulates the next action (Heylighen), and the repo is the medium; the transmittal pattern — a stub answered by its owner; interface standards as what others have tried — file handoff → static page → MCP → A2A Agent Card, each with an open standard (SKILL.md, AGENTS.md, MCP, A2A). Payments and identity are going to x402 and ERC-8004; named once, not taught
- The S2 question answered here: a kit that only produces a document has an interface too — the shape of the document is the interface
> Note: the ladder is effort, not virtue. Today everyone is on rung one; that is the correct rung.

## Slide 5 — Example: water-rate PDF → registry row (00:08) (presenter: Sachin)
- `facilitator/rafa/kit/`: a utility's rate schedule PDF in, one CSV row per tier out, appended to a registry
- The interface is the row shape: fixed column order, units copied not converted, page reference required
- Downstream, the registry feeds the water data strategy site; the site never reads a PDF
- A bridge target today: your agent can ask it to produce a row from a PDF excerpt in your own domain
> Note: two minutes; Rafa puts `examples/output.csv` on screen and answers questions about his kit. Prime Radiant (next slide) is an example only.

## Slide 6 — Example: Prime Radiant (00:10) (presenter: Sachin)
- A factory with a citable query layer: 255 machine cards, DuckDB, a 17-tool query layer
- Not a target today: no external interface is confirmed. It shows what rung three looks like
> Note: one minute.

## Slide 7 — Two minutes on trust (00:11) (presenter: Sachin)
- When your agent loads someone's `SKILL.md`, the file is instructions, not documentation
- Agents cannot tell developer instructions from third-party instructions in context (CSA, May 2026)
- One 2026 survey: 26.1% of 31,132 public skills carried at least one vulnerability
- This room runs on trust; no read-before-load rule is imposed. Outside this room that does not scale, which is why ERC-8004 and the trust-model literature exist
- A SKILL.md line that reaches outside the kit's job (an invented "always cite X" rule, say) is the benign version of the problem; you may have met one in the critique
> Note: Sachin's two minutes (skills as intermediates, context poisoning). Recorded dissent from the v6 review: glance at the partner's SKILL.md before loading. Recommended, not required.

## Slide 8 — What are we looking for? (00:13) (presenter: Sachin)
- We are not handing you a definition. The paragraph you write at the end of the breakout — "what a bridge turned out to be" — is the data; tomorrow we read all of them before anyone says anything
- Watch for: what your agent needed from the target, what it found on its own, what a human had to supply, what stayed fixed between the two sides
- The precedents on the last slides are evidence to check against your log, not answers
> Note: one minute. No hypothesis here; it comes once, at the close, and we say so.

## Slide 9 — Exercise: can your agent use theirs? (00:14) (presenter: Rafa)
- Breakout groups of 2–4, one per room. Any kit or factory in the repo is a valid target; the pinned default is the kit you did **not** critique in S2; a pair bridges to the partner's kit or a facilitator kit. Your harness works out which configuration it is (factory-factory / kit-kit / kit-factory) and writes it in the log
- `<group 1>`: A → C's kit · B → A's · C → B's; `<group 2>`: … (the pinned table). A stub target is bridged through its owner's agent: the transmittal pattern in `instructions/S3-bridge.md`
- Anyone may swap their target for `facilitator/rafa/kit/` or `facilitator/sachin/kit/`; nobody critiqued those
- The question: make your agent use the target to do one thing yours cannot; log everything. Fill TARGET and TASK in the block in `instructions/S3-bridge.md` (pinned as a link), paste it, say "do this". It opens `participants/<you>/bridges/<target>.md`; you are its only writer
- Rule: agent → repo → agent. Human chat only to unblock, and every unblock is one `unblock` line in your log
- At minute 30 of the breakout, stop building; write "Did it work" and "What a bridge turned out to be", one paragraph each, in your own words. Push by minute 38
> Note: Rafa briefs, one minute; the table is already pinned. He opens the rooms at 00:15 sharp.

## Slide 10 — Reconvene: what did your agent need? (00:55) (presenter: Rafa)
- "My agent needed ___ from the target and found ___ on its own"
- 25 seconds each; Rafa posts the order
- Stub bridges: say what the transmittal pattern cost you in unblock lines
> Note: three minutes total for six; with ten or more, 15 s each. Cut on time; the paragraph in the log is the long version.

## Slide 11 — Awareness check, one hypothesis, Async 3 (00:58) (presenter: Rafa; hypothesis: Sachin)
- Which quadrant did this hour expand? One word each. Expected: traces — what the other kit left for your agent, and what it did not
- Sachin, once, as a hypothesis to test against your logs tomorrow — not a definition: *a protocol between two factories — the smallest thing both sides agree not to change*. Rafa pins it. Tomorrow we read your paragraphs first, then this
- Async 3 (16:30–20:00 UTC): finish the bridge log, push. Optional hard-mode Wallfacer: redo the bridge agent-only, public record, no human chat; log it as a second section in the same file (`instructions/S3-bridge.md`)
- S4 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): 90 seconds per bridge, then your paragraphs against the hypothesis
> Note: end at 00:59. Rafa `/stop`s.
