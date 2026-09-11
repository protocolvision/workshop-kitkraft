# S3 — Bridges. Slide outline, 60 min (Tue Sep 22, 15:30–16:30 UTC)

Lead: Rafa. Co-facilitator: Sachin (chat, breakouts, recorder, repo). Cohort: 6, two triads, rooms breakout-1 and breakout-2. Examples 15, exercise brief 3, breakout 36, close 6.

## Slide 1 — S3: Bridges (00:00)
- Recorder is on; same consent as Monday; breakouts not recorded
- Kit → Factory → **Bridge**: today your agent uses someone else's kit
- Output: one file per person, `bridges/<you>-<target>.md`
> Note: one minute. Sachin has posted the rotation table already.

## Slide 2 — What S2 left in the repo (00:01)
- Six kit folders in `kits/`; one is a stub (Marisol's content is private and the private repo does not exist, so her kit is reachable only through her agent)
- Every kit has a `LOG.md` with the failure the critique found; most were description problems
- Those failures are traces: they tell the next agent where the tacit knowledge was
- Aiko's kit landed at 00:00 UTC, async; it counts
> Note: read two blocker lines from real LOG.md files on screen. Do not name whose.

## Slide 3 — Factory to factory (00:03)
- Rao: what flows between factories is intermediates, not finished artifacts
- Skills are industrial intermediates; the kit you wrote is one
- The Rao → Jenna book factory: shared folder + transmittal server, two non-coders, domain knowledge > coding knowledge
- The invisible 90%: high-trust links. F2F works because both sides already trust each other
> Note: three minutes. The transmittal pattern is what Marisol's triad will do by necessity.

## Slide 4 — The interface ladder, revisited (00:06)
- File handoff (a README a person hands to their agent) → static page → MCP → A2A Agent Card
- Every rung has an open standard: SKILL.md, AGENTS.md, MCP, A2A
- Payments and identity are going to x402 and ERC-8004. Named once, not taught
- Kwame's question from S2 answered here: a kit that only produces a document has an interface too — the shape of the document is the interface
> Note: the ladder is effort, not virtue. Today everyone is on rung one; that is the correct rung.

## Slide 5 — Example: water-rate PDF → registry row (00:09)
- `facilitator/rafa-kit/`: a utility's rate schedule PDF in, one CSV row per tier out, appended to a registry
- The interface is the row shape: fixed column order, units copied not converted, page reference required
- Downstream, the registry feeds the water data strategy site; the site never reads a PDF
- A bridge target today: your agent can ask it to produce a row from a PDF excerpt in your own domain
> Note: two minutes; show `examples/output.csv`. Prime Radiant (next slide) is an example only.

## Slide 6 — Example: Prime Radiant (00:11)
- A factory with a citable query layer: 255 machine cards, DuckDB, a 17-tool query layer
- Not a target today: no external interface is confirmed. It shows what rung three looks like
> Note: one minute.

## Slide 7 — Two minutes on trust (00:12)
- When your agent loads someone's `SKILL.md`, the file is instructions, not documentation
- Agents cannot tell developer instructions from third-party instructions in context (CSA, May 2026)
- One 2026 survey: 26.1% of 31,132 public skills carried at least one vulnerability
- This room runs on trust; no read-before-load rule is imposed. Outside this room that does not scale, which is why ERC-8004 and the trust-model literature exist
- Tomás's invented "cite Wikipedia" line from S2 is the benign version of the problem
> Note: two minutes, no more. Recorded dissent from the v6 review: glance at the partner's SKILL.md before loading. I recommend it; I do not require it.

## Slide 8 — The bridge hypothesis (00:14)
- Stated now, tested in S4 against your logs:
- **A bridge is a protocol between two factories — the smallest thing both sides agree not to change**
- If your logs support it, S4 says so. If they do not, your definition wins and the hypothesis is recorded as rejected
> Note: one minute. Say it twice. Sachin pins it.

## Slide 9 — Exercise: build a bridge (00:15)
- Triads, in breakout-1 and breakout-2. Rotation: you bridge to the kit you did **not** critique in S2. Assumed S2 critique ring X→Y→Z→X, so S3 bridges go X→Z, Y→X, Z→Y (Sachin confirms against the actual S2 assignment before posting)
- Triad 1: Ingrid → Marisol's kit (stub: through Marisol's agent, transmittal pattern) · Dev → Ingrid's · Marisol → Dev's
- Triad 2: Tomás → Sachin's kit (`facilitator/sachin-kit/`, his choice) · Kwame → Aiko's · Aiko → Kwame's
- Anyone may swap their target for `facilitator/rafa-kit/` or `facilitator/sachin-kit/`; nobody critiqued those
- Task: make your agent use the target kit to do one thing your own kit cannot do alone. Copy `bridges/TEMPLATE.md` to `bridges/<you>-<target>.md`; you are its only writer
- Rule: agent → repo → agent. Human chat only to unblock, and every unblock is one `unblock` line in your log
- At minute 33 of the breakout, stop and write "What a bridge turned out to be" in one paragraph. Push
> Note: three minutes. Instructions are pinned; nobody briefs inside the rooms. Aiko is live for this session.

## Slide 10 — Reconvene: one line each (00:54)
- "My agent needed ___ from the target and found ___ on its own"
- Six people, 30 seconds each; Sachin posts the order
- Marisol and Ingrid: say what the transmittal pattern cost you in unblock lines
> Note: three minutes. Cut at 30 s; the paragraph in the log is the long version.

## Slide 11 — Awareness check and Async 3 (00:57)
- Which quadrant did this hour expand? One word each. Expected: traces — what the other kit left for your agent, and what it did not
- Async 3 (16:30–20:00 UTC): finish the bridge log, push. Optional hard-mode Wallfacer: redo the bridge agent-only, public record, no human chat, and log it as a second file `bridges/<you>-<target>-hard.md`
- S4 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): 90 seconds per bridge, then the room's definition against the hypothesis
> Note: end at 00:59. Sachin `/stop`s.
