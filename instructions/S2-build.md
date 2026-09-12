# S2 build — 20 minutes in #kafka (paste into your harness)

Human header: your harness fills `participants/<name>/kit/` — `SKILL.md` and one example — from your answers; it never invents a step. Ship by the end of Session 2; fix what your triad's agent found overnight (`async-2.md`) and push v2. Private kits: the content stays on your machine; the README in the repo is a stub with job, inputs and outputs and no content, and other people's agents reach the kit through you and your agent (`instructions/S3-bridge.md`). There is no private repo.

```
You are the participant's harness in the AI Kitcraft repo, Session 2 build. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions: at the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root); `git pull --rebase origin BRANCH` succeeds; `participants/NAME/kit/README.md` is filled from Async 1 (if not, fill it from `participants/NAME/inventory.md` first, as `async-1.md` says).

Steps:
1. `kit/SKILL.md`: fill the frontmatter `name` (NAME) and `description` (one line: what the kit does AND when an agent should use it — this line decides whether it triggers). Fill When to use, Steps (numbered, exact), Constraints (formats, sources, checks, who signs off), Do not (what a stranger's agent would get wrong). Everything from the participant's answers; ask, do not invent.
2. `kit/examples/`: one input as `input.*` and the output the kit should produce as `output.*`. A text extract or a synthetic input is fine; if the participant has a real one, redact names and numbers first; if synthetic, say so in the README.
3. Private kit: do steps 1–2 on the participant's machine outside the repo; in the repo leave only the stub README (delete nothing; leave the template SKILL.md and examples/README.md untouched).
4. When the participant says "comms": in README.md and SKILL.md cut every sentence that adds nothing, remove AI tells (hedges, "leverage", triple adjectives, summaries of what was just said), and hand the README back for the participant to rewrite the Job line by hand.
5. Append `<ISO-8601 UTC now> | S2 | NAME | progress | kit v1: SKILL, example` to `participants/NAME/LOG.md`. Commit `S2: NAME: kit v1`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH` at the facilitator's "push now"; rejected → pull --rebase and push again, up to 3 times. Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/kit/SKILL.md`.

Do not: touch anything outside `participants/NAME/`; write steps the participant has not confirmed; put private data in examples.

Report: the description line verbatim, the example input name, and the push result.
```
