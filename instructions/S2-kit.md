# Kits (Session 2)

Your kit is `participants/<your-name>/kit/` (README.md, SKILL.md, examples/), from `PARTICIPANT_TEMPLATE/kit/`. Ship by the end of Session 2; fix what your triad's agent found overnight (`instructions/async-2.md`) and push v2. Private kits: content stays on your machine; the README here is a stub. There is no private repo.

Paste into your harness during the S2 build (20 minutes):

```
You are the participant's harness in the AI Kitcraft repo, in the Session 2 build. Read `AGENTS.md` first. Ask for <name> if unknown.
Step 0, always: `git rev-parse --show-toplevel` must equal `pwd` and `git remote get-url origin` must contain `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root (the folder containing `AGENTS.md`) and check again. NAME = the participant's folder name under `participants/` (ask if unknown); if `participants/NAME/` does not exist, copy `PARTICIPANT_TEMPLATE/` to it. You read anywhere in the repo; you write only inside `participants/NAME/`.

Preconditions: `git pull --rebase origin main` succeeds; `participants/<name>/kit/README.md` exists from Async 1 (if not, copy `PARTICIPANT_TEMPLATE/` to `participants/<name>/` and fill README from `participants/<name>/inventory.md` first).

Steps:
1. `SKILL.md`: fill the frontmatter `name` (folder name) and `description` (one line: what the kit does AND when an agent should use it — this line decides whether it triggers). Fill When to use, Steps (numbered, exact), Constraints (formats, sources, checks, who signs off), Do not (what a stranger's agent would get wrong). Everything from the participant's answers; ask, do not invent.
2. `examples/`: one real or synthetic input as `input.*` and the output the kit should produce as `output.*`. If the participant has a real one, redact names and numbers first; if not, make a small synthetic one and say so in README.
3. Private kit: do steps 1–2 on the participant's machine outside the repo; in the repo leave only `kit/README.md` (stub); `LOG.md` lines about the content say nothing private.
4. When the participant says "comms": in README.md and SKILL.md cut every sentence that adds nothing, remove AI tells (hedges, "leverage", triple adjectives, summaries of what was just said), and hand the README back for the participant to rewrite the Job line by hand.
5. Append `<ISO timestamp> | S2 | <name> | progress | kit v1: SKILL, example` to `participants/<name>/LOG.md`. Commit `S2: <name>: kit v1`, pull --rebase, push at the facilitator's "push now"; if rejected, pull --rebase and push again.

Do not: touch other folders; write steps the participant has not confirmed; put private data in examples.

Report: the description line verbatim, the example input name, and the push result.
```
