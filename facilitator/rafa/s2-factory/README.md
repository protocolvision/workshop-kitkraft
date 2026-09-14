# water-rate-row — water-rate PDF → registry row

Job: turn one utility's published water-rate schedule (PDF) into registry rows, one per rate tier, in a fixed column order, ready to append to the water-rate registry.
For: Rafa (Water Data Strategy, https://npc.here.now/waterdatastrategy/); any agent asked to add a utility to the registry; S3 bridge target.
Inputs: the rate-schedule PDF (or its extracted text), the utility name, and the state. Comes from the utility's website or a rate ordinance.
Outputs: CSV rows in the shape of `examples/output.csv`, appended to the registry file the caller names. Units are copied from the PDF, never converted.
Exports: registry rows — one CSV row per rate tier, in the fixed column order of `examples/output.csv`. A downstream factory (the registry, a comparison tool, a map) consumes them without ever reading the PDF.
Interface: file handoff (rung one) — a CSV row shape (`examples/output.csv` header); no service, no key.
Adapts to: the rate schedule the person running it brings — which utility, which state, which adopted schedule — given as the PDF or its text when you run it. The steps and the row shape stay fixed; the source document changes every run. For S3, bring a rate table from your own domain (a fee schedule, a grant budget, a tariff) and see how far the row shape bends before it breaks.
Example run: see `examples/` — `input.md` is a synthetic rate schedule; `output.csv` is what the kit produced from it.
Not for: sewer, stormwater, or electricity rates; proposed (not adopted) schedules; comparing rates across utilities; converting units or currencies.
The example is synthetic; no real utility is named.
Bridge idea for S3: hand the kit a rate table from your own domain (a fee schedule, a grant budget, a tariff) and see whether the row shape survives. Where it does not is the bridge.
