# Participants — one folder per person

`participants/<name>/`, where `<name>` is your GitHub username, lowercase. It is a copy of `PARTICIPANT_TEMPLATE/` and it is the only place your harness writes. Open your harness at the clone root (the folder that contains `AGENTS.md`), not in here.

```
participants/<name>/
  LOG.md                              the one append-only autolog for everything below (stays at the root)
  s1-inventory/inventory.md           S1 — the AI kits you already use, the one to convert, posture (schema below)
  s2-factory/                         S2 — README.md, SKILL.md, examples/ (the Agent Skills shape; stub README only if private)
  s3-bridges/<target>.md              S3 — one file per bridge, written by you (template in PARTICIPANT_TEMPLATE/s3-bridges/)
  s4-show-and-tell/show-and-tell.md   S4 — what you say in your ninety seconds, prepared in Async 3
```

Your harness creates the folder and writes `s1-inventory/inventory.md`: paste Block 1 of `instructions/S1-inventory.md` (and later Block 2) and say "do this"; the pre-work email's Block A does the first push. Rule for the exercise: read other people's inventories only through your agent, never in the browser.

## The one inventory schema

Every `s1-inventory/inventory.md` has exactly these sections, in this order. The pre-work push creates the file with the headings; S1 fills them; nothing else rewrites them. Log lines do not go here; they go to `LOG.md`.

```
# <name>

## Kits I use
### 1. <short name for the kit>
- What it is: <the tools and pieces it is made of>
- The job it does: <one sentence>
- How often I use it: <daily / weekly / monthly / now and then>
- What I adapted: <what you added, bent or worked around to make it fit your job>
- Who else uses it: <only me / my team / shared more widely>
- Where it lives: <where the pieces are kept; name the place, never paste private contents>

### 2. …
### 3. …
… up to 10

## Kit to convert
<which kit above becomes a factory in Session 2, and why, in one or two sentences; `undecided` is allowed until Async 1>

## Related
<two kits in the room that could complement yours, one line each: `<owner>/<kit name> — <why>`; your harness appends this in Session 1's second exercise>

## Posture
<Partnership / Hypervigilance / Overreliance / Compliance, or "not taken">
```

**What counts as a kit.** Any AI tool or setup you have used or built for repeated use to do a real job: a skill, a saved or reused prompt, a slash command or custom agent, a custom GPT or Claude project, a prompt document you copy from, project instructions (CLAUDE.md / AGENTS.md), an MCP server or plugin you rely on, a spreadsheet or document with an AI step, an automation with an AI step. Small is fine; third-party tools count when you reuse them.

Rules:
- Three to ten kits, most used first. Never pad: fewer is fine when that is all there is.
- "How often I use it" shows whether the job recurs; "What I adapted" shows what you know that a stranger would not.
- The harness drafts the list from its memory of you and from the AI setup on your machine (skills, saved prompts, commands, project instructions, prompt history), read-only. Every kit and field traces to something it read; it never invents one and asks you for what it cannot find. You confirm, correct or cut the draft before it is pushed. If nothing turns up, it asks you, reads you the "what counts" list, and records `none yet` if there is still none; Session 1 will help you find one.

Everything in the repo is public. Keep private work in a private workspace on your machine; put in the repo only what you are comfortable sharing. In the inventory that means kit names, the tools they are made of, and one-line descriptions; name where a kit lives, never paste its private contents; no client names, numbers, credentials, or NDA material. `_example/` is a filled example (`_example/s1-inventory/inventory.md`); folders starting with `_` are not participants.
