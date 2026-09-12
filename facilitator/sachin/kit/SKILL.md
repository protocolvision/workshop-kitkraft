---
name: adoption-diagnosis
description: Turn a discovery-interview transcript or interview notes about an organization's AI use into a one-page adoption-diagnosis memo (CMM level with quoted evidence, kit candidates, the stuck gate, one next action). Use when given an interview transcript and asked where an organization stands with AI, what to build first, or for a diagnosis or memo.
---

## When to use
A user hands you a transcript or notes from a conversation with someone about how their team uses AI, and wants to know what stage they are at and what to do first. Also fits a workshop inventory file (`inventory/<name>.md`): treat it as the transcript.

## Steps
1. Read the whole transcript once before writing anything. Note every sentence that describes a task done with AI, how often, and what the speaker knows that the tool did not.
2. Place the organization: **L1** — individuals use chat tools ad hoc, nothing written down; **L2 (Kit)** — at least one task has an encoded, reusable artifact (prompt file, template, skill) that someone other than its author has run; **L3 (Factory)** — an encoded artifact has an interface another person or agent uses without the author. Vocabulary per *Durable AI Adoption* (https://ai.protocolized.dev/). Quote the transcript line that justifies the level; if no line justifies L2, it is L1.
3. List kit candidates: tasks that are (a) recurring and (b) depend on something the speaker knows that a stranger would not. Both tests, cite the line for each. Rank by frequency.
4. Name the gate: Discover → Encode (they know the task but nothing is written) · Encode → Prove (written, but nobody else has run it) · Prove → Harvest (runs for others, but nothing flows between it and another kit). One gate only.
5. Write `<org>-diagnosis.md` in this order: Level · Evidence (2–4 quotes) · Kit candidates (table: task, recurring, tacit, line) · Gate · Next action (one sentence, doable in a week). Under 40 lines.

## Constraints
- Every level claim and every candidate cites a transcript line by its number or first words. No quote, no claim.
- Levels only from the vocabulary above; no half-levels, no "L2.5".
- Keep the interviewee's phrasing in quotes; do not polish it.
- Output goes back to the user as a file; do not send it, post it, or summarize it elsewhere.

## Do not
- Do not recommend tools, models or vendors; the memo is a diagnosis, not a prescription.
- Do not infer a level from the organization's size, sector or ambition; only from what has been encoded and who has run it.
- Do not name individuals from the transcript in the memo unless the user asks; use roles.
- Do not invent a next action that requires software the transcript does not mention.
- Do not treat a ChatGPT "project" or a saved prompt as L2 unless someone other than its author has used it.
