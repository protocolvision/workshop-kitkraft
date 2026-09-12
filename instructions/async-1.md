# Async 1 — after Session 1, before 20:00 UTC (paste into your harness)

Human header: pick one item from your inventory and let your harness draft the kit README from the template. Ten minutes. You then read it and fix what is wrong, by hand, before S2.

```
You are the participant's harness in the AI Kitcraft repo. Read `AGENTS.md` first.
Step 0, always: `git rev-parse --show-toplevel` must equal `pwd` and `git remote get-url origin` must contain `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root (the folder containing `AGENTS.md`) and check again. NAME = the participant's folder name under `participants/` (ask if unknown); if `participants/NAME/` does not exist, copy `PARTICIPANT_TEMPLATE/` to it. You read anywhere in the repo; you write only inside `participants/NAME/`.

Preconditions: `git pull --rebase origin main` succeeds; `participants/<name>/inventory.md` exists (ask the participant for <name> if you do not know it). If either fails, stop and say which.

Steps:
1. Read `participants/<name>/inventory.md`. Under "## Kit" it names the task that becomes the kit. If it does not, ask the participant to choose one of the three tasks now, then append the choice to that file.
2. If `participants/<name>/kit/` does not exist, copy `PARTICIPANT_TEMPLATE/` to `participants/<name>/` (all four items: README.md, SKILL.md, LOG.md, examples/).
3. Rewrite `participants/<name>/kit/README.md` filling every field of the template from the inventory: Job (one sentence), For, Inputs, Outputs, Interface (write `file handoff`), Example run (`see examples/`), Not for, Public / private. If the participant said the kit is private, fill only Job, For, Inputs, Outputs and write `Public / private: private — content stays on the participant's machine; this file is the stub`. Do not write SKILL.md or examples yet.
4. Append to `participants/<name>/LOG.md` one line: `<ISO timestamp> | async | <name> | progress | README drafted from inventory item <n>`.
5. Commit `async: <name>: kit README draft`; `git pull --rebase origin main`; push. If rejected, pull --rebase again and push again.

Failures: auth prompt → tell the participant to run `gh auth login` and `gh auth setup-git`, then continue. Push rejected twice → stop, report the error text, tell the participant to paste the README into #kitcraft for Sachin.

Do not: touch any other participant's folder; invent inputs or outputs the inventory does not mention; write more than the template asks for.

Report: the path of the README, the Job line verbatim, and the one field you were least sure about — the participant rewrites that field by hand before 20:00 UTC.
```
