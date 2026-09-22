# patwater — show and tell

## What I made
Job: turn a corpus and a retrieval goal into a scaffolded retrieval-augmented pipeline spec, picked from two generalized RAG patterns — read-only and read-write — instead of one fixed shape, ready for a coding agent to implement.
Exports: a typed retrieval-pipeline spec precise enough for a coding agent to implement directly — the intermediate a downstream build step or another factory consumes, not working code.
Factory: [../s2-factory/README.md](../s2-factory/README.md)

## What the critique found
not done — no S2-critique breakout or async-2 pass yet; LOG.md has no `blocker` or `v2:` lines to draw from.

## The bridge I tried
Target: participants/sachben91/s2-factory/ (factory — mirror-sync). Configuration: factory → factory. Did it work: yes, as a `check` — classified the drift between a canonical doc and its published mirror as "both ahead" per the target's own rule, and correctly refused to merge; `push`/`pull` weren't attempted since they're hard-wired to Substack's browser automation and don't port to a platform with a real write API.
Log: [../s3-bridges/sachben91.md](../s3-bridges/sachben91.md)

## What a bridge turned out to be
The bridge is a set of generalizable tools for building a RAG. This is still early and TBD how and if it's useful. I plan to run it as an experiment on some synthetic data to try and see how it can be useful.

## Which quadrant my practice was blind to on Monday
Playability — it was fun to work async with Sachin.

## One thing I'll take back to work
I intend to test this factory on perhaps my CA water mentat or maybe stand up something else. Another thought is to use a read-write evolving RAG for a communal wiki for logging protocols.
