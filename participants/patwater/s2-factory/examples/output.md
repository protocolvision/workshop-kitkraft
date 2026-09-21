Typology: **Read-only retrieval.** The corpus grows by external addition (new minutes filed monthly) but never changes because of the bot's own answers — no write-back. Re-ingestion is a scheduled maintenance step, not a per-answer effect.

## Pipeline spec

**Ingestion** (run once, then re-run monthly on new files only):
1. Crawl the minutes folder; skip PDFs already ingested (track by filename + hash).
2. Extract text per PDF, preserving page/agenda-item boundaries where the PDF has them.
3. Chunk by agenda item where detectable, else by page, with document name + date + page/item as metadata on every chunk.
4. Embed chunks into a vector store; store the metadata alongside each vector.

**Retrieval** (per question):
1. Expand the query against a small glossary of the district's recurring terms (project names, committee names) so "reservoir rehab" also matches however the minutes phrase it.
2. Semantic search the vector store for top-K chunks.
3. Rerank by recency (favor the most recent discussion of the same topic, since board decisions supersede earlier ones) — no authority weighting needed here, since every document is the same authoritative minutes.

**Answer generation:**
- Citation rule: strict. The answer must name the specific minutes document (by date/filename) and, where the chunk metadata has it, the agenda item — never just "the board discussed this at some point."
- If no chunk clears a relevance threshold, say so plainly rather than answering from general knowledge.

**Write-back:** none — this is read-only. New minutes are added to the corpus by the monthly re-ingestion step, not by anything the retrieval/answer step does.

**Open item for this run:** agenda-item boundaries won't be detectable in every PDF (some are scanned images with no structure) — chunking falls back to page-level for those, which weakens citation precision. Flagged, not solved, by this spec.
