# Facilitator factories — bridge targets

| Target | Interface | Access | Owner |
|---|---|---|---|
| C3PO | MCP `search_corpus` at https://c3po.protocolized.io/mcp | no key; 100 calls/IP/day | PI |
| C3PO | MCP `ask_c3po` | bearer token from team@protocol-institute.org | PI |
| Prime Radiant | https://primeradiant.worldmachines.org/ | external interface TBC | Aneesh |
| Water registry | https://npc.here.now/waterdatastrategy/ | TBC | Rafa |
| PI brand kit | https://github.com/protocolvision/project-aimarketing (`llms.txt` → `brand.json`) · live https://npc.here.now/protocolintstitutebrandkit/ | repo | Rafa |
| Sachin's kit | `facilitator/sachin/kit/` | repo | Sachin |
| Rafa's kit (water-rate PDF → registry row) | `facilitator/rafa/kit/` (file handoff; row shape in `examples/output.csv`) | repo | Rafa |

Connect C3PO in Claude Code: `claude mcp add c3po --transport http https://c3po.protocolized.io/mcp`

Each facilitator has the participant shape: `facilitator/<name>/kit/` (README.md, SKILL.md, examples/) and `facilitator/<name>/LOG.md`, so participants' agents read it like any other kit.
