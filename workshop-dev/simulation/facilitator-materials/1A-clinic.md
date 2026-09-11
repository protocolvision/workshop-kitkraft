# 1A — Beginner clinic, 30 min (Mon Sep 21, 16:30–17:00 UTC, #kafka, not recorded)

Lead: Rafa. Sachin in #kitcraft for pushes. Expected: Ingrid (no harness before S1; IT-managed laptop, brings a personal one), Kwame (Codex opened outside the clone, no autolog line), Aiko (no harness, 01:30 JST), Marisol if she wants to push herself. Anyone else welcome.

Exit criteria, per person: harness answers `--version`; the clone exists; the harness was opened inside it; one autolog line is in their inventory; one push is visible on GitHub.

## 00:00–00:03 Who is here, what failed
- One sentence each: which step stopped you (install / invite / clone / harness / push).
- Sachin opens a thread per person in #kitcraft for pasted errors.

## 00:03–00:08 Install check
- In a terminal: `claude --version` or `codex --version`, then `git --version`.
- No harness: Claude Code `curl -fsSL https://claude.ai/install.sh | bash`; Codex `npm i -g @openai/codex`. If the vendor page says otherwise, the vendor page wins.
- No git: macOS `xcode-select --install`; Windows https://git-scm.com/download/win; Linux `sudo apt install git`.
- Install `gh` (GitHub CLI) if missing: https://cli.github.com/. It is the least painful way to authenticate a push.
- Org-managed laptop with no install rights (Ingrid): use the personal laptop; if none, skip to the fallback at the end.

## 00:08–00:13 First clone
- Check the invite: open https://github.com/protocolvision/workshop-kitkraft in the browser; a 404 means the invite is not accepted. Invites live at https://github.com/notifications or in email.
- `gh auth login` → GitHub.com → HTTPS → login with browser. Then `gh auth setup-git` (stores the credential so `git push` does not ask for a password).
- `gh repo clone protocolvision/workshop-kitkraft` (or `git clone https://github.com/protocolvision/workshop-kitkraft.git`).
- Rehearsal only: `cd workshop-kitkraft && git checkout simulation/dry-run-01`. In the real workshop everything is on `main` and this step does not exist.

## 00:13–00:17 Open the harness inside the clone
- `cd workshop-kitkraft` then `claude` or `codex`. The folder name must be in the prompt.
- Test that it read the repo instructions: ask "What does AGENTS.md tell you to do after each substantive step?" A correct answer mentions appending a line to a LOG. If it cannot answer, it was opened elsewhere (Kwame's case on Monday). Quit, `cd` into the folder, open again.
- Codex users: `CLAUDE.md` is irrelevant to you; `AGENTS.md` is the file that matters.

## 00:17–00:22 One autolog line
- Ask: "Append a `progress` line to the `## Log` section of `inventory/<my-name>.md` saying the harness was opened inside the clone at 1A."
- Check the shape: `2026-09-21T16:45:00Z | S1 | <name> | progress | ...`. If the file has no `## Log` section (Ingrid wrote hers in the web editor), ask the harness to add the section and the line.
- If the inventory file does not exist yet, ask the harness to write it from `inventory/README.md` now.

## 00:22–00:27 One push
- Ask: "Commit this as `S1: <my-name>: inventory` and push." The harness should pull with rebase first because AGENTS.md tells it to.
- Check on GitHub: the file shows your commit. Say "pushed" in #kitcraft; Sachin ticks the push list.
- If the harness asks for a username/password: run `gh auth setup-git` in another terminal, then ask it to push again. Never paste a token into the harness.

## 00:27–00:30 When the push is rejected
- Message contains `! [rejected]` and `fetch first` or `non-fast-forward`: someone pushed before you. Ask: "Pull with rebase and push again." Repeat once if it happens again; six people on one branch means this is normal.
- Message contains `CONFLICT` in your own inventory file: both versions are yours; ask the harness to keep both lines, continue the rebase, push. Never `--force`.
- `Permission denied` or `403`: the invite is not accepted or the wrong GitHub account is logged in (`gh auth status`).
- Nothing works in 30 min: send the file to Sachin in #kitcraft; he commits it under your name. You still open the harness for S2 and try the push again there; the kit exercise needs it.

Facilitator notes
- Do not type on a participant's machine; say the command, they type it. It has to work without us on Tuesday.
- Every fix goes into `observations/rafa.md` with the exact error text; the next cohort's pre-work email is built from this list.
