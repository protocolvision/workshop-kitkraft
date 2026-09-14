# Facilitator kits — bridge targets

Only what exists. Each facilitator has `facilitator/<name>/` in the participant shape (`s2-factory/`, `LOG.md`) so participants' agents read it like any other kit.

| Target | Interface | Access | Owner |
|---|---|---|---|
| Rafa's kit (water-rate PDF → registry row) | `facilitator/rafa/s2-factory/` (file handoff; row shape in `examples/output.csv`) | repo | Rafa |
| Sachin's kit | `facilitator/sachin/s2-factory/` | repo | Sachin |
| PI brand kit | https://github.com/protocolvision/project-aimarketing (`llms.txt` → `brand.json`) | link, read-only | Rafa |

Theory help, not a target: **C3PO**, the Protocol Institute corpus, MCP `search_corpus` at https://c3po.protocolized.io/mcp (no key; 100 calls/IP/day).
- Claude Code: `claude mcp add c3po --transport http https://c3po.protocolized.io/mcp`
- Codex: `codex mcp add c3po --url https://c3po.protocolized.io/mcp` (if your Codex version differs, see the Codex MCP docs: https://developers.openai.com/codex/mcp)
