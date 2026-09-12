# Registration

Registration for AI Kitcraft runs through a Google Form owned by the facilitators. This folder is the record of that form: where it lives, what it asks, and how its answers feed the prep checklist. The form itself cannot live in git; this file is its mirror.

**Form (public link):** https://docs.google.com/forms/d/e/1FAIpQLScwbiUGZuQ8FBuxgXAd13IBKTPVkVXVd8_FDmEjCb5o01s-Og/viewform
**Landing page:** https://ai.protocolized.dev/kitcraft/ (source in [`../site/`](../site/))
**Responses:** the linked Google Sheet, visible to form editors only. Never commit the response sheet or any export of it to this public repo.

## Title and description (as published)

**AI Kitcraft Workshop Sign-Up**

> A hands-on workshop where AI-curious analysts and managers move from ad-hoc AI use to building their first reusable Kit.
>
> Most teams "adopt AI" by buying new, mostly untested software, then wait for a productivity jump that never shows up in the numbers. That missing productivity is the signature of the stage we are actually in: the Kit phase.
>
> Every general-purpose technology passes through it — the steam engine, the Model T, the PC. Loose components people tinker with, repurpose, and master by doing, long before anyone builds the firm-scale machinery that turns tinkering into measured output. Farmers ran corn shellers off jacked-up Model Ts for years before Ford watched them and built the tractor.
>
> The work that matters happens in undocumented local experiments. The organizations that pull ahead recognize the stage they are in and build a map to climb out of it. AI Kitcraft is the hands-on answer.
>
> Learn more about the workshop here

## Questions (snapshot 2026-09-11)

| # | Question | Type | Required | Feeds |
|---|---|---|---|---|
| 1 | Name | short text | yes | `participants/<name>/` folder name |
| 2 | Email | short text | yes | pre-work email (Sep 15) |
| 3 | Github Account (Please set-up at http://github.com/) | short text | yes | collaborator invite to `workshop-kitkraft`, sent as registrations arrive (from Sep 15); `<name>` for every file; push check (Sep 19) |
| 4 | Discord Handle (Please visit the Discord) | short text | no | #kitcraft access, triad posts |
| 5 | Organization and role | short text | yes | S1 ice-breaker, provisional triads |
| 6 | A recurring task you would build a Kit around | paragraph | yes | seed for `participants/<name>/inventory.md` (the Discover → Encode gate) |
| 7 | Tooling readiness | checkboxes | yes | who goes to Session 1A |

Options for question 7:
- I use AI chatbots regularly (e.g. ChatGPT)
- I have installed Claude Code (Pro+) or Codex
- I have a GitHub account

## How responses are used

1. **From Sep 15, as registrations arrive** — every registrant with a GitHub account (Q3) gets a collaborator invite with write access to `workshop-kitkraft`; the pre-work email goes out the same day. Private kits stay on the participant's machine with a stub in the repo; there is no private repo and no second invite. Registrants without a GitHub account are told in the pre-work email to create one, or they go through the by-hand path (`instructions/no-harness.md`: paste in #kitcraft, a facilitator commits).
2. **Sep 19** — push check: one commit from each registrant. Anyone without a push, or who did not tick "installed Claude Code or Codex" in Q7, is invited to Session 1A. Provisional triads are drafted from Q5 and Q6 the same day.
3. **Sep 21, S1 close** — the S1 inventories confirm or reshuffle the provisional triads; the S2 triads are pinned in #kitcraft by 16:45 UTC (S2 is at 20:00 the same day, so there is no overnight).

## Changing the form

Edit it in Google Forms, then update the table above and the snapshot date so this record stays true. If a question is added that affects who gets invited or paired, add a row to `workshop-dev/prep-checklist.md`.
