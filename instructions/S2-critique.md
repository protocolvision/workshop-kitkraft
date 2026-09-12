# S2 triad critique — 13 minutes in your breakout room (paste into your harness)

Human header: your harness reads one triad-mate's kit cold and tries the example; you read its report aloud to the owner; the owner's harness logs each failure. Your target is in the pinned triad table in #kitcraft. Nobody explains their kit out loud until the report is read.

```
You are the participant's harness in the AI Kitcraft repo, Session 2 critique. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase>  TARGET=<the triad-mate whose kit they read, from the pinned table; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions:
1. At the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root). Commit and push whatever is in `participants/NAME/kit/` right now, finished or not (`S2: NAME: kit v1`), then `git pull --rebase origin BRANCH` so the other folders are present. Rejected → pull --rebase and push again; rejected three times → continue with the pull and tell the participant to paste their kit into #kitcraft.
2. Check `participants/TARGET/kit/README.md` exists and is filled (not the template). If not, tell the participant; they ask the owner (in the room) to push, then you pull again. Still missing after two minutes: work with what is in the repo — read `participants/TARGET/inventory.md` instead and write, in five lines or fewer, what a kit for the task under its `## Kit` would need (inputs, formats, checks, decisions); append `<ISO-8601 UTC now> | S2 | NAME | decision | TARGET kit not pushed; report written from the inventory` to `participants/NAME/LOG.md`; go to step 6. If the whole folder is missing, run the ABSENT variant below.

Steps:
3. Read `participants/TARGET/kit/README.md`, then `participants/TARGET/kit/SKILL.md`, then list `participants/TARGET/kit/examples/`. Read nothing else; ask the participant nothing about the kit.
4. STUB variant — if SKILL.md is still the template or the README says the kit is private: write, in five lines or fewer, what you would need from the owner to run this job (inputs, formats, checks, decisions). Skip to step 6.
5. Run the example: take `examples/input.*`, follow SKILL.md, produce your own output, compare it to `examples/output.*`. Write a report of five lines or fewer: where you were uncertain, what you assumed, where you failed or diverged. Do not fix the kit.
6. Show the report to the participant, who reads it aloud to the owner. Then wait.
7. When the participant says "log mine", they are the owner now: they read you the reports about THEIR kit. Append each item as one line to `participants/NAME/LOG.md`: `<ISO-8601 UTC now> | S2 | NAME | blocker | <the failure, one line>`.
8. Ask the participant for their one-sentence plenary line ("what the other agent got wrong about my kit"); append it as a `memory` line to the same LOG.md.
9. Commit `S2: NAME: critique blockers`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH`; rejected → pull --rebase and push again. Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/LOG.md`.

ABSENT variant (a triad-mate is not in the room): tell the participant to swap so the two present read each other; when the absent kit appears in the repo later, run steps 3–5 on it and the participant posts your report in #kitcraft tagged to the owner. If the participant is the absent one: run steps 3–5 on the kit named in the pin and post the report the same way; log the reports about your own kit when they arrive.

Do not: edit `participants/TARGET/`; ask the owner questions to make the example work; rewrite the participant's own kit during the critique; log anything about other people's content beyond the failure line.

Report to the participant: the five-line report, ready to read aloud; then, after step 9, the number of blocker lines logged and the push result.
```
