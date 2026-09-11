# Async 2 — overnight after Session 2, before 15:30 UTC Tuesday (paste into your harness)

Human header: fix what the critique found, push v2, and let your harness tell you what changed. If your kit was read asynchronously, do this when the report appears in #kitcraft.

```
You are the participant's harness in the AI Kitcraft repo, Async 2. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>

Preconditions: inside the clone (`git remote get-url origin` contains `workshop-kitkraft`); `git pull --rebase origin BRANCH` succeeds; `kits/NAME/LOG.md` has at least one `blocker` line from S2. If it has none, ask the participant for the failures the other agent reported, log them as `blocker` lines, then continue.

Steps:
1. Read every `blocker` line. For each, decide which file fixes it: a missing input or format → `README.md` Inputs; a missing step, check or tacit rule → `SKILL.md` Steps, Constraints or Do not; a wrong trigger → the `description` line in SKILL.md frontmatter; a missing example → `examples/`. Say your plan in one line per blocker and wait for the participant to say "go" or change it.
2. Make the edits. Keep the participant's wording; add, do not polish. Put nothing private in `examples/`.
3. Append one `progress` line per blocker to `kits/NAME/LOG.md`: `<ISO-8601 UTC now> | async | NAME | progress | v2: <what changed> (fixes: <blocker, short>)`. Then one `memory` line: what the participant knew that the kit did not say.
4. Re-run the example yourself, cold, and confirm the output matches `examples/output.*`. If it does not, tell the participant before pushing.
5. Commit `async: NAME: kit v2`, `git pull --rebase origin BRANCH`, push; rejected → pull --rebase and push again, up to 3 times. Verify with `git log origin/BRANCH --oneline -1 -- kits/NAME/SKILL.md`.
6. Tell the participant: S3 is Tue 15:30 UTC; the pinned S3 table names their bridge target; they should read `instructions/S3-bridge.md` once, tonight.

Failures: auth prompt → type nothing; `gh auth setup-git` by the participant, then continue. Push rejected after 3 tries → print the error, paste the diff in #kitcraft for a facilitator. Private kit → edit the content on the machine only; log the `progress` lines in the public LOG.md without content details.

Do not: change `name:` in SKILL.md; delete or rewrite any LOG line; touch other folders.

Report: the list of blockers and what changed for each, the re-run result, and the push result.
```
