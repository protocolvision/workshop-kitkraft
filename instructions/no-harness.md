# No working harness, or no GitHub account — the by-hand path

For anyone whose harness is not working by Monday, or who has no GitHub account. Nothing here needs a terminal. A facilitator commits your files under your name into `participants/<name>/`; the log line says "written by hand".

`<name>` is your GitHub username, lowercase. If you have no GitHub account, use the name you registered with, lowercase, no spaces, and create the account when you can (https://github.com/signup, five minutes; a harness cannot do it for you). Reply to the pre-work email with the username so the invite reaches you.

## Before S1 — your inventory

1. Open a plain-text editor (TextEdit in plain-text mode, Notepad, any notes app). If you write it in Word, paste it into #kitcraft as text, not as an attachment.
2. Write `participants/<name>/inventory.md` in exactly this shape (the schema in `participants/README.md`):

```
# <name>

## Recurring tasks
1. <task, one line>. Recurring: yes/no. Depends on something I know that a stranger would not: yes/no — <why, one line>.
2. <task>. Recurring: … Depends on something I know: … — <why>.
3. <task>. Recurring: … Depends on something I know: … — <why>.

## Built / use
<anything AI-native you built or use that others could use, link or name; or "none">

## Kit
<which task becomes the kit>. Public / Private.

## Posture
<Partnership / Hypervigilance / Overreliance / Compliance, or "not taken">
```

3. Paste the whole thing into #kitcraft, in one message, with the first line `participants/<name>/inventory.md`. A facilitator creates your folder from the template, commits it, adds the line `<ISO-8601 UTC now> | S1 | <name> | progress | inventory written by hand, no harness; pasted in #kitcraft` to your `LOG.md`, and replies "committed". Task names and one-line descriptions are fine; no client names, numbers, credentials, or NDA material.

## S1, second prompt

Ask a triad-mate in voice which two inventories their agent found nearest to yours. Do not open the inventory files on GitHub.

## S2 — your kit

Same method. From `PARTICIPANT_TEMPLATE/kit/` (reading the template on GitHub is fine) write by hand: `participants/<name>/kit/README.md` (every field), `participants/<name>/kit/SKILL.md` (frontmatter `name` and `description`, then When to use, Steps, Constraints, Do not), and one example input and its output. Paste each into #kitcraft with the file path as the first line. Private kit: paste only the README stub. A facilitator commits them before the critique starts.

## S2 critique and S3 bridge

Your triad-mates' harnesses read your kit from the repo as usual. For your own turn, sit next to a triad-mate: they paste the block into their harness with your target and you take the report. Blocker lines (S2) and your bridge file (S3, in the shape of `PARTICIPANT_TEMPLATE/bridges/TEMPLATE.md`) go into #kitcraft the same way; a facilitator commits them under your name.

## 1A

Come to 1A (Mon Sep 21, 16:30–17:00 UTC, #kafka) if you want the harness working for S2. Bring the exact error text. The two things a harness cannot do — installing git and gh (needs your computer password) and the GitHub browser login — are yours to do before 1A if you can.
