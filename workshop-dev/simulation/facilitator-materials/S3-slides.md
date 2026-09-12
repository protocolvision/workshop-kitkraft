# S3 — Bridges. Slide outline, 60 min (Tue Sep 22, 15:30–16:30 UTC)

Facilitation split from S2 on: Rafa opens (slides 1–2), briefs the exercise, runs the rooms, the reconvene, the check and the close, and keeps #kitcraft, breakouts, recorder, repo and the screen share; Sachin presents the theory (slides 3–8) right after Rafa's first two minutes. Cohort: 6, two triads, rooms breakout-1 and breakout-2. Examples 14, exercise brief 1 (rotation is pinned beforehand), breakout 40 (15:45–16:25, Rafa's window), close 5. Rotation and prompts: Sachin's `breakout-instructions-triads.md`; these slides repeat them, they do not replace them.

## Slide 1 — S3: Bridges (00:00) (presenter: Rafa)
- Recorder is on; same consent as Monday; breakouts not recorded
- Kit → Factory → **Bridge**: today your agent uses someone else's kit or factory — across factories, across kits, or kit ↔ factory
- Output: one file per person, `participants/<you>/bridges/<target>.md`
> Note: one minute. Rafa has posted the rotation table already.

## Slide 2 — What S2 left in the repo (00:01) (presenter: Rafa)
- Four kit folders in `participants/*/kit/` (Kwame and Aiko withdrew after S1; their inventories stay); one is a stub (Marisol's content stays on her machine by design; her kit is reachable only through her agent)
- Every kit has a `LOG.md` with the failure the critique found; most were description problems
- Those failures are traces: they tell the next agent where the tacit knowledge was
- Two of six withdrew Monday; the record keeps their inventories, readable by any agent
> Note: read two blocker lines from real LOG.md files on screen. Do not name whose.

## Slide 3 — Factory to factory (00:02) (presenter: Sachin)
- Rao: what flows between factories is intermediates, not finished artifacts
- Skills are industrial intermediates; the kit you wrote is one
- The Rao → Jenna book factory: shared folder + transmittal server, two non-coders, domain knowledge > coding knowledge
- The invisible 90%: high-trust links. F2F works because both sides already trust each other
> Note: three minutes. The transmittal pattern is what Marisol's triad will do by necessity.

## Slide 4 — Three kinds of bridge (00:05) (presenter: Sachin)
- Any kit or factory in the repo is a target: a **kit** has no declared interface; a **factory** has an `Interface:` line (S2); both facilitator kits are factories at rung 1
- **Factory → factory:** both sides declared; your agent uses the target strictly through its declared interface
- **Kit → kit:** neither declared; the interface IS the README a person hands to their agent — your agent reads README + SKILL.md cold and the log records what it had to ask a human
- **Kit ↔ factory:** one side declared; the log records which direction and whether the declared interface was enough
- Underneath, the ladder revisited: file handoff (a README a person hands to their agent) → static page → MCP → A2A Agent Card
- Every rung has an open standard: SKILL.md, AGENTS.md, MCP, A2A
- Payments and identity are going to x402 and ERC-8004. Named once, not taught
- Kwame's question from S2 answered here: a kit that only produces a document has an interface too — the shape of the document is the interface
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
- Tomás's invented "cite Wikipedia" line from S2 is the benign version of the problem
> Note: Sachin's two minutes (skills as intermediates, context poisoning). Recorded dissent from the v6 review: glance at the partner's SKILL.md before loading. Recommended, not required.

## Slide 8 — The bridge hypothesis (00:13) (presenter: Sachin)
- Stated now, tested in S4 against your logs:
- **A bridge is a protocol between two factories — the smallest thing both sides agree not to change**
- Tested against all three kinds; the kit → kit bridges test it hardest. If your logs support it, S4 says so. If they do not, your definition wins and the hypothesis is recorded as rejected
> Note: one minute. Say it twice. Rafa pins it.

## Slide 9 — Exercise: build a bridge (00:14) (presenter: Rafa)
- Triads, in breakout-1 and breakout-2. Rotation: you bridge to the kit you did **not** critique in S2. S2 critique ring X→Y→Z→X (Sachin's `breakout-instructions-triads.md`), so S3 bridges go X→Z, Y→X, Z→Y
- Pair 1: Ingrid → Dev's kit · Dev → Ingrid's. Pair 2: Tomás → Marisol's kit (stub, content on her machine: through Marisol's agent, transmittal pattern) · Marisol → Tomás's. [pre-cut triad text follows] Triad 1: Ingrid → Marisol's kit · Dev → Ingrid's · Marisol → Dev's
- Triad 2: Tomás → Sachin's kit (`facilitator/sachin/kit/`, his choice) · Kwame → Aiko's · Aiko → Kwame's
- Any kit or factory in the repo is a valid target; the pairs above are the default. Anyone may swap their target for `facilitator/rafa/kit/` or `facilitator/sachin/kit/`; nobody critiqued those. Your harness works out the kind (factory-factory / kit-kit / kit-factory) and writes it in the log
- Task: make your agent use the target to do one thing your own kit or factory cannot do alone. Fill TARGET and TASK in the block in `S3-agent-prompts.md` (pinned), paste it, say "do this". It opens `participants/<you>/bridges/<target>.md`; you are its only writer
- Rule: agent → repo → agent. Human chat only to unblock, and every unblock is one `unblock` line in your log
- At minute 30 of the breakout, stop building; write "Did it work" and "What a bridge turned out to be", one paragraph each. Push by minute 38
> Note: Rafa briefs, one minute; the table is already pinned. He opens the rooms at 00:15 sharp. Aiko is live for this session.

## Slide 10 — Reconvene: one line each (00:55) (presenter: Rafa)
- "My agent needed ___ from the target and found ___ on its own"
- Four people, 25 seconds each; Rafa posts the order
- Marisol and Ingrid: say what the transmittal pattern cost you in unblock lines
> Note: three minutes total. Cut at 25 s; the paragraph in the log is the long version.

## Slide 11 — Awareness check and Async 3 (00:58) (presenter: Rafa)
- Which quadrant did this hour expand? One word each. Expected: traces — what the other kit left for your agent, and what it did not
- Async 3 (16:30–20:00 UTC): finish the bridge log, push. Optional hard-mode Wallfacer: redo the bridge agent-only, public record, no human chat; log it as a second section in the same file (Sachin's instructions)
- S4 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): 90 seconds per bridge, then the room's definition against the hypothesis
> Note: end at 00:59. Rafa `/stop`s.
