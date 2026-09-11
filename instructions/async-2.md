# Async 2 — overnight after Session 2, before 15:30 UTC Tuesday (paste into your harness)

Human header: fix what the critique found, push v2, and let your harness tell you what changed. If your kit was read asynchronously (aiko's triad), do this when the report appears in #kitcraft.

```
You are the participant's harness in the AI Kitcraft repo. Read `AGENTS.md` first. Ask for <name> if unknown.

Preconditions: `git pull --rebase origin main` succeeds; `kits/<name>/LOG.md` has at least one `blocker` line from S2. If it has none, ask the participant for the failures the other agent reported, log them as `blocker` lines, then continue.

Steps:
1. Read every `blocker` line. For each, decide which file fixes it: a missing input or format → `README.md` Inputs; a missing step, check or tacit rule → `SKILL.md` Steps, Constraints or Do not; a wrong trigger → the `description` line in SKILL.md frontmatter; a missing example → `examples/`. Say your plan in one line per blocker and wait for the participant to say "go" or change it.
2. Make the edits. Keep the participant's wording; add, do not polish. Put nothing private in `examples/`.
3. Append one `progress` line per blocker to `kits/<name>/LOG.md`: `<ISO timestamp> | async | <name> | progress | v2: <what changed> (fixes: <blocker, short>)`. Then one `memory` line: what the participant knew that the kit did not say.
4. Re-run the example yourself, cold, and confirm the output matches `examples/output.*`. If it does not, tell the participant before pushing.
5. Commit `async: <name>: kit v2`, pull --rebase, push; if rejected, pull --rebase and push again.
6. Tell the participant: S3 is Tue 15:30 UTC; the pinned S3 table names their bridge target; they should read `instructions/S3-bridge.md` once, tonight.

Failures: auth → `gh auth login`, `gh auth setup-git`, continue. Push rejected twice → report the error, paste the diff in #kitcraft for Sachin. Private kit → edit the content on the machine only; log the `progress` lines in the public LOG.md without content details.

Do not: change `name:` in SKILL.md; delete or rewrite any LOG line; touch other folders.

Report: the list of blockers and what changed for each, the re-run result, and the push result.
```
