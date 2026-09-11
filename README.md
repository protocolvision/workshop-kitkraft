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
3. Clone the repo, **open your harness inside the clone**, paste `instructions/orient.md` into it and say "do this":
   ```
   git clone https://github.com/protocolvision/workshop-kitkraft.git && cd workshop-kitkraft && claude   # or codex
   ```
   Your harness reads `AGENTS.md` / `CLAUDE.md` on open. That is what makes the autolog work. Every later instruction is a file in `instructions/` you paste the same way.
4. Work only in your own files. `<name>` is your GitHub username, lowercase:
   - `inventory/<name>.md` (Session 1)
   - `kits/<name>/` (Session 2) — copy `KIT_TEMPLATE/` to start
   - `bridges/<name>-<target>.md` (Session 3) — one log per bridge, written by you
5. **Everything goes straight to `main`. No branches, no PRs, no force-push.** Your harness commits, pulls with rebase, pushes, and retries if the push is rejected.
6. Private kit? Keep the content on your own machine. Put only a stub `kits/<name>/README.md` here (job, inputs, outputs, no content). Others bridge to it through your agent (see `bridges/README.md`). There is no private repo.
7. No working harness, or no GitHub account? Follow `instructions/no-harness.md`: write the file by hand, paste it in #kitcraft, a facilitator commits it under your name.

## Layout

```
README.md          this file
AGENTS.md          agent entry: conventions + autolog instruction
CLAUDE.md          points Claude Code at AGENTS.md
instructions/      blocks to paste into your harness (orient, S1-inventory, async-1, S2-critique, async-2, S3-bridge, no-harness)
KIT_TEMPLATE/      README.md, SKILL.md, LOG.md, examples/
inventory/         one file per participant (S1)
kits/<name>/       one folder per participant (S2)
bridges/           one log per bridge (S3); SYNTHESIS.md (S4)
facilitator/       facilitator kits usable as bridge targets
transcripts/       OpenRecapper output per session
workshop-dev/      facilitator material: outline, resources, checklists, session materials
site/              the landing page at https://ai.protocolized.dev/kitcraft/ (source + deploy notes)
registration/      the sign-up form: link, questions, how answers feed the prep checklist
```

## Consent

Plenary audio in #kafka is recorded and transcribed with speaker names; transcripts go into `transcripts/`. Breakouts and the 1A clinic are not recorded. Your harness appends log lines to `LOG.md` files in this public repo. Ask a facilitator to remove any of your lines at any time. Put nothing in a public kit you would not put on a public website. After the workshop: the repo stays public and the synthesis is posted in Discord within 48 hours; nothing else is planned. Full notice: `workshop-dev/sessions/consent-notice.md`, pinned in #kitcraft.

## Related repos

- Landing page source: [`site/`](site/) → https://ai.protocolized.dev/kitcraft/
- Brand kit (S2 example, bridge target): https://github.com/protocolvision/project-aimarketing
- AI Capability Maturity Model / Durable AI Adoption: https://github.com/protocolvision/project-aicapabilitymaturitymodel → https://ai.protocolized.dev/
- Water rate data strategy: https://github.com/protocolvision/project-water → https://npc.here.now/waterdatastrategy/

## Sessions

Discord: https://discord.gg/s2WbZBDqM — voice **#kafka**, text **#kitcraft**, live transcript **#kitcraft-transcripts**, breakout voice rooms **breakout-1 … breakout-5**.

| Session | When (UTC) | Length | Artifact |
|---|---|---|---|
| S1 Kits | Mon Sep 21, 15:30 | 60 min | `inventory/<name>.md` |
| 1A clinic (optional) | Mon Sep 21, 16:30 | 30 min | a first push |
| S2 Factories | Mon Sep 21, 20:00 | 60 min | `kits/<name>/` |
| S3 Bridges | Tue Sep 22, 15:30 | 60 min | `bridges/<name>-<target>.md` |
| S4 Recap | Tue Sep 22, 20:00 | 60 min | `bridges/SYNTHESIS.md` |

Berlin is UTC+2, Pacific is UTC−7. Times in all three zones are pinned in #kitcraft.
