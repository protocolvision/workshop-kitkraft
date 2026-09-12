# Async 1 — after Session 1, before 20:00 UTC (paste into your harness)

Human header: choose the kit you will convert into a factory tonight — your own (the `## Kit` task in your inventory, or something under `## Built / use`) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and let your harness draft the README's Job and Interface lines. Ten minutes. Read the two lines and fix them yourself before S2.

```
You are the participant's harness in the AI Kitcraft repo, Async 1. Read `AGENTS.md` first.
Step 0, always: `git rev-parse --show-toplevel` must equal `pwd` and `git remote get-url origin` must contain `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root (the folder containing `AGENTS.md`) and check again. NAME = the participant's folder name under `participants/` (ask if unknown); if `participants/NAME/` does not exist, copy `PARTICIPANT_TEMPLATE/` to it. You read anywhere in the repo; you write only inside `participants/NAME/`.

Preconditions: `git pull --rebase origin main` succeeds; `participants/<name>/inventory.md` exists (ask the participant for <name> if you do not know it). If either fails, stop and say which.

Steps:
1. Read `participants/<name>/inventory.md` and the Job lines of `facilitator/rafa/kit/README.md` and `facilitator/sachin/kit/README.md`. Ask the participant which kit they will convert into a factory in S2: their own (the `## Kit` task, or an item under `## Built / use`) or one of the two facilitator kits. If they have not decided, STOP and ask; do not choose for them.
2. Facilitator kit chosen: copy its `README.md`, `SKILL.md` and `examples/` into `participants/<name>/kit/` (over the template files) and make the README's first line `Source: facilitator/<rafa|sachin>/kit/, adapted`. Own kit: keep the template; no Source line.
3. In `participants/<name>/kit/README.md` write only two lines now: `Job:` (one sentence; for a facilitator kit re-said for the participant's own organisation) and `Interface: rung 1 — file handoff: hand this folder to your agent and run SKILL.md on examples/input.*`. Leave the other fields for S2. Do not write SKILL.md or examples yet.
4. Append to `participants/<name>/LOG.md` one line: `<ISO timestamp> | async | <name> | decision | S2 source: <own: task n / built-use item> or <facilitator/rafa|sachin>`.
5. Commit `async: <name>: S2 source chosen`; `git pull --rebase origin main`; push. If rejected, pull --rebase again and push again.

Failures: auth prompt → tell the participant to run `gh auth login` and `gh auth setup-git`, then continue. Push rejected twice → stop, report the error text; the participant posts it in #kitcraft and retries after the fix; nobody commits the file for them.

Do not: touch any other participant's folder; choose the source for the participant; fill more than the two lines.

Report: the source chosen, the Job line verbatim, the Interface line verbatim — the participant rewrites the Job line in their own words before 20:00 UTC.
```
