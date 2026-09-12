# AI Kitcraft — Workshop Outline v8

Protocol Symposium 2026 · New Nature · Sep 21–22 (workshop days) · online
Facilitators: Rafa (lead), Sachin Benny (co-facilitator). Sachin opens every session and owns chat, pins, breakouts, recorder and repo; presenting is split by section (see Presenter split below), and the run-of-shows in `sessions/` carry a presenter column per slide. Sachin screen-shares throughout; the presenter talks.
Format: four sessions of 60 min plus an optional 30-min clinic, async work between sessions. Designed for triads; two triads for 6, triads + pairs for 10–15.

| Session | UTC | Berlin (+2) | Pacific (−7) |
|---|---|---|---|
| S1 Kits | Mon Sep 21, 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| 1A Beginner clinic (optional) | Mon Sep 21, 16:30–17:00 | 18:30–19:00 | 09:30–10:00 |
| S2 Factories | Mon Sep 21, 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |
| S3 Bridges | Tue Sep 22, 15:30–16:30 | 17:30–18:30 | 08:30–09:30 |
| S4 Recap | Tue Sep 22, 20:00–21:00 | 22:00–23:00 | 13:00–14:00 |

Venue: Protocol Institute Discord (https://discord.gg/s2WbZBDqM), voice channel **#kafka** for plenary, voice rooms **breakout-1 … breakout-5** for triad work, text channel **#kitcraft** for links and instructions and **#kitcraft-transcripts** for the live transcript.
Spine: **Kit → Factory → Bridge**
Frame: **Expanded Awareness** — the workshop's stance is awareness of protocols as they are being assembled, not use of tools that hide the assembly. The spine says where you move; the frame says what you notice while moving.

Design constraints fixed by the symposium contract and registration:
- Audience: non-technical operators who have used Claude Code or Codex. GitHub fluency not assumed.
- Public promise: "develop your own kit of AI workflows for your organization"; no special expertise needed.
- Substrate: one public GitHub repo (`workshop-kitkraft`). Every inventory, kit and bridge log lands there. There is no portal and no private repo.
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

- Item 0, by hand, before Friday: install `git` and `gh`, `gh auth login`, `gh auth setup-git`, install a harness (Claude Code needs a Claude Pro/Max subscription; Codex a ChatGPT plan), accept the repo invite. These need the participant's computer password or a browser login; no harness can do them.
- Block A, pasted into the harness: checks the tools and the account, clones if needed, asks for three recurring tasks (never drafts them), asks public or private, writes `inventory/<name>.md` in the one schema, pushes, verifies. This is the first push that the Sep 19 push check looks for and the milestone 1A backstops.
- Block B, by hand, for anyone with no working harness or no GitHub account: the same file written by hand and pasted in #kitcraft; a facilitator commits it (`instructions/no-harness.md`).
- Take the symposium AI postures survey (Robert Peake); bring your posture.
- Decide public or private kit. Private: content stays on the participant's machine, stub README in the repo, bridges through the owner's agent.
- Read: Durable AI Adoption, chapters 1–3. Optional: skim "Have Your Factory Call My Factory."
- Human-facing line in the email: everything goes to `main`; no branches, no PRs.
- Facilitator prep: see Logistics below (repo ruleset, Discord, recorder, autologging).

---

## Session 1 — Kits (60 min, Mon 15:30 UTC)

Slides and minute table: `sessions/S1-slides.md`, `sessions/S1-run-of-show.md`.

**Open and consent (3)** Sachin. One slide of orientation; the consent notice read aloud verbatim (`sessions/consent-notice.md`), ending "Recording starts now".

**Ice-breaker (9)** Sachin. Round-robin at 75 seconds: name, organisation, your AI posture from the survey, one recent surprise or personal protocol for using AI. Facilitators seed (Sachin first, Rafa second with the water-rate rule "the agent never converts units").

**Situating (10)** Sachin: not workflow optimization, not build-a-website; the tractor. Rafa: two grids, in this order:

*Frame — the Expanded Awareness 2×2.* Some AI tools feel like townships: they hide what is happening. This workshop is the opposite stance: awareness of the protocols being assembled around you, and the space between stimulus and response in which you can still choose (Ashcroft's Alexander Technique framing, extended from bodies to tooling). Axes confirmed: **External / Internal × Archive / Live**.

|  | **Archive** (what is already there) | **Live** (what is happening now) |
|---|---|---|
| **External** (the environment) | **Precommodification patterns** — the idea you just had is already in the latent space; provenance, not novelty, is scarce | **Traces / pheromones** — what others' agents are leaving in shared files, repos, channels; stigmergic signal |
| **Internal** (yourself) | **Anchored in reality** — what is actually real in your context: your data, your constraints, your domain knowledge; the check against the archive's confident fiction | **Playability** — the space is playable; you can act in it, not only consume from it |

The workshop returns to this grid at the end of each session with one question: which quadrant did the last hour expand?

*Positioning — the movement 2×2.* One vs. many × interior vs. exterior: journal / novel / **exposed kit** / stigmergy. The workshop moves you from journal to exposed kit; bridges are how exposed kits start to behave stigmergically. Traces (top-right of the awareness grid) are what make the stigmergy quadrant reachable.

**Theory (14)** Rafa, then Sachin for the hard problem.
- AI CMM levels; Kit is L2 cultivated; the guide's own timeline puts Factories at 2026–28. The room is at Kit, the frontier is Factory. One slide maps the two vocabularies: Discover → Encode = Kit; Prove = Factory (an interface someone else can test); Harvest = Bridge (another factory consumes it).
- What a kit is: folder + SKILL.md is now an open standard (Agent Skills, stewarded with AGENTS.md under the Agentic AI Foundation, Linux Foundation). A kit is encoded domain knowledge, not code. Show `KIT_TEMPLATE/`.
- Kits now: you work with archival selves of others through a model that changes. Paper fixes words; LLMs fix the archive, roughly, but not the reader.
- Traces, defined: Heylighen — indirect coordination in which the trace an action leaves in a medium stimulates the next action. Two kinds: sematectonic (the work itself: your kit) and marker-based (signs about the work: your `LOG.md`). The repo is the medium; the workshop is stigmergy with a two-day half-life.
- Worked example: C3PO — one corpus, three interfaces (web, Discord, MCP). Shape only, no demo.
- The hard problem (Sachin): precommodification and cognitive farmsteading (bespokification, pensievification, automation). Grocery-cart analogy; digital homelessness. Sharing needs public records and interfaces, not shared apps.

**Exercise — Inventory, Wallfacer-lite (17)** Rafa.
Each participant pastes Block 1 of `instructions/S1-inventory.md` into their harness. It writes `inventory/<name>.md` in the one schema (three recurring tasks with the two tests, built/use, the kit and public/private, posture, log), commits, pushes with the retry rule, verifies. The harness asks for anything it does not have and never drafts a task. At minute 13 of the exercise, Block 2: pull, read every other inventory (skipping `_*.md`), name the two nearest, log them.
Fallback for anyone whose harness cannot push: paste the file in #kitcraft; Sachin commits it under their name. Anyone without a harness follows `instructions/no-harness.md`.
Rule: you read other people's inventories only through your agent, never in the browser.
This is the one-way version of the Wallfacer rule: no live coordination needed, but the public-record norm is set on day one. Sachin's agent checks at the close that every inventory has a `## Log` line; missing lines go to 1A.

**Close (7)** Rafa: awareness check, one word each, saved by Sachin to `transcripts/S1/awareness-check.md`. (Expected: precommodification — reading others' inventories through your agent shows how much overlaps.) Focus question: how will bridges emerge across the kit era? Sachin: Async 1, 1A, S2 time.

**Async 1 (Mon 16:30–20:00 UTC, three hours, README only)** Paste `instructions/async-1.md`: the harness copies `KIT_TEMPLATE/` to `kits/<name>/` and fills `README.md` from the inventory (every template field; stub only if private). The participant rewrites the Job line and the least-sure field by hand. Nothing else; the gap is short and 1A sits inside it.

**Triads** are confirmed at S1 close from the inventories (provisional triads come from the registration form on Sep 19) and pinned in #kitcraft by 16:45 UTC.

---

## Session 1A — Beginner clinic (optional, Mon 16:30–17:00 UTC, #kafka, not recorded)

Content: `sessions/1A-clinic.md`. Lead: Rafa; Sachin in #kitcraft for pushes. For anyone whose pre-work push did not happen or whose harness opened outside the clone. Eight minutes by hand (say the failed step; install a harness if none), then one pasteable block that runs seven checks with a command and a proof each — tools, login as the right account, invite, clone by origin URL, harness inside the clone reading `AGENTS.md`, one log line, one push verified per file. Exit per person: seven PASS lines. A FAIL on the push means Sachin commits the file under that name and the participant retries at the start of S2. The two things no harness can do (installing git/gh, the browser login) are the pre-work's Item 0; 1A checks them, it does not absorb them.

---

## Session 2 — Factories (60 min, Mon 20:00 UTC)

Slides and minute table: `sessions/S2-slides.md`, `sessions/S2-run-of-show.md`.

**Examples (15)**
- Sachin (3): where we are; the S1 tally; a kit is what stays after the agent has failed at it once.
- Rafa (4): book factory, F2F case: Rao's manuscript factory → Jenna's production factory; handoff = shared folder + transmittal server; two non-coders; domain knowledge > coding knowledge. This is the shape of every bridge tomorrow.
- Sachin (4): Protocolized visual identity: TITLES, two narrow models, PI brand kit → Monstrous Times; Jamverse as the fiction-side sibling. The brand kit is already a factory (`llms.txt` → `brand.json`). Derivative worlds; standards that no longer need to be uniform.
- Rafa (4): **factory** = kit with an interface. Interfaces in ascending order of effort: README a person hands to their agent → static page → MCP → API. Every kit in this repo is rung one; the template's `Interface:` line says `file handoff`. For a document kit, the shape of the document is the interface.

**Exercise — Build the kit (20)** Rafa briefs; Sachin takes the last five minutes for the comms layer.
Paste the block in `kits/README.md`. The harness fills `SKILL.md` (name, description as the trigger line, when to use, steps, constraints, do-nots) and `examples/` (one input — a text extract or synthetic input is fine — and its output) from the participant's answers, never inventing. Private kit: content on the machine, stub and LOG.md in the repo.
The comms layer, from the anshuc techniques (Sachin, at minute 15 of the build): cut what adds nothing, remove AI tells, rewrite the README by hand. "Push now" at minute 18; unfinished is fine, absent is not.

**Triad critique (13, breakout rooms)** Instructions: `instructions/S2-critique.md`, posted per `breakout-instructions.md`. Ring inside each triad: A reads B, B reads C, C reads A; a pair reads each other. The reader's harness pushes its own kit, pulls, reads the target cold, runs the example, reports in five lines; the participant reads the report aloud; the owner's harness logs each failure as a `blocker` line. A stub kit goes to the strongest reader, whose agent reports what it would need. A triad missing a member becomes a pair for the night; the absent kit is read async and the report posted in #kitcraft. Room moves cost about two minutes each way; they are inside the 13.

**Close (10)** Sachin. Round: one sentence each on what the other agent got wrong (≈40 s each). Awareness check, saved to `transcripts/S2/awareness-check.md`. (Expected: anchored in reality — the agent failed where your domain knowledge was tacit.) Async 2 posted verbatim.

**Async 2 (overnight, before Tue 15:30 UTC)** Paste `instructions/async-2.md`: one fix per `blocker` line (README input, SKILL step or constraint, description line, or example), one `progress` line per fix plus one `memory` line, a cold re-run of the example, push v2. S3 triads (rotated) posted at 09:00 UTC with alternative targets in `facilitator/README.md`.

---

## Session 3 — Bridges (60 min, Tue 15:30 UTC)

Slides and minute table: `sessions/S3-slides.md`, `sessions/S3-run-of-show.md`.

**Examples (14)**
- Sachin (1): opener; output is one file per person, `bridges/<you>-<target>.md`.
- Rafa (1): what S2 left in the repo; two anonymised blocker lines on screen; those failures are traces.
- Rafa (3): F2F theory: intermediates flowing between factories; skills as industrial intermediates; high-trust links as the invisible 90%. The transmittal pattern is what any triad with a stub will do by necessity.
- Rafa (3): interface ladder revisited: file handoff → static page → MCP → A2A Agent Card. Name x402 and ERC-8004 once as where payments and identity are going; do not teach them.
- Rafa (3): water-rate pipeline, `facilitator/rafa-kit/`: PDF → registry rows; the interface is the row shape. Prime Radiant: an example of rung three, not a target.
- Sachin (2): two minutes on trust: when your agent loads someone else's `SKILL.md`, the file is instructions, not documentation (agent context poisoning; 26.1% of 31k public skills carried a vulnerability in one 2026 survey). This room runs on trust and no read-before-load rule is imposed; bridges outside this room cannot, which is why ERC-8004 and the trust-model literature exist. F2F is high-trust by construction.
- Rafa (1): the bridge hypothesis, said twice and pinned: *a bridge is a protocol between two factories — the smallest thing both sides agree not to change.*

**Exercise — Build a bridge (1 brief + 40, breakout rooms)** Sachin briefs; the rotation is pinned beforehand.
Target: the kit you did **not** critique (the S2 ring reversed: A → C, B → A, C → B), or a facilitator kit (`facilitator/rafa-kit/`, `facilitator/sachin-kit/`). Pairs bridge to each other only if neither critiqued the other; otherwise both use facilitator kits.
Task: make your agent use the target kit to do one thing your own kit could not do alone. Paste `instructions/S3-bridge.md`: it copies `bridges/TEMPLATE.md` to `bridges/<you>-<target>.md`, asks for the one thing (and refuses to proceed without it), reads the target, works, and stops whenever it needs something not in the repo; the participant gets it from the owner in the room and the harness logs one `unblock` line. Stub target: the requester/owner blocks in `bridges/README.md` (request pushed → owner runs locally → response pushed; strict alternation).
Soft Wallfacer rule: the exchange goes agent → repo → agent; human chat allowed to unblock, but every unblock is logged.
One log per bridge, one writer. At minute 30 the harness stops building and writes "Did it work" and "What a bridge turned out to be" in the participant's words. Push by minute 38.

**Close (5)** Rafa. Reconvene: one line each, "my agent needed ___ from the target and found ___ on its own" (25 s). Awareness check, saved to `transcripts/S3/awareness-check.md`. (Expected: traces — what the other kit left for your agent to find, and what it did not.) Async 3: finish the bridge log, push by 20:00; optional hard-mode Wallfacer (agent-only, public record, no human chat) as a second section in the same file.

---

## Session 4 — Recap and showcase (60 min, Tue 20:00 UTC)

Slides, minute table, synthesis procedure, hypothesis rule and awareness tally: `sessions/S4-slides.md`, `sessions/S4-run-of-show.md`.

**Open (2)** Sachin. The repo tree on screen: the room's own artifacts are the slides.

**Recap (8)** Rafa. Kit → Factory → Bridge in three files from the repo: one `SKILL.md` v1 next to v2, one README that was the interface, one `unblock` line read aloud.

**Debrief round-robin (14)** Sachin. Per triad: 90 seconds per bridge plus questions; an absent participant's log is read by a triad-mate in 60 s. Six bridges ≈ 12 min; with 10–15 people, 60 s per bridge and no questions until the showcase. Each report goes into the synthesis as it is spoken.

**Showcase (14)** Rafa. Two bridges that worked, one that did not, the log on screen; chosen at 19:45 with Sachin (the cleanest file handoff, a transmittal bridge if there was one, the one with the most `unblock` lines).

**Synthesis read-back (5)** Sachin. `bridges/SYNTHESIS.md` v1, built by Sachin's agent from the repo (`LOG.md` files, bridge logs, `transcripts/S1–S3/` including the `awareness-check.md` files) plus the live text of #kitcraft-transcripts pasted into a scratch file at 20:24, because the S4 transcript only exists after `/stop`. Numbers and the paragraphs verbatim; corrections from the room go in live. v2, with the S4 transcript folded in, within 48 h.

**Hypothesis (7)** Rafa states it; Sachin reads the verdict rule, then the table (supports / contradicts / silent per paragraph). Decision rule: retained if ≥⅔ support and none contradict; amended if supports ≥ contradicts and the contradictions name one missing element; rejected otherwise, and the room's definition wins and is recorded.

**Final awareness round (7)** Sachin. Each participant names the quadrant their practice was blind to on Monday morning; tallied into `SYNTHESIS.md` §5 as the room's awareness profile (S1–S3 checks plus this round; expected fourth quadrant: playability, surfaced by having built and bridged).

**Take-home (3)** Sachin. The repo stays public; `SYNTHESIS.md` v2 posted in Discord within 48 h; nothing else is planned. Hard-mode Wallfacer invitation; SIGBIZ show-and-tell as the continuation venue; removal requests any time.

---

## Presenter split

Sachin opens every session and owns chat, pins, breakouts, recorder and repo. Sections by expertise (checkpoint-1 decision):
- **Sachin:** kit-phase thesis and the tractor, consent, ice-breaker, the hard problem (precommodification, farmsteading), protocol fiction / Jamverse and the brand kit, the comms layer, trust, room briefings, every close and async post, S4 debrief, synthesis read-back, verdict, tally.
- **Rafa:** the two grids, CMM mapping, what a kit is, traces, C3PO, S1 exercise and awareness checks, F2F book factory, factory = kit + interface, build briefing, the interface ladder, water-rate pipeline, Prime Radiant, the hypothesis, S3 reconvene, S4 recap and showcase.
Each run-of-show has a Presenter column; that is the column to rehearse from. One screen-sharer per session (Sachin), so handovers cost nothing.

---

## Logistics

### 1. Repository — yes, one

Decision: one public GitHub repo, `workshop-kitkraft`, under the protocolvision org. It is the workshop's public record, the substrate agents read from and write to, and the raw material for the S4 synthesis. There is no portal and no second repo.

Why one repo rather than per-team repos or a shared folder: 10–15 people produce 10–15 kits and 10–15 bridge logs; that is one repo's worth. Per-team repos fragment what agents need to find each other. A shared Drive folder has no history and no agent-native access. The Rao–Jenna case used a shared folder plus a transmittal server; the repo is both in one.

Layout:
```
workshop-kitkraft/
  README.md            human entry: what this is, how to add your kit
  AGENTS.md            agent entry: names, push rule, autolog, facilitator clause
  CLAUDE.md            first line: @AGENTS.md
  instructions/        pasteable blocks: orient, S1-inventory, async-1, S2-critique, async-2, S3-bridge, no-harness
  KIT_TEMPLATE/        README.md (with Interface:), SKILL.md, LOG.md, examples/
  inventory/           one file per participant, S1; one schema in its README
  kits/<name>/         one folder per participant, S2
  bridges/             one log per bridge, one writer, S3; SYNTHESIS.md, S4
  facilitator/         rafa-kit, sachin-kit as bridge targets; the brand kit by link
  transcripts/         OpenRecapper output per session + awareness-check.md
  workshop-dev/        this outline, checklists, pins, email, sessions/
```

Names: `<name>` is the participant's GitHub username, lowercase, for the inventory file, the kit folder and the bridge logs.

Public/private: each participant chooses. Public kits live in the repo. Private kits keep their content on the participant's machine and leave a stub in the repo — `kits/<name>/README.md` with the job, inputs, outputs and interface but no content — so the kit is still discoverable and bridgeable. A bridge to a private kit runs through its owner's agent (the Rao–Jenna transmittal pattern, made executable in `bridges/README.md`), which is itself one of the bridge forms S3 surfaces. Sanitizing is the participant's responsibility; the pre-work email says what "public" means for the inventory (task names and one-line descriptions, no client names or data).

Working mode: every participant opens their harness *inside* the cloned repo, works only in their own `inventory/<name>.md`, `kits/<name>/` and `bridges/<name>-*.md`, and pushes to `main`. `AGENTS.md` instructs the harness: commit, `pull --rebase`, push; on rejection pull --rebase and push again; a conflict can only be in your own file, keep both; never edit outside your files; never delete. The rehearsal ran six concurrent writers on one branch with one rejection retried three times and no lost work; on the real day only per-person files change, so conflicts are rarer still.

Access: every registrant invited as a collaborator with write access as registrations arrive, no PRs, no branches. A repository ruleset on `main` blocks force-pushes and branch deletion for everyone (facilitators included; a history rewrite for a removal request is done by an admin bypass and noted in `transcripts/`). Fallback for anyone whose harness cannot push: paste the file in #kitcraft → Sachin commits under their name. Facilitator prep: create the ruleset, invite registrants as they arrive, confirm at least one push from each by Sep 19; anyone without a push goes to 1A.

### 2. Autologging

The kit template ships a `LOG.md` and the repo-root `AGENTS.md` carries the autolog instruction every harness reads on open (the file is canonical; the outline no longer duplicates it): after every substantive step, one line `<ISO timestamp> | <session> | <name> | <type> | <one line>` to the nearest log, with `type` ∈ progress | decision | memory | blocker | question | unblock. Never rewrite or delete earlier lines, even on request; removal is a facilitator's hand action. Never log secrets, credentials, client names or private data.

Participants do nothing; the harness does it. Sachin's agent checks at the S1 close that at least one line exists per inventory file, which verifies the instruction fired. The S4 synthesis reads all `LOG.md` files, all bridge logs, and the session transcripts.

### 3. Discord

- Plenary in **#kafka** voice. Sachin screen-shares.
- Breakout voice rooms **breakout-1 … breakout-5**, one per triad or pair. Sachin moves people; the triad table is pinned in **#kitcraft** before each breakout so nobody waits on being moved.
- **#kitcraft** text: four pinned messages (`discord-pins.md`): main (repo, rooms, times in UTC/Berlin/Pacific with a converter link, consent summary, survey, help), the full consent notice, the S2 triads, the S3 triads. Each block that a participant pastes is a file in `instructions/`; a pin never carries a block (2000-character cap).
- **#kitcraft-transcripts** text: OpenRecapper live transcript target. Read-only for participants.
- Sessions are on the PI server, so C3PO is one @mention away for anyone stuck on theory.
- Participants set their Discord display name to their `<name>` for the two days so the diarized transcript matches the folder names. A facilitator-only roster (form name, GitHub username, Discord name) lives outside the repo.

### 4. Triads

Triads are the group unit. Two triads for 6; for 10–15, as many triads as possible and the remainder as pairs (10 = 2 triads + 2 pairs, 11 = 3 + 1, 12 = 4, 13 = 3 + 2, 14 = 4 + 1, 15 = 5), never a four or a one; at most five rooms.

- Provisional triads from the registration form (role + the task named) on Sep 19; confirmed or reshuffled at the S1 close from the inventories; pinned by 16:45 UTC Monday. There is no overnight between S1 and S2.
- S2 critique ring: A reads B, B reads C, C reads A. Pairs read each other.
- S3 bridges reverse the ring: A → C, B → A, C → B, so nobody bridges to the kit they critiqued. Pairs bridge to each other only if neither critiqued the other in S2, so a planned pair both bridge to facilitator kits.
- A stub (private) kit goes to the strongest reader in its triad; the reader's agent reports what it would need; in S3 the bridge to it runs through the owner's agent (transmittal blocks).
- Absence: a triad that loses a member becomes a pair for that session — the two present critique each other; the absent kit is read async when it lands and the report posted in #kitcraft; in S4 a triad-mate reads the absent person's paragraph. A kit that was never critiqued still counts; its S3 bridger is the first cold reader.
- One log per bridge, written by the bridger; nobody else edits it except a stub owner under `### Response`.

Time budget check: S2 20-min build + 13-min critique (room moves inside it) holds at five rooms because the instructions are files, not briefings; no live briefing inside rooms. Facilitators each float across half the rooms and swap once; a room stuck for five minutes gets a facilitator. S4 round-robin at 90 s × 6 bridges = 12 min; at 15 bridges, 60 s each and questions move to the showcase.

### 5. Recording — OpenRecapper

Runbook: `sessions/recorder-runbook.md` (operator Sachin, backup Rafa). What it is: self-hosted Discord bot; `/record channel:#kafka name:KITCRAFT-S<n>` and `/stop`; per-user tracks, Deepgram diarized transcript on stop, live transcript streamed to #kitcraft-transcripts; optional AI summary via a relay; auto-stop when the channel empties and after 20 min of silence.

Constraint that shapes the plan: one bot identity = one voice connection per server. Decision: plenary only. Breakouts and 1A stay unrecorded by design (the IDEO U precedent: jam sessions are not recorded so people experiment); the autolog is the breakout record and is richer for the S4 synthesis than diarized chatter.

Rules, because of the auto-stop:
- An explicit `/stop` before every breakout and a fresh `/record channel:#kafka name:KITCRAFT-S<n>` at the reconvene, in that order; wait for the first live line before the presenter resumes. Every start and stop is announced in #kitcraft (`Recording on (KITCRAFT-S<n>)` / `Recording off`).
- A facilitator speaks every ≤15 minutes during silent work (the S1 exercise is 17 near-silent minutes; time calls do this).
- Whether a second `/record` with the same `name:` appends or overwrites is tested at the Sep 17 tech rehearsal; if it overwrites, `KITCRAFT-S2B` and `KITCRAFT-S3B` go into `RECORD_MEETING_NAMES`.
- After each `/stop`, Sachin commits within 30 min: `transcripts/S<n>/transcript.md` (segments concatenated, boundary marked), `summary.md`, and `awareness-check.md` (the close round's answers tallied by quadrant; the S4 profile needs them). Commit `S<n>: sachin: transcript + summary`.
- S4: the synthesis reads the live channel text pasted at 20:24, since the transcript only exists after `/stop`; v2 within 48 h.

Setup checklist (owner: whoever runs PI's OpenRecapper instance): `RECORD_MEETING_NAMES` includes `KITCRAFT-S1..S4` (and the `B` names if needed); `/record-access grant` to both facilitators; live transcript channel = #kitcraft-transcripts; manual `/record`, not `/schedule`; relay configured for the summary or the co-facilitator's agent writes `summary.md`; retention: audio pruned after 7 days, text kept.

Consent: the canonical text is `sessions/consent-notice.md` — a 45-second read-aloud at the top of S1 (one sentence at the top of S2–S4) and a full pinned notice covering what is recorded (plenary only; not breakouts, not 1A), where it goes (live channel, public repo, log lines), retention, removal on request with the git-history caveat, opting out without leaving, private data, and the after-Tuesday disposition.

### 6. Prep timeline

Detail and owners: `prep-checklist.md`.

| Date | Task | Owner |
|---|---|---|
| Sep 12 | Repo `workshop-kitkraft` public with scaffold; ruleset on `main` (block force-push and deletion); no private repo, no portal | Rafa |
| Sep 13 | Facilitator kits in `facilitator/` (rafa-kit, sachin-kit) as bridge targets | both |
| Sep 14 | Discord: #kitcraft, #kitcraft-transcripts, breakout-1…5; OpenRecapper owner, `RECORD_MEETING_NAMES`, `/record-access` | Rafa |
| Sep 15 → | Pre-work email and collaborator invite to each registrant as registrations arrive | Rafa |
| Sep 17 | Tech rehearsal: clone from a fresh machine/account with the email's Block A; one autolog line; one push; `/record` + `/stop`; a second `/record` with the same name; one breakout move; pins posted to a test channel | both |
| Sep 19 | Push check per registrant; 1A invites; provisional triads from the form | Sachin |
| Sep 20 | Pins 1–2 in #kitcraft | Sachin |
| Sep 21 | S1 + 1A; triads confirmed at S1 close and pinned by 16:45; S2 at 20:00 | both |
| Sep 22 | S3, S4; transcripts after each `/stop`; SYNTHESIS v1 at S4, v2 within 48 h, posted in Discord | both |

---

### 7. After Tuesday (decided)

Minimum, and the only thing planned: the repo stays public; `bridges/SYNTHESIS.md` v2 with the awareness profile is posted in Discord (#kitcraft and #symposium-2026) within 48 hours; both facilitators' kits stay as targets. The consent notice says exactly this. Any further use of the material (a C3PO corpus ingest, a CMM case-study page, a Protocolized post by a participant) would need a new notice and is not promised.

---

## Templates (in repo)

The canonical files are `KIT_TEMPLATE/` and `bridges/TEMPLATE.md`; the shapes:

`KIT_TEMPLATE/README.md` — Job · For · Inputs · Outputs · Interface (file handoff / static page / MCP / other) · Example run · Not for · Public / private (if private, this file is the stub).

`KIT_TEMPLATE/SKILL.md` — frontmatter `name`, `description` (the trigger line); When to use · Steps · Constraints · Do not.

`KIT_TEMPLATE/LOG.md` — `<timestamp> | <session> | <participant> | <type> | <one line>`, append-only, written by the harness.

`bridges/TEMPLATE.md` — Writer (one person) · Target kit · Interface used · What my agent needed from the target · What it found on its own · What a human had to supply (one line per unblock) · Request / Response (stub targets only) · Did it work · What a bridge turned out to be (one paragraph) · Log.

---

## Changes from v7 (agent-run rehearsal, Sep 2026)

Observation numbers (OBS, rafa, sachin) refer to the rehearsal's three observation files, linked from the pull request that introduced v8.

- Schedule: S1 is 60 min, not 90 (ice-breaker 9, situating 10, theory 14, exercise 17, close 7); S2 is Monday 20:00 UTC, so Async 1 is a three-hour gap with the README only and Async 2 is the overnight. Header table in UTC/Berlin/Pacific. (OBS 1, 2; rafa 10, 11; sachin 3, 21)
- S2 timing compressed to build 20 / critique 13 with room moves inside / close 10. (sachin 20)
- Triads are the group unit, with the critique ring, the reversed S3 ring, the pair rule, the stub-to-strongest-reader rule and the absence rule; rooms are breakout-1…5. (OBS 3; rafa 13, 16, 27, 33; sachin 5, 7, 8, 10, 11)
- One log per bridge, one writer; transmittal procedure for stubs in `bridges/README.md`. (OBS 7; sachin 9, 11, 39)
- No private repo: content stays on the machine, stub public, bridge through the owner's agent. No portal: the fallback is paste in #kitcraft, facilitator commits. (OBS 8; rafa 6, 15; sachin 4, 23, 30)
- Ruleset on `main`: block force-push and deletion; invites sent as registrations arrive. (OBS 4, 5)
- Push rule with retry and conflict recipe; NAME = GitHub username; facilitator clause; never-delete-a-line rule, in `AGENTS.md`. (OBS 6, 26; rafa 21, 37; sachin 2, 15, 38)
- Agent-actionable everything: `instructions/` folder, blocks with settings first, clone recognised by origin URL, check-before-clone, account check, per-file verify, stop-and-ask for the three tasks, public/private step, one inventory schema. Pre-work email rewritten with Item 0 (human-only installs), subscription line, by-hand Block B, local-time line, human "main only" line. (OBS 10–21, 23–25; rafa 36–42; sachin 33–37, 40)
- Recorder: explicit `/stop` before every breakout and re-`/record` at reconvene, a facilitator speaks every ≤15 min, awareness answers saved to `transcripts/S<n>/awareness-check.md`, same-name re-record tested Sep 17, S4 synthesis from the live channel text with v2 in 48 h. (rafa 22, 23; sachin 12, 13, 14)
- 1A has content: `sessions/1A-clinic.md`, seven checks with proofs; not recorded. (rafa 29; sachin 29)
- Presenter split by expertise, Sachin opens; presenter column in every run-of-show; one screen-sharer. (rafa 12, 34; sachin 28, 32)
- After Tuesday decided: public repo, synthesis in Discord within 48 h, nothing else; consent notice canonical in `sessions/consent-notice.md`. (rafa 19, 32; sachin 16, 17)
- Awareness-grid axes confirmed: External/Internal × Archive/Live. (rafa 18)
- Facilitator kits (`rafa-kit`, `sachin-kit`) are the real bridge targets; the S3 target list is trimmed to what exists. (rafa 14; sachin 19)
- Hypothesis decision rule for S4; `Interface:` line in the kit template; synthetic example inputs allowed. (rafa 26; sachin 25, 26)
- Session materials (slides, run-of-shows, 1A, consent, recorder runbook) live in `workshop-dev/sessions/`. (rafa 31, 39)

## Changes from v6 (multi-lens review)

- Participant lens: pre-work now asks for three recurring tasks (CMM Discover → Encode gate) so non-builders have kit material; inventory rewritten accordingly.
- Privacy: public/private kit choice with a public stub; private kits are bridged through their owner's agent.
- Ops: harness runs inside the clone; own-folder-only; pull --rebase in `AGENTS.md`; facilitator-time arithmetic added to breakouts.
- Theorist: CMM ↔ Kit/Factory/Bridge mapping slide; Heylighen's sematectonic vs. marker-based traces added to S1 theory; a bridge hypothesis stated in S3 and tested in S4 instead of a blank.
- Security: no read-before-load rule (your call); risk taught in two minutes in S3 as the reason trust does not scale. I would still have participants glance at a partner's `SKILL.md` before loading; recorded as dissent, not a change.
- Organizer: §7 added with a minimum and a recommendation, since nothing was planned.

## Changes from v5

- Expanded Awareness 2×2 reinstated as the workshop's frame, placed first in Situating, with a one-question awareness check at each session close and a final round in S4 that produces the room's awareness profile.
- Outcome 5 added.

## Changes from v4

- Added Logistics: single-repo decision, autologging instruction in `AGENTS.md`, Discord layout (#kafka, breakouts, #kitcraft, #kitcraft-transcripts), breakout method, OpenRecapper setup and its one-connection-per-bot constraint, consent, prep timeline.
- Recording scoped to plenary; breakouts recorded through harness autologs instead.
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
