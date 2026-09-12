# Async 1 — after Session 1, before 20:00 UTC (paste into your harness)

Human header: pick one item from your inventory and let your harness draft the kit README from the template. Ten minutes. You then read it and fix what is wrong, by hand, before S2. If you are going to 1A, do this after 1A.

```
You are the participant's harness in the AI Kitcraft repo, Async 1. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>  ROOT=<the clone root: `git rev-parse --show-toplevel`>
Paths below are from ROOT. You work inside `participants/NAME/`.

Preconditions: inside the clone (`git remote get-url origin` contains `protocolvision/workshop-kitkraft`) and `pwd` ends in `participants/NAME` (if not, `cd ROOT/participants/NAME`); `git pull --rebase origin BRANCH` succeeds; `participants/NAME/inventory.md` exists. If one fails, stop and say which.

Steps:
1. Read `participants/NAME/inventory.md`. Under `## Kit` it names the task that becomes the kit and whether it is public or private. If it does not, ask the participant to choose now, then write the choice into that section.
2. `participants/NAME/kit/` exists from the template (README.md, SKILL.md, examples/). If it is missing, copy `ROOT/PARTICIPANT_TEMPLATE/kit/` to `participants/NAME/kit/`.
3. Rewrite `participants/NAME/kit/README.md`, filling every field of the template from the inventory: Job (one sentence), For, Inputs, Outputs, Interface (write `file handoff`), Example run (`see examples/`), Not for, Public / private. If the kit is private, fill only Job, For, Inputs, Outputs and write `Public / private: private — content stays on the participant's machine; this file is the stub`. Do not write SKILL.md or examples yet.
4. Append to `participants/NAME/LOG.md`: `<ISO-8601 UTC now> | async | NAME | progress | README drafted from inventory item <n>`.
5. Commit `async: NAME: kit README draft`; `git pull --rebase origin BRANCH`; `git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times; a CONFLICT can only be inside `participants/NAME/`: keep both, `git add`, `git rebase --continue`, push. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/kit/README.md`.

Failures: auth prompt → type nothing; tell the participant to run `gh auth setup-git`, then continue. 403 → `gh auth switch --user NAME` / `gh auth login`. Push rejected after 3 tries → stop, print the error text, tell the participant to paste the README into #kitcraft for a facilitator.

Do not: touch anything outside `participants/NAME/`; invent inputs or outputs the inventory does not mention; write more than the template asks for.

Report: the path of the README, the Job line verbatim, and the one field you were least sure about — the participant rewrites that field by hand before 20:00 UTC.
```
