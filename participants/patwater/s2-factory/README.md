# RAG Factory

Job: turn a corpus and a retrieval goal into a scaffolded retrieval-augmented pipeline spec, picked from a small typology of RAG patterns instead of one fixed shape, ready for a coding agent to implement.
For: anyone building a citation-grounded Q&A or retrieval tool over their own corpus — a research library, a personal log, a documents folder.
Inputs: a description of the corpus (what it is, roughly how big, how structured, whether it changes over time); the retrieval goal (what kind of question it should answer); how strict the citation/verification requirement needs to be.
Outputs: a filled pipeline spec — typology chosen, ingestion steps, index/search shape, retrieval steps, the citation rule, and (for the write-back typology) the write-back step and its recency/dedup window.
Exports: a typed retrieval-pipeline spec precise enough for a coding agent to implement directly — the intermediate a downstream build step or another factory consumes, not working code.
Interface: rung 1 — file handoff: hand this folder, plus a description of your corpus, to your agent and run SKILL.md.
Adapts to: the corpus the person brings (domain, size, structure, whether it's static or growing) and how strict their citation bar is; both given when SKILL.md step 1 and 2 ask.
Example run: see `examples/` — a synthetic corpus description as `input.md`, the filled pipeline spec as `output.md`.
Not for: writing the actual ingestion/embedding/reranking code (downstream of this factory); domains with no corpus at all.

## Typology (generalized from this author's own kits)

Built by generalizing two kits already in this repo — not invented from scratch:

- **Type A — static corpus, read-only retrieval.** Ingest once (crawl, extract, chunk), index into a vector store, retrieve with reranking, answer under a citation-required rule. The corpus never changes from use. Generalized from **Watermentat** (`## Kits I use` #6 in this author's S1 inventory): a multi-stage ingestion pipeline into a local vector store, glossary-expanded retrieval with authority/recency-weighted reranking, and citation-required answers over the California Water Library.
- **Type B — simple retrieval over a personal log.** No vector store: search a single append-only file directly for a matching or not-recently-used anchor (a verbatim quote or entry). Lower overhead, built for personal-log scale rather than a crawled corpus. Generalized from **Polymetis Protocol** (`deprecated/polymetis-protocol/`, this author's prior S2 factory): its anchor-search step over a Karpathy-style personal log.
- **Type C — write-back retrieval, where the answer changes the corpus.** Same shape as Type B, but every session's output (the answer, or a completed exercise) gets appended back into the corpus — so what future retrievals search is not fixed at ingestion time; it grows from the interactions themselves. Also generalized from **Polymetis Protocol**: its logging step appends each run's anchor-plus-answer back into the same log its next run will search, and its recent-use window is exactly the dedup/recency rule a write-back retriever needs.

A fourth candidate was raised and could not be confirmed: a "Sachin RAG skill" was mentioned as a source to generalize from, but nothing in this repo shows a retrieval/vector pipeline from Sachin — only `facilitator/sachin/s2-factory/` (adoption-diagnosis), which requires citing a transcript line per claim but has no corpus, index, or retrieval step. If that citation-required-without-retrieval shape belongs in this typology as its own type, that's one of the open questions below rather than something built in yet.

## Open questions to refine later
- Does Type C need its own reranking rule once the corpus mixes original material and past answers — should past answers be weighted differently from source entries?
- Where's the real boundary between Type A and Type B: corpus size, or whether a vector index exists at all? (A Type B corpus could grow a vector index later and still be "simple" in spirit.)
- What does the citation/verification discipline mean for Type B/C, where there's no crawled source document, just the person's own writing — is "cite the line" still the right rule, or does it need to become "quote it verbatim" instead (as Polymetis Protocol already does)?
- Is Sachin's adoption-diagnosis kit (citation-required, no retrieval, single transcript) actually a fourth typology — call it Type D, no persistent corpus, single-document grounding — or a different category of kit entirely?
- Does `Adapts to:` need to branch by typology (different ingestion questions for A vs. B/C), or can one question set cover all three at step 1–2?

## Future development
Rungs 2+ (a single file calling a model via API/MCP, an app, a hosted site) are unbuilt. This factory currently produces a spec, not a runnable pipeline; turning the Type A spec into an actual ingestion+retrieval script (as Watermentat already is, informally) would be the natural rung-2 stretch.
