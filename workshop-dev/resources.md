# AI Kitcraft — Resources v3

Organized by where each item does work. ✓ checked Sep 10–11, 2026; ✗ could not be fetched; (new) added since v1.

---

## 0. Symposium context (new)

**Protocol Symposium 2026 Registration Open** ✓
https://protocolized.summerofprotocols.com/p/protocol-symposium-2026-registration
Rao, Aug 21, 2026. The public contract for the workshop: audience "non-technical analysts and managers… AI-curious newcomers"; deliverable "your own kit of AI workflows for your organization"; 4–5 virtual sessions with async work between; five workshops in parallel on Mon–Tue; capacity set by organizer. Read this before touching the outline again.

**Event page and workshop registration** ✓ (JS-rendered; details did not load server-side)
https://protocol-institute.org/events/protocol-symposium-2026/
https://protocol-institute.org/events/protocol-symposium-2026/workshops

**AI Co-Working Effectiveness Survey (AI postures)** (new)
https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843
Robert Peake. Four postures: Partnership, Hypervigilance, Overreliance, Compliance. Already promoted to all attendees; used in the S1 ice-breaker.

**Adjacent workshops to avoid duplicating** (new)
- Protocolize Your Book (book production factory) — overlaps the S2 book-factory example; keep as example, not exercise.
- Protocol Hackathon: Securing Stigmergic Systems ("markdown files as pheromones") — owns the stigmergy framing; reference, do not teach.

**Humboldt** (new) https://humboldt.protocol-institute.org/ — PI's autonomous "Artificial Researcher" on New Nature; presenting at the symposium. Second facilitator-side factory alongside C3PO.

---

## 1. Theory spine — Kit phase, adoption levels

**Durable AI Adoption (AI CMM)** ✓
https://ai.protocolized.dev/ · PDF: https://ai.protocolized.dev/durable-ai-adoption.pdf
Five governed/cultivated pairs; Discover → Encode → Prove → Harvest gates; "A network of factories" with the 2002 Bezos API mandate; timeline slide labels 2026–28 "Factories." Appendix cases for S1: Kline & Pinch (rural Model T users, kit-phase pattern), Devine (electrification, 30-year lag).

**Kline & Pinch, "Users as Agents of Technological Change"** (1996, in the bibliography) — the kit-phase source: rural Model T owners running corn shellers off the rear axle are the kit users; the tractor is the product consensus that came later. S1 "what a kit is".

**Bijker, Wiebe E. *Of Bicycles, Bakelites, and Bulbs* (1995)** — closure and stabilization: how a technology's interpretive flexibility ends and one form becomes the product. The frame behind "a factory is a kit whose interface has closed for others". S1 theory.

**How the Protocol Institute Is Adopting AI**
https://protocolized.summerofprotocols.com/p/how-the-protocol-institute-is-adopting
SIGBIZ L1 → L2 case; fortnightly show-and-tell. S4 continuation venue.

**How My Students Think About AI** ✓
https://www.lesswrong.com/posts/ySXuvJcqRindQwAk7/how-my-students-think-about-ai
dvd, Aug 13, 2026. Students do not perceive progress and use AI poorly; counter-signal to "AI-native by default." S1 situating.

---

## 2. The hard problem — solipsism, precommodification, farmsteading

**LLMs Pre-Commodify Ideas** ✓ — Sachin Benny, Jun 12, 2026.
https://summerlightning.substack.com/p/llms-pre-commodify-ideas
Diachronic corpus, synchronic model; provenance as the scarce complement; stigmergy footnote.

**Cognitive Farmsteading** ✓ — Venkatesh Rao, Jul 28, 2026.
https://contraptions.venkateshrao.com/p/cognitive-farmsteading
Automation, bespokification, pensievification. Names PR-mediated collaboration as the early bridge form. Source for the Wallfacer rule's precedent.

**Digital Homelessness** (new, URL found) — Venkatesh Rao, Mar 31, 2021.
https://contraptions.venkateshrao.com/p/digital-homelessness
Being at home online vs. very-online-and-homeless. Grocery-cart / eccentric-home analogy in S1.

**The Curiously Playable Universe** — https://contraptions.venkateshrao.com/p/the-curiously-playable-universe (not fetched)
**Expanding Awareness** ✓ — Michael Ashcroft. https://expandingawareness.org/
Alexander Technique as an awareness-based skill: "notice, expand and ultimately play within the space between stimulus and response," applied to internal and external worlds. Source of the workshop's frame in v6; the four quadrant names (precommodification patterns, playability, traces/pheromones, anchored in reality) are Rafa's, the internal/external axis is Ashcroft's. Start with "What is the Alexander Technique?" https://expandingawareness.org/blog/what-is-the-alexander-technique/
**Mechanical Currents** — https://protocolized.summerofprotocols.com/p/mechanical-currents (not fetched)

---

## 3. Bridges — theory (new section)

**Have Your Factory Call My Factory** ✓ — Rao and Protocolized, Mar 2, 2026.
https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory
The bridge essay. Intermediates, not finished artifacts, flow between factories; F2F relationships; Rao's manuscript factory → Jenna Dixon's production factory via shared Dropbox + transmittal server; "domain knowledge > coding knowledge"; skills as industrial intermediates; high-trust links as the invisible 90%. Two phrases used verbatim in S2: a factory is a "flexible job shop"; F2F is "individuals with significant mutual trust interacting with each other through their personal and bespoke Claude Code infrastructures, exchanging work-in-progress materials". Anchors S2 example and S3 theory. Companion: "From Destination AI to Intelligence Media" (Feb 2, 2026), linked from the essay.

**Ido Salomon on reprotocolizing interface design for agents** (new) — Protocolized podcast, Jul 2026, listed at https://protocolized.io/. Not fetched; candidate S3 reference on interfaces.

---

## 4. Standards map for the ladder (new section)

Each rung of the S2/S3 interface ladder has an open standard. Name them; do not teach them.

| Rung | Standard | Note |
|---|---|---|
| Kit | **SKILL.md / Agent Skills** — folder with `SKILL.md` (name, description, body); open standard from Anthropic, late 2025; stewarded with AGENTS.md under the Linux Foundation's Agentic AI Foundation; registry at skills.sh | The workshop's kit template is this shape |
| Project context | **AGENTS.md** — plain markdown, no required fields; read by 30+ agents; Claude Code still reads CLAUDE.md (Aug 2026) | https://www.morphllm.com/agents-md-guide (secondary; cite the spec) |
| Factory → tool | **MCP** (2026-07-28 spec: Streamable HTTP, OAuth 2.1) | C3PO exposes one |
| Factory → factory | **A2A v1.0/1.0.1** — Agent Card at `/.well-known/agent-card.json`, eight-state task lifecycle, JSON-RPC; donated to Linux Foundation | "HTTP for agent collaboration" |
| Payments | **x402** (Coinbase, HTTP 402 micropayments), **AP2** (Google, signed mandates) | Rao's robotics marketplace uses x402 |
| Identity / trust | **ERC-8004** — onchain agent identity, reputation, validation registries | Rao's robotics marketplace uses 8004 |

Academic anchors:
- Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism I: Definition and Components." *Cognitive Systems Research* 38 (2016): 4–13.

Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism II: Varieties and Evolution." *Cognitive Systems Research* 38 (2016): 50–59.

Hu, Botao, and Helena Rong. "Inter-Agent Trust Models: A Comparative Study of Brief, Claim, Proof, Stake, Reputation and Constraint in Agentic Web Protocol Design — A2A, AP2, ERC-8004, and Beyond." AAAI 2026. https://arxiv.org/pdf/2511.03434
- "Governance Gaps in Agent Interoperability Protocols: What MCP, A2A, and ACP Cannot Express." June 2026. https://arxiv.org/html/2606.31498 — finding: zero governance extensions proposed for A2A after six months of an active extension ecosystem. Directly relevant to SIGBIZ.
- "Permission Manifests for Web Agents." Jan 2026. https://arxiv.org/pdf/2601.02371 — positions MCP/A2A as API-centric interoperability with x402/AP2 for payment.

---

## 4a. Kit standard — primary sources (new in v3)

- **Agent Skills specification** — https://agentskills.io/specification (spec repo: https://github.com/agentskills/agentskills). A skill is a folder with `SKILL.md` (frontmatter `name`, `description`; body instructions), optional `scripts/`, `references/`, `assets/`. Published Dec 18, 2025; adopted by 30+ tools within months. The workshop's `KIT_TEMPLATE/` follows this shape so a kit built Tuesday works in any harness Wednesday.
- **Anthropic, "The Complete Guide to Building Skills for Claude"** (PDF) — https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf. Practitioner guide; the recurring lesson "if it doesn't trigger, it's the description" belongs in S2.
- **skills.sh** (Vercel registry) — the marketplace; evidence that skills circulate as Rao's "industrial intermediates."

## 4b. Trust and the bridge problem — security literature (new in v3)

Read for S3's two minutes on trust and for SIGBIZ; not for participants.
- Cloud Security Alliance, "Agent Context Poisoning: SKILL.md and the New AI Supply Chain Attack Surface," research note, May 6, 2026. https://labs.cloudsecurityalliance.org/research/csa-research-note-skill-md-agent-context-poisoning-20260506/ — context-flattening: agents cannot semantically distinguish developer instructions from third-party skill instructions.
- "Skill-Inject: Measuring Agent Vulnerability to Skill File Attacks." OSU NLP, 2026. https://arxiv.org/pdf/2602.20156
- "Under the Hood of SKILL.md: Semantic Supply-chain Attacks on AI Agent Skill Registry." May 2026. https://arxiv.org/html/2605.11418v1 — description-only framing biases selection in 77.6% of paired trials; governance evasion in up to 100%.
- "MalSkillBench: A Runtime-Verified Benchmark of Malicious Agent Skills." June 2026. https://arxiv.org/pdf/2606.07131
- "Agent Skills in the Wild" (42,447 skills collected, 31,132 analyzed; 26.1% with at least one vulnerability), summarized in SafeDep's threat model: https://safedep.io/agent-skills-threat-model/
- OWASP Agentic Skills Top 10 (AST10) and OWASP Top 10 for Agentic Applications — cited in HiddenLayer, "The Next AI Supply Chain Risk," June 2026: https://www.hiddenlayer.com/research/the-next-ai-supply-chain-risk-malicious-skills-in-agentic-ai
Connects to Hu & Rong (trust models) and the governance-gaps paper in §4: the literature is converging on "skills are dependencies; treat as untrusted by default," which is the formal statement of why F2F bridges are high-trust.

## 4c. Stigmergy — the traces quadrant (new in v3)

- Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism I: Definition and Components." *Cognitive Systems Research* 38 (2016): 4–13. https://www.sciencedirect.com/science/article/abs/pii/S1389041715000327
- Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism II: Varieties and Evolution." *Cognitive Systems Research* 38 (2016): 50–59.
- Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism: Components, Varieties and Applications." In *Human Stigmergy*, ed. Lewis and Marsh (Springer). Open PDF: https://pespmc1.vub.ac.be/Papers/Stigmergy-Springer.pdf
Definition used in S1: indirect coordination in which the trace left by an action in a medium stimulates subsequent actions — without planning, control, communication, simultaneous presence, or mutual awareness. Sematectonic (the work) vs. marker-based (signs about the work); Wikipedia and open source as the human cases. The kit is sematectonic; `LOG.md` is marker-based; the repo is the medium. Note: the parallel "Securing Stigmergic Systems" workshop owns the security side of this; the framing here stays on coordination.

---

## 5. Kits and factories — examples

**C3PO — How It Works** ✓ https://c3po.protocolized.io/how-it-works
RAG over the PI corpus; reproducible three-layer ingest; web/Discord/MCP. MCP: `claude mcp add c3po --transport http https://c3po.protocolized.io/mcp` — `search_corpus` open (100 calls/IP/day); `ask_c3po` needs a key from team@protocol-institute.org. Source: https://github.com/Protocol-Institute/c3po. S1 example, S3 target.

**Protocol Institute Brand Kit** https://npc.here.now/protocolintstitutebrandkit/ — S2 chain with TITLES and Monstrous Times.
**Protocol Fiction Aesthetics** https://protocolized.summerofprotocols.com/p/protocol-fiction-aesthetics — Langdon, Nov 2025; narrow models over stock generators.
**Prime Radiant** ✓ https://primeradiant.worldmachines.org/ — 255/500 Machine Cards, DuckDB + VSS, 17-tool query layer. S3 example; target only if an external interface is confirmed.
**Water Data Strategy** https://npc.here.now/waterdatastrategy/ — PDF pipelines, registry. S3 example/target; interface to be specified.
**Z-Space / zai** https://news.z-space.ca/zai/ — not fetched; confirm.

**How to Turn Your AI Into a World-Class Designer** (new) — Anshu Chaudhary (anshuc), Lenny's Newsletter.
https://lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world
Eight techniques; the last three (cut what adds nothing, remove AI tells, rewrite copy by hand) are the S2 "comms" layer. Claim to pressure-test: "next-token prediction stifles creativity" is a rhetorical frame, not a mechanism.

---

## 6. Workshop craft (new section)

- Artifact every 30–45 minutes; divergent before convergent; each participant leaves with a next action. (SuperDupr, "Design Thinking Workshops: 2026 Playbook," May 2026 — practitioner source, not authoritative.)
- Remote discipline: pre-built templates so no live setup; co-facilitator owns chat and breakouts. (same)
- Some programs do not record hands-on "jam" sessions so they stay safe for experimentation. (IDEO U AI workshop series page.) Decide recording policy per session; v4 records S4 synthesis only.
- Peer-teaching precedent for kits: spreadsheets spread as vernacular through artifacts that taught the method (Levy, "A Spreadsheet Way of Knowledge," Backchannel; cited in the CMM appendix).

---

## 7. Working-notes candidates without URLs

Jamverse · robot marketplace · microduck robot simulator MCP · Infinite TV (https://fal.live/) · book factory (Jenna) · Monstrous Times (James) · psychohistory oracle · Openrecapper · takeoff project · Wobblebots · paintings articulation

---

## 8. Bibliography (Chicago, notes-bibliography style; web sources)

Agent Skills. "Agent Skills Specification." Accessed September 11, 2026. https://agentskills.io/specification.

Cloud Security Alliance. "Agent Context Poisoning: SKILL.md and the New AI Supply Chain Attack Surface." Research note, May 6, 2026.

Chaudhary, Anshu. "How to Turn Your AI Into a World-Class Designer." *Lenny's Newsletter*, 2026. https://lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world.

Ashcroft, Michael. "What Is the Alexander Technique?" *Expanding Awareness*. https://expandingawareness.org/blog/what-is-the-alexander-technique/.

Bijker, Wiebe E. *Of Bicycles, Bakelites, and Bulbs: Toward a Theory of Sociotechnical Change*. Cambridge, MA: MIT Press, 1995.

Benny, Sachin. "LLMs Pre-Commodify Ideas." *Summer Lightning*, June 12, 2026. https://summerlightning.substack.com/p/llms-pre-commodify-ideas.

Devine, Warren D., Jr. "From Shafts to Wires: Historical Perspective on Electrification." *Journal of Economic History* 43, no. 2 (1983): 347–72.

dvd. "How My Students Think About AI." *LessWrong*, August 13, 2026. https://www.lesswrong.com/posts/ySXuvJcqRindQwAk7/how-my-students-think-about-ai.

Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism I: Definition and Components." *Cognitive Systems Research* 38 (2016): 4–13.

Heylighen, Francis. "Stigmergy as a Universal Coordination Mechanism II: Varieties and Evolution." *Cognitive Systems Research* 38 (2016): 50–59.

Hu, Botao, and Helena Rong. "Inter-Agent Trust Models: A Comparative Study of Brief, Claim, Proof, Stake, Reputation and Constraint in Agentic Web Protocol Design — A2A, AP2, ERC-8004, and Beyond." *Proceedings of AAAI*, 2026. https://arxiv.org/pdf/2511.03434.

Kline, Ronald, and Trevor Pinch. "Users as Agents of Technological Change: The Social Construction of the Automobile in the Rural United States." *Technology and Culture* 37, no. 4 (1996): 763–95.

Langdon, James. "Protocol Fiction Aesthetics." *Protocolized*, November 2025. https://protocolized.summerofprotocols.com/p/protocol-fiction-aesthetics.

Protocol Institute, Protocols for Business SIG. *Durable AI Adoption*, v0.5. May 2026. https://ai.protocolized.dev/.

Protocol Institute. "How C3PO Works." Accessed September 10, 2026. https://c3po.protocolized.io/how-it-works.

Rao, Venkatesh. "Cognitive Farmsteading." *Contraptions*, July 28, 2026. https://contraptions.venkateshrao.com/p/cognitive-farmsteading.

Rao, Venkatesh. "Digital Homelessness." *Contraptions*, March 31, 2021. https://contraptions.venkateshrao.com/p/digital-homelessness.

Rao, Venkatesh. "Protocol Symposium 2026 Registration Open." *Protocolized*, August 21, 2026. https://protocolized.summerofprotocols.com/p/protocol-symposium-2026-registration.

Rao, Venkatesh, and Protocolized. "Have Your Factory Call My Factory." *Protocolized*, March 2, 2026. https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory.

Yegge, Steve. "Stevey's Google Platforms Rant." 2011. (Cited in *Durable AI Adoption* for the Bezos API mandate.)

"Governance Gaps in Agent Interoperability Protocols: What MCP, A2A, and ACP Cannot Express." arXiv, June 2026. https://arxiv.org/html/2606.31498.

---

## Take-home reading order (after S1)

1. Durable AI Adoption, ch. 1–3
2. Have Your Factory Call My Factory
3. LLMs Pre-Commodify Ideas
4. Cognitive Farmsteading
5. C3PO — How It Works
