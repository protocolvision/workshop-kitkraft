# rafa

## Kits I use
### 1. Water-rate PDF extraction
- What it is: An AI assistant, a reused extraction prompt, and a fixed CSV row shape for the registry.
- The job it does: Turns a utility's published water-rate schedule PDF into registry rows, one per rate tier.
- How often I use it: weekly
- What I adapted: The rate-structure vocabulary (tiers, meter sizes, CCF vs kgal) and a rule to copy units from the PDF, never convert them.
- Who else uses it: only me; the rows it makes feed Water Data Strategy (https://npc.here.now/waterdatastrategy/).
- Where it lives: a folder of prompt, row shape and examples on my machine; the facilitator copy is `facilitator/rafa/s2-factory/`.

### 2. Governance-call notes
- What it is: A Claude project I reuse, with the call recording's transcript pasted in.
- The job it does: Writes ZKsync governance call notes from a recording.
- How often I use it: weekly
- What I adapted: Project instructions that tie each speaker's remarks to the proposal they are referring to.
- Who else uses it: only me
- Where it lives: a Claude project in my account.

### 3. Protocol Institute brand kit
- What it is: The brand kit's `llms.txt` and `brand.json`, read by an assistant before it builds a page.
- The job it does: Lets an assistant build on-brand Protocol Institute pages without me restating the rules.
- How often I use it: now and then
- What I adapted: Colour tokens, components and contrast checks written as files an assistant reads, not a PDF a person reads.
- Who else uses it: my team
- Where it lives: https://npc.here.now/protocolintstitutebrandkit/

## Kit to convert
Water-rate PDF extraction. Its rows are already an intermediate the registry builds on, and the example can be synthetic, so it can be public.

## Posture
Partnership
