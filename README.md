# AI Kitcraft 2026

Hands-on AI tooling workshop, Protocol Symposium 2026 (New Nature), Sep 21–22, online.
Facilitators: Rafa, Sachin Benny.

This repo is the workshop's public record and working surface. Your agent reads from it and writes to it. Spine: **Kit → Factory → Bridge**. Frame: **Expanded Awareness**.

## Register

Sign-up form: https://docs.google.com/forms/d/e/1FAIpQLScwbiUGZuQ8FBuxgXAd13IBKTPVkVXVd8_FDmEjCb5o01s-Og/viewform
Workshop page: https://ai.protocolized.dev/kitcraft/

## How to participate

1. Install a harness (Claude Code or Codex). Accept the collaborator invite for this repo.
2. Clone it and **open your harness inside the clone**:
   ```
   git clone https://github.com/protocolvision/workshop-kitkraft.git && cd workshop-kitkraft && claude   # or codex
   ```
   Your harness reads `AGENTS.md` / `CLAUDE.md` on open. That is what makes the autolog work.
3. Work only in your own files:
   - `inventory/<your-name>.md` (Session 1)
   - `kits/<your-name>/` (Session 2) — copy `KIT_TEMPLATE/` to start
   - `bridges/<a>-<b>.md` (Session 3) — files you are a party to
4. Push to `main`. No branches, no PRs. Your harness pulls with rebase first.
5. Private kit? Put the content in `workshop-kitkraft-private` (same layout) and leave a stub `kits/<your-name>/README.md` here with job, inputs, outputs, no content.

## Layout

```
README.md          this file
AGENTS.md          agent entry: conventions + autolog instruction
CLAUDE.md          points Claude Code at AGENTS.md
KIT_TEMPLATE/      README.md, SKILL.md, LOG.md, examples/
inventory/         one file per participant (S1)
kits/<name>/       one folder per participant (S2)
bridges/           one log per pair (S3); SYNTHESIS.md (S4)
facilitator/       facilitator factories usable as bridge targets
transcripts/       OpenRecapper output per session
workshop-dev/      facilitator material: outline, resources, checklists
site/              the landing page at https://ai.protocolized.dev/kitcraft/ (source + deploy notes)
registration/      the sign-up form: link, questions, how answers feed the prep checklist
```

## Consent

Plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into `transcripts/`. Breakouts are not recorded. Your harness appends log lines to `LOG.md` files in this public repo. Ask a facilitator to remove any of your lines at any time. Put nothing in a public kit you would not put on a public website.

## Related repos

- Landing page source: [`site/`](site/) → https://ai.protocolized.dev/kitcraft/
- Brand kit (S2 example, bridge target): https://github.com/protocolvision/project-aimarketing
- AI Capability Maturity Model / Durable AI Adoption: https://github.com/protocolvision/project-aicapabilitymaturitymodel → https://ai.protocolized.dev/
- Water rate data strategy: https://github.com/protocolvision/project-water → https://npc.here.now/waterdatastrategy/

## Sessions

Discord: https://discord.gg/s2WbZBDqM — voice **#kafka**, text **#kitcraft**, live transcript **#kitcraft-transcripts**.

| Session | When | Length | Artifact |
|---|---|---|---|
| S1 Kits | Mon Sep 21 | 90 min | `inventory/<name>.md` |
| S1A clinic | Mon Sep 21 | 30 min | a first push |
| S2 Factories | Tue Sep 22 | 60 min | `kits/<name>/` |
| S3 Bridges | Tue Sep 22 | 60 min | `bridges/<a>-<b>.md` |
| S4 Recap | Tue Sep 22 | 60 min | `bridges/SYNTHESIS.md` |

Times in UTC / Berlin / Pacific are pinned in #kitcraft.
