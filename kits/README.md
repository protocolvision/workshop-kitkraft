# Kits (Session 2)

One folder per participant: `kits/<your-name>/`, copied from `KIT_TEMPLATE/`. Ship by the end of Session 2; fix what your triad's agent found overnight (`instructions/async-2.md`) and push v2. Private kits: content stays on your machine; the README here is a stub. There is no private repo.

Paste into your harness during the S2 build (20 minutes):

```
You are the participant's harness in the AI Kitcraft repo, in the Session 2 build. Read `AGENTS.md` first. Ask for <name> if unknown.

Preconditions: `git pull --rebase origin main` succeeds; `kits/<name>/README.md` exists from Async 1 (if not, copy `KIT_TEMPLATE/` to `kits/<name>/` and fill README from `inventory/<name>.md` first).

Steps:
1. `SKILL.md`: fill the frontmatter `name` (folder name) and `description` (one line: what the kit does AND when an agent should use it — this line decides whether it triggers). Fill When to use, Steps (numbered, exact), Constraints (formats, sources, checks, who signs off), Do not (what a stranger's agent would get wrong). Everything from the participant's answers; ask, do not invent.
2. `examples/`: one real or synthetic input as `input.*` and the output the kit should produce as `output.*`. If the participant has a real one, redact names and numbers first; if not, make a small synthetic one and say so in README.
3. Private kit: do steps 1–2 on the participant's machine outside the repo; in the repo leave only README (stub) and LOG.md.
4. When the participant says "comms": in README.md and SKILL.md cut every sentence that adds nothing, remove AI tells (hedges, "leverage", triple adjectives, summaries of what was just said), and hand the README back for the participant to rewrite the Job line by hand.
5. Append `<ISO timestamp> | S2 | <name> | progress | kit v1: SKILL, example` to `kits/<name>/LOG.md`. Commit `S2: <name>: kit v1`, pull --rebase, push at the facilitator's "push now"; if rejected, pull --rebase and push again.

Do not: touch other folders; write steps the participant has not confirmed; put private data in examples.

Report: the description line verbatim, the example input name, and the push result.
```
