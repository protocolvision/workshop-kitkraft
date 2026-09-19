# AI Kitcraft — Workshop Outline v8

Protocol Symposium 2026 · New Nature · Sep 21–22 (workshop days) · online
Facilitators: Rafa (lead: ops, coordination, exercises), Sachin Benny (co-facilitator: theory). Rafa opens every session with its first minute (welcome, consent, logistics) and owns #workshop-kitkraft, pins, breakouts, recorder and repo; Sachin opens the content right after and presents every conceptual segment (see Facilitation split below); the run-of-shows in `workshop-dev/sessions/` carry a presenter column per slide. Rafa screen-shares throughout; the presenter talks.
Format: four sessions of 60 min plus an optional 30-min tech-support slot (1A), async work between sessions. Designed for breakout groups of 2–4, sized by the facilitators from headcount (6 → two groups of 3; 10 → five pairs or two 3s + two 2s; 12 → four 3s or three 4s).

| Session | UTC | Berlin (+2) | Pacific (−7) |
|---|---|---|---|
| S1 Kits | Mon Sep 21, 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| 1A Tech Support (optional) | Mon Sep 21, 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21, 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22, 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Recap | Tue Sep 22, 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

Venue: Protocol Institute Discord (https://discord.gg/s2WbZBDqM), voice channel **#kafka** for plenary, voice rooms **breakout-1 … breakout-5** for breakout group work, text channel **#workshop-kitkraft** for links and instructions and **#meeting-notes** for the live transcript.
Spine: **Kit → Factory → Bridge** — the third term is the open question the workshop ends on; its definition is left to the logs.
Frame: **Expanded Awareness** — the workshop's stance is awareness of protocols as they are being assembled, not use of tools that hide the assembly. The spine says where you move; the frame says what you notice while moving.

Design constraints fixed by the symposium contract and registration:
- Audience: non-technical operators who have used Claude Code or Codex. GitHub fluency not assumed.
- Public promise: "develop your own kit of AI workflows for your organization"; no special expertise needed.
- Substrate: one public GitHub repo (`workshop-kitkraft`). Every inventory, kit and bridge log lands there. There is no portal; everything in it is public.
- Artifact cadence: something shipped to the repo every 30–45 minutes of live time.
- Agent-actionable everything: every participant-facing artifact (pre-work email included) is written so the participant can hand it to their harness and say "do this" — a ≤5-line human header plus a fenced agent block with a settings line first, preconditions, numbered steps with exact commands, failure handling, do-nots and a report-back. The blocks live in `instructions/`; pins and posts point at them.

---

## Participant outcomes

By the end a participant can:

1. **Locate** their own AI use on the AI CMM and say why the room is at Kit while the frontier is Factory.
2. **Ship** a kit: a folder an arbitrary agent can read to do one scoped job, with a human README and an agent SKILL.md.
3. **Reach** another person's kit through their own agent, and report what a bridge turned out to be.
4. **State** the hard problem: bespoke use makes tooling solipsistic; sharing needs public records and interfaces, not shared apps.
5. **Notice** differently: name which of the four awareness quadrants (precommodification patterns, playability, traces/pheromones, anchoring in reality) their own AI practice was blind to before the workshop.

---

## Pre-work (email sent as registrations arrive, from Sep 15; text in `pre-work-email.md`)

- Step 1, done by the participant, before Friday: install `git` and `gh`, `gh auth login`, `gh auth setup-git`, install a harness (Claude Code needs a Claude Pro/Max subscription; Codex a ChatGPT plan), accept the repo invite. These need the participant's computer password or a browser login; no harness can do them.
- Block A, pasted into the harness: checks the tools and the account, clones if needed, asks, one at a time, about the one to three AI kits the participant already uses (never invents a kit; `none yet` allowed), writes `participants/<name>/s1-inventory/inventory.md` in the one schema, pushes, verifies. This is the first push that the Sep 19 push check looks for and the milestone 1A backstops.
- The one fallback: if the harness is not working by Friday, come to 1A. Every participant has a harness and a GitHub account; there is no path around the harness.
- Take the symposium AI postures survey (Robert Peake); bring your posture.
- Everything in the repo is public; a participant who wants privacy works in a private workspace on their own machine once an exercise begins and puts into the repo only what they are comfortable sharing.
- Read: Durable AI Adoption, chapters 1–3. Optional: skim "Have Your Factory Call My Factory."
- Human-facing line in the email: everything goes to `main`; no branches, no PRs.
- Facilitator prep: see Logistics below (repo ruleset, Discord, recorder, autologging).

---

## Session 1 — Kits (60 min, Mon 15:30 UTC)

Slides and minute table: `workshop-dev/sessions/S1-slides.md`, `workshop-dev/sessions/S1-run-of-show.md`.

**Open and consent (3)** Rafa. One slide of orientation; the consent notice read aloud verbatim (`workshop-dev/sessions/consent-notice.md`), ending "Recording starts now".

**Ice-breaker (9)** Rafa times it. Round-robin at 75 seconds: name, organisation, your AI posture from the survey, one recent surprise or personal protocol for using AI. Facilitators seed (Rafa first with the water-rate rule "the agent never converts units", Sachin second).

**Situating (10)** Sachin: not workflow optimization, not build-a-website; the tractor. Then the two grids, in this order:

*Frame — the Expanded Awareness 2×2.* Some AI tools feel like townships: they hide what is happening. This workshop is the opposite stance: awareness of the protocols being assembled around you, and the space between stimulus and response in which you can still choose (Ashcroft's Alexander Technique framing, extended from bodies to tooling). Axes confirmed: **External / Internal × Archive / Live**.

|  | **Archive** (what is already there) | **Live** (what is happening now) |
|---|---|---|
| **External** (the environment) | **Precommodification patterns** — the idea you just had is already in the latent space; provenance, not novelty, is scarce | **Traces / pheromones** — what others' agents are leaving in shared files, repos, channels; stigmergic signal |
| **Internal** (yourself) | **Anchored in reality** — what is actually real in your context: your data, your constraints, your domain knowledge; the check against the archive's confident fiction | **Playability** — the space is playable; you can act in it, not only consume from it |

The workshop returns to this grid at the end of each session with one question: which quadrant did the last hour expand?

*Positioning — the movement 2×2.* One vs. many × interior vs. exterior: journal / novel / **field notebook (Humboldt)** — exposed kit as the artifact form — / stigmergy. The field notebook is a single observer facing the world, recording observations in a form others can build on before any coordination exists; your inventory is your field notebook, and PI's own Humboldt agent (resources §0) is the live example and a later bridge target. The workshop moves you from journal to field notebook; bridges are how field notebooks start to behave stigmergically. Traces (top-right of the awareness grid) are what make the stigmergy quadrant reachable.

**Theory (14)** Sachin.
- AI CMM levels; Kit is L2 cultivated; the guide's own timeline puts Factories at 2026–28. The room is at Kit, the frontier is Factory. One slide maps the two vocabularies: Discover → Encode = Kit; Prove = Factory (an interface someone else can test); Harvest = Bridge (another factory consumes it).
- What a kit is: A kit is a technology in use before there is a standard product: loose components a user assembles and adapts to do their own job, in their own context, while the technology's form is still open (social construction of technology: interpretive flexibility before closure — Kline & Pinch's rural Model T owners running corn shellers off the rear axle were kit users; the tractor was the product consensus that came later). In AI today, your kit is the set of prompts, contexts, files and steps you have adapted to one recurring task. The workshop's artifact — a folder with a README, a SKILL.md and an example — is that adaptation written down so another agent can run it. A factory — tonight's topic — is a kit that runs without you, bends to whoever uses it, and hands off something others can build on. The artifact's shape: folder + SKILL.md is now an open standard (Agent Skills, stewarded with AGENTS.md under the Agentic AI Foundation, Linux Foundation). Show `PARTICIPANT_TEMPLATE/`.
- Kits now: you work with archival selves of others through a model that changes. Paper fixes words; LLMs fix the archive, roughly, but not the reader.
- Traces, defined: Heylighen — indirect coordination in which the trace an action leaves in a medium stimulates the next action. Two kinds: sematectonic (the work itself: your kit) and marker-based (signs about the work: your `LOG.md`). The repo is the medium; the workshop is stigmergy with a two-day half-life.
- Worked example: C3PO — one corpus, three interfaces (web, Discord, MCP). Shape only, no demo.
- The hard problem (Sachin): precommodification and cognitive farmsteading (bespokification, pensievification, automation). Grocery-cart analogy; digital homelessness. Sharing needs public records and interfaces, not shared apps.

**Exercise — Inventory, Wallfacer-lite (17)** Rafa.
Each participant pastes Block 1 of `instructions/S1-inventory.md` into their harness. It writes `participants/<name>/s1-inventory/inventory.md` in the one schema (the AI kits they already use, one to three, each with what it is, the job, how often, what they adapted, who else uses it and where it lives; the kit to convert; posture; log), commits, pushes with the retry rule, verifies. What counts as a kit is read aloud: any AI setup you have tinkered with to do a real job — a saved or reused prompt, a custom GPT or Claude project, a prompt document you copy from, a spreadsheet or document with an AI step, an automation with an AI step, a skill. The harness asks for anything it does not have and never invents a kit, a field or an example. At minute 13 of the exercise, Block 2: pull, read every other inventory (skipping `_*` folders), name two kits that could complement theirs by what their kits are made of and the job they do, log them.
Anyone whose push fails posts the harness's error in #workshop-kitkraft and gets the fix there or at 1A; nobody's file is committed for them.
Rule: you read other people's inventories only through your agent, never in the browser.
This is the one-way version of the Wallfacer rule: no live coordination needed, but the public-record norm is set on day one. Rafa's agent checks at the close that every `participants/<name>/LOG.md` has a line; missing lines go to 1A.

**Close (7)** Rafa: awareness check, one word each, tallied by his agent into `workshop-dev/transcripts/S1/awareness-check.md`. Focus question: how will bridges emerge across the kit era? Async 1, 1A, S2 time.

**Async 1 (Mon 16:30–20:00 UTC, three hours)** Paste `instructions/async-1.md`: choose the kit to convert in S2 — your own (the kit under `## Kit to convert`, or another under `## Kits I use`) or a facilitator kit (`facilitator/rafa/s2-factory/`, `facilitator/sachin/s2-factory/`; copied into your folder with a `Source:` line) — and draft the README's Job and Interface lines. The participant rewrites the Job line in their own words. Nothing else; the gap is short and 1A sits inside it.

**Breakout groups** are confirmed at S1 close from the inventories (provisional breakout groups come from the registration form on Sep 19) and posted in #workshop-kitkraft by 16:45 UTC (the groups post is the only roster).

---

## Session 1A — Tech Support (optional, Mon 16:30–17:00 UTC, #kafka, not recorded)

Content: `workshop-dev/sessions/1A-clinic.md`. Rafa runs it, including the #workshop-kitkraft threads. For anyone whose harness is installed but something is wrong: no pre-work push, wrong account, wrong clone, wrong branch, push rejected, harness opened outside the clone. No installs beyond the setup checklist's verify block. Eight minutes of naming the failed step, then one pasteable block that runs seven checks with a command and a proof each — tools, login as the right account, invite, clone by origin URL, harness at the clone root reading `AGENTS.md`, one log line, one push verified per file. Exit per person: seven PASS lines. A FAIL on the push means the participant retries at the start of S2 with the fix from their thread. The two things no harness can do (installing git/gh, the browser login) are the pre-work's Item 0; 1A checks them, it does not absorb them.

---

## Session 2 — Factories (60 min, Mon 20:00 UTC)

Slides and minute table: `workshop-dev/sessions/S2-slides.md`, `workshop-dev/sessions/S2-run-of-show.md`.

**Examples (15)**
- Rafa (1): where we are; recording, consent, the S1 tally, the sources chosen. Sachin (1): the kit you picked works because you are there to bend it; tonight's move is to take the author out as a required input.
- Sachin (2): **from shafts to wires**. Factories first electrified with one big motor on the old line shafts (group drive) and almost nothing happened; the gains came with a motor per machine (unit drive), because the floor could be laid out by workflow (Devine 1983; David 1990). Most AI use is the big motor on the old shafts; kit → factory is the unit-drive move at the scale of one practice.
- Sachin (4): **two factories, read through four properties**. Rao → Dixon: Rao's manuscript factory produced intermediates (drafts + metadata), Jenna Dixon's production factory consumed them unchanged through a shared Dropbox folder and a metadata server — it composes through an intermediate and runs without its author; two non-coders, because the scarce thing is coordination, not machinery (Chandler 1977; Hughes 1983 on the reverse salient). The PI brand kit (TITLES → two narrow models → brand kit → Monstrous Times; Jamverse as the fiction-side sibling) is read by an assistant through `llms.txt` → `brand.json` with no human in the loop, and Monstrous Times bends it to a new user by forking. Rao's factory-to-factory link is one observed form of what this workshop calls a bridge; whether it is *the* form is what Tuesday finds out.
- Sachin (4): **what a factory is**. A factory is a kit that runs without its author, bends to its user, and hands off something others can build on. What makes it a factory is what it does, not what it is made of: a skill, a single file that calls a model through MCP or an API, an app, or a website running on a machine can each be one. Four properties, each supplied by someone different: reproduction from the author (the procedure, written down), personalization from the user (their data, constraints and context, at run time), independence from the factory itself (it asks for what it needs), composability from the intermediate (an output another factory can consume, fork, or slot into something larger). Autonomy is a dial across the middle: more of it, fewer questions, more risk of losing the fit. The missing-property table (kit / widget / service / tool) is on screen as given in `workshop-dev/sessions/S2-slides.md` slide 4. Tensions: reproduction vs personalization → postponement (HP's identical printers localized at regional distribution centres; Feitzinger & Lee 1997; Pine 1993) — SKILL.md's steps stay fixed and the user's context enters at run time; composability → fork (copy and bend: tonight) versus compose (consume the intermediate unchanged: S3; Unix pipes agree on one intermediate, McIlroy et al. 1978). The destination is Rao's flexible job shop, not an assembly line (Sabel & Zeitlin 1985).
- Sachin (3): **six moves, and why rung one**. Externalize (Taylor 1911; Polanyi 1966; Nonaka & Takeuchi 1995) → split (Smith's pin factory) → name the output (Chandler) → declare what others may depend on: `Exports:`, `Interface:`, `Adapts to:` (Hounshell 1984; Baldwin & Clark 2000) → test cold (the critique) → stabilize (Parnas 1972). The ladder is the forms a factory can take, ordered by effort — rung 1 a skill (README + SKILL.md handed to an assistant, plus one worked example) → rung 2 a single file that calls a model through MCP or an API → rung 3 an app → rung 4 a website running on a machine — and climbing it buys reach and costs effort without making anything more of a factory. Do not close too early (Bijker 1995; David 1985 on QWERTY): rung one declares the smallest way in and keeps the inside free. For a document kit, the document is the intermediate and the README is the way in. Sources: `workshop-dev/context-tank/resources.md` §3a.

**Exercise — Convert a kit into a factory (20)** Rafa briefs; Sachin takes the last five minutes for the comms layer.
Take one of the kits identified in your inventory — your own (the kit under `## Kit to convert`, or another under `## Kits I use`) or a facilitator kit (`facilitator/rafa/s2-factory/`, `facilitator/sachin/s2-factory/`) — and convert it into a factory, inside `participants/<name>/s2-factory/`, by following the six moves: externalize and split (SKILL.md steps as workstations, taking the user's context at run time rather than the author's), name the output, declare, test cold. Paste the block in `instructions/S2-factory.md`. Deliverable: rung 1, a skill, done properly — README with three declared lines, `Exports:` (the intermediate), `Interface:` (the form and how someone else reaches it) and `Adapts to:` (the context the user brings and where it goes in), SKILL.md whose steps are the workstations and whose description triggers correctly, `examples/input.*` + `output.*` (the exported intermediate) produced cold from SKILL.md; the other forms (a single file that calls a model through MCP or an API, an app, a website running on a machine) are optional stretch. Converting a facilitator kit is a fork: copy it into `participants/<name>/s2-factory/`, adapt inputs, constraints and do-nots to your own organisation and data, declare the three lines, credit the source on the README's first line. The harness works from the participant's answers, never inventing. Artifact: `participants/<name>/s2-factory/` as a factory; commit `S2: <name>: factory from <source>`.
The comms layer, from the anshuc techniques (Sachin, at minute 15 of the build): cut what adds nothing, remove AI tells, rewrite the README in your own words. "Push now" at minute 18; unfinished is fine, absent is not.

**Group critique (13, breakout rooms)** Instructions: `instructions/S2-critique.md`, posted per `breakout-instructions.md`. A ring inside each breakout group (2–4): A reads B, B reads C, …, the last reads A; a pair swaps. The reader's harness pushes its own factory, pulls, reads the target's README and SKILL.md only, and runs two tests, reporting each in at most three lines: (a) independence — can it run the example without asking the owner anything; (b) fit — given one line of the reader's own context through the `Adapts to:` line, does the output suit the reader rather than the owner; the participant reads the report aloud; the owner's harness logs every failure from either test as a `blocker` line. A breakout group missing a member becomes a pair for the night; the absent kit is read async and the report posted in #workshop-kitkraft. Room moves cost about two minutes each way; they are inside the 13.

**Close (10)** Rafa. Round: one sentence each on what the other agent got wrong (≈40 s each). Awareness check, saved to `workshop-dev/transcripts/S2/awareness-check.md`. Async 2 posted verbatim.

**Async 2 (overnight, before Tue 15:30 UTC)** Paste `instructions/async-2.md`: one fix per `blocker` line from either test (README input or `Adapts to:` line, SKILL step or constraint, description line, or example), one `progress` line per fix plus one `memory` line, a cold re-run of the example, push v2. S3 breakout groups (rotated) posted at 09:00 UTC with alternative targets in `facilitator/README.md`.

---

## Session 3 — Bridges (60 min, Tue 15:30 UTC)

Slides and minute table: `workshop-dev/sessions/S3-slides.md`, `workshop-dev/sessions/S3-run-of-show.md`.

**Examples (14)**
- Rafa (1): opener — the question S1 left open: how do two private practices reach each other without a shared app? Output is one file per person, `participants/<you>/s3-bridges/<target>.md`; we do not know yet what it will show.
- Rafa (1): what S2 left in the repo; two anonymised blocker lines on screen; those failures are traces. Hands to Sachin.
- Sachin (3): back to the hard problem — bespoke use makes tooling solipsistic, precommodification means everyone reaches the same ideas, farmsteading makes each practice private; sharing needs public records and interfaces, not shared apps. Bridges are the open question that leaves. First piece of evidence, the Rao–Dixon precedent, in factory terms: intermediates flowing between two job shops; skills as industrial intermediates; high-trust links as the invisible 90%. Rao's factory-to-factory link — two people with significant mutual trust exchanging intermediates between their bespoke infrastructures — is one observed form of what this workshop calls a bridge; whether it is *the* form is what Tuesday finds out.
- Sachin (3): three configurations to try, not a taxonomy — factory → factory (both sides are job shops that declared an `Interface:` for an intermediate; the agent uses the target strictly through it), kit → kit (neither did; the README handed to an agent is the interface, and the log records what a human had to be asked), kit ↔ factory (one side declared; the log records the direction and whether the declared interface was enough). More evidence others have left: stigmergy and traces (Heylighen; the repo as medium), interface standards as what others have tried — the ladder revisited: file handoff → static page → MCP → A2A Agent Card. Name x402 and ERC-8004 once; do not teach them.
- Sachin (3): water-rate pipeline, `facilitator/rafa/s2-factory/`: PDF → registry rows; the interface is the row shape (Rafa answers questions about his kit). Prime Radiant: an example of rung three, not a target.
- Sachin (2): two minutes on trust: when your agent loads someone else's `SKILL.md`, the file is instructions, not documentation (agent context poisoning; 26.1% of 31k public skills carried a vulnerability in one 2026 survey). This room runs on trust and no read-before-load rule is imposed; bridges outside this room cannot, which is why ERC-8004 and the trust-model literature exist. F2F is high-trust by construction.
- Sachin (1): what we are looking for — nobody states a definition; the paragraph each person writes at the end of the breakout ("what a bridge turned out to be") is the data. The logs will tell us.

**Exercise — Build a bridge (1 brief + 40, breakout rooms)** Rafa briefs and runs the rooms; the rotation is pinned beforehand. The brief is a question: can your agent use the target to do one thing yours cannot? Log everything; at the end, write what a bridge turned out to be, in one paragraph.
Target: any kit or factory in the repo — another participant's (kit = `participants/<name>/s2-factory/` without a declared interface; factory = one with an `Interface:` line from S2) or a facilitator's (`facilitator/rafa/s2-factory/`, `facilitator/sachin/s2-factory/`, both factories at rung 1). The groups post gives the default: the kit you did **not** critique; a pair bridges to the partner's kit or a facilitator kit. Three configurations to try — across factories, across kits, or between a kit and a factory; the harness works out which and writes it in the log.
Task: make your agent use the target to do one thing your own kit or factory could not do alone. Paste `instructions/S3-bridge.md`: it copies `PARTICIPANT_TEMPLATE/s3-bridges/TEMPLATE.md` to `participants/<you>/s3-bridges/<target>.md`, asks for the one thing (and refuses to proceed without it), reads the target, works, and stops whenever it needs something not in the repo; the participant gets it from the owner in the room and the harness logs one `unblock` line.
Soft Wallfacer rule: the exchange goes agent → repo → agent; human chat allowed to unblock, but every unblock is logged.
One log per bridge, one writer. At minute 30 the harness stops building and writes "Did it work" and "What a bridge turned out to be" in the participant's words. Push by minute 38.

**Close (5)** Rafa. Reconvene: one line each, "my agent needed ___ from the target and found ___ on its own" (25 s). Awareness check, saved to `workshop-dev/transcripts/S3/awareness-check.md`. Then Sachin states the hypothesis, once, explicitly as a hypothesis to be tested against the logs tomorrow — *a protocol between two factories — the smallest thing both sides agree not to change* — and Rafa pins it. Async 3 (Tue 16:30–20:00 UTC): finish the bridge log, then paste `instructions/S4-show-and-tell.md`, which fills `participants/<you>/s4-show-and-tell/show-and-tell.md` from what the participant already pushed and asks them for the quadrant and the take-back line; push by 20:00; optional hard-mode Wallfacer (agent-only, public record, no human chat) as a second section in the same file.

---

## Session 4 — Recap and showcase (60 min, Tue 20:00 UTC)

Slides, minute table, synthesis procedure, hypothesis rule and awareness tally: `workshop-dev/sessions/S4-slides.md`, `workshop-dev/sessions/S4-run-of-show.md`.

**Open (2)** Rafa. The repo tree on screen: the room's own artifacts are the slides.

**Recap (8)** Sachin. Kit → Factory → Bridge in three files from the repo: one `SKILL.md` v1 next to v2, one README that was the interface, one `unblock` line read aloud.

**Debrief round-robin (14)** Rafa runs the order and the timer. One speaker per bridge log, 90 seconds each, their `participants/<name>/s4-show-and-tell/show-and-tell.md` on screen, so the round takes (number of logs × 1.5 min); an absent participant's show-and-tell file is read by a group-mate in 60 s. Six logs ≈ 9 min plus questions; with 10–15 people, 60 s per bridge and no questions until the showcase. Each report goes into the synthesis (Sachin's agent) as it is spoken.

**Showcase (14)** Rafa. Two bridges that worked, one that did not, the log on screen; chosen at 19:45 with Sachin (the cleanest file handoff, a kit → kit bridge, the one with the most `unblock` lines).

**Synthesis read-back (5)** Sachin. `workshop-dev/transcripts/S4/SYNTHESIS.md` v1, built by Sachin's agent from the repo (`participants/*/LOG.md`, `participants/*/s3-bridges/*.md`, `participants/*/s4-show-and-tell/show-and-tell.md`, `workshop-dev/transcripts/S1–S3/` including the `awareness-check.md` files) plus the live text of #meeting-notes pasted into a scratch file at 20:24, because the S4 transcript only exists after `/stop`. Bridges are tallied by kind (factory → factory, kit → kit, kit ↔ factory) and the hypothesis is tested against all three. Numbers and the paragraphs verbatim; corrections from the room go in live. v2, with the S4 transcript folded in, within 48 h.

**Hypothesis (7)** After the room's paragraphs have been read, Sachin restates the hypothesis from the S3 close, reads the verdict rule, then the table (supports / contradicts / silent per paragraph); the room's definition is recorded next to the verdict. Decision rule: retained if ≥⅔ support and none contradict; amended if supports ≥ contradicts and the contradictions name one missing element; rejected otherwise, and the room's definition wins and is recorded.

**Final awareness round (7)** Rafa. Each participant names the quadrant their practice was blind to on Monday morning; tallied into `SYNTHESIS.md` §5 as the room's awareness profile (S1–S3 checks plus this round; actuals only). An async participant's answer is read from their `show-and-tell.md`.

**Take-home (3)** Rafa. The repo stays public; `SYNTHESIS.md` v2 posted in #workshop-kitkraft within 48 h; the recordings may feed broader synthesis for Symposium write-ups and future research (opt out by telling us). Hard-mode Wallfacer invitation; SIGBIZ show-and-tell as the continuation venue; removal requests any time.

---

## Facilitation split

Rafa runs ops, coordination and the exercises; Sachin presents the theory. Rafa opens every session with its first minute (welcome, consent, logistics) and Sachin opens the content right after (decision by Rafa, Sep 12):
- **Rafa:** the first minute of each session, ice-breaker timing, every exercise briefing, push and log-line checks, breakouts and rooms, the recorder, #workshop-kitkraft and the pins, awareness checks and their tally, async assignments, 1A, the S4 debrief order, showcase and close.
- **Sachin:** every conceptual segment — the thesis and "what this is not", both 2×2s, the CMM mapping, what a kit is, traces, C3PO, the hard problem, the S2 examples and the ladder, the comms layer, the S3 F2F theory, examples, the three kinds of bridge, trust and the hypothesis statement, the S4 recap and synthesis read-back.
Each run-of-show has a Presenter column; that is the column to rehearse from. One screen-sharer per session (Rafa), so handovers cost nothing.

---

## Logistics

### 1. Repository — yes, one

Decision: one public GitHub repo, `workshop-kitkraft`, under the protocolvision org. It is the workshop's public record, the substrate agents read from and write to, and the raw material for the S4 synthesis. There is no portal and no second repo.

Why one repo rather than per-team repos or a shared folder: 10–15 people produce 10–15 kits and 10–15 bridge logs; that is one repo's worth. Per-team repos fragment what agents need to find each other. A shared Drive folder has no history and no agent-native access. The Rao–Dixon case used a shared folder plus a metadata server; the repo is both in one.

Layout:
```
workshop-kitkraft/
  README.md            human entry: what this is, how to add your kit
  AGENTS.md            agent entry: names, push rule, autolog, facilitator clause
  CLAUDE.md            first line: @AGENTS.md
  instructions/        pasteable blocks: orient, S1-inventory, async-1, S2-factory, S2-critique, async-2, S3-bridge, S4-show-and-tell
  PARTICIPANT_TEMPLATE/ the whole participant folder to copy, one subfolder per session exercise:
                         LOG.md, s1-inventory/inventory.md, s2-factory/ (README.md with Exports:, Interface:, Adapts to:, SKILL.md, examples/),
                         s3-bridges/TEMPLATE.md, s4-show-and-tell/show-and-tell.md
  participants/<name>/ one folder per participant, the only place their harness writes:
                         LOG.md (the one autolog, at the root), s1-inventory/inventory.md (S1), s2-factory/ (S2),
                         s3-bridges/<target>.md (S3), s4-show-and-tell/show-and-tell.md (S4); schema in participants/README.md
  facilitator/<name>/  rafa, sachin in the same shape (s2-factory/, LOG.md) as bridge targets; the brand kit by link.
                         Every factory lives at */<name>/s2-factory/, which is how S3 finds targets
  workshop-dev/transcripts/         per session: transcript, summary, awareness-check.md; S4 also SYNTHESIS.md
  workshop-dev/        this outline, checklists, pins, email, sessions/
```

Names: `<name>` is the participant's GitHub username, lowercase, for the folder `participants/<name>/`.

Public by default: everything in the repo is public; there is no per-kit public/private choice. A participant who wants privacy works in a private workspace on their own machine once an exercise begins and puts into the repo only what they are comfortable sharing. Sanitizing is the participant's responsibility; the pre-work email says so (task names and one-line descriptions, no client names or data).

Working mode: every participant opens their harness at the clone root, writes only in `participants/<name>/`, the one folder they own (`AGENTS.md` says so; the boundary is enforced by instruction, not by the working folder), reads anywhere, and pushes to `main`. `AGENTS.md` instructs the harness: commit, `pull --rebase`, push; on rejection pull --rebase and push again; a conflict can only be in your own folder, keep both; never edit outside your folder; never delete. The rehearsal ran six concurrent writers on one branch with one rejection retried three times and no lost work; on the real day only per-person files change, so conflicts are rarer still.

Access: every registrant invited as a collaborator with write access as registrations arrive, no PRs, no branches. A repository ruleset on `main` blocks force-pushes and branch deletion for everyone (facilitators included; a history rewrite for a removal request is done by an admin bypass and noted in `workshop-dev/transcripts/`). Anyone whose push fails brings the error to the #workshop-kitkraft thread or 1A; nobody's file is committed for them. Facilitator prep: create the ruleset, invite registrants as they arrive, confirm at least one push from each by Sep 19; anyone without a push goes to 1A.

### 2. Autologging

The participant template ships a `LOG.md` and the repo-root `AGENTS.md` carries the autolog instruction every harness reads on open (the file is canonical; the outline no longer duplicates it): after every substantive step, one table row `| <ISO timestamp> | <session> | <name> | <type> | <one line> |` to `participants/<name>/LOG.md` (one log per person, no other log files), with `type` ∈ progress | decision | memory | blocker | question | unblock. Never rewrite or delete earlier lines, even on request; removal is a facilitator's hand action. Never log secrets, credentials, client names or personal data.

Participants do nothing; the harness does it. Rafa's agent checks at the S1 close that at least one line exists in each `participants/<name>/LOG.md`, which verifies the instruction fired. The S4 synthesis reads `participants/*/LOG.md`, `participants/*/s3-bridges/*.md`, `participants/*/s4-show-and-tell/show-and-tell.md`, and the session transcripts.

### 3. Discord

- Plenary in **#kafka** voice. Rafa screen-shares.
- Breakout voice rooms **breakout-1 … breakout-5**, one per breakout group or pair. Rafa moves people; the breakout group table is pinned in **#workshop-kitkraft** before each breakout so nobody waits on being moved.
- **#workshop-kitkraft** text: three light pins (`discord-pins.md`: welcome with repo link, times and rooms; consent in five lines with a link to the full notice; the three setup must-haves) and one post per session moment (open, exercise, async, groups, close), each naming the `instructions/` file to paste. Anything that can change lives in the repo, not in a pin.
- **#meeting-notes** text: OpenRecapper live transcript target. Read-only for participants.
- Sessions are on the PI server, so C3PO is one @mention away for anyone stuck on theory.
- Participants set their Discord display name to their `<name>` for the two days so the diarized transcript matches the folder names. A facilitator-only roster (form name, GitHub username, Discord name) lives outside the repo.

### 4. Breakout groups

Breakout groups of 2–4 are the unit. The facilitators size them from headcount (6 → two groups of 3; 10 → five pairs or two 3s + two 2s; 12 → four 3s or three 4s), never a one; at most five rooms, breakout-1 … breakout-5.

- Provisional breakout groups from the registration form (role + the task named) on Sep 19; confirmed or reshuffled at the S1 close from the inventories; pinned by 16:45 UTC Monday. There is no overnight between S1 and S2.
- S2 critique = a ring inside the group: A reads B, B reads C, …, the last reads A; a pair swaps.
- S3 bridge = each person bridges to the kit they did NOT critique (in a group of 3 or 4, the ring reversed or shifted so nobody gets the kit they read); a pair bridges to the partner's kit or to a facilitator kit.
- Absence: a breakout group that loses a member becomes a pair for that session — the two present critique each other; the absent kit is read async when it lands and the report posted in #workshop-kitkraft; in S4 a group-mate reads the absent person's paragraph. A kit that was never critiqued still counts; its S3 bridger is the first cold reader.
- One log per bridge, written by the bridger; nobody else edits it.

Time budget check: S2 20-min build + 13-min critique (room moves inside it) holds at five rooms because the instructions are files, not briefings; no live briefing inside rooms. Facilitators each float across half the rooms and swap once; a room stuck for five minutes gets a facilitator. S4 round-robin at 90 s × 6 bridges = 12 min; at 15 bridges, 60 s each and questions move to the showcase.

### 5. Recording — OpenRecapper

Runbook: `workshop-dev/sessions/recorder-runbook.md` (operator Rafa, backup Sachin). What it is: self-hosted Discord bot; `/record channel:#kafka name:KITCRAFT-S<n>` and `/stop`; per-user tracks, Deepgram diarized transcript on stop, live transcript streamed to #meeting-notes; optional AI summary via a relay; auto-stop when the channel empties and after 20 min of silence.

Constraint that shapes the plan: one bot identity = one voice connection per server, so recording a breakout room needs one extra bot token per room (N+1 apps, Deepgram cost ×N). Default: plenary only, unless extra tokens exist; with one extra token, one sample room per session is recorded. The consent notice already says breakouts may be recorded; the autolog remains the breakout record for the S4 synthesis.

Rules, because of the auto-stop:
- An explicit `/stop` before every breakout and a fresh `/record channel:#kafka name:KITCRAFT-S<n>` at the reconvene, in that order; wait for the first live line before the presenter resumes. Every start and stop is announced in #workshop-kitkraft (`Recording on (KITCRAFT-S<n>)` / `Recording off`).
- A facilitator speaks every ≤15 minutes during silent work (the S1 exercise is 17 near-silent minutes; time calls do this).
- Whether a second `/record` with the same `name:` appends or overwrites is tested at the Sep 17 tech rehearsal; if it overwrites, `KITCRAFT-S2B` and `KITCRAFT-S3B` go into `RECORD_MEETING_NAMES`.
- After each `/stop`, Rafa commits within 30 min: `workshop-dev/transcripts/S<n>/transcript.md` (segments concatenated, boundary marked), `summary.md`, and `awareness-check.md` (the close round's answers tallied by quadrant; the S4 profile needs them). Commit `S<n>: rafa: transcript + summary`.
- S4: the synthesis reads the live channel text pasted at 20:24, since the transcript only exists after `/stop`; v2 within 48 h.

Setup checklist (owner: whoever runs PI's OpenRecapper instance): `RECORD_MEETING_NAMES` includes `KITCRAFT-S1..S4` (and the `B` names if needed); `/record-access grant` to both facilitators; live transcript channel = #meeting-notes; manual `/record`, not `/schedule`; relay configured for the summary or the co-facilitator's agent writes `summary.md`; retention: audio pruned after 7 days, text kept.

Consent: the canonical text is `workshop-dev/sessions/consent-notice.md` — a 45-second read-aloud at the top of S1 (one sentence at the top of S2–S4) and a full notice covering what is recorded (plenary voice and all text in #workshop-kitkraft; breakouts may be recorded; not 1A), where it goes (live channel, public repo, log lines), retention, removal on request with the git-history caveat, opting out without leaving, personal data, and the after-Tuesday disposition.

### 6. Prep timeline

Detail and owners: `prep-checklist.md`.

| Date | Task | Owner |
|---|---|---|
| Sep 12 | Repo `workshop-kitkraft` public with scaffold; ruleset on `main` (block force-push and deletion); no second repo, no portal; public by default | Rafa |
| Sep 13 | Facilitator kits in `facilitator/` (rafa, sachin) as bridge targets | both |
| Sep 14 | Discord: #workshop-kitkraft, #meeting-notes, breakout-1…5; OpenRecapper owner, `RECORD_MEETING_NAMES`, `/record-access` | Rafa |
| Sep 15 → | Pre-work email and collaborator invite to each registrant as registrations arrive | Rafa |
| Sep 17 | Tech rehearsal: clone from a fresh machine/account with the email's Block A; one autolog line; one push; `/record` + `/stop`; a second `/record` with the same name; one breakout move; pins posted to a test channel | both |
| Sep 19 | Push check per registrant; 1A invites; provisional breakout groups from the form | Rafa |
| Sep 20 | Pins 1–3 (welcome, consent, before Monday) in #workshop-kitkraft | Rafa |
| Sep 21 | S1 + 1A; breakout groups confirmed at S1 close and pinned by 16:45; S2 at 20:00 | both |
| Sep 22 | S3, S4; transcripts after each `/stop`; SYNTHESIS v1 at S4, v2 within 48 h, posted in Discord | both |

---

### 7. After Tuesday (decided)

Minimum, and the only thing planned: the repo stays public; `workshop-dev/transcripts/S4/SYNTHESIS.md` v2 with the awareness profile is posted in Discord (#workshop-kitkraft and #symposium-2026) within 48 hours; both facilitators' kits stay as targets. The consent notice says this and one thing more: the workshop recordings may be used for broader synthesis for Symposium write-ups and future research, with opt-out by telling the facilitators. Any further use of the material (a C3PO corpus ingest, a CMM case-study page, a Protocolized post by a participant) would need a new notice and is not promised.

---

## Templates (in repo)

The canonical folder is `PARTICIPANT_TEMPLATE/`, copied whole to `participants/<name>/`; the shapes:

`PARTICIPANT_TEMPLATE/s1-inventory/inventory.md` — Kits I use (one to three, six fields each, or `none yet`) · Kit to convert · Posture. No log section; lines go to `LOG.md`.

`PARTICIPANT_TEMPLATE/s2-factory/README.md` — Source (optional) · Job · For · Inputs · Outputs · Exports · Interface (file handoff / static page / MCP / other) · Adapts to · Example run · Not for.

`PARTICIPANT_TEMPLATE/s2-factory/SKILL.md` — frontmatter `name`, `description` (the trigger line); When to use · Steps · Constraints · Do not.

`PARTICIPANT_TEMPLATE/LOG.md` — `<timestamp> | <session> | <participant> | <type> | <one line>`, append-only, written by the harness.

`PARTICIPANT_TEMPLATE/s3-bridges/TEMPLATE.md` — Writer (one person) · Target kit · Interface used · What my agent needed from the target · What it found on its own · What a human had to supply (one line per unblock) · Did it work · What a bridge turned out to be (one paragraph). Its log lines go to the folder's `LOG.md`.

`PARTICIPANT_TEMPLATE/s4-show-and-tell/show-and-tell.md` — What I made (Job, Exports, link to the factory) · What the critique found (independence, fit, what changed in v2) · The bridge I tried (target, configuration, did it work, link to the log) · What a bridge turned out to be (copied from the bridge log) · Which quadrant my practice was blind to on Monday · One thing I'll take back to work. Filled in Async 3 by `instructions/S4-show-and-tell.md`; read on screen in the S4 debrief and into the synthesis.

---

## Changes from v7 (agent-run rehearsal, Sep 2026)

Observation numbers (OBS, rafa, sachin) refer to the rehearsal's three observation files, linked from the pull request that introduced v8.

- Schedule: S1 is 60 min, not 90 (ice-breaker 9, situating 10, theory 14, exercise 17, close 7); S2 is Monday 20:00 UTC, so Async 1 is a three-hour gap with the README only and Async 2 is the overnight. Header table in UTC/Berlin/Pacific. (OBS 1, 2; rafa 10, 11; sachin 3, 21)
- S2 timing compressed to build 20 / critique 13 with room moves inside / close 10. (sachin 20)
- Triads are the group unit, with the critique ring, the reversed S3 ring, the pair rule and the absence rule; rooms are breakout-1…5. (OBS 3; rafa 13, 16, 27, 33; sachin 5, 7, 8, 10, 11)
- Renamed: "triads" are now "breakout groups" of 2–4, sized from headcount; the ring, reversed-ring, pair and absence rules are stated for any size. (Rafa, Sep 12)
- One log per bridge, one writer. (OBS 7; sachin 9, 11, 39)
- No second repo, no portal. (OBS 8; rafa 6, 15; sachin 4, 23, 30)
- Ruleset on `main`: block force-push and deletion; invites sent as registrations arrive. (OBS 4, 5)
- Push rule with retry and conflict recipe; NAME = GitHub username; facilitator clause; never-delete-a-line rule, in `AGENTS.md`. (OBS 6, 26; rafa 21, 37; sachin 2, 15, 38)
- Agent-actionable everything: `instructions/` folder, blocks with settings first, clone recognised by origin URL, check-before-clone, account check, per-file verify, stop-and-ask for the three tasks, one inventory schema. Pre-work email rewritten with Item 0 (human-only installs), subscription line, local-time line, human "main only" line. (OBS 10–21, 23–25; rafa 36–42; sachin 33–37, 40)
- Recorder: explicit `/stop` before every breakout and re-`/record` at reconvene, a facilitator speaks every ≤15 min, awareness answers saved to `workshop-dev/transcripts/S<n>/awareness-check.md`, same-name re-record tested Sep 17, S4 synthesis from the live channel text with v2 in 48 h. (rafa 22, 23; sachin 12, 13, 14)
- 1A has content: `workshop-dev/sessions/1A-clinic.md`, seven checks with proofs; not recorded. (rafa 29; sachin 29)
- Presenter split by expertise, Sachin opens; presenter column in every run-of-show; one screen-sharer. (rafa 12, 34; sachin 28, 32)
- Every participant has a harness and a GitHub account: the paste-it-and-a-facilitator-pushes path (its instructions file, the email's Block B, the browser-editor mentions) is removed; 1A is for a harness that is installed but not working. (Rafa, Sep 12)
- Public by default: no per-kit public/private choice, no stub READMEs, no transmittal blocks; a participant who wants privacy works in a private workspace on their own machine and puts in the repo only what they are comfortable sharing. (Rafa, Sep 12)
- Bridges: framed on the hard problem of collaboration; the definition is left emergent. No definitional bridge sentence before the S4 close; precedents (Rao–Dixon, stigmergy, interface standards) are evidence to examine; the three kinds are three configurations to try; the hypothesis is stated once, at the S3 close, by Sachin, and tested in S4 after the room's paragraphs. (Rafa, Sep 12)
- S2 theory: factory and F2F defined per "Have Your Factory Call My Factory" — a factory is a flexible job shop producing intermediates; the declared interface is the mechanism by which it exposes one; the S2 exercise is job-shop structure + exported intermediate + declared interface (rung 1 unchanged); the Rao–Dixon case is told in those terms. (Rafa, Sep 12)
- S1 theory: a kit is defined as pre-consensus technology adaptation (SCOT: interpretive flexibility before closure; Kline & Pinch, Bijker), the folder being the adaptation written down; the movement grid's one-maker × exterior quadrant is the field notebook (Humboldt), exposed kit as the artifact form. (Rafa, Sep 12)
- Facilitation split redone: Rafa = ops, coordination and exercises (first minute of each session, checks, rooms, recorder, #workshop-kitkraft, async, 1A, S4 debrief/showcase/close); Sachin = every conceptual segment, opening the content right after Rafa's first minute. (Rafa, Sep 12)
- After Tuesday decided: public repo, synthesis in Discord within 48 h, nothing else; consent notice canonical in `workshop-dev/sessions/consent-notice.md`. (rafa 19, 32; sachin 16, 17)
- Awareness-grid axes confirmed: External/Internal × Archive/Live. (rafa 18)
- Facilitator kits (`rafa`, `sachin`) are the real bridge targets; the S3 target list is trimmed to what exists. (rafa 14; sachin 19)
- Hypothesis decision rule for S4; `Interface:` line in the kit template; synthetic example inputs allowed. (rafa 26; sachin 25, 26)
- Session materials (slides, run-of-shows, 1A, consent, recorder runbook) live in `workshop-dev/sessions/`. (rafa 31, 39)
- S2 exercise: convert an existing kit (own inventory kit or a facilitator kit) into a factory = kit + declared interface; rung 1 default, rungs 2+ stretch; Async 1 chooses the source and drafts Job/Interface. (Rafa, Sep 12)
- One folder per participant: `participants/<name>/` (inventory.md, kit/, bridges/<target>.md, LOG.md), copied whole from `PARTICIPANT_TEMPLATE/`; a single write boundary enforced by `AGENTS.md`, and one log per person. (OBS 7, 22, 51, 53; rafa 16; sachin 11)

- S2 concept rebuilt: a factory is a kit that runs without its author, bends to its user, and hands off something others can build on; four properties (reproduction, personalization, independence, composability) with autonomy as a dial; the missing-property table; postponement, fork vs compose, shafts to wires, job shop, rung one; six moves from kit to factory; `Adapts to:` added to the README; the critique tests independence and fit; S1's factory clause replaced; history sources in `workshop-dev/context-tank/resources.md` §3a. (Rafa, Sep 14)
- Inventory lists the AI kits people already use, not tasks to automate: `## Kits I use` (one to three: what it is, the job, how often, what I adapted, who else uses it, where it lives) · `## Kit to convert` · `## Posture`; the harness never invents a kit and records `none yet` if there is none; Async 1 and S2 take the source from `## Kit to convert`. (Rafa, Sep 15)
- Participant folder by session: `LOG.md` at the root, then `s1-inventory/`, `s2-factory/` (was `kit/`), `s3-bridges/` (was `bridges/`), and a new `s4-show-and-tell/show-and-tell.md` filled in Async 3 by `instructions/S4-show-and-tell.md`; facilitator factories move to `facilitator/<name>/s2-factory/`. (Rafa, Sep 14)

## Changes from v6 (multi-lens review)

- Participant lens: pre-work now asks for three recurring tasks (CMM Discover → Encode gate) so non-builders have kit material; inventory rewritten accordingly.
- Privacy: everything in the repo is public; private work stays in a private workspace on the participant's machine.
- Ops: harness runs inside the clone; own-folder-only; pull --rebase in `AGENTS.md`; facilitator-time arithmetic added to breakouts.
- Theorist: CMM ↔ Kit/Factory/Bridge mapping slide; Heylighen's sematectonic vs. marker-based traces added to S1 theory; a bridge hypothesis stated in S3 and tested in S4 instead of a blank.
- Security: no read-before-load rule (your call); risk taught in two minutes in S3 as the reason trust does not scale. I would still have participants glance at a partner's `SKILL.md` before loading; recorded as dissent, not a change.
- Organizer: §7 added with a minimum and a recommendation, since nothing was planned.

## Changes from v5

- Expanded Awareness 2×2 reinstated as the workshop's frame, placed first in Situating, with a one-question awareness check at each session close and a final round in S4 that produces the room's awareness profile.
- Outcome 5 added.

## Changes from v4

- Added Logistics: single-repo decision, autologging instruction in `AGENTS.md`, Discord layout (#kafka, breakouts, #workshop-kitkraft, #meeting-notes), breakout method, OpenRecapper setup and its one-connection-per-bot constraint, consent, prep timeline.
- Recording scoped to plenary by default; breakouts may be recorded when extra bot tokens exist, and are always recorded through harness autologs.
- S4 synthesis now reads transcripts + autologs + bridge logs.

## Changes from v3 and why

- Audience-driven: exercises rewritten so no step requires reading code or opening GitHub in the browser; facilitators absorb git.
- Wallfacer split into three intensities: one-way in S1 inventory (sets the public-record norm, no coordination risk), soft in S3 (agent-to-repo-to-agent, unblocks logged), hard as opt-in async. This answers the open question on placement: the original instinct to put it in S1 was right for the norm, wrong for the exercise weight.
- Bridge left undefined by design; the S3 log template and the S4 synthesis produce the definition from the work, as requested.
- One 2×2 in S1; Expanded Awareness grid removed from the live sessions.
- "Different software outcomes" outcome now taught by the S2 examples.
- Guest presenters treated as optional with named facilitator fallbacks.
- Standards named at each rung (SKILL.md, MCP, A2A) so the workshop's terms map to what participants will meet outside it.

---

## Assumptions still open

- The C3PO MCP search endpoint (no key, 100 calls/IP/day) stays up if participants use it; it is a theory help, not a bridge target.
- PI's OpenRecapper instance exists, has a Deepgram key with budget, and someone with Manage Server can grant `/record` access by Sep 14.
- S2 and S4 at 22:00–23:00 Berlin will cost some European attendance; the symposium schedule fixes the slots.
- Capacity: 15 is the ceiling at which five rooms, a 13-minute critique and a 14-minute debrief still fit.
