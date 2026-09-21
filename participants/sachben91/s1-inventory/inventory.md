# sachben91

## Kits I use
### 1. Session rituals (start-up / close-out)
- What it is: A `CLAUDE.md` in each project root (in one project a symlink to the shared agent instructions), plus `status.md`, `data/devlog.json` as source of truth, `scripts/devlog_render.py`, and a best-practices digest.
- The job it does: Carries memory and process across sessions — what was open last time, what got done, how long it took, and the commit and push at the end.
- How often I use it: daily
- What I adapted: Start-up is `date` → read `status.md` → declare planned work. Close-out is `date` → append a devlog entry with `session_start`/`session_end` → regenerate the devlog page → update `status.md` → commit the data file and the generated page together as a pair → push → post a wrapup checklist. Close-out only fires when I ask for it, never on the agent's initiative.
- Who else uses it: shared more widely
- Where it lives: a `CLAUDE.md` in each project root, across four projects on my machine.

### 2. Themed discovery agent
- What it is: Voyage `voyage-3-large` embeddings over a local SQLite/numpy vector cache, a taste-profile matcher, a Claude reranker on the top K, and a themed discovery agent with web search that grows a registry of companies.
- The job it does: Finds companies beyond a fixed source list and ranks the finds against a taste profile.
- How often I use it: weekly
- What I adapted: The taste profile and the themes; ✓/✗ verdicts and notes become positive and negative anchors that change both future searches and ranking; a quality bar and per-theme size ceilings to keep the finds usable.
- Who else uses it: only me
- Where it lives: a Python project on my machine, git-versioned, no remote.

## Kit to convert
Session rituals. It is the one I use daily, it is already written as files another agent reads, and there is nothing private in it.

## Posture
Partnership

## Revised for S2 (2026-09-21)
The line above stands as written. On inventorying the Monstrous Times repo, a
third kit surfaced that the S1 pass missed: keeping a story's canonical Markdown
and its Substack mirror in step, on a platform with no write API. It beats
session rituals on the S2 test — it is an adaptation made because no product
exists, it is recurring (66 stories, repeatedly), and the knowledge in it was
paid for (two posts corrupted before the rules were found). Session rituals stays
as the fallback and is still the daily one. Converted kit: `../s2-factory/`.
