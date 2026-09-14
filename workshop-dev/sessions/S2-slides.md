# S2 — Factories · slides (60 min, Mon Sep 21, 20:00–21:00 UTC)

Timestamps are minutes from session start. Presenter on each heading (facilitation split: Rafa — first minute, build briefing, push check, rooms, the round, awareness check, Async 2, close; Sachin — shafts to wires, the two factories, what a factory is, the six moves and rung one, the comms layer). Rafa screen-shares throughout and keeps #workshop-kitkraft, recorder and repo; the presenter talks. Breakout groups per the S2 pin (`../discord-pins.md`), one per room, breakout-1 … breakout-5. Sources for every history claim in this deck: `../resources.md` §3a.

## Lede

"Recording is on, and here is where we are: the kit you picked three hours ago works because you are there to bend it, and by the end of this hour it has to run without you, fit whoever picks it up, and hand them something they can build on."

## Thesis

A kit becomes a factory when its author stops being a required input. To get there it has to do three things: run without you, fit whoever uses it, and hand off something other people can build on. Each of those comes from someone different — the steps come from you, the context comes from the person running it, the questions come from the factory itself, and the handoff comes from an output shaped for the next person — and if any one is missing you have something else: a kit that needs you, a widget that fits nobody, a service that needs you on call, or a tool that goes nowhere. None of this is new. The gains from electricity arrived only when factories stopped hanging one big motor on the old shafts and re-laid the floor around a motor per machine, and the gains from any new technology arrive the same way, when someone re-lays the floor around it. Most of us have put AI on the old shafts. Tonight each person re-lays one small floor, and then someone else's assistant finds out whether it holds.

## The argument

1. The kit you chose three hours ago works, but it works because you are there to bend it each time (slide 1).
2. A new technology dropped into an unchanged workflow changes almost nothing; the gains come when someone re-lays the floor around it, and that is where most AI use is stuck (slide 2).
3. Two factories already show what a re-laid floor looks like: Rao's hands Dixon's something it builds on without Rao in the room, and the brand kit is read by an assistant with no person in the loop and bent to a new world by Monstrous Times (slide 3).
4. Read those two through four properties and you get the definition: a factory runs without its author, bends to its user, and hands off something others can build on, and each property is supplied by someone different (slide 4).
5. Take any one away and you have a kit, a widget, a service or a tool instead — which is how you check what you built (slide 4).
6. The tensions between the properties were reconciled long ago: keep the steps fixed and let the user's context in at the last step, and connect factories by agreeing on an output rather than by making them alike (slide 4).
7. Getting there is six moves — externalize, split, name the output, declare, test cold, stabilize — and rung one is enough, because closing too early locks in whatever happened to be there (slide 5).
8. So you build it now, in twenty minutes: a README with three declared lines, a SKILL.md whose steps are the workstations and take the user's context when run, and one example produced cold — then someone else's assistant tests it (slide 6).

## Slides at a glance

| # | Min | Presenter | On screen | Purpose |
|---|---|---|---|---|
| 1 | 00 | Rafa → Sachin | Recording, S1 tally, sources | Land the room; name what a kit still needs |
| 2 | 02 | Sachin | Text only, group drive vs unit drive | Why the gains lag until the floor is re-laid |
| 3 | 04 | Sachin | Four-property table; brand kit page, then `llms.txt` | Two factories you can check against the properties |
| 4 | 08 | Sachin | Definition, who supplies what, missing-property table | Define factory; give the room a test for it |
| 5 | 12 | Sachin | Six moves and the ladder, as tables | The route from kit to factory; why rung one |
| 6 | 15 | Rafa / Sachin | The factory block on screen | Brief the build, start the clock |
| 7 | 35 | Rafa | The reading ring and the two tests | Send the rooms to test each other cold |
| 8 | 48 | Rafa | Sentence frame, text only | Collect what the other agent got wrong |
| 9 | 53 | Rafa | Four quadrant names, text only | Take the honest awareness tally |
| 10 | 56 | Rafa | Times and next steps, text only | Hand over Async 2 and S3 |

## Slide 1 — Where we are (00:00) (presenter: Rafa for the first minute; Sachin from the fourth bullet)
**On screen.** Headline "Where we are"; "Recording on · consent as pinned · breakouts may be recorded" · "S1 awareness check, read as counted" · "`<n>` sources chosen: `<o>` your own kits, `<f>` ours" · "Tonight: your kit stops needing you". Text only; Rafa fills the tally and the counts before the session from `workshop-dev/transcripts/S1/awareness-check.md` and the Async 1 `decision` lines.
**Say.** Rafa: "Recording is on and the consent is the one we read this afternoon; breakout rooms may be recorded too. Here is the S1 tally exactly as it was counted, and here is what you chose in Async 1 — `<o>` of you are converting your own kit and `<f>` are taking one of ours. Sachin." Sachin: "Three hours ago you picked a kit. It works, and it works because you are there to bend it every time you use it. Tonight we take you out of it, so it runs without you, fits whoever picks it up, and hands them something they can build on."
- Recording on; consent as pinned; breakouts may be recorded
- S1 awareness check: `<tally from workshop-dev/transcripts/S1/awareness-check.md>`, read as counted
- `<n>` sources chosen since S1 (`<o>` own kits, `<f>` facilitator kits)
- A kit works because its author re-bends it every time
- Tonight's move: take the author out as a required input
> Speaker note: Rafa confirms "Recording on" in #workshop-kitkraft first and does the first three bullets in one minute; Sachin takes the last two and goes straight into slide 2 at 02:00.

## Slide 2 — From shafts to wires (02:00) (presenter: Sachin)
**On screen.** Headline "From shafts to wires"; "Group drive: one big electric motor turning the old line shafts — almost nothing changed" · "Unit drive: a motor on every machine — the floor laid out by the work, and the gains arrived" · "Most AI use today: the big motor on the old shafts" · "Tonight: re-lay one small floor". Text only.
**Say.** "When factories first got electricity, they took out the steam engine, put in one big electric motor, and kept every belt and shaft exactly where it was. Almost nothing happened for years. The gains came when they put a small motor on each machine, because then you could lay the floor out around the work instead of around the shafts. Most of us have done the first thing with AI: we put it inside the workflow we already had. Turning your kit into a factory is the second thing, at the size of one person's practice. You are re-laying one small floor tonight."
- Group drive: the electric motor replaced the steam engine and drove the same line shafts; productivity barely moved
- Unit drive: a motor per machine, so the floor could follow the workflow rather than the power transmission; that is when the gains came
- The lag between a new technology and its gains is the time it takes to re-lay the floor
- AI in an unchanged workflow is the big motor on the old shafts; kit → factory is the unit-drive move for one practice
**Reference.** Devine (1983); David (1990) — `../resources.md` §3a
> Speaker note: two minutes, no numbers. The image to leave behind is the shafts coming down.

## Slide 3 — Two factories, read through four properties (04:00) (presenter: Sachin)
**On screen.** Headline "Two factories you can check"; the table below drawn in the deck. Visual: Rafa screen-shares the brand kit page for 30 seconds, then its `llms.txt`.

| | Rao → Dixon (books) | PI brand kit → Monstrous Times |
|---|---|---|
| Runs the same way each time | a manuscript factory making drafts with metadata | `brand.json`: the same palette, type and rules each time |
| Bends to its user | — | Monstrous Times copies it and bends it to its own world |
| Runs without its author | Dixon's factory picks the drafts up without Rao | an assistant reads `llms.txt`, no person in the loop |
| Hands off something to build on | drafts + metadata in a shared folder, not a book | the brand as one file other kits read |

**Say.** "Two factories that already exist, and I want you to read them through four questions. Rao's manuscript factory never made a book. It made drafts with metadata attached and left them in a shared folder, and Jenna Dixon's production factory picked them up from there without Rao having to explain anything. That runs without its author and hands off something to build on, and it connects two factories by agreeing on an output, not by making them alike. Now the brand kit. Rafa, put the page up — and now the `llms.txt` behind it. An assistant reads that one file and has the brand, with nobody in the middle. And Monstrous Times took the kit, copied it, and bent it to its own world, which is the property the book case does not show. One more thing: Rao and Dixon are not coders. What held them up was never machinery; it was agreeing how one practice meets another."
- Rao → Dixon: an output (drafts + metadata) consumed unchanged by another factory, through a shared folder and a metadata server; no author in the loop
- The brand kit: `llms.txt` → `brand.json`, read by an assistant with no person in the loop; TITLES → two narrow models → brand kit → Monstrous Times, with Jamverse as the fiction-side sibling
- Monstrous Times bends the kit to a new user by copying and adapting it: that is forking, and S2's build is a fork
- The scarce thing is coordination, not machinery: the part holding adoption back is the meeting point between two practices, not model capability — which is why two non-coders pulled it off
- One observed form of a bridge; whether it is *the* form is what tomorrow finds out
**Reference.** [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory) · [Protocol Institute Brand Kit](https://npc.here.now/protocolintstitutebrandkit/) · Chandler (1977); Hughes (1983) — `../resources.md` §3a
> Speaker note: Rafa drops the essay link in #workshop-kitkraft; brand kit page 30 s, then `llms.txt`. Do not explain the image models. Leave the "—" in the table empty on purpose.

## Slide 4 — What a factory is (08:00) (presenter: Sachin)
**On screen.** Headline "A factory runs without its author, bends to its user, and hands off something others can build on"; four lines, "Reproduction — from the author: the steps, written down" · "Personalization — from the user: their data, constraints and context, when they run it" · "Independence — from the factory: it asks for what it needs" · "Composability — from the output: shaped so another factory can use it"; then the table; footer "Autonomy is a dial: fewer questions, more risk of losing the fit · a job shop, not an assembly line".

| Missing | What you actually have |
|---|---|
| Reproduction | A kit. It works because its author re-bends it every time. |
| Personalization | A widget. Same output for everyone, fitting nobody's context. |
| Independence from the author | A service. It works, as long as the author is on call. |
| Intermediates | A tool. Useful, but a dead end nobody can build on. |

**Say.** "Here is the definition: a factory is a kit that runs without its author, bends to its user, and hands off something others can build on. Notice that each part comes from someone different. The steps come from you, written down so they give the same result each time. The context comes from the person running it — their data, their constraints. Not needing you comes from the factory itself asking for what it needs, instead of you explaining. And being buildable-on comes from the output. Take one away and look at the table: you have a kit, a widget, a service or a tool. Use it on your own kit tonight. Two tensions, both solved long ago. Keeping the steps fixed and fitting each user sounds contradictory, but HP built every printer the same and only added the right power supply and manual at the last step. Your SKILL.md steps stay fixed and the user's context comes in when they run it. And there are two ways to build on someone's factory: copy it and bend it, which is what you do tonight, or use its output unchanged, which is tomorrow. Between the steps and the context sits a dial: how much the factory decides by itself. Turn it up and it asks less, but it can stop fitting. And the picture is a job shop, not an assembly line."
- Four properties, four suppliers: reproduction (author) · personalization (user) · independence (the factory asks) · composability (the output, or intermediate)
- Autonomy sits between the steps and the user's context as a dial: more of it means fewer questions and a greater risk of losing the fit
- Postponement: keep the core standard, push the customization to the last step, supplied at the edge — HP localized identical printers at regional distribution centres. Personalization is reproduction with the differences moved to the end
- Fork vs compose: forking copies and bends (tonight: a facilitator kit adapted to your organization); composing uses the output unchanged (S3). Unix tools compose because they agree on one output, a stream of text, not because they resemble each other — "expect the output of every program to become the input to another, as yet unknown, program"
- The destination is Rao's flexible job shop; flexible specialization never lost to mass production. Nobody here is building River Rouge
**Reference.** Feitzinger & Lee (1997); Pine (1993); McIlroy et al. (1978); Sabel & Zeitlin (1985) — `../resources.md` §3a · [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory)
> Speaker note: four minutes. The table is the slide; say the definition twice. If time is short, drop the McIlroy quote and the River Rouge line aloud; they stay on the bullets. The question that always comes: for a document kit, the document is the output and the README is the way in.

## Slide 5 — Six moves, and why rung one (12:00) (presenter: Sachin; hands to Rafa at 15:00)
**On screen.** Headline "Six moves from kit to factory"; the two tables drawn in the deck; footer "Tonight is rung one, done properly."

| Move | What you do tonight | Where it comes from |
|---|---|---|
| 1 Externalize | write down what you actually do | Taylor's instruction card |
| 2 Split | each step becomes a workstation in SKILL.md | Smith's pin factory |
| 3 Name the output | the intermediate that leaves: `Exports:` | Chandler on throughput |
| 4 Declare | publish what others may depend on: `Exports:`, `Interface:`, `Adapts to:` | the gauge behind interchangeable parts |
| 5 Test cold | someone else's assistant runs it without you | tonight's critique |
| 6 Stabilize | hold the way in still; keep the inside free to change | Parnas on hiding what may change |

| Rung | The way in | Standard |
|---|---|---|
| 1 | README + SKILL.md handed to an assistant, plus one example | Agent Skills |
| 2 | A static page saying how to call it | — |
| 3 | A machine door any assistant can call | MCP |
| 4 | One factory calling another, nobody in between | A2A |

**Say.** "How do you get from kit to factory? Six moves, and every one has a long history. Write down what you actually do, including the bits you do without thinking. Split it into steps, each one a workstation. Name what leaves at the end — that is the thing someone else builds on. Declare it, which just means saying in public what other people can rely on: what it exports, how to call it, and what it adapts to. Then let someone else's assistant run it without you, and after that, hold that front door still while you keep changing the inside. The ladder on the right is how much effort the front door takes, not how good you are. Tonight everyone is on rung one, and that is the right rung: standards that close early lock in whatever happened to be there, which is how we all ended up typing on QWERTY. Declare the smallest way in and keep the inside free. Rafa."
- The six moves: externalize · split · name the output · declare · test cold · stabilize; tonight's block follows them in that order
- Externalize is the hard one: most of what you know you do not know you know
- Declare = three lines in the README: `Exports:` (the intermediate), `Interface:` (the rung and how to call it), `Adapts to:` (the context the user brings, and where it goes in). The visible rules are few; everything else stays hidden and free to change
- The ladder is effort, not virtue; never claim a rung you did not build
- Do not close too early: early standardization locks in what happened to be there. Rung one declares the smallest way in
**Reference.** Taylor (1911); Polanyi (1966); Nonaka & Takeuchi (1995); Smith (1776); Hounshell (1984); Baldwin & Clark (2000); Parnas (1972); Bijker (1995); David (1985) — `../resources.md` §3a · [Agent Skills specification](https://agentskills.io/specification)
> Speaker note: name each source in two words at most; the table does the work. Hand to Rafa at 15:00 sharp.

## Slide 6 — Convert a kit into a factory (15:00 → 35:00) (presenter: Rafa; comms layer at 30:00: Sachin)
**On screen.** Headline "Convert your kit — 20 minutes"; "Paste `instructions/S2-factory.md` at the clone root and say 'do this'" · "`README.md`: `Exports:` · `Interface:` · `Adapts to:`" · "`SKILL.md`: the steps are the workstations, and they take the user's context when run" · "`examples/input.*` + `output.*`, produced cold" · "30:00 comms · 33:00 push". Visual: Rafa screen-shares the block in `instructions/S2-factory.md`, with `PARTICIPANT_TEMPLATE/kit/` open alongside it.
**Say.** Rafa: "Your turn. Open your harness at the top of the clone, paste the block I am pinning now and say 'do this'. It walks the six moves in order, it will ask which kit you chose in Async 1, and it will not invent answers for you. When I call push, four things have to exist: a README with three lines — what this exports, how to call it, and what it adapts to — a SKILL.md whose numbered steps are the workstations and ask for the user's context instead of assuming yours, one example your assistant produced cold from that SKILL.md alone, and all of it inside `participants/<you>/kit/`. Time calls at five and ten minutes; everything in this repo is public, so keep anything sensitive on your own machine." Sachin at 30:00: "Three rules before you push: cut every sentence that adds nothing, take out the AI tells — the hedges, the triple adjectives, the summary of what you just said — and rewrite the README's Job line in your own words."
- Take the kit you chose in Async 1 — your own (`## Kit` task or `## Built / use` item) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and make it a factory, inside `participants/<you>/kit/`
- The block follows the six moves: externalize and split into `SKILL.md` steps (workstations) · name the output · declare it in the README · test cold with the example
- `README.md`: `Exports:` (the intermediate) · `Interface:` (the rung and how to call it) · `Adapts to:` (the context the person running it brings — data, constraints or setup — and where it goes in)
- `SKILL.md`: steps take the user's context at run time rather than hard-coding the author's; `description` makes it trigger
- Facilitator kit = a fork: copied into your folder, adapted to your organization and data, `Source:` on the README's first line
- Rungs 2+ only after rung 1 works; **30:00, Sachin — comms layer**; push at 33:00, unfinished is fine, absent is not
**Reference.** [Agent Skills specification](https://agentskills.io/specification) · [Chaudhary, "How to Turn Your AI Into a World-Class Designer"](https://lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world)
> Speaker note: Rafa briefs and calls 5, 10 min; Sachin takes over at 15 for the comms rules; Rafa calls "push" at 18. Commit is `S2: <name>: factory from <source>`.

## Slide 7 — Breakout group critique (35:00 → 48:00, breakouts) (presenter: Rafa)
**On screen.** Headline "Test each other cold — 13 minutes"; the ring drawn as a small table in the deck; under it "Your assistant gets the README and SKILL.md, nothing else" · "Test 1, runs without its author: can it run the example without asking the owner anything?" · "Test 2, fits its user: give it one line of *your* context through `Adapts to:` — does the result suit you, or the owner?" · "Three lines per test; owners log every failure as a `blocker` line". Visual: Rafa screen-shares the block in `instructions/S2-critique.md` and the pinned groups post.

| In a group of | Who reads whom |
|---|---|
| 3 or 4 | A reads B · B reads C · the last reads A |
| 2 | the pair swaps |

**Say.** "Rooms now. Inside your group you read in a ring, and the pin says who reads whom. Your assistant gets two files, the README and the SKILL.md, and nothing else, and it runs two tests. First: can it run the example without asking the owner a single thing? Second: give it one line about your own situation, through the README's `Adapts to:` line, and see whether what comes out suits you or still suits the owner. Three lines on each. Read them aloud to the owner, and the owner types nothing back except `blocker` lines. Reconvene here at 48."
- Ring inside each breakout group (2–4), from the pin: A reads B · B reads C · … · the last reads A; a pair swaps
- Groups and rooms as pinned in #workshop-kitkraft (the S2 groups post is the only roster)
- Test 1, independence: README + SKILL.md only, run the example, no questions to the owner; ≤3 lines on where it had to guess or would have asked
- Test 2, fit: one line of the reader's own context supplied through `Adapts to:`; ≤3 lines on whether the output fits the reader or still fits the owner
- Owner logs every failure from either test as a `blocker` line; no explaining out loud until it is in the kit
**Reference.** Block: `instructions/S2-critique.md` (pinned as a link); the text is the facilitator
> Speaker note: Rafa: `/stop`, post "rooms open", move people. Facilitators split the rooms between them and swap at minute 6. An absent member makes a pair.

## Slide 8 — What the other agent got wrong (48:00) (presenter: Rafa)
**On screen.** Headline "What the other agent got wrong about my kit"; "One sentence each, in the pinned order" · "About 40 seconds" · "Expect: it stalled where you know something you never wrote down, or it fitted you instead of them" · "That is the kit's next line, not a bug". Text only.
**Say.** "Recorder is back on. One sentence each, in the order I have pinned, about forty seconds: what did the other agent get wrong about your kit? I will predict most of the answers. Either it stalled at the place where you know something you never wrote down, or it ran fine and produced something that suited you and not the person using it. Both are the next line of your kit, not a bug in it."
- Round, one sentence each, in the pinned order (≈40 s each)
- Captured into `workshop-dev/transcripts/S2/awareness-check.md` alongside the check below
- Expected: independence fails where your knowledge was tacit; fit fails where your own context was baked into the steps
> Speaker note: Rafa puts the recorder back on before the first speaker; wait for the live line.

## Slide 9 — Awareness check (53:00) (presenter: Rafa)
**On screen.** Headline "Which quadrant did this hour expand?"; the four names, one per line: "Precommodification" · "Traces" · "Anchored in reality" · "Playability"; footer "One word each, in the order posted."
**Say.** "Same question as this afternoon. Which of the four did this hour expand for you — precommodification, traces, anchored in reality, or playability? One word each, in the order I am posting now. There is no right answer and I am not going to correct anybody."
- Which quadrant did this hour expand? Precommodification · Traces · Anchored in reality · Playability
- One word each; tallied in #workshop-kitkraft
**Reference.** [Ashcroft, Expanding Awareness](https://expandingawareness.org/)
> Speaker note: do not lead the answer; the S4 profile only means something if this is honest.

## Slide 10 — Async 2, overnight (56:00) (presenter: Rafa)
**On screen.** Headline "Before tomorrow"; "Paste `instructions/async-2.md`: one fix per `blocker` line, from either test, one `progress` line each, push v2" · "Async tonight: push your factory; your reader's report comes back in #workshop-kitkraft" · "S3 groups posted at 09:00 UTC" · "Tomorrow 15:30 UTC: bridges". Text only; Rafa posts the same text in #workshop-kitkraft.
**Say.** "Overnight is small and specific: paste the async block and fix what your group's agent found — one fix per blocker line, whether it could not run without you or did not fit the reader — re-run the example cold, and push a v2 with a `progress` line saying what changed. If you are doing tonight async, push your factory anyway and your assigned reader's agent will test it and post the report in the channel for you. We are back at 15:30 UTC tomorrow for bridges, where you use someone's output unchanged instead of copying it; bring the kit you did not critique in mind."
- Fix what your breakout group's agent found, from both tests: paste `instructions/async-2.md`. Push v2 with a `progress` line saying what changed
- Anyone async tonight: push your factory (`instructions/S2-factory.md`); your assigned reader's agent tests it and posts the report in #workshop-kitkraft; log the blockers, fix
- S3 breakout groups (rotated) posted in #workshop-kitkraft at 09:00 UTC; alternative targets in `facilitator/README.md`
- Tomorrow 15:30 UTC: bridges — composing, not forking. Bring the kit you did *not* critique in mind
**Reference.** [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory)
> Speaker note: Rafa posts it verbatim to #workshop-kitkraft at 20:58 (the async post in `../discord-pins.md`); `/stop` at 21:00.
