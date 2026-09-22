---
id: water-explorer-real-data-sources
doc_type: canon
line: water-explorer
canon_tier: 1
derived_from: []
created: 2031-02-01
summary: Citation ledger for the Water Explorer line — the real, retrievable sources its Tier-1 canon is built on, with retrieval dates, plus a factual credit line for the methodology's real-world source.
speculative: false
---

# Water Explorer — Real Data Sources

This document is the Tier-1 anchor for the Water Explorer line. Every other file in this line's `derived_from` traces back to it. It contains only verified, citable information, retrieved and dated below. Nothing in this file is fictional.

## Methodology source

**whatwatercosts.org** — a real, live tool providing standardized residential water rates for 4,000+ U.S. utilities serving 270M+ people. Retrieved 2026-09-22.

- Data collection: aggregates from the EPA's Safe Drinking Water Information System (SDWIS, ~50,000 U.S. community water systems), direct extraction from utility-published rate schedules (LLM-assisted parsing), U.S. Census Bureau American Community Survey income data (2022 5-year estimates), and EPA Water System Service Areas / Census TIGER/Line boundary files.
- Standardization: all rates normalized to 6,000 gallons/month for a residential customer on a 5/8"–3/4" meter, aligned to EPA affordability-analysis convention. Monthly cost includes base service charge plus volumetric tier charges; excludes taxes, sewer, and stormwater. Seasonal rates use peak-season figures; zone-based rates use the lowest zone; all billing frequencies converted to monthly equivalents.
- Quality assurance: deterministic validation (valid units, tier integrity, bill plausibility $10–$300) plus scored checks (pricing monotonicity, charge ranges, state-level comparison); entries must pass ≥80% of applicable checks before publication, and are labeled "flagged," "model estimate," or "human verified."
- Source: https://whatwatercosts.org and https://whatwatercosts.org/methodology.

**[PLACEHOLDER — verify before use]**: this line's premise refers to this methodology alongside "the Water Rate Protocol / OWRS (Open Water Rate Specification)" as a named formal standard. Only whatwatercosts.org's own published methodology (above) was independently confirmed during this corpus's generation. If a separately published OWRS specification document exists beyond what whatwatercosts.org itself documents, cite it here directly before this line is treated as fully sourced.

## Real current rate example — City of Stockton

**City of Stockton municipal water utility**, official rate page. Retrieved 2026-09-22. Rates effective July 1, 2025 (per a May 25, 2021 public hearing, with annual adjustments implemented through 2025).

- Monthly service charge by meter size: 1" or smaller — $39.33; 1.5" — $78.66; 2" — $125.86.
- Consumption charge, single-family tiered structure: Tier 1 (units 0–15) — $2.78/unit; Tier 2 (units 16 and over) — $3.32/unit. One unit = 748 gallons.
- Source: https://www.stocktonca.gov/services/water,_sewer___stormwater/water_rates___fee_estimator.php

## Real current rate example — California Water Service, Stockton district

**Cal Water, Stockton district** (a second, real water provider serving part of the same city, under CPUC jurisdiction). Retrieved 2026-09-22.

- The CPUC issued a final decision on Cal Water's 2024 Infrastructure Improvement Plan for the Stockton district on April 30, 2026, with rate adjustments expected to take effect July 1, 2026.
- **[PLACEHOLDER — verify against Cal Water's published tariff before use]**: exact post-adjustment dollar figures were not confirmed during this corpus's generation; only the fact and timing of the CPUC decision are confirmed.
- Source: https://www.calwater.com/iip/stk/ and https://www.calwater.com/rates/rates-and-tariffs/

## Credit

The Water Explorer line's methodology is built on the real, published work of **Maxwell**, who built and maintains `whatwatercosts.org`, the real tool this line's Tier-1 canon draws its real rate-standardization approach and figures from. This is a factual attribution, not a character: no quotes, dialogue, or biographical detail beyond this are invented for him anywhere in this corpus. See `easter-egg-the-maven.md` for a clearly separate, clearly fictional in-world tribute — never merged with this credit line.
