# 1A floor — @kwame (voice #kafka, Mon Sep 21 2026, 16:30–17:00 UTC, not recorded)

Spoken lines plus what his harness printed. Harness: Codex (reads `AGENTS.md`). Two folders at the start: the Wednesday clone at `~/Documents/protocolvision/sim-clones/kwame` (the "real" one; in the sim it stands for `~/Documents/workshop-kitkraft`) and a second `workshop-kitkraft/` under `/private/tmp/claude-501/…/scratchpad/kwame-home/` (the stray; branch `main`). Output blocks are verbatim, trimmed only where marked `…`. The block pasted at 16:30 is the pre-clinic text of `facilitator-materials/1A-clinic.md` (as of 3f3b802: check 4 "if no folder `workshop-kitkraft` exists here, clone", proof `git rev-parse --show-toplevel` ends in `workshop-kitkraft`); Rafa revised the file after the clinic (9d3509e).

[16:30:40] Kwame: Kwame. My S1 pushes went to the branch, but they went from a second folder: I had two clones since Sunday, Codex was open in the wrong one, and the clone I actually work in has no S1 log line. I need to know which folder I live in.
[16:31:20] Kwame: Rafa, I have Codex open already; it is the window from S1, so I will just paste the block there. NAME is kwame.
[16:33:05] Kwame: Pasted, said "do this". Reading out as it goes.

    1. Tools. PASS.
        git version 2.46.0
        gh version 2.88.1 (2026-03-12)
    2. Login. PASS.
        github.com
          ✓ Logged in to github.com account rafathebuilder-ZK (keyring)
          - Active account: true
          …
          ✓ Logged in to github.com account rafaeldavid (keyring)
          - Active account: false
        credential.helper: store
    3. Invite. PASS.
        {"name":"workshop-kitkraft"}
    4. Clone. No folder `workshop-kitkraft` here → cloning.
        ls: workshop-kitkraft: No such file or directory
        (find ~ -maxdepth 3 -type d -name 'workshop-kitkraft*' → nothing)
        Cloning into 'workshop-kitkraft'...
        Switched to a new branch 'simulation/dry-run-01'
        branch 'simulation/dry-run-01' set up to track 'origin/simulation/dry-run-01'.
        Already up to date.
       PASS. Proof: `git rev-parse --show-toplevel` = /private/tmp/claude-501/…/scratchpad/kwame-home/workshop-kitkraft/workshop-kitkraft (ends in workshop-kitkraft)
    5. Inside the clone. Started in a clone; now in workshop-kitkraft. AGENTS.md says: after every substantive step append one line
       `<ISO timestamp> | <S1|S2|S3|S4|async> | <participant> | <type> | <one line>` to the nearest LOG.md (inventory bottom section in S1). PASS.
    6. Log line. inventory/kwame.md exists, has `## Log`. Appended. PASS.
        2026-09-21T16:36:30Z | S1 | kwame | progress | harness opened inside clone at 1A
    7. Push. PASS.
        b7bb27c S1: kwame: 1A push
        Current branch simulation/dry-run-01 is up to date.
        To https://github.com/protocolvision/workshop-kitkraft.git
           cf24a76..b7bb27c  simulation/dry-run-01 -> simulation/dry-run-01
       Proof: b7bb27c S1: kwame: 1A push
    Seven of seven passed. Say "pushed" in #kitcraft.

[16:38:30] Kwame: Seven passes, Rafa. But look at the proof line for check 4: the path ends in workshop-kitkraft *twice*. It was already inside my second clone, the block said "if no folder workshop-kitkraft exists here, clone", there was none *inside* it, so it made a third one and did checks 5 to 7 in there. It pushed from the third folder. Nothing in the seven asked which folder I started in or what my branch is called; check 2 did not even blink at two accounts being logged in.
[16:40:20] Kwame: How many folders called workshop-kitkraft. Let me count properly, not from memory.

    $ find ~ -maxdepth 4 -type d -name workshop-kitkraft
    (nothing — the Wednesday clone is at ~/Documents/protocolvision/sim-clones/kwame; the folder is named kwame, not workshop-kitkraft)
    $ find /private/tmp/claude-501 -maxdepth 8 -type d -name workshop-kitkraft
    /private/tmp/claude-501/-Users-rafa-Documents-protocolized-publications/f230b0bf-ecab-4252-a469-361b419d95ba/scratchpad/kwame-home/workshop-kitkraft
    /private/tmp/claude-501/-Users-rafa-Documents-protocolized-publications/f230b0bf-ecab-4252-a469-361b419d95ba/scratchpad/kwame-home/workshop-kitkraft/workshop-kitkraft

[16:41:50] Kwame: Three, then. The one I did the pre-work in on Wednesday, the second one from Sunday's double paste that S1 went out from, and the one the block just made inside the second one. The find by name misses the Wednesday one because I never named that folder workshop-kitkraft; I should have looked for `.git` folders with the right remote, not for a name.
[16:43:10] Kwame: Yes, before I touch anything: is there anything in the second one that is not on the branch. Running it in that folder, not through Codex, because the block says it must not delete and I would rather the deleting hand be mine.

    $ git fetch origin && git status --short --branch
    ## main...origin/main [ahead 52]
    ?? workshop-kitkraft/
    $ git log --oneline origin/simulation/dry-run-01..HEAD
    (empty)
    $ git branch --show-current
    main

[16:44:30] Kwame: "Ahead 52" gave me a fright until Rafa said it is comparing to origin/main, which is the wrong branch; against origin/simulation/dry-run-01 there is nothing unpushed. Clean tree except the third clone it just made, which also has nothing unpushed. And there it is in writing: the branch is called `main`. That is the "src refspec" error from 16:09. No check printed it.
[16:46:00] Kwame: Sachin's 16:40 line in the channel says "delete the other folder, one harness, one folder", and Rafa's rule just now is "the clone that pushed is the real one". Those point at different folders: the one that pushed is the Sunday one, and it is on `main`. I am keeping the Wednesday one, because its branch is the right one and it is the folder I can see in Finder; Rafa says fine, nothing unpushed either way. Deleting the Sunday folder by hand, and the third goes with it.

    $ rm -rf /private/tmp/claude-501/…/scratchpad/kwame-home/workshop-kitkraft
    $ ls -la /private/tmp/claude-501/…/scratchpad/kwame-home/
    total 0

[16:47:10] Kwame: Rafa, after the fact: rename it `-old`, do not delete, that is what the block says to the harness and it should hold for me too. Too late for this one; nothing was lost because I checked first. Noted.

[16:48:15] Kwame: Quit Codex. Terminal into the Wednesday clone, `codex` from there, pasting the block again. This time Rafa said to tell it up front: this folder *is* the clone, do not clone again. Logging that as a decision, since it is me overriding a line of the block.

    $ git branch --show-current
    simulation/dry-run-01
    $ git pull --rebase origin simulation/dry-run-01
    … create mode 100644 workshop-dev/simulation/discord/kafka/1A.md
    1–3 PASS (same as before).
    4. Clone. Told: already inside. `git checkout simulation/dry-run-01`:
        Already on 'simulation/dry-run-01'
        Your branch is up to date with 'origin/simulation/dry-run-01'.
       PASS. Proof: /Users/rafa/Documents/protocolvision/sim-clones/kwame
    5. PASS. AGENTS.md line 24: `<ISO timestamp> | <S1|S2|S3|S4|async> | <participant> | <type> | <one line>`
    6. PASS.
        2026-09-21T16:51:10Z | S1 | kwame | progress | harness opened inside clone at 1A
    7. PASS.
        Current branch simulation/dry-run-01 is up to date.
        To https://github.com/protocolvision/workshop-kitkraft.git
           b7bb27c..2c87fbc  simulation/dry-run-01 -> simulation/dry-run-01
       Proof: 2c87fbc S1: kwame: 1A push

[16:52:40] Kwame: Seven passes from the right folder this time, and the proof path is the folder I can see in Finder. The 1A line is now in the file twice, 16:36 from the wrong folder and 16:51 from this one; I am leaving both, the log is append-only.
[16:54:10] Kwame: One more line, a memory one, so tomorrow's me does not do this again.

    2026-09-21T16:54:00Z | S1 | kwame | memory | two clones of one repo: the record was pushed from a second workshop-kitkraft folder on a branch called main, so the autolog never fired in the folder I actually work in. Deleted the second folder at 1A after checking it had nothing unpushed. One repo, one folder, and `git branch --show-current` before every paste.
    4af8e56 S1: kwame: 1A memory line (two-clone lesson)
       2c87fbc..4af8e56  simulation/dry-run-01 -> simulation/dry-run-01

[16:55:30] Kwame: Ready. For the observations, four things from the Codex side. One, check 4 assumes the harness was started in the home folder; started inside a clone it makes a clone inside the clone, and check 5's "if the folder you were started in is not the clone" then passes because both folders are clones. Two, no check prints `git branch --show-current`; my `main` survived all seven. Three, the only harness-specific wording is the Codex parenthesis in check 5, which is right; `CLAUDE.md` in the repo is one line, `@AGENTS.md`, so a Claude user reads the same file and nothing in the block was Claude-only. Four, the room gave me three different instructions for the spare folder: Sachin's line says delete, the block says never delete, Rafa says rename `-old`; and "the clone that pushed is the real one" would have kept the folder on the wrong branch. What I would add is a check zero: "print `pwd` and `git branch --show-current`, and the participant says yes", and a written rule for which of two clones stays. Rafa: yes, observation.
[16:59:20] Kwame: One folder. Thank you.
