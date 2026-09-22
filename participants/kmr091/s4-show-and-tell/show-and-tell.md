# kmr091 — show and tell

## What I made
Job: Gives me a daily, sourced read on what's changed in a policy area, and a view on whether a proposed course of action would work.
Exports: a policy developments briefing — key headlines on a sub-topic since a baseline, each with its source named, plus, if a development or proposal was given, a first-take view on it — ending with implications for real-time policy decisions.
Factory: [../s2-factory/README.md](../s2-factory/README.md)

## What the critique found
Independence: Step 2 had no fallback for unavailable or thin search, and "current public sources" was left undefined — no recency cutoff, source weighting, or stopping signal for the search.
Fit: `Adapts to:` named the context to supply but didn't say what changes for a policy area unlike the example (non-AI, non-UK, slower-moving or sparser coverage).
What changed in v2: SKILL.md step 2 now has a search-unavailable/thin fallback, Constraints now define "current," source weighting and a stopping signal, and README `Adapts to:` now says the process holds for any policy area and names what changes on a slower-moving topic.

## The bridge I tried
Target: participants/patwater/s2-factory/. Configuration: factory → factory. Did it work: yes — the declared interface (rung 1, file handoff) was enough; RAG Factory's README + SKILL.md, run cold on my own corpus and goal, produced a filled pipeline spec without needing anything from patwater.
Log: [../s3-bridges/patwater.md](../s3-bridges/patwater.md)

## What a bridge turned out to be
Forced precision on my kit. I never had to define whether my sources were a fixed list or open search. Using the factory made me answer that more specifically with the language behind it (simple I know, but useful for me personally) and I realised my corpus is actually two different things 1) a small fixed core plus 2) open search.

## Which quadrant my practice was blind to on Monday
traces — my kit was built entirely solo, I never looked at what other people's AI-assisted work was leaving behind in shared places, until this workshop's repo structure forced me

## One thing I'll take back to work
Write even a basic process down — it reveals what AI can help with, and where it could link into someone else's factory to improve your own work; there's a collaboration point here, turning personal AI usage into shared, improved forms.
