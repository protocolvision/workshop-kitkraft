---
name: rag-factory
description: Scaffolds a retrieval-augmented pipeline spec for a given corpus, picking between two generalized RAG typologies (read-only retrieval, and read-write retrieval where the answer joins the corpus), and hands off a filled spec another agent can implement. Use when someone wants to build a RAG bot, retrieval tool, or citation-grounded Q&A system over their own corpus.
---

## When to use
When someone wants to build a retrieval-augmented answering tool over a corpus they already have — documents, a personal log, a research library — and wants a pipeline shape to start from rather than a blank page.

## Steps
1. Ask about the corpus: what it is, roughly how big, how it's structured (flat files, a database, a single personal log), and whether it stays fixed or grows over time.
2. Ask the retrieval goal: what kind of question this should answer, and how strict the citation/verification requirement needs to be.
3. Pick a typology with the person, out loud, before writing anything:
   - **Read-only** if nothing about running the pipeline should change what it can retrieve later.
   - **Read-write** if the interaction itself (the answer, or a completed exercise) should be captured and become part of what future runs retrieve.
   Corpus size and structure (a crawled document set vs. a single flat file) decide the index/search shape within whichever typology is picked — they are not a third typology.
4. Fill in the pipeline spec for the chosen typology: ingestion steps (drawing on README's "Ingestion pipeline approaches" — stable IDs, resumable stages, structured per-item logging, access-tier classification, and the rest — the same list applies regardless of typology), index/search shape (vector store vs. direct search, sized to the corpus), retrieval steps (including any reranking), the citation rule, and — for read-write only — the write-back step and the recency/dedup window that keeps it from just repeating itself.
5. Hand off the filled spec as the output. It is a spec precise enough for a coding agent to implement, not working code.

## Constraints
- Always name a citation or verification rule, even a loose one — never "answer freely."
- For read-write, name the write-back window explicitly (what counts as "already used" so the corpus doesn't collapse into repeats of itself).
- Never assume a vector store is required — a small, direct-search corpus is still read-only, not a lesser version of the vector-store case.

## Do not
- Do not write the ingestion, embedding, or reranking code itself — this factory produces a spec, not an implementation.
- Do not invent corpus details the person did not give you.
- Do not treat corpus size or structure as deciding read-only vs. read-write — that choice is about whether interactions feed back in, nothing else.
