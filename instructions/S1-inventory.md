# S1 — inventory (two blocks, paste each when the facilitator says so)

Human header: Block 1 writes `participants/<name>/s1-inventory/inventory.md` from your answers and pushes it; Block 2 pulls the others' folders and names two kits that could complement yours to yours. Your harness will ask you, one at a time, about the AI kits you already use: any AI setup you have tinkered with to do a real job. It never invents them. The file shape is in `participants/README.md`. Read other people's inventories only through your agent, never in the browser.

## Block 1 — inventory (slide 12)

```
You are the participant's harness in the AI Kitcraft repo, Session 1. Write their inventory file and push it.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions:
0. Clone root. `git rev-parse --show-toplevel` equals `pwd` and `git remote get-url origin` contains `protocolvision/workshop-kitkraft` (never test the folder name). If the remote check fails: `find ~ -maxdepth 4 -type d -name workshop-kitkraft` — one result: tell the participant its path and "quit me, `cd <path>`, start me again, paste again"; none: `gh repo clone protocolvision/workshop-kitkraft`, `cd workshop-kitkraft`, continue; two or more: STOP, bring it to 1A; never make a second clone. If only `pwd` differs, `cd` to the clone root. If `participants/NAME/` is missing, `cp -R PARTICIPANT_TEMPLATE participants/NAME`.
- `git branch --show-current` prints BRANCH. If not: `git checkout BRANCH`.
- `gh api user --jq .login` equals NAME (case-insensitively) and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. If either fails: STOP; see Failures.
- `git pull --rebase origin BRANCH` succeeds. "Unstaged changes" → `git stash`, pull, `git stash pop`. Username/password prompt → type nothing; STOP, "run `gh auth setup-git`, then say continue".

Steps:
1. Read `participants/README.md` (the file shape). If `participants/NAME/s1-inventory/inventory.md` already lists kits under `## Kits I use`, keep them; remove any draft note or "to be confirmed" preamble.
2. The kits they already use, one to three. What counts as a kit: any AI setup you have tinkered with to do a real job — a saved or reused prompt, a custom GPT or Claude project, a prompt document you copy from, a spreadsheet or document with an AI step, an automation with an AI step, a skill. Small is fine. If the file already lists kits, read them back and confirm, then ask whether there is another (at most three). If none are listed and the participant has not described any in this conversation: STOP and ask about their kits, one at a time. For each kit ask for and record, in the participant's words: a short name; What it is (the tools and pieces it is made of); The job it does (one sentence); How often I use it (daily / weekly / monthly / now and then); What I adapted (what they added, bent or worked around to make it fit their job); Who else uses it (only me / my team / shared more widely); Where it lives (name the place; never paste private contents). Never invent a kit, a field, or an example; wait for the participant's words, and ask again for any field they skipped. At least one kit; never pad to three. If they say they have none, read them the "what counts" list above to help them recognise one; if there is still none, record `none yet` under `## Kits I use` and tell them Session 1 will help them find one.
3. Ask: which kit above becomes a factory in Session 2, and why (one or two sentences)? Record it under `## Kit to convert`. If they have not decided, record `undecided`; they choose in Async 1. Do not choose for them. Everything in the repo is public; if the participant wants to keep some of the work private, they do that work in a private workspace on their machine later and put here only what they are comfortable sharing.
4. Ask for their posture from the survey (Partnership / Hypervigilance / Overreliance / Compliance); if not taken, write `not taken`.
5. Write `participants/NAME/s1-inventory/inventory.md` with exactly the sections in `participants/README.md`: `# NAME` · `## Kits I use` (one to three `### n. <short name>` blocks, six fields each, or `none yet`) · `## Kit to convert` · `## Posture`. 10–40 lines; only what the participant said. Kit names, the tools they are made of and one-line descriptions are fine; no client names, numbers, credentials, private prompt contents, or NDA material. Append `| <ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness |` to `participants/NAME/LOG.md`.
6. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. `git add participants/NAME && git commit -m "S1: NAME: inventory"`, then `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times. A CONFLICT can only be inside `participants/NAME/`: keep both, `git add`, `git rebase --continue`, push.
7. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/s1-inventory/inventory.md` shows your commit.

Failures:
- `gh api user` prints another name, or `permissions.push` is `false`, or any 403 → STOP; tell the participant "run `gh auth switch --user NAME` (or `gh auth login` as NAME), then say continue"; when it matches, run `gh auth setup-git`.
- username/password prompt → type nothing; the participant runs `gh auth setup-git`; retry.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times.
- `error: src refspec main does not match any` → you are not on BRANCH or nothing is committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- still rejected after 3 tries → STOP, print the exact error; the participant posts it in #workshop-kitkraft, the fix comes back in that thread or at 1A, then they say "push again".
Do not: create branches, force-push, touch anything outside `participants/NAME/`, read other inventories yet, log secrets, client names or data.
Report in four lines: the absolute path of the folder you wrote in; the GitHub link of `inventory.md`; the kits recorded and the kit to convert (or `undecided`); any error.
```

## Block 2 — two kits that complement yours (slide 13)

```
You are the participant's harness in the AI Kitcraft repo, Session 1, second prompt. Find two kits in the room that could complement theirs.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere.

Preconditions: at the clone root (`git rev-parse --show-toplevel` equals `pwd`; `git remote get-url origin` contains `protocolvision/workshop-kitkraft`; if not, `cd` to the clone root); never test the folder name; `git branch --show-current` prints BRANCH; run `git pull --rebase origin BRANCH` now — other people's folders arrive only through the pull.

Steps:
1. List `participants/*/s1-inventory/inventory.md` excluding `participants/NAME/`, every folder whose name starts with `_` (those are examples, not participants), and any file that is still the unfilled template. Work with what is there and tell the participant how many you found. Two or more: continue. Exactly one: name that one, say it is the only other inventory so far, and skip to step 4. None: report "no other inventories yet", do step 4, and stop.
2. Read each. Compare the kits under `## Kits I use` against those in `participants/NAME/s1-inventory/inventory.md` and look for **complement, not likeness**: a kit whose output could feed one of theirs, or that does a step theirs does not, or that handles the same material for a different purpose. Two kits that do the same job in the same way are not complements.
3. Pick the two strongest complements, whoever owns them. One line each: `<owner>/<kit name> — <why it complements theirs>`. If only one is a real complement, give one and say so rather than padding.
4. Confirm `participants/NAME/LOG.md` has at least one line below its header; if not, append `| <ISO-8601 UTC now> | S1 | NAME | progress | inventory written by harness |`.
5. Append the answer to `participants/NAME/s1-inventory/inventory.md` under `## Related`, adding that heading at the end of the file if it is not there, one line per kit exactly as written in step 3. Do not change anything else in the file.
6. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. Append `| <ISO-8601 UTC now> | S1 | NAME | memory | related: <kit1>, <kit2> — <why, short> |` to `participants/NAME/LOG.md`. Commit `S1: NAME: related kits`, `git pull --rebase origin BRANCH`, `git push origin HEAD:BRANCH`; rejected → pull --rebase and push again (3 tries; a conflict is only in your folder: keep both, add, continue). Verify with `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/s1-inventory/inventory.md`.

Do not: edit anything outside `participants/NAME/`; open GitHub in a browser; quote other people's files back at length.
Report in three lines: the two kits with reasons, and whether the change to your inventory is on GitHub.
```
