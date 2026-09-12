# Instructions — paste into your harness

Each file below is written for your harness, not for you. Open your harness at the clone root (the folder that contains `AGENTS.md`), paste the whole file, and say "do this". The pins in #kitcraft point here whenever a block is too long for Discord. Every block starts with a settings line (`BRANCH=main`, `NAME=<your GitHub username, lowercase>`); fill NAME if your harness does not know it.

| When | File | What it does |
|---|---|---|
| before S1 | `orient.md` | checks git, gh, account, clone, your folder; makes the first push if it has not happened |
| S1 exercise | `S1-inventory.md` | Block 1 writes `participants/<name>/inventory.md`; Block 2 finds the two nearest |
| after S1, before 20:00 UTC | `async-1.md` | drafts `participants/<name>/kit/README.md` from the inventory |
| S2 build | `S2-build.md` | fills `kit/SKILL.md` and `kit/examples/` |
| S2 breakout | `S2-critique.md` | reads a triad-mate's kit cold, reports, logs blockers |
| overnight | `async-2.md` | fixes the blockers, pushes v2 |
| S3 breakout | `S3-bridge.md` | uses the target kit, writes the bridge file |
| S3, stub targets | `S3-bridge.md`, second section | requester and owner blocks |
| no harness or no GitHub | `no-harness.md` | the by-hand path: write, paste in #kitcraft, a facilitator commits |
