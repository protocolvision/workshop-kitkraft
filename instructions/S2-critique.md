# S2 triad critique — 13 minutes in your breakout room (paste into your harness)

Human header: your harness uses your partner's factory through its declared interface — it reads only README.md and SKILL.md and runs the example cold — and reports where the interface was insufficient; you read its report aloud to the owner; the owner's harness logs each failure. Your target is in the pinned triad table in #kitcraft. Nobody explains their kit out loud until the report is read.

```
You are the participant's harness in the AI Kitcraft repo, in the Session 2 critique: use your partner's factory through its declared interface. Read `AGENTS.md` first. The participant will tell you <name> (theirs) and <target> (the triad-mate whose kit they read).
Step 0, always: `git rev-parse --show-toplevel` must equal `pwd` and `git remote get-url origin` must contain `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root (the folder containing `AGENTS.md`) and check again. NAME = the participant's folder name under `participants/` (ask if unknown); if `participants/NAME/` does not exist, copy `PARTICIPANT_TEMPLATE/` to it. You read anywhere in the repo; you write only inside `participants/NAME/`.

Preconditions:
1. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Commit and push whatever is in `participants/<name>/kit/` right now, finished or not (`S2: <name>: kit v1`), then `git pull --rebase origin main` so the other kits are present. If the push is rejected, pull --rebase and push again; if it is rejected twice, continue with the pull and tell the participant to paste their kit into #kitcraft.
2. Check `participants/<target>/kit/README.md` exists. If it does not after one pull, read `participants/<target>/inventory.md` instead and report what a kit built from it would need; append `| <ISO timestamp> | S2 | <name> | decision | <target> has no kit in the repo; critiqued the inventory instead |` to `participants/<name>/LOG.md`. If it does not, tell the participant; they ask the owner (in the room) to push, then you pull again. If it still does not exist after two minutes, run the ABSENT variant below.

Steps:
3. Read `participants/<target>/kit/README.md` (note its `Interface:` line: the rung and how to call it), then `participants/<target>/kit/SKILL.md`, then list `participants/<target>/kit/examples/`. Read nothing else; ask the participant nothing about the kit. You are a stranger's agent using the factory through the interface it declares.
5. Run the example through the interface: take `examples/input.*`, follow SKILL.md exactly as written (call the declared interface if it is a rung above 1), produce your own output, compare it to `examples/output.*`. Write a report of five lines or fewer on where the interface was insufficient: what you had to guess, what you would have had to ask the owner, where you failed or diverged. Do not fix the kit.
6. Show the report to the participant, who reads it aloud to the owner. Then wait.
7. When the participant says "log mine", they are the owner now: they read you the reports about THEIR kit. Append each item as one line to `participants/<name>/LOG.md`: `| <ISO timestamp> | S2 | <name> | blocker | <the failure, one line> |`.
8. Ask the participant for their one-sentence plenary line ("what the other agent got wrong about my kit"); append it as a `memory` line to the same LOG.md.
9. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Commit `S2: <name>: critique blockers`, pull --rebase, push.

ABSENT variant (a triad-mate is not in the room, e.g. aiko): tell the participant to swap so the two present read each other; when the absent kit appears in the repo later, run steps 3–5 on it, and the participant posts your report in #kitcraft tagged to the owner. If the participant is the absent one, run steps 3–5 on the kit named in the pin and post the report the same way; log the reports about your own kit when they arrive.

Do not: edit `participants/<target>/kit/`; ask the owner questions to make the example work; rewrite the participant's own kit during the critique; log anything about other people's content beyond the failure line.

Report to the participant: the five-line report on where the interface was insufficient, ready to read aloud; then, after step 9, the number of blocker lines logged and the push result.
```
