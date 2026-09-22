# The Conductor — corpus query tool

Source: a blend — read-only retrieval generalized from Watermentat/rag-factory (`../../README.md`), write-back-to-the-ranker typology proposed by sachben91's bridge (`../../../sachben91/s3-bridges/patwater.md`) and named for his own "Themed discovery agent" (his S1 inventory, kit #2).
Job: answer a question against the Vince's VR World synthetic corpus (`../corpus/`) with a tier-and-recency-ranked, citation-required answer, then take a ✓/✗ verdict on that answer and use it to reweight future queries in the same session — a read-only corpus with a ranker that learns from use.
For: anyone at the workshop with Claude Code, testing rag-factory's typology against the corpus built for exactly this purpose.
Inputs: a natural-language question about the corpus; optionally a ✓/✗ verdict on the previous answer's citations.
Outputs: an answer that cites specific document ids and quotes verbatim spans, flags any Tier-4 (rumor) source it had to consider and whether it could find no verified span for a contested claim, and a running verdict log.
Exports: a verdict log (`data/verdicts.json`) — doc-id → accumulated ✓/✗ weight — a structured intermediate another tool could read to see which parts of the corpus a person has already trusted or distrusted.
Interface: rung 1 — file handoff: hand this folder to your Claude Code agent and run `SKILL.md`. No API key needed beyond Claude Code itself — the agent is the retriever, the reranker, and the citation-checker; nothing here calls an external model or embedding service.
Adapts to: the question asked, and the accumulated verdicts in `data/verdicts.json` from prior questions in the same run — given at SKILL.md step 1 and updated at step 6, every run.
Example run: see `examples/` — `input.md` (a question that pits Tier-1 canon against a contradicting Tier-4 rumor) → `output.md` (the ranked, cited, verdict-prompting answer it produced).
Not for: questions outside the Vince's VR World corpus; treating an unverified rumor as fact — the tool's whole point is refusing to.

## The typology this implements

Neither of the two types already in `../../README.md` fits this tool on its own:

- **Not read-only** (rag-factory's first type): the ranker changes from use — a ✓/✗ verdict persists and reshapes the next query's ranking.
- **Not read-write** (rag-factory's second type): the *corpus* never changes — no answer, verdict, or session ever gets appended back into `../corpus/`. Only the ranker's weights change.

This is sachben91's proposed third shape, built for real: **read-only corpus, write-back to the ranker.**

## Ranking, in order

1. Keyword relevance — does the doc's title, summary, or body actually contain terms from the question.
2. Tier weight — canon_tier 1–2 (canon, world-bible, NPC profiles) strongly outranks tier 4 (rumor fragments); tier 3 (session logs) sits between, favoring the more recent of near-equal matches.
3. Recency — within a tier, a more recent `created` date wins on freshness, but recency alone must never let a tier-4 doc outrank a tier-1/2 doc citing the same fact.
4. Verdict weight — a prior ✓ on a doc boosts it for future queries; a prior ✗ suppresses it. Starts neutral for every doc on a fresh `data/verdicts.json`.

## The citation check

For every claim the answer makes, find the exact doc it came from and quote the supporting sentence verbatim — never paraphrase into a citation. If the best-matching doc for a claim is tier 4 and nothing in tier 1–3 corroborates it, say so explicitly rather than presenting it as settled — this is the fixture's designed failure mode (see `../corpus/*/rumor-fragment-*.md`), and the tool should find it every time, not just when convenient.
