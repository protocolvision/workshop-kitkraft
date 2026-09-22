---
name: fair-price-justification
description: Drafts a written justification that the price being approved on a Canadian federal procurement or contracting decision is fair and reasonable, structured against the Treasury Board procurement instruments and the organization's own procurement policy. Use when someone must document why a price, quote, bid or contract amendment is acceptable, or needs the price-support section of a contract file or approval memo.
---

## When to use
The user has a decision to approve (contract, amendment, sole-source, quote selection) and must write down why the price is fair and reasonable, in a form that stands up to review and audit. Requires the parent repo, `fair-price-kit`, cloned alongside this folder.

## Sensitive-information gate (runs first, and again before output)
The user is expected to sanitize their inputs, but the agent is the second gate. Follow `fair-price-kit/gates/sensitive-info-gate.md` at three points: before using anything pasted or attached (stop and warn if it names project or site locations, vendors, bidders, consultants, contractors, individuals, contract/solicitation numbers or identifiable pricing — name the categories, not the values, and wait for the user's choice); before adding any row to a comparables table; and before writing or sharing any output (`python fair-price-kit/tools/scan_sensitive.py <files>`, exit code 1 is a stop).

## Inputs to collect (ask; never assume)
1. Organization and the instrument that governs it. If unknown, say so in the output.
2. The requirement: what is bought, quantity, period, competitive or non-competitive, any exception invoked.
3. The price: amount, basis of payment, taxes in/out.
4. Price evidence: competing bids, prior contracts, catalogue/market prices, rate benchmarks, cost breakdown.
5. Decision-maker(s) and delegated authority level.

## Steps
1. Restate the requirement and procurement approach in 2-3 sentences.
2. Identify which provisions apply, **only from `fair-price-kit/sources/register.csv`**. Cite by `id` and provision number. Rows marked UNVERIFIED must not be cited as requirements; list them under "to confirm".
3. Build the price analysis: list each comparison, its source and date, the unit basis, and any adjustment (inflation, volume, scope). Show arithmetic.
4. State the conclusion in one sentence and the reasoning behind it. Say plainly where evidence is thin.
5. List documentation the contract file should hold, cross-referenced to register rows.
6. Output using `fair-price-kit/templates/justification-template.md`. End with a **Gaps and assumptions** list.

## Constraints
- Every policy citation must exist in `fair-price-kit/sources/register.csv`. If a needed provision is not there, write "provision not in register: needs lookup", not a guess.
- Never fabricate prices, comparables, vendors, dates or clause numbers.
- Mark every figure supplied by the user as "user-supplied".
- Draft only. The decision-maker reviews and signs; the output must say "DRAFT for review by [role]".

## Do not
- Do not state that a policy requires something unless the register says so.
- Do not present a requirement as binding on an organization the instrument does not name, without noting the scope gap.
- Do not include personal data, or real vendor/pricing data, in anything shared outside the user's own private workspace.
- Do not skip the sensitive-information gate because the user says the content is fine.
- Do not give legal advice; flag legal questions for the appropriate contact.
