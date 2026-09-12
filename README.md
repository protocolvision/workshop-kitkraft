# AI Kitcraft 2026

Hands-on AI tooling workshop, Protocol Symposium 2026 (New Nature), Sep 21–22, online.
Facilitators: Rafa, Sachin Benny.

This repo is the workshop's public record and working surface. Your agent reads from it and writes to it. Spine: **Kit → Factory → Bridge**. Frame: **Expanded Awareness**.

## Register

Sign-up form: https://docs.google.com/forms/d/e/1FAIpQLScwbiUGZuQ8FBuxgXAd13IBKTPVkVXVd8_FDmEjCb5o01s-Og/viewform
Workshop page: https://ai.protocolized.dev/kitcraft/

## How to participate

1. Install a harness (Claude Code or Codex). Accept the collaborator invite for this repo.
2. Clone it, make your folder from the template, **open your harness at the clone root** (the folder containing `AGENTS.md`), then paste `instructions/orient.md` into it and say "do this":
   ```
   git clone https://github.com/protocolvision/workshop-kitkraft.git && cd workshop-kitkraft
   cp -r PARTICIPANT_TEMPLATE participants/<your-name> && claude   # or codex — at the clone root
   ```
   Your harness reads `AGENTS.md` / `CLAUDE.md` on open. That is what makes the autolog work.
3. Work only in your own folder, `participants/<your-name>/`:
   - `inventory.md` (Session 1)
   - `kit/` (Session 2)
   - `bridges/<target>.md` (Session 3) — one log per bridge, written by you
   - `LOG.md` — your harness writes it; you do not
4. Push to `main`. No branches, no PRs. Your harness pulls with rebase first.
5. Private kit? Keep the content on your own machine. Put only a stub `participants/<your-name>/kit/README.md` here (job, inputs, outputs, no content). Others bridge to it through your agent (see `bridges/README.md`). There is no private repo.

## Layout

```
README.md          this file
AGENTS.md          agent entry: conventions + autolog instruction
CLAUDE.md          points Claude Code at AGENTS.md
instructions/      blocks to paste into your harness (orient, async-1, S2-critique, async-2, S3-bridge)
PARTICIPANT_TEMPLATE/  copy to participants/<name>/: inventory.md, kit/, bridges/TEMPLATE.md, LOG.md
participants/<name>/   one folder per person: inventory.md (S1), kit/ (S2), bridges/<target>.md (S3), LOG.md
bridges/           README.md (S3 rules, transmittal procedure); SYNTHESIS.md (S4)
facilitator/<name>/  facilitator kits usable as bridge targets (same shape: kit/, LOG.md)
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

| Session | When (UTC) | Length | Artifact |
|---|---|---|---|
| S1 Kits | Mon Sep 21, 15:30 | 60 min | `participants/<name>/inventory.md` |
| 1A clinic (optional) | Mon Sep 21, 16:30 | 30 min | a first push |
| S2 Factories | Mon Sep 21, 20:00 | 60 min | `participants/<name>/kit/` |
| S3 Bridges | Tue Sep 22, 15:30 | 60 min | `participants/<you>/bridges/<target>.md` |
| S4 Recap | Tue Sep 22, 20:00 | 60 min | `bridges/SYNTHESIS.md` |

Times in UTC / Berlin / Pacific are pinned in #kitcraft.
