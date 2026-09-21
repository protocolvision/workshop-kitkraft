---
name: rag-factory
description: Scaffolds a retrieval-augmented pipeline spec for a given corpus, picking from three RAG typologies (static read-only, simple personal-log retrieval, write-back retrieval where the answer joins the corpus), and hands off a filled spec another agent can implement. Use when someone wants to build a RAG bot, retrieval tool, or citation-grounded Q&A system over their own corpus.
---

## When to use
When someone wants to build a retrieval-augmented answering tool over a corpus they already have — documents, a personal log, a research library — and wants a pipeline shape to start from rather than a blank page.

## Steps
1. Ask about the corpus: what it is, roughly how big, how it's structured (flat files, a database, a single personal log), and whether it stays fixed or grows over time.
2. Ask the retrieval goal: what kind of question this should answer, and how strict the citation/verification requirement needs to be.
3. Pick a typology with the person, out loud, before writing anything:
   - **Type A** if the corpus is large and mostly static, and citation-required answers over it matter most.
   - **Type B** if it's a single personal log and low overhead matters more than scale.
   - **Type C** if the interaction itself (the answer, or a completed exercise) should be captured and become part of what future runs retrieve.
4. Fill in the pipeline spec for the chosen typology: ingestion steps, index/search shape, retrieval steps (including any reranking), the citation rule, and — for Type C only — the write-back step and the recency/dedup window that keeps it from just repeating itself.
5. Hand off the filled spec as the output. It is a spec precise enough for a coding agent to implement, not working code.

## Constraints
- Always name a citation or verification rule, even a loose one — never "answer freely."
- For Type C, name the write-back window explicitly (what counts as "already used" so the corpus doesn't collapse into repeats of itself).
- Never assume a vector store is required — Type B is deliberately simple, by design, not as a placeholder for Type A.

## Do not
- Do not write the ingestion, embedding, or reranking code itself — this factory produces a spec, not an implementation.
- Do not invent corpus details the person did not give you.
- Do not default to Type A when the person describes a personal log — that is a scale mismatch, not a safer choice.
