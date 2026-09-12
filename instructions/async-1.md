# Async 1 — after Session 1, before 20:00 UTC (paste into your harness)

Human header: choose the kit you will convert into a factory tonight — your own (the `## Kit` task in your inventory, or something under `## Built / use`) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and let your harness draft the README's Job and Interface lines. Ten minutes. Read the two lines and fix them yourself before S2. If you are going to 1A, do this after 1A.

```
You are the participant's harness in the AI Kitcraft repo, Async 1. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions: at the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root); `git pull --rebase origin BRANCH` succeeds; `participants/NAME/inventory.md` exists. If one fails, stop and say which.

Steps:
1. Read `participants/NAME/inventory.md` and the Job lines of `facilitator/rafa/kit/README.md` and `facilitator/sachin/kit/README.md`. Ask the participant which kit they will convert into a factory in S2: their own (the `## Kit` task, or an item under `## Built / use`) or one of the two facilitator kits. If they have not decided, STOP and ask; do not choose for them.
2. Facilitator kit chosen: copy its `README.md`, `SKILL.md` and `examples/` into `participants/NAME/kit/` (over the template files) and make the README's first line `Source: facilitator/<rafa|sachin>/kit/, adapted`. Own kit: keep the template; no Source line.
3. In `participants/NAME/kit/README.md` write only two lines now: `Job:` (one sentence, for a facilitator kit re-said for the participant's own organisation) and `Interface: rung 1 — file handoff: hand this folder to your agent and run SKILL.md on examples/input.*`. Leave the other fields for S2. If the kit is private, also write `Public / private: private — content stays on the participant's machine; this file is the stub`. Do not write SKILL.md or examples yet.
4. Append to `participants/NAME/LOG.md`: `<ISO-8601 UTC now> | async | NAME | decision | S2 source: <own: task n / built-use item> or <facilitator/rafa|sachin>`.
5. Commit `async: NAME: S2 source chosen`; `git pull --rebase origin BRANCH`; `git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times; a CONFLICT can only be inside `participants/NAME/`: keep both, `git add`, `git rebase --continue`, push. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/kit/README.md`.

Failures: auth prompt → type nothing; tell the participant to run `gh auth setup-git`, then continue. 403 → `gh auth switch --user NAME` / `gh auth login`. Push rejected after 3 tries → stop, print the error text; the participant posts it in #kitcraft and retries after the fix; nobody commits the file for them.

Do not: touch anything outside `participants/NAME/`; choose the source for the participant; fill more than the two lines.

Report: the source chosen, the Job line verbatim, the Interface line verbatim — the participant rewrites the Job line in their own words before 20:00 UTC.
```
