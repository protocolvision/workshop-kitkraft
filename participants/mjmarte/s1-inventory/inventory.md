# mjmarte

## Kits I use
### 1. Manuscript production line
- What it is: Seven chained agent skills — drafting, citation and claim verification, statistical audit, scientific reasoning, figure style, document integrity, and an attribution scrub — wired so the drafting skill calls the other six.
- The job it does: Takes a scientific manuscript from draft to a file I can send a co-author or a journal, with a named gate at each stage.
- How often I use it: weekly
- What I adapted: Each stage is a gate rather than advice. The last one exits non-zero and blocks the handoff if the document still carries AI authorship in its comments or tracked changes; that gate exists because a manuscript once reached a senior author with dozens of AI-authored comments still in it.
- Who else uses it: only me
- Where it lives: a skills folder on my own machine.

### 2. Multi-agent protocol for a client codebase
- What it is: One authoritative instruction file, a deliberately thin pointer file for other agent ecosystems, a shared handoff document carrying repository, branch, deploy and verification state, and two skills encoding the owner's writing voice and brand rules against a reference corpus of approved copy.
- The job it does: Lets a non-technical product owner ship to production through her own agent, independently, while a second person and a second AI provider work the same repository without colliding.
- How often I use it: daily
- What I adapted: The pointer file points instead of duplicating, because an earlier find-and-replace fork silently corrupted real paths and model names. Branch prefixes and title tags let a daily digest tell whose work is whose on a shared login. Schema changes require a numbered migration plus an explicit pending file, and an agent is never permitted to claim a migration has been applied.
- Who else uses it: the product owner runs it daily; a second AI provider works the same repository
- Where it lives: a private client repository; the instruction files sit at its root.

### 3. theme_marte — a house figure style, encoded twice
- What it is: A matplotlib module and a ggplot2 theme carrying the same style, a SKILL.md telling an agent when to apply it, and a folder of worked examples.
- The job it does: Every figure in a manuscript, poster or deck comes out in one publication style without hand-restyling.
- How often I use it: weekly
- What I adapted: Wrote the style as code in both languages so it survives whichever one an analysis is in, and added a step that renders the figure and looks at it — fonts fall back silently, so style in code is not style on screen.
- Who else uses it: only me
- Where it lives: a skills folder on my own machine.

## Kit to convert
theme_marte. It is already close to the shape Session 2 asks for — a SKILL.md plus worked examples — so the work is declaring its interface and what it adapts to, and it carries nothing I would not publish.

## Related
sachben91/Session rituals — my two provider rule files were copied rather than linked and have drifted 49 lines apart; theirs symlinks a project's instruction file to one shared source and makes a devlog the single source of truth, committed together with its rendered page.
rafaeldavid/here.now publishing — my manuscript line and my figure kit both end at a verified file on disk with no way in; this turns that output into a live URL, with a passcode for private drafts and stable slugs so a shared link keeps working.

## Posture
not taken
