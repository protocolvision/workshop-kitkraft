# RAG Factory

Job: turn a corpus and a retrieval goal into a scaffolded retrieval-augmented pipeline spec, picked from two generalized RAG patterns — read-only and read-write — instead of one fixed shape, ready for a coding agent to implement.
For: anyone building a citation-grounded Q&A or retrieval tool over their own corpus — a research library, a personal log, a documents folder.
Inputs: a description of the corpus (what it is, roughly how big, how structured, whether it changes over time); the retrieval goal (what kind of question it should answer); how strict the citation/verification requirement needs to be.
Outputs: a filled pipeline spec — typology chosen, ingestion steps, index/search shape (a vector store and a direct search over a flat file are both valid, adapted to corpus scale), retrieval steps, the citation rule, and (for the read-write typology) the write-back step and its recency/dedup window.
Exports: a typed retrieval-pipeline spec precise enough for a coding agent to implement directly — the intermediate a downstream build step or another factory consumes, not working code.
Interface: rung 1 — file handoff: hand this folder, plus a description of your corpus, to your agent and run SKILL.md.
Adapts to: the corpus the person brings (domain, size, structure, whether it's static or growing — this decides vector store vs. direct search, not the typology itself) and how strict their citation bar is; both given when SKILL.md step 1 and 2 ask.
Example run: see `examples/` — a synthetic corpus description as `input.md`, the filled pipeline spec as `output.md`.
Not for: writing the actual ingestion/embedding/reranking code (downstream of this factory); domains with no corpus at all.

## Typology (generalized from this author's own kits)

Two types, generalized from kits already in this repo — not invented from scratch. The distinction is read-only vs. read-write, not corpus type, personal-log-vs-crawled-corpus, or whether a vector store exists — those are all `Adapts to:` details, not separate types.

- **Read-only retrieval.** Ingest once (crawl, extract, chunk, or just point at a flat file), index or search it (a vector store for scale, a direct search for a small corpus — same type either way), retrieve with reranking where the corpus is large enough to need it, answer under a citation-required rule. The corpus never changes from use. Generalized from **Watermentat** (`## Kits I use` #6 in this author's S1 inventory) at the vector-store end of the scale, and from **Polymetis Protocol**'s (`deprecated/polymetis-protocol/`) anchor-search step at the direct-search end — same type, different scale.
- **Read-write retrieval, where the answer changes the corpus.** Same ingestion/retrieval shape as read-only, but every session's output (the answer, or a completed exercise) gets appended back into the corpus — so what future retrievals search is not fixed at ingestion time; it grows from the interactions themselves. Generalized from **Polymetis Protocol**'s logging step, which appends each run's anchor-plus-answer back into the same log its next run will search; its recent-use window is exactly the dedup/recency rule a read-write retriever needs.

A third candidate was raised and could not be confirmed: a "Sachin RAG skill" was mentioned as a source to generalize from, but nothing in this repo shows a retrieval/vector pipeline from Sachin — only `facilitator/sachin/s2-factory/` (adoption-diagnosis), which requires citing a transcript line per claim but has no corpus, index, or retrieval step. If that citation-required-without-retrieval shape belongs here at all, that's one of the open questions below rather than something built in yet.

## Ingestion pipeline approaches (generalized)

Ingestion is the same job under either typology — read-only vs. read-write only changes what happens *after* retrieval. These general approaches, drawn from generalizing this author's own real ingestion build, apply regardless of which typology SKILL.md picks:

- **Break ingestion into independently-runnable, resumable stages** (list → fetch → extract → enrich → chunk → spot-check), each reading/writing a shared data directory and skipping items it's already processed on rerun. No stage should have to redo the whole corpus because a later stage failed.
- **Derive a stable ID for each item from something that won't change** (a canonical URL/slug, a content hash) — not from a filename, page number, or download URL, any of which can shift between runs. Every stage joins on this ID.
- **Verify assumptions against the real source before writing the crawler**, not from a flattened/cached view of it — undocumented APIs, hidden pagination limits, and metadata that looks per-item but is actually a sitewide filter widget are all common surprises. Budget time for this before Stage 1, not after Stage 1 breaks.
- **Classify sources by expected access tier up front** (e.g. directly fetchable / open-but-external / likely gated) and skip the tier you already know won't work, logging it as a deliberate skip rather than an error — don't spend retries on failures you can predict.
- **Log structured, one-line-per-item status** (a status field plus the item ID) at every stage, not just print statements — so failure rates are queryable after the fact instead of requiring a rerun to see them again. Wrap per-item work so one bad item logs and continues rather than crashing the stage.
- **Defer expensive or slow enrichment (OCR, re-embedding, deep re-processing) as an explicit, named "not yet" rather than silently skipping it** — a stub file and a README TODO line are enough; don't let it block the stages that don't need it.
- **Be a polite, identifiable fetcher**: rate-limit deliberately, identify the crawler honestly, and for a large one-time pull against someone else's site, consider whether reaching out for a bulk export first is the better move — that's a judgment call for the person running it, not something to auto-decide.
- **Prefix chunks with title/summary context before embedding**, not just the raw body text — retrieval measurably improves when a key term lives in the title or summary but isn't repeated in the body.
- **Attach a stable citation reference to every chunk, separate from wherever the content was actually fetched from** — a download URL can rot or redirect; the canonical page/citation reference should be what the answer points back to.
- **Reconcile the plan against what the pipeline actually produced before building on top of it.** A pre-build design is a hypothesis about field availability, error rates, and corpus shape — write down what actually came out (completion rate, which fields turned out populated vs. not) and update the next stage's design against that, rather than assuming the first draft was right.
- **Load a small test batch before committing to the full corpus** when standing up an index/store — cheap to redo at 100–200 items, expensive to redo at the full scale.
- **Keep authority/quality weighting and recency weighting as separate multipliers**, not one blended score — they answer different questions ("how authoritative is this" vs. "how current is this"), and a query can reasonably want them weighted differently (a historical question shouldn't penalize old documents at all).
- **Build glossary/acronym expansion from whatever curated vocabulary the source already has**, if one exists, rather than deriving it computationally from scratch — reuse structure that's already there for free.
- **When a bad answer shows up, diagnose retrieval vs. synthesis separately before changing anything** — wrong or missing chunks retrieved is a different bug than right chunks badly used, and fixing the wrong one first is the most common way to waste a debugging pass.

## Open questions to refine later
- Does read-write need its own reranking rule once the corpus mixes original material and past answers — should past answers be weighted differently from source entries?
- Where's the real line between "small enough for direct search" and "needs a vector store" — corpus size, query volume, something else? Right now that's left to judgment at step 1, not specified.
- What does the citation/verification discipline mean when there's no crawled source document, just the person's own writing — is "cite the line" still the right rule, or does it need to become "quote it verbatim" instead (as Polymetis Protocol already does)?
- Is Sachin's adoption-diagnosis kit (citation-required, no retrieval, single transcript) a third typology — call it read-only, no persistent corpus, single-document grounding — or a different category of kit entirely?
- Does `Adapts to:` need to branch by typology (different ingestion questions for read-only vs. read-write), or can one question set cover both at step 1–2?

## Future development
Rungs 2+ (a single file calling a model via API/MCP, an app, a hosted site) are unbuilt. This factory currently produces a spec, not a runnable pipeline; turning a read-only spec into an actual ingestion+retrieval script (as Watermentat already is, informally) would be the natural rung-2 stretch.
