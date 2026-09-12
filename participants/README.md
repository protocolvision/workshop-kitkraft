# Participants — one folder per person

`participants/<name>/`, where `<name>` is your GitHub username, lowercase. It is a copy of `PARTICIPANT_TEMPLATE/` and it is the only place your harness writes. Open your harness inside it.

```
participants/<name>/
  inventory.md        S1 — the three recurring tasks, the kit choice, posture (schema below)
  kit/                S2 — README.md, SKILL.md, examples/ (the Agent Skills shape; stub README only if private)
  bridges/<target>.md S3 — one file per bridge, written by you (template in PARTICIPANT_TEMPLATE/bridges/)
  LOG.md              the one append-only autolog for everything in this folder
```

Your harness creates the folder and writes `inventory.md`: paste Block 1 of `instructions/S1-inventory.md` (and later Block 2) and say "do this"; the pre-work email's Block A does the first push. Rule for the exercise: read other people's inventories only through your agent, never in the browser.

## The one inventory schema

Every `inventory.md` has exactly these sections, in this order. The pre-work push creates the file with the headings; S1 fills them; nothing else rewrites them. Log lines do not go here; they go to `LOG.md`.

```
# <name>

## Recurring tasks
1. <task, one line>. Recurring: yes/no. Depends on something I know that a stranger would not: yes/no — <why, one line>.
2. …
3. …

## Built / use
<anything AI-native you built or use that others could use, link or name; or "none">

## Kit
<the task that becomes the kit>

## Posture
<Partnership / Hypervigilance / Overreliance / Compliance, or "not taken">
```

Everything in the repo is public. Keep private work in a private workspace on your machine; put in the repo only what you are comfortable sharing. In the inventory that means task names and one-line descriptions; no client names, numbers, credentials, or NDA material. `_example/` is a filled example; folders starting with `_` are not participants.
