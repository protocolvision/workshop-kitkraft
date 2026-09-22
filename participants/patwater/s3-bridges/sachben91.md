# Bridge: patwater → sachben91

Writer: patwater (only I edit this file)
Source: participants/patwater/s2-factory/ (factory — rag-factory)
Target: participants/sachben91/s2-factory/ (factory — mirror-sync)
Kind: factory-factory
Interface used: mirror-sync's declared interface — rung 1, file handoff (README then SKILL.md). Used the `check` step specifically: "no browser needed," per the kit's own SKILL.md — used it strictly as declared, no workaround.

**Flagged for update (2026-09-22).** This bridge currently covers the `check`-step drift finding only. Next: build a synthetic dataset for rag-factory, then run both concepts against it — rag-factory's own read-only/read-write typology and sachben91's proposed third typology (read-only corpus, write-back ranker), from his bridge into this kit. This file will be revised once that experiment has real results; not done yet.

## What my agent needed from the target
The one thing rag-factory cannot do at all: detect and report drift between a canonical document and a published mirror of it. rag-factory produces retrieval-pipeline specs; it has nothing to say about keeping two copies of the same content in sync. mirror-sync's `check` step — build a comparison, classify per piece as in sync / site ahead / platform ahead / both ahead — has no equivalent anywhere in my own factory.

Real target, not synthetic: `participants/patwater/s2-factory/deprecated/polymetis-protocol/README.md` (canonical, in this repo) against the public gist at https://gist.github.com/patwater/8c3e85c228f00b50511d7475b37d7f1d (the mirror). Both descend from the same source but were never round-tripped against each other.

## What it found on its own
- Field-owner map, decided before running `check` (mirror-sync: "do not invent the field-owner map at runtime"): repo owns the factory-schema fields (Job/For/Inputs/Outputs/etc.); gist owns the public-facing setup-guide rewrite. Declared by the participant, not invented mid-run.
- No sidecar exists (`data/mirror-sync.json`) — this pair has never been checked before. mirror-sync's SKILL.md has no explicit "first run, no stored baseline" case; `check` proceeded by comparing content directly rather than against a prior hash.
- Fetched the live gist (`gh gist view`) and read the repo file. Real, current drift, both directions:
  - **Gist has content the repo doesn't** — a full "Example rhetoric devices" section (12 devices), added directly to the gist, never carried back into the repo README.
  - **Repo has content the gist doesn't** — the deprecation banner ("Superseded by rag-factory...") added when Polymetis was deprecated. The gist still presents itself as the live, current way to set this up, with no note that it's superseded in the source repo.
  - Deeper finding, not just missing sections: the two documents aren't the same shape. The repo README follows the workshop's fixed factory schema; the gist is a rewritten setup guide organized around a different reader's needs (prerequisite → setup questions → core behavior → hard rules). mirror-sync's model assumes canonical and mirror are the same document rendered on two platforms — Markdown to HTML, structurally identical. This pair is two deliberate transformations of one kit, not a copy. That assumption doesn't hold here.
- Classification, by mirror-sync's own rule: **both ahead.** Site has content platform doesn't; platform has content site doesn't. Per SKILL.md: "both ahead — stop. Report it and hand it to the human; never merge." Correctly refused to auto-resolve either direction.

## What a human had to supply (one line per unblock)
- The field-owner-map decision — mirror-sync requires a person decide this, not the agent.
- The judgment that "both ahead" here isn't a bug to fix by syncing: the deprecation banner belongs in the repo either way; the rhetoric-devices list can stay gist-only since that copy is the one meant for outside readers. No push or pull was executed — the refusal to merge was the whole finding, not a step skipped.

## Did it work
Yes, as a `check`. `push`/`pull` were not attempted: those steps are written against Substack's specific browser-automation surface (a `ProseMirror` document instance, a share-center redirect as the success signal). A gist has a real write API (`gh gist edit`); none of that machinery applies or is needed. The declared interface's `check` step ported cleanly to a platform mirror-sync was never built for. Its `push`/`pull` steps didn't port, and arguably shouldn't have to — that's a boundary of the kit worth naming back to its author, not a bridge failure.

## What a bridge turned out to be (one paragraph, in your words — this is the data S4 reads first)
The bridge is a set of generalizable tools for building a RAG. This is still early and TBD how and if it's useful. I plan to run it as an experiment on some synthetic data to try and see how it can be useful.

## Applying his "read-only corpus, write-back ranker" typology — three places to test it
Sachben91's own bridge into rag-factory (`../../sachben91/s3-bridges/patwater.md`) proposed a third RAG shape his discovery agent occupies: the corpus doesn't change from use, but the ranker does, learning from ✓/✗ verdicts. Three candidate places to actually build and test that shape, not yet attempted — offered as a response to his open question, not as new work claimed done:

1. **C3PO for water institutional wisdom via industry associations.** Point a retrieval pipeline at WRF's and AWE's published reports rather than any single utility's documents, and ask cross-utility questions — what utilities have learned about conservation rate-design pitfalls, for instance. A good stress test for the citation-required rule specifically: the source material is scattered across PDFs and conference proceedings from multiple publishers, not one clean corpus, so it's a real test of whether "name the specific source" holds up against a messier, multi-publisher case instead of the cleaner single-source one rag-factory's worked example uses.
2. **rag-factory turned on the Bot Garden itself.** A read-only instance over the Bot Garden's ~260 ideas, reranking by recency and by how many other entries a given idea connects to. The Bot Garden already has a real example of the kind of synthesis this would automate by hand — a page that explicitly draws its questions from several other Bot Garden threads, stitched together manually. This would also be a live, indefinitely-growing testbed for the ingestion-approaches list's stable-ID and resumable-staging patterns, against a corpus that keeps adding to itself rather than one ingested once.
3. **A small, toy write-back-ranker prototype for a young reader.** A small corpus of stories with a simple thumbs-up/down loop that reshapes what gets surfaced next, based on what a specific young reader actually responds to. This is close to the cleanest possible test of "read-only corpus, write-back to the ranker," precisely because it's about as far from a job-posting fit-reranker as the pattern can get while still being the same underlying shape.

## Thanks
To sachben91, whose bridge into rag-factory named a typology this factory doesn't have (read-only corpus, write-back ranker) and whose real implementation — `fit_evidence`/`fit_evidence_verified`, shadow mode, catching a top-ranked hallucinated match on real data — is the reason the rhetoric-devices/deprecation-banner drift above was worth checking for real instead of synthetically.

Log lines for this bridge go to `../LOG.md` (session S3, type progress / unblock / blocker / decision).
