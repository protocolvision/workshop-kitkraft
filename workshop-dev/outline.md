# AI Kitcraft — Workshop Outline v7

Protocol Symposium 2026 · New Nature · Sep 21–22 (workshop days) · online
Facilitators: Rafa (lead: ops, coordination, exercises), Sachin Benny (co-facilitator: theory). From S2 on: Rafa opens every session with its first minute (welcome, consent, logistics) and owns #kitcraft, pins, breakouts, recorder and repo; Sachin opens the content right after and presents every conceptual segment (decision by Rafa, Sep 12).
Format: S1 90 min, S2–S4 60 min, async work between sessions. Planned for 10–15 participants.
Venue: Protocol Institute Discord (https://discord.gg/s2WbZBDqM), voice channel **#kafka** for plenary, breakout voice rooms for pair work, text channel **#kitcraft** for links and **#kitcraft-transcripts** for live transcript.
Spine: **Kit → Factory → Bridge**
Frame: **Expanded Awareness** — the workshop's stance is awareness of protocols as they are being assembled, not use of tools that hide the assembly. The spine says where you move; the frame says what you notice while moving.

Design constraints fixed by the symposium contract and registration:
- Audience: non-technical operators who have used Claude Code or Codex. GitHub fluency not assumed.
- Public promise: "develop your own kit of AI workflows for your organization"; no special expertise needed.
- Substrate: one public GitHub repo (`workshop-kitkraft`) plus a static portal that renders it. Every kit and bridge log lands there.
- Artifact cadence: something shipped to the repo every 30–45 minutes of live time.

---

## Participant outcomes

By the end a participant can:

1. **Locate** their own AI use on the AI CMM and say why the room is at Kit while the frontier is Factory.
2. **Ship** a kit: a folder an arbitrary agent can read to do one scoped job, with a human README and an agent SKILL.md.
3. **Reach** another person's kit through their own agent, and report what a bridge turned out to be.
4. **State** the hard problem: bespoke use makes tooling solipsistic; sharing needs public records and interfaces, not shared apps.
5. **Notice** differently: name which of the four awareness quadrants (precommodification patterns, playability, traces/pheromones, anchoring in reality) their own AI practice was blind to before the workshop.

---

## Pre-work (sent Sep 15)

- Install a harness (Claude Code or Codex) and run one command. This is the milestone 1A backstops.
- Take the symposium AI postures survey (Robert Peake); bring your posture.
- Bring three recurring tasks from your own work that you have done, or tried, with AI. Test for each: is it recurring, and does doing it well depend on something you know that a stranger would not? (The CMM Discover → Encode gate.) One of these becomes your kit.
- Decide now whether your kit will be public or private (see Logistics §1); the pre-work email explains both paths.
- Read: Durable AI Adoption, chapters 1–3.
- Optional: skim "Have Your Factory Call My Factory."
- Facilitator prep: see Logistics below (repo, Discord, recorder, autologging).

---

## Session 1 — Kits (90 min, Mon)

**Ice-breaker (15)** Recording and autologging consent stated first (see Logistics). Round-robin: name, your AI posture from the survey, one recent surprise or personal protocol for using AI. Facilitator seeds: Wobblebots, paintings articulation, Sachin's example.

**Situating (15)** Not workflow optimization, not build-a-website. Two grids, in this order:

*Frame — the Expanded Awareness 2×2.* Some AI tools feel like townships: they hide what is happening. This workshop is the opposite stance: awareness of the protocols being assembled around you, and the space between stimulus and response in which you can still choose (Ashcroft's Alexander Technique framing, extended from bodies to tooling). Four quadrants name what an aware practitioner notices:

|  | **Archive** (what is already there) | **Live** (what is happening now) |
|---|---|---|
| **External** (the environment) | **Precommodification patterns** — the idea you just had is already in the latent space; provenance, not novelty, is scarce | **Traces / pheromones** — what others' agents are leaving in shared files, repos, channels; stigmergic signal |
| **Internal** (yourself) | **Anchored in reality** — what is actually real in your context: your data, your constraints, your domain knowledge; the check against the archive's confident fiction | **Playability** — the space is playable; you can act in it, not only consume from it |

The workshop returns to this grid at the end of each session with one question: which quadrant did the last hour expand?

*Positioning — the movement 2×2.* One vs. many × interior vs. exterior: journal / novel / **field notebook (Humboldt)** — exposed kit as the artifact form — / stigmergy. The field notebook is a single observer facing the world, recording observations in a form others can build on before any coordination exists; your inventory is your field notebook, and PI's own Humboldt agent (resources §0) is the live example and a later bridge target. The workshop moves you from journal to field notebook; bridges are how field notebooks start to behave stigmergically. Traces (top-right of the awareness grid) are what make the stigmergy quadrant reachable.

**Theory (20)**
- AI CMM levels; Kit is L2 cultivated; the guide's own timeline puts Factories at 2026–28. The room is at Kit, the frontier is Factory. One slide maps the two vocabularies: Discover → Encode = Kit; Prove = Factory (an interface someone else can test); Harvest = Bridge (another factory consumes it).
- What a kit is: A kit is a technology in use before there is a standard product: loose components a user assembles and adapts to do their own job, in their own context, while the technology's form is still open (social construction of technology: interpretive flexibility before closure — Kline & Pinch's rural Model T owners running corn shellers off the rear axle were kit users; the tractor was the product consensus that came later). In AI today, your kit is the set of prompts, contexts, files and steps you have adapted to one recurring task. The workshop's artifact — a folder with a README, a SKILL.md and an example — is that adaptation written down so another agent can run it. A factory is a kit whose interface has closed for others. The artifact's shape: folder + SKILL.md is now an open standard (Agentic AI Foundation, Linux Foundation).
- Kits now: you work with archival selves of others through a model that changes. Paper fixes words; LLMs fix the archive, roughly, but not the reader.
- Traces, defined: Heylighen — indirect coordination in which the trace an action leaves in a medium stimulates the next action. Two kinds: sematectonic (the work itself: your kit) and marker-based (signs about the work: your `LOG.md`). The repo is the medium; the workshop is stigmergy with a two-day half-life.
- Worked example: C3PO — one corpus, three interfaces (web, Discord, MCP).
- The hard problem: precommodification and cognitive farmsteading (bespokification, pensievification, automation). Grocery-cart analogy; digital homelessness.

**Exercise — Inventory, Wallfacer-lite (30)**
Each participant asks their agent to write one file, `inventory/<name>.md`: the three recurring tasks from pre-work, any AI-native things they have built or use, which are open and usable by others, and which one they will turn into a kit (public or private). The file is pushed to the repo (facilitators handle the push for anyone without git; portal upload form as fallback).
Rule: you read other people's inventories only through your agent, never in the browser. Ask your agent to find the two entries closest to your own.
This is the one-way version of the Wallfacer rule: no live coordination needed, but the public-record norm is set on day one.

**Close (5)** Awareness check: which quadrant did this session expand? (Expected: precommodification — reading others' inventories through your agent shows how much overlaps.) Focus question: how will bridges emerge across the kit era? Async assignment.

**Async 1 (Mon evening)** Choose the kit you will convert into a factory in S2 — your own (the `## Kit` task or a `## Built / use` item) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`, copied into your folder with a `Source:` line) — and draft the README's Job and Interface lines (`instructions/async-1.md`).

---

## Session 1A — Beginner clinic (optional, Mon, 30 min)

Harness install and first push for anyone who missed the milestone.

---

## Session 2 — Factories (60 min, Tue morning)

**Examples (15)**
- Book factory, F2F case: Rao's manuscript factory → Jenna's production factory; handoff = shared folder + transmittal server; two non-coders; domain knowledge > coding knowledge. (Jenna if available; else Rafa.)
- Protocolized visual identity: TITLES, two narrow models, PI brand kit → Monstrous Times. (James if available; else Sachin.) This is the "different software outcomes" case: derivative worlds and standards that no longer need to be uniform.
- Core concept: **factory** = a kit with a declared interface that a stranger's agent can use without talking to you. Interfaces in ascending order of effort: rung 1 README + SKILL.md a person hands to their agent + one worked example → rung 2 static page → rung 3 MCP → rung 4 API / A2A. Rung 1 is the deliverable; the README's `Interface:` line names the rung and how to call it.

**Exercise — Convert a kit into a factory (20)**
Take one of the kits identified in your inventory — your own (the `## Kit` task, or something from `## Built / use`) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and convert it into a factory: a kit with a declared interface that a stranger's agent can use without talking to you. Paste `instructions/S2-factory.md`. Deliverable, rung 1 done properly:
- `README.md` — `Interface:` line stating the rung and how to call it; job, for whom, inputs, outputs, not-for; `Source:` first line when converting a facilitator kit
- `SKILL.md` — name, description that triggers correctly, when to use, steps, constraints, do-nots (adapted to your own organisation and data)
- `examples/` — one input and the output the factory produced from it, cold, from SKILL.md alone
Rungs 2+ (static page, MCP, API/A2A) are optional stretch. Commit `S2: <name>: factory from <source>`.
The comms layer, from the anshuc techniques: cut what adds nothing, remove AI tells, rewrite the README in your own words.
Pair critique (13) in breakout rooms (pairs assigned per Logistics): the partner's agent uses your factory through its declared interface (README + SKILL.md only), runs the example cold, and reports where the interface was insufficient. Record it in your `LOG.md`. Close (10).

**Close (10)** Round: one sentence each on what the partner's agent got wrong. Awareness check: which quadrant? (Expected: anchored in reality — the agent failed where your domain knowledge was tacit.) Async assignment.

**Async 2 (Tue midday)** Fix the failure. Push v2. Facilitators regenerate the portal.

---

## Session 3 — Bridges (60 min, Tue afternoon)

**Examples (15)**
- F2F theory: intermediates flowing between factories; skills as industrial intermediates; high-trust links as the invisible 90%.
- Prime Radiant: a factory with a citable query layer (Aneesh if available; else Rafa).
- Water-rate pipeline: PDF → structured rates → registry (Maxwell/Patrick if available; else Rafa).
- Three kinds of bridge — factory → factory (both sides declared an `Interface:`; the agent uses the target strictly through it), kit → kit (neither did; the README handed to an agent is the interface; the log records what a human had to be asked), kit ↔ factory (one side declared; the log records the direction and whether it was enough). Any kit or factory in the repo is a target.
- Interface ladder revisited: file handoff → static page → MCP → A2A Agent Card. Name x402 and ERC-8004 once as where payments and identity are going; do not teach them.
- Two minutes on trust: when your agent loads someone else's `SKILL.md`, the file is instructions, not documentation (agent context poisoning; 26.1% of 31k public skills carried a vulnerability in one 2026 survey). This room runs on trust and no read-before-load rule is imposed; the point is that bridges outside this room cannot, which is why ERC-8004 and the trust-model literature exist. F2F is high-trust by construction.

**Exercise — Build a bridge (40)**
Pairs (rotated from S2, see Logistics) move to breakout rooms. Target: any kit or factory in the repo — the partner's (kit = `participants/<name>/kit/` without a declared interface; factory = one with an `Interface:` line from S2) or a facilitator's (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`, both factories at rung 1). Bridges run across factories, across kits, or between a kit and a factory; the harness works out the kind and writes it in the log. The S4 hypothesis is tested against all three kinds and the synthesis tallies bridges by kind.
Task: make your agent use the target to do one thing your own kit or factory could not do alone.
Soft Wallfacer rule: the exchange should go agent-to-repo-to-agent; human chat allowed to unblock, but every unblock is logged.
Each pair writes `bridges/<a>-<b>.md`: target, what the agent needed, what it found, what a human had to supply, did it work, what a "bridge" turned out to be.

**Close (5)** Awareness check: which quadrant? (Expected: traces — what the other kit left for your agent to find, and what it did not.) Async assignment: finish the bridge log; optional hard-mode Wallfacer for pairs who want it (agent-only, public record, no human chat) before S4.

---

## Session 4 — Recap and showcase (60 min, Tue evening)

**Recap (10)** Kit → Factory → Bridge, using the room's own artifacts as the slides.

**Debrief round-robin (25)** Each pair: 90 seconds on their bridge log. OpenRecapper records #kafka; Sachin's agent synthesizes the live transcript plus every `LOG.md` and bridge log in the repo into `SYNTHESIS.md`, read back in the last five minutes and corrected by the room.

**Showcase (15)** Two or three bridges that worked, one that did not.

**Close (10)** What is a bridge? Read the synthesized definitions against one hypothesis stated at the start of S3 and held until now: *a bridge is a protocol between two factories — the smallest thing both sides agree not to change.* Where the logs support it, say so; where they do not, the room's definition wins and the hypothesis is recorded as rejected. Final awareness round: each participant names the quadrant their practice was blind to on Monday morning; the co-facilitator's agent tallies it into `SYNTHESIS.md` as the room's awareness profile (expected fourth quadrant: playability, surfaced by having built and bridged). Take-home: the repo stays public; hard-mode Wallfacer invitation; SIGBIZ show-and-tell as the continuation venue.

---

## Logistics

### 1. Repository — yes, one

Decision: one public GitHub repo, `workshop-kitkraft`, under the Protocol Institute org. It is the workshop's public record, the substrate agents read from and write to, and the raw material for the S4 synthesis. The static portal is a render of the repo, not a second system.

Why one repo rather than per-team repos or a shared folder: 10–15 people produce 10–15 kits and 5–7 bridge logs; that is one repo's worth. Per-team repos fragment what agents need to find each other. A shared Drive folder has no history and no agent-native access. The Rao–Jenna case used a shared folder plus a transmittal server; the repo is both in one.

Layout:
```
workshop-kitkraft/
  README.md            human entry: what this is, how to add your kit
  AGENTS.md            agent entry: repo conventions + autologging instruction (below)
  CLAUDE.md            first line: @AGENTS.md
  KIT_TEMPLATE/        README.md, SKILL.md, LOG.md, examples/
  inventory/           one file per participant, S1
  kits/<name>/         one folder per participant, S2
  bridges/             one log per pair, S3; SYNTHESIS.md, S4
  facilitator/         C3PO, Prime Radiant, water-registry kits as targets
  workshop-dev/transcripts/         OpenRecapper output, per session
```

Public/private: each participant chooses. Public kits live in `workshop-kitkraft`. Private kits live in a second repo, `workshop-kitkraft-private`, same layout, collaborators only (registrants + facilitators), and leave a stub in the public repo — `kits/<name>/README.md` with the job, inputs, and outputs but no content — so the kit is still discoverable and bridgeable. A bridge to a private kit runs through its owner's agent (the Rao–Jenna transmittal pattern), which is itself one of the bridge forms S3 should surface. Sanitizing is the participant's responsibility; the pre-work email says so.

Working mode: every participant opens their harness *inside* the cloned repo, works only in their own `inventory/<name>.md` and `kits/<name>/`, and pushes to `main`. `AGENTS.md` instructs the harness: pull with rebase before every push; never edit outside your own folder; never delete. This keeps 15 people on one branch without conflicts and is what makes the autolog fire.

Access: every registrant invited as a collaborator with write access to both repos, no PRs, no branches. With 15 people this is administrable and removes the PR concept from the workshop. Every participant has a harness and a GitHub account; anyone whose push fails brings the error to #kitcraft or 1A, and nobody's file is committed for them (decision by Rafa, Sep 12). Facilitator prep: create repo, invite registrants Sep 15, confirm at least one push from each by Sep 19; anyone without a push goes to 1A.

### 2. Autologging

The kit template ships a `LOG.md` and the repo-root `AGENTS.md` carries one instruction every harness reads on open:

```
## Workshop autolog (append-only)
After every substantive step in this repo, append one line to the nearest LOG.md
(kits/<name>/LOG.md for kit work; bridges/<pair>.md for bridge work):
<ISO timestamp> | <session S1–S4 or async> | <participant> | <type> | <one line>
type ∈ progress | decision | memory | blocker | question | unblock
- progress: what was done
- decision: what was chosen and what was rejected
- memory: something learned worth keeping for the next session
- blocker: what stopped work
- question: something to raise in the room
- unblock: a human supplied something the agent could not find (S3 soft-Wallfacer rule)
Never rewrite or delete earlier lines. Never log secrets or credentials.

## Repo hygiene
Before any push: git pull --rebase. Edit only inside inventory/<participant>.md and kits/<participant>/ and bridges/ files you are a party to. Never delete files.
```

Participants do nothing; the harness does it. Facilitators check in S1 close that at least one line exists per inventory file, which verifies the instruction fired. The S4 synthesis reads all `LOG.md` files, all bridge logs, and the session transcripts.

### 3. Discord

- Plenary in **#kafka** voice. Screen share for examples.
- Breakout voice rooms: use existing rooms or create `kitcraft-1` … `kitcraft-7` for the two days. Co-facilitator moves people; pairs are posted in **#kitcraft** before each breakout so nobody waits on being moved.
- **#kitcraft** text: pinned message with repo link, portal link, pair lists, consent notice, session timing in UTC and Berlin/Pacific.
- **#kitcraft-transcripts** text: OpenRecapper live transcript target. Read-only for participants.
- Sessions are on the PI server, so C3PO is one @mention away for anyone stuck on theory.

### 4. Breakouts for 10–15 people

Evaluated options:
- Random pairs: fastest, ignores the inventory data.
- Pairs by kit adjacency: in S1 each agent already finds "the two entries closest to mine"; facilitators turn that into pairs overnight. Adjacent kits make the S2 critique legible and give S3 an obvious bridge.
- Pairs by AI posture: interesting for S1 discussion, weak basis for build work.
- Triads: needed for odd counts; also the fallback if someone drops.

Decision: adjacency pairs for S2, rotated one step for S3 so each person bridges to a kit they did not critique. Odd count → one triad. 10 people = 5 rooms, 15 = 7 rooms + 1 triad. Facilitators each float across half the rooms; a room with a stuck pair gets a facilitator within five minutes.

Time budget check: S2 35-min build + 10-min critique holds at 7 rooms only if the critique instructions are pre-written in `#kitcraft`; no live briefing inside rooms. With two facilitators across seven rooms, each room gets under eight minutes of facilitator time per exercise; the pinned instructions and the templates are the facilitator most of the time. Write them as if no one will be in the room. S4 round-robin at 90 seconds × 7 pairs = 11 min, leaving room for the synthesis read-back.

### 5. Recording — OpenRecapper

What it is: self-hosted Discord bot; `/record channel: name:` and `/stop`; per-user tracks, Deepgram Nova-3 diarized transcript on stop, live transcript streamed to a text channel; optional AI summary via a relay you run; auto-stop when the channel empties; 20-min silence timeout; cleanup. No hosted instance; PI runs its own.

Constraint that shapes the plan: one bot identity = one voice connection per server. Recording plenary and N breakouts simultaneously needs N+1 bot tokens (`DISCORD_TOKENS`). Options:
- Plenary only (1 token). Breakouts unrecorded; harness autologs carry the breakout record.
- Plenary + all breakouts (up to 8 tokens). Full audio; eight Discord apps to create and invite; Deepgram cost ×8; participants experimenting on-mic in every room.

Decision: plenary only, unless PI already runs multiple recorder identities. Breakouts stay unrecorded by design (the IDEO U precedent: jam sessions are not recorded so people experiment); the autolog is the breakout record and is richer for the S4 synthesis than diarized chatter. If a second token is available, record one breakout per session as a sample.

Setup checklist (owner: whoever runs PI's OpenRecapper instance):
- `RECORD_MEETING_NAMES` includes `KITCRAFT-S1,KITCRAFT-S2,KITCRAFT-S3,KITCRAFT-S4` so recordings land in named folders.
- `/record-access grant` to both facilitators.
- Live transcript text channel = **#kitcraft-transcripts**.
- Either `/schedule add` for the four sessions (Mon/Tue, times TBD, timezone set) or manual `/record` at start; manual is safer given breakouts empty #kafka and would trigger auto-stop — **re-run `/record` when the room reconvenes after breakouts.**
- Relay configured for the AI summary, `SUMMARY_GROUP_NAME=AI Kitcraft workshop`; if no relay, Rafa's agent summarizes from the transcript.
- After each `/stop`, copy transcript + summary into `workshop-dev/transcripts/S<n>/` in the repo.
- Retention: recordings pruned per default 7 days; transcripts kept; state this in the consent notice.

Consent (pinned in #kitcraft, read aloud at S1 start): plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into the public repo; breakouts are not recorded; harness autologs go into the public repo; anyone can ask for their lines to be removed.

### 6. Prep timeline

| Date | Task | Owner |
|---|---|---|
| Sep 12 | Create repo, templates, AGENTS.md autolog instruction; portal skeleton | Rafa |
| Sep 13 | Facilitator kits in `facilitator/`; test C3PO MCP from a fresh harness | Sachin |
| Sep 14 | Discord channels and breakout rooms; confirm OpenRecapper owner, tokens, meeting names | Rafa |
| Sep 15 | Pre-work email: harness, survey, reading, repo invite | Rafa |
| Sep 17 | Dry run: one push, one autolog line, one `/record` + `/stop` in #kafka, one breakout move | both |
| Sep 19 | Push check; 1A invites; pairs drafted from inventories are impossible yet, so draft S1 seating only | Sachin |
| Sep 21 | S1 + 1A; overnight: adjacency pairs from inventories, post in #kitcraft | both |
| Sep 22 | S2–S4; after S4: transcripts and SYNTHESIS.md into repo; portal regenerated | both |

---

### 7. After Tuesday (nothing planned yet — recommendation)

Minimum: repo stays public; `SYNTHESIS.md` and the awareness profile posted in #kitcraft and #symposium-2026 within 48 hours; both facilitators' kits stay as targets.
Recommended, low cost: ingest the repo into C3PO as a corpus source (its ingest pattern is documented; the `discord_links` namespace already pulls community URLs), so the kits and bridge logs become queryable by the community and by next year's cohort. One case-study page for CMM v0.6 (SIGBIZ Level 2 → 3, ten to fifteen kits, the bridges that worked) — the evidence is the repo, the writing is an afternoon. A Protocolized post is optional and should be written by a participant, not a facilitator.
Decide the minimum before Sep 19 so the consent notice can say where the material goes.

---

## Templates (in repo)

`KIT_TEMPLATE/README.md`
```
# <kit name>
Job: one sentence.
For: who runs it.
Inputs: what it needs, where it comes from.
Outputs: what it produces, where it goes.
Example run: link to examples/.
Not for: what is out of scope.
```

`KIT_TEMPLATE/SKILL.md`
```
---
name: <kit-name>
description: <one line: what this does and when to use it>
---
## When to use
## Steps
## Constraints
## Do not
```

`KIT_TEMPLATE/LOG.md`
```
# Log — append-only, written by your harness
<timestamp> | <session> | <participant> | <type> | <one line>
```

`bridges/TEMPLATE.md`
```
Pair: / Target kit: / Interface used:
What my agent needed from the target:
What it found on its own:
What a human had to supply (each unblock, one line):
Did it work:
What a bridge turned out to be (one paragraph):
```

---

## Changes from v6 (multi-lens review)

- Participant lens: pre-work now asks for three recurring tasks (CMM Discover → Encode gate) so non-builders have kit material; inventory rewritten accordingly.
- Privacy: public/private kit choice with a private repo and a public stub; private kits are bridged through their owner's agent.
- Ops: harness runs inside the clone; own-folder-only; pull --rebase in `AGENTS.md`; facilitator-time arithmetic added to breakouts.
- Theorist: CMM ↔ Kit/Factory/Bridge mapping slide; Heylighen's sematectonic vs. marker-based traces added to S1 theory; a bridge hypothesis stated in S3 and tested in S4 instead of a blank.
- Security: no read-before-load rule (your call); risk taught in two minutes in S3 as the reason trust does not scale. I would still have participants glance at a partner's `SKILL.md` before loading; recorded as dissent, not a change.
- Organizer: §7 added with a minimum and a recommendation, since nothing is planned.

## Changes from v5

- Expanded Awareness 2×2 reinstated as the workshop's frame, placed first in Situating (now 15 min; Theory 20 min), with a one-question awareness check at each session close and a final round in S4 that produces the room's awareness profile.
- Outcome 5 added.
- Axes of the awareness grid are a proposal (see assumptions).

## Changes from v4

- Added Logistics: single-repo decision, autologging instruction in `AGENTS.md`, Discord layout (#kafka, breakouts, #kitcraft, #kitcraft-transcripts), breakout method for 10–15, OpenRecapper setup and its one-connection-per-bot constraint, consent, prep timeline.
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

## Assumptions to pressure-test before Sep 15

- The awareness grid's axes. Your notes gave four quadrant names and no axes. I set External/Internal × Archive/Live because it places all four without strain and ties to Ashcroft's internal/external framing. Alternatives that also work: Notice/Act × Internal/External (playability and precommodification swap columns). Confirm the axes before the slide is made; the quadrant names are yours and stay.

- Registrants can push to GitHub or will tolerate facilitators pushing for them. If neither, the portal upload form is the primary path and the repo is facilitator-maintained.
- Tuesday holds three sessions (S2, S3, S4) plus async gaps. If the symposium schedule gives you two sessions per day instead, S2 moves to Monday and Async 1 shrinks.
- The C3PO MCP search endpoint (no key, 100 calls/IP/day) stays up under 20–30 participants hitting it in S3.
- Prime Radiant has a reachable external interface. If not, it is an example, not a target.
- Sachin's example kit exists by S1. Decision date: Sep 13 (facilitator kits task).
- PI's OpenRecapper instance exists, has a Deepgram key with budget, and someone with Manage Server can grant `/record` access by Sep 14.
- Registrants accept collaborator invites on GitHub; if fewer than half have by Sep 19, switch the primary path to the portal upload form.
- Capacity: 25 is the ceiling at which pair critique and a 25-minute round-robin still fit in 60 minutes.
