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

## Open questions to refine later
- Does read-write need its own reranking rule once the corpus mixes original material and past answers — should past answers be weighted differently from source entries?
- Where's the real line between "small enough for direct search" and "needs a vector store" — corpus size, query volume, something else? Right now that's left to judgment at step 1, not specified.
- What does the citation/verification discipline mean when there's no crawled source document, just the person's own writing — is "cite the line" still the right rule, or does it need to become "quote it verbatim" instead (as Polymetis Protocol already does)?
- Is Sachin's adoption-diagnosis kit (citation-required, no retrieval, single transcript) a third typology — call it read-only, no persistent corpus, single-document grounding — or a different category of kit entirely?
- Does `Adapts to:` need to branch by typology (different ingestion questions for read-only vs. read-write), or can one question set cover both at step 1–2?

## Future development
Rungs 2+ (a single file calling a model via API/MCP, an app, a hosted site) are unbuilt. This factory currently produces a spec, not a runnable pipeline; turning a read-only spec into an actual ingestion+retrieval script (as Watermentat already is, informally) would be the natural rung-2 stretch.
