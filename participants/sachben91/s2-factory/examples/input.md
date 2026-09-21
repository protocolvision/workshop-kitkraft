# Example input — three pieces, three drift states

Synthetic. Stories, post ids and hashes are invented; the shape is the real one.

## Repo — `src/content/articles/`

### `the-rule-of-the-second-door.md`
```yaml
---
title: The Rule of the Second Door
dek: Issue #14: Glass boardgames and the people who lose them.
author: A. Writer
publishDate: 2026-03-04
substackId: 148392011
---
```
Body, last paragraph, **edited in the repo this morning**:

> The second door was never locked. That was the rule, and like every rule in
> that house it was true in the way a map is true.

(Previously: "The second door was never locked, which was the rule.")

### `the-tessellated-hour.md`
```yaml
---
title: The Tessellated Hour
substackId: 148392044
---
```
Body unchanged in the repo since the last sync.

### `nine-kinds-of-weather.md`
```yaml
---
title: Nine Kinds of Weather
substackId: 148392098
---
```
Body, opening line, **edited in the repo**: "It rained in nine languages that
year." (Previously: "It rained in nine ways that year.")

## Sidecar — `data/mirror-sync.json`
```json
{
  "the-rule-of-the-second-door": { "id": 148392011, "hash": "a41f…9c2" },
  "the-tessellated-hour":        { "id": 148392044, "hash": "7bd0…41e" },
  "nine-kinds-of-weather":       { "id": 148392098, "hash": "cc19…8a5" }
}
```

## Live posts — fetched from `/api/v1/posts/by-id/<id>`
- **148392011** — body normalises to `a41f…9c2`. Unchanged since last sync.
- **148392044** — body normalises to `e902…77b`. Someone fixed "recieved" → "received" in the Substack editor two days ago.
- **148392098** — body normalises to `f38a…10d`. A subscribe widget was added mid-story on the platform side.

## Also true, and out of scope
- Twelve posts by one contributor are still unbylined; that team invitation is pending.
- Three stories carry an art-credit paragraph that should come out of the post body.
