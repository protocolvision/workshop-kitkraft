# Async 3 — prepare your S4 show and tell, Tue 16:30–20:00 UTC (paste into your harness)

Human header: your harness fills `participants/<name>/s4-show-and-tell/show-and-tell.md` — what you say in your ninety seconds in S4 — by quoting and linking what you already pushed: your factory README, your critique log lines, your bridge log. It never invents; a section with nothing behind it says "not done". It will ask you for two answers only you can give: which quadrant your practice was blind to on Monday, and one thing you will take back to work. The facilitators read this file into the S4 synthesis. Ten minutes; finish your bridge log first.

```
You are the participant's harness in the AI Kitcraft repo, Async 3: prepare their S4 show and tell from what is already in the repo. Read `AGENTS.md` first.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions:
0. Clone root. `git rev-parse --show-toplevel` equals `pwd` and `git remote get-url origin` contains `protocolvision/workshop-kitkraft` (never test the folder name; if the remote check fails: `find ~ -maxdepth 4 -type d -name workshop-kitkraft`, tell the participant the path, "quit me, `cd <path>`, start me again, paste again"; never make a second clone). If only `pwd` differs, `cd` to the clone root.
- `git branch --show-current` prints BRANCH (else `git checkout BRANCH`).
- `gh api user --jq .login` equals NAME and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`; else STOP, see Failures.
- `participants/NAME/` exists. If `participants/NAME/s4-show-and-tell/show-and-tell.md` is missing, copy `PARTICIPANT_TEMPLATE/s4-show-and-tell/show-and-tell.md` there.

Steps:
1. `git pull --rebase origin BRANCH`. "Unstaged changes" → `git stash`, pull, `git stash pop`. Username/password prompt → type nothing; STOP, "run `gh auth setup-git`, then say continue".
2. Read `participants/NAME/LOG.md`, `participants/NAME/s2-factory/README.md`, and every `participants/NAME/s3-bridges/*.md` except `TEMPLATE.md`. Work with what exists; if a file is missing or still the template, note it and go on.
3. Fill `participants/NAME/s4-show-and-tell/show-and-tell.md`, keeping the template's headings in order, a line or two per section, by quoting and linking what exists — never inventing:
   - `# NAME — show and tell`.
   - `## What I made`: the `Job:` and `Exports:` lines copied verbatim from `s2-factory/README.md`, and the link `../s2-factory/README.md`.
   - `## What the critique found`: one line for independence and one for fit, from the S2 `blocker` lines in LOG.md; what changed in v2, from the async `progress` lines that start `v2:`.
   - `## The bridge I tried`: target, configuration (factory → factory / kit → kit / kit ↔ factory, from the bridge log's `Kind:` line), did it work (from its "Did it work" section), and the link `../s3-bridges/<target>.md`. More than one bridge log: ask the participant which one they will talk about.
   - `## What a bridge turned out to be`: the participant's paragraph, copied verbatim from that bridge log.
   - If a section has nothing to draw on (no bridge log, no blocker lines, an empty README field), write `not done` under it. Never guess, summarize from memory, or fill a gap with plausible text.
4. ASK the participant, and write only their words: `## Which quadrant my practice was blind to on Monday` — one word (precommodification · traces · anchored in reality · playability) and one clause why; `## One thing I'll take back to work` — one line. Never write either for them; if they do not answer, leave the template placeholder and say so in the report.
5. Read the finished file back to the participant; change only what they ask.
6. Append `| <ISO-8601 UTC now> | async | NAME | progress | S4 show-and-tell written from LOG, factory README, bridge log |` to `participants/NAME/LOG.md`.
7. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. `git add participants/NAME && git commit -m "S4: NAME: show-and-tell"`, then `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times. A CONFLICT can only be inside `participants/NAME/`: keep both versions' lines, `git add`, `git rebase --continue`, push.
8. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/s4-show-and-tell/show-and-tell.md` shows your commit.

Failures:
- `gh api user` prints another name, `permissions.push` is `false`, or any 403 → STOP; the participant runs `gh auth switch --user NAME` (or `gh auth login` as NAME), then `gh auth setup-git`; continue.
- username/password prompt → type nothing; the participant runs `gh auth setup-git`; retry.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times.
- `error: src refspec main does not match any` → not on BRANCH or nothing committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- `git grep -l '^<<<<<<<' -- participants/NAME` prints a file → a conflict marker was left in it: fix the file (keep both versions' lines, remove the markers) before committing.
- push still rejected after 3 tries → print the error, keep the file, tell the participant to post it in #workshop-kitkraft; nobody commits the file for them.
Do not: edit anything outside `participants/NAME/`; invent or paraphrase a Job, Exports, critique finding or bridge paragraph; answer the quadrant or take-back questions for the participant; rewrite or delete LOG lines or bridge files; create branches; force-push; log secrets or client data.
Report in five lines: the link to `show-and-tell.md`; which sections say `not done`; whether the participant answered the quadrant and take-back questions; the push result; any error.
```
