# Async 1 — after Session 1, before 20:00 UTC (paste into your harness)

Human header: pick one item from your inventory and let your harness draft the kit README from the template. Ten minutes. You then read it and fix what is wrong, by hand, before S2. If you are going to 1A, do this after 1A.

```
You are the participant's harness in the AI Kitcraft repo, Async 1. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions: inside the clone (`git remote get-url origin` contains `workshop-kitkraft`); `git pull --rebase origin BRANCH` succeeds; `inventory/NAME.md` exists. If one fails, stop and say which.

Steps:
1. Read `inventory/NAME.md`. Under `## Kit` it names the task that becomes the kit and whether it is public or private. If it does not, ask the participant to choose now, then append the choice to that section.
2. If `kits/NAME/` does not exist, copy `KIT_TEMPLATE/` to `kits/NAME/` (all four items: README.md, SKILL.md, LOG.md, examples/).
3. Rewrite `kits/NAME/README.md`, filling every field of the template from the inventory: Job (one sentence), For, Inputs, Outputs, Interface (write `file handoff`), Example run (`see examples/`), Not for, Public / private. If the kit is private, fill only Job, For, Inputs, Outputs and write `Public / private: private — content stays on the participant's machine; this file is the stub`. Do not write SKILL.md or examples yet.
4. Append to `kits/NAME/LOG.md`: `<ISO-8601 UTC now> | async | NAME | progress | README drafted from inventory item <n>`.
5. Commit `async: NAME: kit README draft`; `git pull --rebase origin BRANCH`; push. Rejected → pull --rebase and push again, up to 3 times; a CONFLICT can only be in `kits/NAME/`: keep both, `git add`, `git rebase --continue`, push. Verify: `git log origin/BRANCH --oneline -1 -- kits/NAME/README.md`.

Failures: auth prompt → type nothing; tell the participant to run `gh auth setup-git`, then continue. Push rejected after 3 tries → stop, print the error text, tell the participant to paste the README into #kitcraft for a facilitator.

Do not: touch any other participant's folder; invent inputs or outputs the inventory does not mention; write more than the template asks for.

Report: the path of the README, the Job line verbatim, and the one field you were least sure about — the participant rewrites that field by hand before 20:00 UTC.
```
