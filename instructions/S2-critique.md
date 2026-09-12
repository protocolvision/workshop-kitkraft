# S2 breakout group critique — 13 minutes in your breakout room (paste into your harness)

Human header: your harness uses one group-mate's factory through its declared interface — it reads only README.md and SKILL.md and runs the example cold — and reports where the interface was insufficient; you read its report aloud to the owner; the owner's harness logs each failure. Your target is in the pinned breakout group table in #kitcraft. Nobody explains their kit out loud until the report is read.

```
You are the participant's harness in the AI Kitcraft repo, Session 2 critique: use a group-mate's factory through its declared interface. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase>  TARGET=<the group-mate whose kit they read, from the pinned table; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions:
1. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. At the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root). Commit and push whatever is in `participants/NAME/kit/` right now, finished or not (`S2: NAME: kit v1`), then `git pull --rebase origin BRANCH` so the other folders are present. Rejected → pull --rebase and push again; rejected three times → continue with the pull and tell the participant to post the error in #kitcraft.
2. Check `participants/TARGET/kit/README.md` exists and is filled (not the template). If not, tell the participant; they ask the owner (in the room) to push, then you pull again. Still missing after two minutes: work with what is in the repo — read `participants/TARGET/inventory.md` instead and write, in five lines or fewer, what a kit for the task under its `## Kit` would need (inputs, formats, checks, decisions); append `| <ISO-8601 UTC now> | S2 | NAME | decision | TARGET kit not pushed; report written from the inventory |` to `participants/NAME/LOG.md`; go to step 5. If the whole folder is missing, run the ABSENT variant below.

Steps:
3. Read `participants/TARGET/kit/README.md` (note its `Interface:` line: the rung and how to call it), then `participants/TARGET/kit/SKILL.md`, then list `participants/TARGET/kit/examples/`. Read nothing else; ask the participant nothing about the kit. You are a stranger's agent using the factory through the interface it declares.
4. Run the example through the interface: take `examples/input.*`, follow SKILL.md exactly as written (call the declared interface if it is a rung above 1), produce your own output, compare it to `examples/output.*`. Write a report of five lines or fewer on where the interface was insufficient: what you had to guess, what you would have had to ask the owner, where you failed or diverged. Do not fix the kit.
5. Show the report to the participant, who reads it aloud to the owner. Then wait.
6. When the participant says "log mine", they are the owner now: they read you the reports about THEIR kit. Append each item as one line to `participants/NAME/LOG.md`: `| <ISO-8601 UTC now> | S2 | NAME | blocker | <the failure, one line> |`.
7. Ask the participant for their one-sentence plenary line ("what the other agent got wrong about my kit"); append it as a `memory` line to the same LOG.md.
8. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Commit `S2: NAME: critique blockers`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH`; rejected → pull --rebase and push again. Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/LOG.md`.

ABSENT variant (a group-mate is not in the room): tell the participant to swap so the two present read each other; when the absent kit appears in the repo later, run steps 3–4 on it and the participant posts your report in #kitcraft tagged to the owner. If the participant is the absent one: run steps 3–4 on the kit named in the pin and post the report the same way; log the reports about your own kit when they arrive.

Do not: edit `participants/TARGET/`; ask the owner questions to make the example work; rewrite the participant's own kit during the critique; log anything about other people's content beyond the failure line.

Report to the participant: the five-line report on where the interface was insufficient, ready to read aloud; then, after step 8, the number of blocker lines logged and the push result.
```
