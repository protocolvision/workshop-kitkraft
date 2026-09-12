# Setup checklist — what to install, why, and how to verify

Three things must be on your machine before Monday: `git`, the GitHub CLI `gh`, and one AI harness (Claude Code or Codex). Each needs your computer password or a browser login, so a harness cannot do it for you; do it yourself, then paste the "Verify only" block at the end into the harness. Nothing else is needed: no Node, Python, Docker or editor. Checked against the vendors' docs on 2026-09-12 (code.claude.com/docs/en/setup, learn.chatgpt.com/docs/codex/cli, cli.github.com). Org-managed laptop: installs need admin rights; if IT blocks them, use a personal machine and keep work files off it, or come to 1A with what you have.

| What | Why | macOS | Windows | Linux | Verify |
|---|---|---|---|---|---|
| A terminal | where you start the harness | Terminal.app, built in | PowerShell or Windows Terminal, built in | any | opens |
| **git** — required | both harnesses run git underneath to clone, commit and push; Claude Code on Windows also uses Git Bash for its shell | `xcode-select --install` (a dialog appears; 5–10 min), or `brew install git` | Git for Windows installer https://git-scm.com/downloads/win (accept the defaults) | `sudo apt install git` | `git --version`; first time only: `git config --global user.name "<GitHub username>"` and `git config --global user.email "<email used on GitHub>"` |
| **GitHub CLI `gh`** — required | logs you in to GitHub and hands git your credentials, so pushes never ask for a password | `brew install gh` (no Homebrew? install it first: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, asks for the Mac password; or download the macOS package from https://cli.github.com without Homebrew) | `winget install gh`, or the MSI from https://cli.github.com | per https://github.com/cli/cli/blob/trunk/docs/install_linux.md | `gh auth login` (browser), then `gh auth setup-git`; `gh auth status` shows your username |
| **One harness: Claude Code** | the agent that reads the repo and does the work | `curl -fsSL https://claude.ai/install.sh \| bash` | PowerShell: `irm https://claude.ai/install.ps1 \| iex` | `curl -fsSL https://claude.ai/install.sh \| bash` (also WSL) | `claude --version`, then `claude doctor`. Needs no Node or Homebrew. Sign-in needs a Claude Pro, Max, Team or Enterprise plan; the free plan does not include Claude Code |
| **or: Codex** | same role, OpenAI's harness | `curl -fsSL https://chatgpt.com/codex/install.sh \| sh`, or `brew install codex` | `npm install -g @openai/codex` (needs Node 22+) | `curl -fsSL https://chatgpt.com/codex/install.sh \| sh` | `codex --version`. Sign in with a paid ChatGPT plan |
| Not needed | — | Node.js (only if installing Codex via npm), Python, Docker, a code editor (VS Code optional), Homebrew (only the easy path to `gh` on a Mac) | same | same | — |
| Accounts | the repo invite goes to the GitHub username on the form | GitHub, free: https://github.com/signup; and one of the two paid AI plans above | same | same | `gh auth status` prints that username |

## Verify only — paste into your harness

```
You are the participant's harness. Run these six checks and report PASS or FAIL per line with the command's output. You cannot install anything that needs a password or a browser login; when a check fails, quote the matching row of workshop-dev/sessions/setup-checklist.md and tell the participant to do it themselves, then say "paste this again".
1. `git --version`
2. `git config --global user.name` and `git config --global user.email` both print a value
3. `gh --version`
4. `gh auth status` shows a logged-in github.com user (this is the username the invite goes to)
5. `git config --global --get credential.helper` prints a line containing `gh auth git-credential` (else the participant runs `gh auth setup-git`)
6. `claude --version` (then `claude doctor`) or `codex --version` — one of the two
Report: six lines, PASS/FAIL, then the one thing to do next if anything failed.
```
