# AI Kitcraft 2026

Hands-on AI tooling workshop, Protocol Symposium 2026 (New Nature), Sep 21–22, online.
Facilitators: Rafa, Sachin Benny.

This repo is the workshop's public record and working surface. Your agent reads from it and writes to it. Spine: **Kit → Factory → Bridge** — the third term is the open question the workshop ends on; the bridge logs decide what it means. Frame: **Expanded Awareness**.

## Register

Sign-up form: https://docs.google.com/forms/d/e/1FAIpQLScwbiUGZuQ8FBuxgXAd13IBKTPVkVXVd8_FDmEjCb5o01s-Og/viewform
Workshop page: https://ai.protocolized.dev/kitcraft/

## How to participate

1. Install an AI assistant (a.k.a. harness): Claude Code (needs a Claude Pro or Max subscription; https://docs.claude.com/en/docs/claude-code) or Codex (needs a ChatGPT plan; https://developers.openai.com/codex/cli). Accept the collaborator invite for this repo (GitHub notifications or the invite email).
2. Install `git` and `gh` (the GitHub CLI), then run `gh auth login` (GitHub.com, HTTPS, browser) and `gh auth setup-git`. This is the step that lets a push work without a password prompt; a harness cannot do the browser login for you. What to install, why, and how to verify, per system: `workshop-dev/sessions/setup-checklist.md`.
3. Clone the repo, copy the template to your own folder, **open your harness at the clone root** (the folder that contains `AGENTS.md`), paste `instructions/orient.md` into it and say "do this":
   ```
   git clone https://github.com/protocolvision/workshop-kitkraft.git && cd workshop-kitkraft && cp -R PARTICIPANT_TEMPLATE participants/<name> && claude   # or codex
   ```
   Your harness reads `AGENTS.md` / `CLAUDE.md` on open; they tell it to write only inside `participants/<name>/` and to read anywhere. That is what makes the autolog and the write boundary work. Every later instruction is a file in `instructions/` you paste the same way.
4. Work only in your own folder, `participants/<name>/` (`<name>` = your GitHub username, lowercase), a copy of `PARTICIPANT_TEMPLATE/`:
   - `s1-inventory/inventory.md` (Session 1)
   - `s2-factory/` (Session 2)
   - `s3-bridges/<target>.md` (Session 3) — one file per bridge, written by you
   - `s4-show-and-tell/show-and-tell.md` (Session 4) — what you say in your ninety seconds
   - `LOG.md` — the one autolog for everything in the folder, at its root
5. **Everything goes straight to `main`. No branches, no PRs, no force-push.** Your harness commits, pulls with rebase, pushes, and retries if the push is rejected.
6. Everything in the repo is public. Keep private work in a private workspace on your machine; put in the repo only what you are comfortable sharing. Once an exercise begins, do any work you would rather not share in that workspace and put here only what you are comfortable sharing.
7. Everyone has a harness and a GitHub account. Harness installed but something wrong (auth, wrong clone, wrong branch, push rejected)? Post the exact error in #workshop-kitkraft and come to 1A.

## Layout

```
README.md          this file
AGENTS.md          agent entry: conventions + autolog instruction
CLAUDE.md          points Claude Code at AGENTS.md
instructions/      blocks to paste into your harness (orient, S1-inventory, async-1, S2-factory, S2-critique, async-2, S3-bridge, S4-show-and-tell)
PARTICIPANT_TEMPLATE/  the whole participant folder to copy: LOG.md, s1-inventory/, s2-factory/, s3-bridges/TEMPLATE.md, s4-show-and-tell/
participants/<name>/   one folder per participant, the only place their harness writes (S1–S4)
facilitator/<name>/    facilitator factories in the same shape (s2-factory/), usable as bridge targets
workshop-dev/transcripts/       per session: transcript, summary, awareness-check; S4 also holds SYNTHESIS.md
workshop-dev/      facilitator material: outline, resources, checklists, session materials
workshop-dev/site/              the landing page at https://ai.protocolized.dev/kitcraft/ (source + deploy notes)
workshop-dev/registration/      the sign-up form: link, questions, how answers feed the prep checklist
```

## Consent

Plenary audio in #kafka and all text in #workshop-kitkraft are recorded and transcribed with speaker names; transcripts go into `workshop-dev/transcripts/`. Breakouts may be recorded; 1A Tech Support is not. Your harness appends log lines to `LOG.md` files in this public repo. Ask Rafa or Sachin to remove any of your lines at any time, no reason needed. Put nothing in a public kit you would not put on a public website. After the workshop: the repo stays public, the synthesis is posted in #workshop-kitkraft, and the recordings may be used for broader synthesis for Symposium write-ups and future research (tell the facilitators if you want to opt out). Full notice: `workshop-dev/sessions/consent-notice.md`, pinned in #workshop-kitkraft.

## Related repos

- Landing page source: [`workshop-dev/site/`](workshop-dev/site/) → https://ai.protocolized.dev/kitcraft/
- Brand kit (S2 example, bridge target): https://github.com/protocolvision/project-aimarketing
- AI Capability Maturity Model / Durable AI Adoption: https://github.com/protocolvision/project-aicapabilitymaturitymodel → https://ai.protocolized.dev/
- Water rate data strategy: https://github.com/protocolvision/project-water → https://npc.here.now/waterdatastrategy/

## Sessions

Discord: https://discord.gg/s2WbZBDqM — voice **#kafka**, text **#workshop-kitkraft** (https://discord.com/channels/1082444651946049567/1548286831232032778), live transcript **#meeting-notes** (https://discord.com/channels/1082444651946049567/1519549380791631903, shared with other meetings), breakout voice rooms **breakout-1 … breakout-5**.

| Session | When (UTC) | Length | Artifact |
|---|---|---|---|
| S1 Kits | Mon Sep 21, 15:30 | 60 min | `participants/<name>/s1-inventory/inventory.md` |
| 1A Tech Support (optional) | Mon Sep 21, 16:30 | 30 min | a first push |
| S2 Factories | Mon Sep 21, 20:00 | 60 min | `participants/<name>/s2-factory/` as a factory: it runs without you, fits whoever uses it, and hands off something others can build on — the README declares `Exports:`, `Interface:` and `Adapts to:` |
| S3 Bridges | Tue Sep 22, 15:30 | 60 min | `participants/<name>/s3-bridges/<target>.md` — one of three configurations to try: across factories, across kits, or kit ↔ factory; the closing paragraph says what a bridge turned out to be |
| S4 Recap | Tue Sep 22, 20:00 | 60 min | `participants/<name>/s4-show-and-tell/show-and-tell.md`, prepared in Async 3; the facilitators' `workshop-dev/transcripts/S4/SYNTHESIS.md` |

Berlin is UTC+2, Pacific is UTC−7. Times in all three zones are pinned in #workshop-kitkraft.
