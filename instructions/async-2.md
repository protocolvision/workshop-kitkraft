# Async 2 — overnight after Session 2, before 15:30 UTC Tuesday (paste into your harness)

Human header: fix what the critique found — where your factory could not run without you, and where it did not fit the person using it — push v2, and let your harness tell you what changed. If your kit was read asynchronously, do this when the report appears in #workshop-kitkraft.

```
You are the participant's harness in the AI Kitcraft repo, Async 2. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions: at the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root); `git pull --rebase origin BRANCH` succeeds; `participants/NAME/LOG.md` has at least one `blocker` line from S2. If it has none, ask the participant for the failures the other agent reported in either test (independence or fit), log them as `blocker` lines, then continue.

Steps:
1. Read every `blocker` line, from both tests. For each, decide which file fixes it. Independence (it could not run without the owner): a missing input or format → `s2-factory/README.md` Inputs; a missing step, check or tacit rule → `s2-factory/SKILL.md` Steps, Constraints or Do not; a wrong trigger → the `description` line in SKILL.md frontmatter; a missing example → `s2-factory/examples/`. Fit (the output suited the owner, not the reader): a missing or vague `Adapts to:` line → `s2-factory/README.md` `Adapts to:` (the context the person running it brings, and where it goes in); a step that hard-codes the owner's data, names or settings → `s2-factory/SKILL.md` Steps, so it asks for or reads the user's context at run time. Say your plan in one line per blocker and wait for the participant to say "go" or change it.
2. Make the edits. Keep the participant's wording; add, do not polish. Put no secrets or client data in `examples/`.
3. Append one `progress` line per blocker to `participants/NAME/LOG.md`: `| <ISO-8601 UTC now> | async | NAME | progress | v2: <what changed> (fixes: <blocker, short>) |`. Then one `memory` line: what the participant knew that the kit did not say.
4. Re-run the example yourself, cold, and confirm the output matches `examples/output.*`. If any blocker was about fit, run it once more with a different one-line context supplied through `Adapts to:` and confirm the output changes to suit it. If either check fails, tell the participant before pushing.
5. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Commit `async: NAME: kit v2`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH`; rejected → pull --rebase and push again, up to 3 times. Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/s2-factory/SKILL.md`.
6. Tell the participant: S3 is Tue 15:30 UTC; the S3 groups post in #workshop-kitkraft names their bridge target; they should read `instructions/S3-bridge.md` once, tonight.

Failures: auth prompt → type nothing; `gh auth setup-git` by the participant, then continue. Push rejected after 3 tries → print the error; the participant posts it in #workshop-kitkraft and retries after the fix; nobody commits the file for them.

Do not: change `name:` in SKILL.md; delete or rewrite any LOG line; touch anything outside `participants/NAME/`.

Report: the list of blockers (marked independence or fit) and what changed for each, the re-run result, and the push result.
```
