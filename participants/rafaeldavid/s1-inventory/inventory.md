# rafaeldavid

## Kits I use
### 1. here.now publishing
- What it is: The here.now Agent Skill (`publish.sh` plus reference docs) in Claude Code, with my here.now handle and custom domains.
- The job it does: Turns an HTML page, deck or folder my agent just made into a live URL.
- How often I use it: weekly
- What I adapted: Publishing to my own handle and domains instead of random slugs, passcodes on private pages, redeploying to an existing slug so links stay stable, and cleanup passes that unpublish stale sites.
- Who else uses it: only me; the pages go to whoever I share them with.
- Where it lives: a global skill in my Claude Code setup (`~/.claude/skills/here-now`), installed with `npx skills add heredotnow/skill`.

### 2. Finance dashboard builder
- What it is: A Claude Code skill I wrote (`finance-clarity-build`): Python scripts, prompts, design tokens and hard rules.
- The job it does: Turns a folder of unsorted financial files into a private, passcode-protected web dashboard.
- How often I use it: now and then
- What I adapted: Operating rules for privacy, sensitive data, secrets and publishing; sanity floors that fail loudly; publishing behind a passcode it generates.
- Who else uses it: only me for now; it is a pre-release prototype.
- Where it lives: a global skill in my Claude Code setup; the spec and backlog are in a private repo.

### 3. Branded HTML slide deck
- What it is: A Claude Code skill: a reveal.js template, a brand stylesheet and mermaid diagram rendering.
- The job it does: Turns a markdown presentation into a single self-contained, on-brand HTML deck.
- How often I use it: now and then
- What I adapted: Brand tokens sampled from the brand's live site, slides split at `---`, local images resolved and embedded.
- Who else uses it: only me
- Where it lives: a global skill in my Claude Code setup.

## Kit to convert
Branded HTML slide deck. It is a small, self-contained template that is easy to show with a synthetic example.

## Related
<two kits in the room that could complement yours; written in Session 1's second exercise>

## Posture
not taken
