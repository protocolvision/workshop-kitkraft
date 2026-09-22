# Bridge: kmr091 → patwater

Writer: kmr091 (only you edit this file)
Source: participants/kmr091/s2-factory/ (factory)
Target: participants/patwater/s2-factory/ (factory)
Kind: factory-factory
Interface used: rung 1 — file handoff: hand this folder, plus a description of your corpus, to your agent and run SKILL.md.

## What my agent needed from the target

My kit (policy research kit / policy developments briefing) relies on ad hoc web search each run, with no persistent or structured way to retrieve from public policy sources. I want RAG Factory to turn my corpus (public government sites, news outlets, and company announcement pages relevant to my policy area) and retrieval goal (find what's changed on a sub-topic since my baseline date) into a scaffolded retrieval-pipeline spec.

## What it found on its own

Read `patwater/s2-factory/README.md`, `SKILL.md`, and `examples/` (a board-meeting-minutes corpus, read-only, worked example). Both sides declared an `Interface:` line, so the target was used strictly through it: SKILL.md's steps, run on my corpus/goal instead of its own example.

Ran SKILL.md steps 1–5 on my task:

**Step 1–2 (corpus + goal):** corpus is public policy sources; goal is "what changed on a sub-topic since a baseline, sourced." Step 1 needed more than TASK gave — see unblock below.

**Step 3 (typology, picked out loud):** Read-only. Nothing about running the pipeline should change what it can retrieve later — new content arrives because gov.uk, Hansard, EUR-Lex and news sources publish it externally, not because of anything the briefing itself does. No write-back was asked for.

**Step 4 (filled spec):**

> **Typology: Read-only retrieval**, over a hybrid corpus — a small indexed core plus an unindexed live-search layer.
>
> **Ingestion** (the fixed core only — gov.uk AI-related pages, UK Parliament/Hansard, EUR-Lex/EC digital strategy pages, filtered to AI-related material):
> 1. Crawl each of the three sources; classify each page/item as AI-related or not before ingesting (an access-tier/relevance filter — the corpus is AI-specific, not general government content).
> 2. Extract text, preserving document/section boundaries (page for gov.uk, debate/answer for Hansard, article/section for EUR-Lex).
> 3. Chunk by logical unit, with source name, publication date and canonical URL as metadata on every chunk.
> 4. Derive a stable ID per item from its canonical URL (not filename); track by ID + content hash so re-crawls skip unchanged items.
> 5. Index into a vector store or direct search — small, AI-specific scope, so direct search may suffice; size once the actual page count is known.
> 6. Re-run on a schedule matching the baseline-date cadence already in use, to pick up new AI-related pages and debates.
>
> **Live-search layer** (news, company announcements — no fixed list): not ingested or indexed; queried fresh per run via web search, exactly as the current kit already does. No stable ID, no persistent store — each run's results are used once and not retained as searchable corpus.
>
> **Retrieval** (per run):
> 1. Glossary/acronym expansion for the policy area's known terms, so a search for e.g. "the AI bill" also matches however a source phrases it.
> 2. Query the indexed core for the sub-topic, filtered to items since the baseline date.
> 3. Query live web search for the same sub-topic and baseline window.
> 4. Combine both result sets; rerank by recency, and weigh core-source items (government/company) over general news commentary — matching the existing kit's Constraint that current outranks older, and government/company sources outrank secondary commentary.
>
> **Answer generation / citation rule:** strict — every headline in the briefing names its source, and core-source items link back to the canonical URL; matches the existing kit's constraint that every headline is sourced. If nothing clears a relevance/recency threshold, say so plainly and flag partial coverage, matching the kit's v2 fallback for thin coverage.
>
> **Write-back:** none — read-only. Briefings are produced fresh each run, not fed back into either the indexed core or the live-search layer.
>
> **Open item for this run:** the corpus is a hybrid — a small indexed core plus an unindexed live-search layer — which SKILL.md doesn't fully anticipate (it assumes one ingested corpus). Whether the live-search layer should eventually become its own lightweight index (so repeated runs on the same sub-topic don't re-search from scratch) is a decision for a later spec, not this one. Flagged, not solved, by this run.

**Step 5 (handoff):** the above is the spec — precise enough for a coding agent to implement, not working code, per the target's own Do-not.

## What a human had to supply (one line per unblock)

- Corpus size and structure: kmr091 supplied a small fixed core (gov.uk AI-related pages, UK Parliament/Hansard, EUR-Lex/EC digital strategy pages, AI-related only) plus an open-ended per-run news/company-announcement search with no fixed list — SKILL.md step 1 asks for this and TASK alone did not answer it.

## Did it work

Yes. The declared interface (rung 1, file handoff) was enough — the target's README + SKILL.md, run on my own corpus and goal instead of its own example, produced a filled pipeline spec without needing anything from the target's owner. The one thing missing (corpus size/structure) came from me, not from the target.

## What a bridge turned out to be (one paragraph, in your words — this is the data S4 reads first)

Forced precision on my kit. I never had to define whether my sources were a fixed list or open search. Using the factory made me answer that more specifically with the language behind it (simple I know, but useful for me personally) and I realised my corpus is actually two different things 1) a small fixed core plus 2) open search.

Log lines for this bridge go to `../LOG.md` (session S3, type progress / unblock / blocker / decision).
