# S1 agent prompts — facilitator copy (pinned in #workshop-kitkraft by Rafa at 16:05 and 16:18 UTC as a link to `instructions/S1-inventory.md`)

Two blocks. Participants paste each into their harness (open at the clone root) and say "do this". Slide 12 = Block 1, slide 13 = Block 2. No interpretation needed from the participant. Pins never carry a block (2000-character cap); they link to the file. Keep this copy and `instructions/S1-inventory.md` identical.

## Block 1 — inventory (slide 12)

```
You are the participant's harness in the AI Kitcraft repo, Session 1. Write their inventory file and push it.
Settings: BRANCH=main  NAME=<the participant's GitHub username, lowercase; ask if unknown>
You write only inside `participants/NAME/`; read anywhere, including the participant's AI setup on this machine (read-only; nothing from it is copied into the repo except the inventory lines they confirm).

Preconditions:
0. Clone root. `git rev-parse --show-toplevel` equals `pwd` and `git remote get-url origin` contains `protocolvision/workshop-kitkraft` (never test the folder name). If the remote check fails: `find ~ -maxdepth 4 -type d -name workshop-kitkraft` — one result: tell the participant its path and "quit me, `cd <path>`, start me again, paste again"; none: `gh repo clone protocolvision/workshop-kitkraft`, `cd workshop-kitkraft`, continue; two or more: STOP, bring it to 1A; never make a second clone. If only `pwd` differs, `cd` to the clone root. If `participants/NAME/` is missing, `cp -R PARTICIPANT_TEMPLATE participants/NAME`.
- `git branch --show-current` prints BRANCH. If not: `git checkout BRANCH`.
- `gh api user --jq .login` equals NAME (case-insensitively) and `gh api repos/protocolvision/workshop-kitkraft --jq .permissions.push` prints `true`. If either fails: STOP; see Failures.
- `git pull --rebase origin BRANCH` succeeds. "Unstaged changes" → `git stash`, pull, `git stash pop`. Username/password prompt → type nothing; STOP, "run `gh auth setup-git`, then say continue".

Steps:
1. Read `participants/README.md` (the file shape). If `participants/NAME/s1-inventory/inventory.md` already lists kits under `## Kits I use`, keep them as candidates; remove any draft note or "to be confirmed" preamble.
2. Gather, do not interview. What counts as a kit: any AI tool or setup the participant has used or built for repeated use to do a real job — a skill, a saved or reused prompt, a slash command or custom agent, a custom GPT or Claude project, a prompt document they copy from, project instructions (CLAUDE.md / AGENTS.md), an MCP server or plugin they rely on, a spreadsheet or document with an AI step, an automation with an AI step. Small is fine; third-party tools count when they reuse them. Read, without asking first and without changing anything: (a) your own memory of the participant and this conversation; (b) their harness setup on this machine, read-only — for Claude Code `~/.claude/` (`skills/`, `commands/`, `agents/`, `CLAUDE.md`, `settings.json`, installed plugins, MCP servers, `projects/*/memory/`, and `history.jsonl` for which of these they actually invoke and how often), for Codex `~/.codex/` (`AGENTS.md`, `prompts/`, `skills/`, `config.toml`, history), and the same for any other harness they use; (c) `.claude/`, `CLAUDE.md` and `AGENTS.md` in the project folders their history names. Frequency comes from the history (how many prompts use it, how recently); "What I adapted" comes from what they changed or asked for, as the history or the files show it. Chat apps (ChatGPT, Claude.ai, Gemini) are not on disk: ask once whether they want to paste that app's answer to "list the custom GPTs/projects, saved prompts and tools you know I use repeatedly"; use it if they do.
3. Draft three to ten kits, most used first, each with the six fields: a short name; What it is (the tools and pieces it is made of); The job it does (one sentence); How often I use it (daily / weekly / monthly / now and then); What I adapted (what they added, bent or worked around to make it fit their job); Who else uses it (only me / my team / shared more widely); Where it lives (name the place, e.g. "a global skill in my Claude Code setup"; never paste private contents). Every kit and every field must trace to something you read; if a field has no evidence, write `?` and ask for it. Never invent a kit, a field, or an example. Fewer than three with evidence: list what you found, then ask the participant, one at a time, for the rest (read them the "what counts" list); never pad. Nothing found and nothing named: record `none yet` and tell them Session 1 will help them find one. Scrub the draft for the public repo: no client or company names that are not the participant's own public work, no people's names, passcodes, credentials, numbers, private prompt contents, private URLs, or NDA material; name a brand-specific kit by its job, not the brand.
4. Show the draft and ask the participant to confirm, correct or cut each kit, in one message. Push nothing until they confirm. Record what they change, in their words.
5. Ask: which kit above becomes a factory in Session 2, and why (one or two sentences)? Record it under `## Kit to convert`. If they have not decided, record `undecided`; they choose in Async 1. You may say which kit looks strongest and why; the choice is theirs. Everything in the repo is public; if the participant wants to keep some of the work private, they do that work in a private workspace on their machine later and put here only what they are comfortable sharing.
6. Ask for their posture from the survey (Partnership / Hypervigilance / Overreliance / Compliance); if not taken, write `not taken`.
7. Write `participants/NAME/s1-inventory/inventory.md` with exactly the sections in `participants/README.md`: `# NAME` · `## Kits I use` (three to ten `### n. <short name>` blocks, six fields each, or `none yet`) · `## Kit to convert` · `## Related` (leave the template line; Block 2 fills it) · `## Posture`. 25–90 lines; only what you found and the participant confirmed. Append `| <ISO-8601 UTC now> | S1 | NAME | progress | inventory drafted by harness from memory and setup, confirmed by participant: <n> kits |` to `participants/NAME/LOG.md`.
8. Conflict check first: `git grep -l '^<<<<<<<' -- participants/NAME` must print nothing; if it does, fix the file before committing. `git add participants/NAME && git commit -m "S1: NAME: inventory"`, then `git pull --rebase origin BRANCH && git push origin HEAD:BRANCH`. Rejected → pull --rebase and push again, up to 3 times. A CONFLICT can only be inside `participants/NAME/`: keep both, `git add`, `git rebase --continue`, push.
9. Verify: `git fetch origin && git log origin/BRANCH --oneline -1 -- participants/NAME/s1-inventory/inventory.md` shows your commit.

Failures:
- `gh api user` prints another name, or `permissions.push` is `false`, or any 403 → STOP; tell the participant "run `gh auth switch --user NAME` (or `gh auth login` as NAME), then say continue"; when it matches, run `gh auth setup-git`.
- username/password prompt → type nothing; the participant runs `gh auth setup-git`; retry.
- `! [rejected]` / `fetch first` / `non-fast-forward` → `git pull --rebase origin BRANCH`, push again, up to 3 times.
- `error: src refspec main does not match any` → you are not on BRANCH or nothing is committed: `git checkout BRANCH`, commit, push `HEAD:BRANCH` again.
- still rejected after 3 tries → STOP, print the exact error; the participant posts it in #workshop-kitkraft, the fix comes back in that thread or at 1A, then they say "push again".
Do not: create branches, force-push, write anything outside `participants/NAME/` (reading the participant's setup is fine; changing it is not), read other inventories yet, push before the participant confirms the draft, log secrets, client names or data.
Report in four lines: the absolute path of the folder you wrote in; the GitHub link of `inventory.md`; the kits recorded (and where the evidence for each came from) and the kit to convert (or `undecided`); any error.
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
