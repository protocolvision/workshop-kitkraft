# rheaplex

## Kits I use
### 1. Aesthetic-description-driven development
- What it is: coding agents (Claude Code, Hermes Agent) plus a written aesthetic: verbal descriptions, reference sites and typefaces, constraints, and a versioned vocabulary of aesthetic terms with examples and anti-examples.
- The job it does: turns an aesthetic I describe in words into working code, sites and generative pieces that I judge by eye.
- How often I use it: weekly
- What I adapted: plans with options that I answer item by item; small, reversible changes on trial branches; I check in the browser; for art work the definition text *is* the prompt, output is never repaired or cherry-picked, and I keep the verdict (my own tags, not the model's).
- Who else uses it: only me
- Where it lives: instruction files, briefs and grammar folders in my project repos

### 2. Spec-first building
- What it is: a coding agent working from a spec or session brief, with an instruction file that carries project rules and current state.
- The job it does: builds larger systems (a programming language, an art research harness) from specs that stay the source of truth.
- How often I use it: weekly
- What I adapted: a question-first consult phase that produces the spec; versioned specs with "load-bearing" rationale; "Do not" and "open decisions" lists; the agent must surface code/spec disagreements rather than pick one.
- Who else uses it: only me
- Where it lives: instruction files plus spec and plan folders in project repos

### 3. Think-aloud design partner
- What it is: a coding agent used as a sounding board, with project memory for conventions and gotchas.
- The job it does: works out the design of art/tech pieces (NFT structures, hashing tools, site structure) by reasoning out loud with me before and while building.
- How often I use it: weekly
- What I adapted: I check my understanding with analogies, reverse decisions freely when I remember a constraint, then tighten requirements (no defaults, fail loudly); a directness persona (no filler, no praise, agree only when right).
- Who else uses it: only me
- Where it lives: agent memory files and persona settings on my machines

### 4. Legacy-to-structured migration
- What it is: a coding agent with background subagents, scraping scripts, and data-driven templates in a static site generator.
- The job it does: moves content out of an old system (a CMS, a spreadsheet) into structured files and templates I control.
- How often I use it: now and then
- What I adapted: naming and slugs fixed up front before import; a strategy agreed first for data-shaped content; bulk imports fanned out to subagents; I correct facts as results come back; generated files kept out of the repo.
- Who else uses it: only me
- Where it lives: import scripts and templates in my site repo

### 5. Self-study tutor contract
- What it is: a coding agent plus an instruction file and a dependency-ordered curriculum of module docs in org-mode, with runnable Python blocks.
- The job it does: teaches me the maths and philosophy behind my art/theory project, one module per session.
- How often I use it: now and then
- What I adapted: my starting level written down; code first, no proofs, notation only when needed; direct criticism, no praise; change approach after two failed tries; every module tied back to the project.
- Who else uses it: only me
- Where it lives: a private study folder on my laptop

## Kit to convert
undecided

## Related
sachben91/Themed discovery agent — turns ✓/✗ verdicts into positive and negative anchors for the next round; my aesthetic kit collects verdicts (tags) but promotes them to examples/anti-examples by hand, so this supplies the missing feedback step.
aguevara92/Bitacora (the journal system) — frozen decisions and per-topic logbooks with link-back rules; my spec-first and think-aloud kits pile state into one instruction file and reverse decisions freely, so this gives them a durable decision record.

## Posture
not taken
