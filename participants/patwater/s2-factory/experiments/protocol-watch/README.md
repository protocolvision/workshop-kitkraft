# Protocol Watcher: deploying rag-factory on a real corpus

This is the first time rag-factory (`../../README.md`) has been run against a real corpus instead of the synthetic Stockton fixture. The corpus is Patrick's **Protocol Watching DB** in Notion: field notes on protocols spotted in the wild, kept as part of the Summer of Protocols practice. This file describes the tool and how the factory shaped it. The tool itself, and the data it's built from, stay in a private workspace, because the DB mixes household notes with work observations and this repo is public.

## What the tool does
It answers questions about the DB and helps you navigate it. Examples: "which protocols are zombified?", "anything on emergency alerts?", "show me the Atomic + Budding ones", "what's related to this entry?". Answers quote entries verbatim and flag how far each claim can be trusted. The ✓/✗ verdicts you give reweight future queries.

It comes in two forms:
- **A Claude Code skill (rung 1).** It refreshes a snapshot of the DB through the Notion MCP connector, ranks and cites, and keeps a verdict log. No API key is needed beyond Claude Code.
- **A private Artifact page (rung 3).** No model call; retrieval is extractive only. It offers a clickable scale × lifecycle map, keyword search, "see also" links between entries, and ✓/✗ buttons that rerank live.

## How rag-factory was applied

**Step 1: corpus.** One Notion database of 41 entries (as of 2026-09-23). The properties are Name, Description, Health (free text), Lifecycle (Budding / Juvenile / Mature / Dead / fossilized), Scale (Atomic / Meso / Systemic), plus a page body. Most entries are a few sentences; the largest is about 3k characters. It grows by a few entries a month.

**Step 2: retrieval goal.** Understanding and navigation, not only Q&A. The citation bar is strict for factual claims (verbatim quote plus entry plus provenance) and loose for navigation lists.

**Step 3: typology.** *Read-only corpus, write-back ranker.* That's sachben91's third shape, first built as the Conductor (`../conductor-query/`). Plain read-only and read-write were both on the table. Read-write would have meant the bot filing sightings or synthesis pages back to Notion; it was declined. Verdicts change the ranking; only Patrick changes the corpus.

**Step 4: pipeline.**
- *Ingestion:* resumable stages (list rows → fetch pages → clean → one snapshot file per page → build). The stable ID is the Notion page id, never the title. Signed file URLs are stripped at ingest because they expire and carry tokens.
- *Index/search:* direct search over a JSON array, with no vector store, since 41 entries don't need one. Fields are weighted name > health/lifecycle > description > body, with prefix matching. A tf-idf cosine precomputes three "see also" links per entry.
- *Glossary:* built from the corpus's own Health vocabulary rather than computed. For example, *zombified* also matches decrepit, fossilized, dead, sludge and Kafka-esque.
- *Ranking:* keyword × provenance tier × recency × verdict weight, kept as separate multipliers.
- *Write-back:* verdicts only. ✓ multiplies an entry's weight by 1.5 (cap 2.0); ✗ multiplies it by 0.5 (floor 0.3). History is append-only. Nothing is written to Notion.

## The main adaptation: provenance tiers
The Conductor's tiers encoded *canon authority* (canon > session log > rumor). In a personal log that axis doesn't exist, but a sharper one does: **where the text came from.**

| tier | label | weight | share of corpus |
|---|---|---|---|
| 1 | field: first-hand observation | 1.0 | 16 |
| 2 | sourced: cites an article, podcast, report, standard | 0.9 | 9 |
| 3 | ai-assisted: contains model-written text | 0.6 | 12 |
| 4 | stub: too thin to answer from | 0.35 | 4 |

In this corpus the riskiest factual claims aren't rumors. They're AI-written explainers pasted into notes: decoded packaging lot codes, technology adoption timelines, radio frequencies. Tier 3 plays the role that tier-4 rumor played in the Conductor. Tiers come from a marker heuristic plus a hand-override file for model-written text that carries no marker.

## What running it showed
- **The example query "Which protocols are zombified?"** surfaced seven entries. Nearly all are public-sector plumbing (water reporting, internal government mail, job-classification audits, developer permitting, procurement change orders, a printer-update email blast), and all are Mature or later. It also pointed to a related entry that describes the standard public-meeting agenda as "basically a living fossil".
- **Found and fixed on the first run:** the Lifecycle field wasn't searchable, so an entry literally tagged *fossilized* was missed.
- **A real limit of per-entry tiers:** one entry's body is model-drafted, but its Health line (the line that actually says "zombified") is the owner's own judgment. The tier penalty sank it to #6. A ✓ verdict corrects it, which is the write-back ranker doing its job, but it points to per-field tiers.
- **Navigation turned out as valuable as answers:** stubs surface as prompts for what to write up next.

## Open questions fed back to rag-factory
- Does text the owner commissioned and curated from a model count as tier 3 or tier 2? This is the factory's "what does citation mean for your own writing" question, one level down: *your own AI-assisted writing*.
- Should tiers be per-field (a claim versus a judgment) rather than per-entry? A bicorder reading is a judgment, not a fact claim.
- Should verdicts eventually live in Notion as a property? That would turn this into read-write. Hold off until the verdict log shows the signal is stable.
- Is "gap finding" (surfacing stubs worth writing up) a separate kit rather than a tier?
