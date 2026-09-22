## Ranked candidates

| Doc | Tier | Created | Verdict weight | Notes |
|---|---|---|---|---|
| `arrakis-world-bible` | 2 | 2031-02-15 | 1.0 (neutral) | names her as current proprietor |
| `npc-farrukh-kynes` | 2 | 2031-02-15 | 1.0 (neutral) | her full profile, written in present tense |
| `arrakis-session-log-001` | 3 | 2031-04-02 | 1.0 (neutral) | most recent evidence — she's shown actively forecasting |
| `arrakis-rumor-002` | 4 | 2031-04-04 | 1.0 (neutral) | directly relevant, directly contradicts the above |
| `arrakis-rumor-001` | 4 | 2031-04-03 | 1.0 (neutral) | relevant to her reliability, not to whether she's alive |

Tier 2 and Tier 3 evidence outranks the Tier 4 rumor despite the rumor's later date and high keyword relevance — recency does not override tier.

## Answer

Yes — by the corpus's tier-1/2 canon and its most recent tier-3 evidence, Farrukh Kynes is alive and personally runs the den.

- `arrakis-world-bible` (tier 2): *"The den is run by Farrukh Kynes, a planetologist who broke from the Imperial planetology corps rather than follow her more famous cousin's path of quiet infiltration."*
- `npc-farrukh-kynes` (tier 2): her full profile is written in the present tense throughout — *"She sells confidence intervals, not certainty."*
- `arrakis-session-log-001` (tier 3, 2031-04-02 — the most recent dated document touching this question): shows her directly and personally giving a Chalice Run crew a forecast, which is corroborating behavioral evidence, not just a standing description.

**One contradicting claim exists and should be flagged, not hidden.** `arrakis-rumor-002` (tier 4, unverified): *"You know she died, right? A decade back, caught in her own bad forecast... Whoever's behind the counter now learned the trade from her, sure, maybe even trained under her — but it isn't her."* This is the corpus's deliberately planted tier-4 contradiction. It has no support anywhere in tier 1–3, is directly contradicted by both the tier-2 profile and the tier-3 session log's later date, and should not be presented as a live possibility — it is included here only because a citation-required answer must surface a contradicting source rather than quietly discard it.

**Verdict?** Mark ✓ or ✗ on this answer (or on individual cited docs) to reweight future queries in this session.

## Simulated verdict and write-back

Marked ✓ on `npc-farrukh-kynes`, ✗ on `arrakis-rumor-002`.

`data/verdicts.json` after this run:
```json
{
  "npc-farrukh-kynes": {
    "weight": 1.5,
    "verdicts": [{"mark": "up", "at": "2031-04-15T00:00:00Z"}]
  },
  "arrakis-rumor-002": {
    "weight": 0.3,
    "verdicts": [{"mark": "down", "at": "2031-04-15T00:00:00Z"}]
  }
}
```

A later question that would have surfaced `arrakis-rumor-002` now ranks it lower still; one that touches Farrukh's profile now ranks `npc-farrukh-kynes` slightly higher than an otherwise-equal tier-2 competitor. Neither change is large enough to let the write-back weight alone flip tier ordering — per the kit's own constraint, tier still dominates.
