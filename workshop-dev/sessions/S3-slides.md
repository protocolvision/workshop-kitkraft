# S3 — Bridges. Slide outline, 60 min (Tue Sep 22, 15:30–16:30 UTC)

Presenter split: Sachin opens, does the trust two-minutes and briefs the rooms; Rafa does F2F, ladder, water pipeline, Prime Radiant, states the hypothesis, runs the reconvene and the check. Sachin keeps chat, breakouts, recorder, repo. Triads per the S3 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5. Examples 14, exercise brief 1 (rotation is pinned beforehand), breakout 40 (15:45–16:25, Sachin's window), close 5. Rotation and posts: `../breakout-instructions.md`; the block participants paste: `instructions/S3-bridge.md`; these slides repeat them, they do not replace them.

## Slide 1 — S3: Bridges (00:00) (presenter: Sachin)
- Recorder is on; same consent as Monday; breakouts not recorded
- Kit → Factory → **Bridge**: today your agent uses someone else's kit
- Output: one file per person, `participants/<you>/bridges/<target>.md`
> Note: one minute. Sachin has posted the rotation table already.

## Slide 2 — What S2 left in the repo (00:01) (presenter: Rafa)
- One `kit/` per participant folder in `participants/`; the stubs are reachable only through their owner's agent, by design
- Every kit has a `LOG.md` with the failure the critique found; most are description problems
- Those failures are traces: they tell the next agent where the tacit knowledge was
- Kits that landed async overnight count; their bridger is the first cold reader
> Note: read two blocker lines from real LOG.md files on screen. Do not name whose.

## Slide 3 — Factory to factory (00:02) (presenter: Rafa)
- Rao: what flows between factories is intermediates, not finished artifacts
- Skills are industrial intermediates; the kit you wrote is one
- The Rao → Jenna book factory: shared folder + transmittal server, two non-coders, domain knowledge > coding knowledge
- The invisible 90%: high-trust links. F2F works because both sides already trust each other
> Note: three minutes. The transmittal pattern is what any triad with a stub will do by necessity.

## Slide 4 — The interface ladder, revisited (00:05) (presenter: Rafa)
- File handoff (a README a person hands to their agent) → static page → MCP → A2A Agent Card
- Every rung has an open standard: SKILL.md, AGENTS.md, MCP, A2A
- Payments and identity are going to x402 and ERC-8004. Named once, not taught
- The S2 question answered here: a kit that only produces a document has an interface too — the shape of the document is the interface
> Note: the ladder is effort, not virtue. Today everyone is on rung one; that is the correct rung.

## Slide 5 — Example: water-rate PDF → registry row (00:08) (presenter: Rafa)
- `facilitator/rafa/kit/`: a utility's rate schedule PDF in, one CSV row per tier out, appended to a registry
- The interface is the row shape: fixed column order, units copied not converted, page reference required
- Downstream, the registry feeds the water data strategy site; the site never reads a PDF
- A bridge target today: your agent can ask it to produce a row from a PDF excerpt in your own domain
> Note: two minutes; show `examples/output.csv`. Prime Radiant (next slide) is an example only.

## Slide 6 — Example: Prime Radiant (00:10) (presenter: Rafa)
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

## Slide 8 — The bridge hypothesis (00:13) (presenter: Rafa)
- Stated now, tested in S4 against your logs:
- **A bridge is a protocol between two factories — the smallest thing both sides agree not to change**
- If your logs support it, S4 says so. If they do not, your definition wins and the hypothesis is recorded as rejected
> Note: one minute. Say it twice. Sachin pins it.

## Slide 9 — Exercise: build a bridge (00:14) (presenter: Sachin)
- Triads, one per room. Rotation: you bridge to the kit you did **not** critique in S2. S2 critique ring A→B→C→A, so S3 bridges go A→C, B→A, C→B
- `<triad 1>`: A → C's kit · B → A's · C → B's; `<triad 2>`: … (the pinned table). A stub target is bridged through its owner's agent: the transmittal pattern in `bridges/README.md`
- Anyone may swap their target for `facilitator/rafa/kit/` or `facilitator/sachin/kit/`; nobody critiqued those
- Task: make your agent use the target kit to do one thing your own kit cannot do alone. Fill TARGET and TASK in the block in `instructions/S3-bridge.md` (pinned as a link), paste it, say "do this". It opens `participants/<you>/bridges/<target>.md`; you are its only writer
- Rule: agent → repo → agent. Human chat only to unblock, and every unblock is one `unblock` line in your log
- At minute 30 of the breakout, stop building; write "Did it work" and "What a bridge turned out to be", one paragraph each. Push by minute 38
> Note: Sachin briefs, one minute; the table is already pinned. He opens the rooms at 00:15 sharp.

## Slide 10 — Reconvene: one line each (00:55) (presenter: Rafa)
- "My agent needed ___ from the target and found ___ on its own"
- 25 seconds each; Sachin posts the order
- Stub bridges: say what the transmittal pattern cost you in unblock lines
> Note: three minutes total for six; with ten or more, 15 s each. Cut on time; the paragraph in the log is the long version.

## Slide 11 — Awareness check and Async 3 (00:58) (presenter: Rafa (check) / Sachin (async, S4 logistics))
- Which quadrant did this hour expand? One word each. Expected: traces — what the other kit left for your agent, and what it did not
- Async 3 (16:30–20:00 UTC): finish the bridge log, push. Optional hard-mode Wallfacer: redo the bridge agent-only, public record, no human chat; log it as a second section in the same file (`bridges/README.md`)
- S4 at 20:00 UTC (22:00 Berlin, 13:00 Pacific): 90 seconds per bridge, then the room's definition against the hypothesis
> Note: end at 00:59. Sachin `/stop`s.
