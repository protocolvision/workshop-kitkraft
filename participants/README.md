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

### 2. … (optional)
### 3. … (optional)

## Kit to convert
<which kit above becomes a factory in Session 2, and why, in one or two sentences; `undecided` is allowed until Async 1>

## Posture
<Partnership / Hypervigilance / Overreliance / Compliance, or "not taken">
```

**What counts as a kit.** Any AI setup you have tinkered with to do a real job: a saved or reused prompt, a custom GPT or Claude project, a prompt document you copy from, a spreadsheet or document with an AI step, an automation with an AI step, a skill. Small is fine.

Rules:
- One to three kits. At least one; never pad to three.
- "How often I use it" shows whether the job recurs; "What I adapted" shows what you know that a stranger would not.
- The harness asks you about your kits one at a time and records your answers. It never invents a kit, a field, or an example. If you say you have none, it reads you the "what counts" list; if there is still none, it records `none yet` under `## Kits I use`, and Session 1 will help you find one.

Everything in the repo is public. Keep private work in a private workspace on your machine; put in the repo only what you are comfortable sharing. In the inventory that means kit names, the tools they are made of, and one-line descriptions; name where a kit lives, never paste its private contents; no client names, numbers, credentials, or NDA material. `_example/` is a filled example (`_example/s1-inventory/inventory.md`); folders starting with `_` are not participants.
