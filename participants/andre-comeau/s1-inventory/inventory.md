# andre-comeau

## Kits I use
### 1. fair-price-kit
- What it is: a skill (`SKILL.md`) plus a document-ingestion pipeline (Python, stdlib only) for Canadian federal procurement: drafting "fair and reasonable price" justifications grounded in a verified policy-source register, and turning real construction project documents into a sanitized, chunked, searchable knowledge base with stop rules for sensitive material.
- The job it does: turns a procurement decision into a citation-traceable draft justification a decision-maker can review and sign; separately, turns a folder of real tender/spec/drawing PDFs into sanitized, indexed text an assistant can search without reading everything.
- How often I use it: built and tested this week; not yet in regular production use.
- What I adapted: a two-gate privacy model (pattern-based sensitive-information scanning, then a human "would this still identify the project even sanitized" review); a public-data quality-flagging scheme so a flagged, non-comparable contract total is never used as a price comparable; automatic section detection for specs that have no heading lines, only running page headers (found on a real document, not anticipated in advance).
- Who else uses it: only me so far.
- Where it lives: a public GitHub repo (see `## Kit to convert`).

## Kit to convert
**fair-price-kit** — the price-justification skill (`s2-factory/` below converts this one; the ingestion pipeline is a separate, larger part of the same repo, referenced but not converted here).

## Related
- patwater (RAG Factory, `s2-factory/`) — generalizes read-only document ingestion and retrieval from two of patwater's own kits; my ingestion pipeline is an independently-built real-world case of the same shape (resumable stages, stable chunk ids, citation attached to each chunk, structured logging) and could be a third data point for that typology.
- facilitator/rafa (water-rate-row, PDF -> registry row) — the closest structural match in the repo to my own ingestion pipeline's "document -> structured row" step; Rafa's own bridge idea (bring a rate table from your own domain and see whether the row shape survives) fits a construction pay-item table directly.

## Posture
Overreliance
