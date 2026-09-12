# AI Kitcraft 2026

Hands-on AI tooling workshop, Protocol Symposium 2026 (New Nature), Sep 21–22, online.
Facilitators: Rafa, Sachin Benny.

This repo is the workshop's public record and working surface. Your agent reads from it and writes to it. Spine: **Kit → Factory → Bridge**. Frame: **Expanded Awareness**.

## Register

Sign-up form: https://docs.google.com/forms/d/e/1FAIpQLScwbiUGZuQ8FBuxgXAd13IBKTPVkVXVd8_FDmEjCb5o01s-Og/viewform
Workshop page: https://ai.protocolized.dev/kitcraft/

## How to participate

1. Install a harness: Claude Code (needs a Claude Pro or Max subscription; https://docs.claude.com/en/docs/claude-code) or Codex (needs a ChatGPT plan; https://developers.openai.com/codex/cli). Accept the collaborator invite for this repo (GitHub notifications or the invite email).
2. Install `git` and `gh` (the GitHub CLI), then run `gh auth login` (GitHub.com, HTTPS, browser) and `gh auth setup-git`. This is the step that lets a push work without a password prompt; a harness cannot do the browser login for you.
3. Clone the repo, copy the template to your own folder, **open your harness at the clone root** (the folder that contains `AGENTS.md`), paste `instructions/orient.md` into it and say "do this":
   ```
   git clone https://github.com/protocolvision/workshop-kitkraft.git && cd workshop-kitkraft && cp -R PARTICIPANT_TEMPLATE participants/<name> && claude   # or codex
   ```
   Your harness reads `AGENTS.md` / `CLAUDE.md` on open; they tell it to write only inside `participants/<name>/` and to read anywhere. That is what makes the autolog and the write boundary work. Every later instruction is a file in `instructions/` you paste the same way.
4. Work only in your own folder, `participants/<name>/` (`<name>` = your GitHub username, lowercase), a copy of `PARTICIPANT_TEMPLATE/`:
   - `inventory.md` (Session 1)
   - `kit/` (Session 2)
   - `bridges/<target>.md` (Session 3) — one file per bridge, written by you
   - `LOG.md` — the one autolog for everything in the folder
5. **Everything goes straight to `main`. No branches, no PRs, no force-push.** Your harness commits, pulls with rebase, pushes, and retries if the push is rejected.
6. Private kit? Keep the content on your own machine. Put only a stub `participants/<name>/kit/README.md` here (job, inputs, outputs, no content). Others bridge to it through your agent (see `instructions/S3-bridge.md`). There is no private repo.
7. No working harness, or no GitHub account? Follow `instructions/no-harness.md`: write the file by hand, paste it in #kitcraft, a facilitator commits it under your name.

## Layout

```
README.md          this file
AGENTS.md          agent entry: conventions + autolog instruction
CLAUDE.md          points Claude Code at AGENTS.md
instructions/      blocks to paste into your harness (orient, S1-inventory, async-1, S2-build, S2-critique, async-2, S3-bridge, no-harness)
PARTICIPANT_TEMPLATE/  the whole participant folder to copy: inventory.md, kit/, bridges/TEMPLATE.md, LOG.md
participants/<name>/   one folder per participant, the only place their harness writes (S1–S3)
facilitator/<name>/    facilitator kits in the same shape, usable as bridge targets
workshop-dev/transcripts/       per session: transcript, summary, awareness-check; S4 also holds SYNTHESIS.md
workshop-dev/      facilitator material: outline, resources, checklists, session materials
workshop-dev/site/              the landing page at https://ai.protocolized.dev/kitcraft/ (source + deploy notes)
workshop-dev/registration/      the sign-up form: link, questions, how answers feed the prep checklist
```

## Consent

Plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into `workshop-dev/transcripts/`. Breakouts and the 1A clinic are not recorded. Your harness appends log lines to `LOG.md` files in this public repo. Ask a facilitator to remove any of your lines at any time. Put nothing in a public kit you would not put on a public website. After the workshop: the repo stays public and the synthesis is posted in Discord within 48 hours; nothing else is planned. Full notice: `workshop-dev/sessions/consent-notice.md`, pinned in #kitcraft.

## Related repos

- Landing page source: [`workshop-dev/site/`](workshop-dev/site/) → https://ai.protocolized.dev/kitcraft/
- Brand kit (S2 example, bridge target): https://github.com/protocolvision/project-aimarketing
- AI Capability Maturity Model / Durable AI Adoption: https://github.com/protocolvision/project-aicapabilitymaturitymodel → https://ai.protocolized.dev/
- Water rate data strategy: https://github.com/protocolvision/project-water → https://npc.here.now/waterdatastrategy/

## Sessions

Discord: https://discord.gg/s2WbZBDqM — voice **#kafka**, text **#kitcraft**, live transcript **#kitcraft-transcripts**, breakout voice rooms **breakout-1 … breakout-5**.

| Session | When (UTC) | Length | Artifact |
|---|---|---|---|
| S1 Kits | Mon Sep 21, 15:30 | 60 min | `participants/<name>/inventory.md` |
| 1A clinic (optional) | Mon Sep 21, 16:30 | 30 min | a first push |
| S2 Factories | Mon Sep 21, 20:00 | 60 min | `participants/<name>/kit/` |
| S3 Bridges | Tue Sep 22, 15:30 | 60 min | `participants/<name>/bridges/<target>.md` |
| S4 Recap | Tue Sep 22, 20:00 | 60 min | `workshop-dev/transcripts/S4/SYNTHESIS.md` |

Berlin is UTC+2, Pacific is UTC−7. Times in all three zones are pinned in #kitcraft.
