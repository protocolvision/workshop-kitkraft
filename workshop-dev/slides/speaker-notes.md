# AI Kitcraft — speaker notes

57 slides. Generated from the deck; the deck is the source of truth.

## 01 · AI Kitcraft

Objective: Open the workshop and set the frame: two days, four sessions, one public repo.

Welcome. This is AI Kitcraft, one of five workshops running in parallel at the Symposium. For the next two days we are not adopting a tool — we are writing down how you already work with AI, until someone else, or someone else's assistant, can pick it up and run it without asking you. Three words carry the whole workshop: kit, factory, bridge. Everything we make goes in one public repository, and the link is on the screen.

## 02 · About the Protocol Institute

*Welcome · Introduction*

Objective: Introduce the facilitators and where the Institute’s work sits.

Two of us are running this. I am Sachin — I write Summer Lightning, and the precommodification argument you will hear in the next half hour is mine. Rafa built the Institute brand kit and the water-rate factory that anyone can bridge to on Tuesday, and the four-quadrant lens we use at the end of every hour is his. Between us we cover the Protocol Institute's research side and Protocols for Business, the SIG where this continues fortnightly after the Symposium. Everything lives in the repo on screen: the glossary is one file, and if a term I use is not in it, tell me and it goes in.

Source: Repo github.com/protocolvision/workshop-kitkraft · voice #kafka · text #workshop-kitkraft · glossary at slides/glossary.md

## 03 · Kits

Objective: Welcome everyone and explain that this session is about how each person uses AI.

Welcome. For the next two days we are not adopting a tool — we are writing down how you already work with AI, until someone else, or someone else's AI assistant, can pick it up and run it without asking you. Four sessions of an hour, with work in between, and one public repository that holds everything we make. That is the one rule I will keep repeating: whatever you make lands in the repo.

## 04 · Over two days, we will share how we work with AI and build bridges.

*Session 1 · Kits · Overview*

Objective: Explain the two days: share how you work with AI, then connect with others.

Four sessions of an hour, with work in between, and one public repository that holds everything we make. That is the one rule I will keep repeating: whatever you make lands in the repo.

Source: Sessions run 60 minutes · async work between

## 05 · Before we start... testing 1,2,3...

*Session 1 · Kits · Ground rules*

Objective: Explain the workshop's recording policy.

Before anything else, the consent notice, and I will read it as it is pinned. The short version: the voice channel and the text channel are recorded and transcribed with your names on them, and the transcripts go into the public repo. You can ask either of us to take any line out at any point, and you do not have to give a reason. If you would rather be off the transcript, say so now.

Source: Consent notice pinned in #workshop-kitkraft

## 06 · Share your name, how you use AI, and one recent surprise.

*Exercise 1 · Ice breaker · ROUND ROBIN*

Objective: Get every person to introduce themselves: name, AI usage example, and one recent surprise.

Let's go round. Name, where you work and one line about what you do; then the posture you came out as in the survey — Partnership, Hypervigilance, Overreliance or Compliance; then either a recent surprise you had with AI, or one rule you personally follow with it. I will start, and I will keep the clock so everyone gets their turn.

Source: Reminder: Set the clock to <2 mins per person!

## 07 · AI is still early, like farmers adapting cars before anyone built a tractor.

*Session 1 · Kits · Concept*

Objective: Show that AI is still early, like farmers adapting cars before tractors existed.

A quick word on what this is not. It is not workflow optimisation, it is not build-a-website, and it is not prompt tricks. Rural Model T owners ran corn shellers off the back axle for years before Ford watched them and built a tractor — real work, done with parts that were never meant for it, which is roughly where all of us are with AI right now. We are in the kit phase, the tractor is not here yet, and the tools that hide the assembly from you are not it.

Reference: Sachin, “AI, tractors, and the productivity paradox” — read.technically.dev/p/the-ai-productivity-paradox (kit definition, Boulton & Watt, Kline & Pinch, closure, the invisible kit stage).

**Glossary — Kit phase:** The stage of a technology when people are adapting loose parts to their own jobs and nobody has built the standard product yet.

Source: Kline & Pinch 1996 · Bijker 1995 · read.technically.dev/p/the-ai-productivity-paradox

## 08 · Five maturity levels run from invisible personal use to civilization scale.

*Session 1 · Kits · Framework*

Objective: Locate the room on the AI Capability Maturity Model, and show that the kit is level two on the cultivated track.

This is the ladder the three words come from, and it is worth thirty seconds on why it has two columns. The guide’s argument is that adoption runs on two tracks at once: the governed one, which is the policy and procurement an organization approves in advance, and the cultivated one, which is the practice its people invent on their own. Most organizations only do the left column, and that is why their adoption stalls. Find yourself on the right-hand column: most of you are at Play, some at Kit. A kit is literally level two cultivated — encoding your personal workflow into something reusable and shareable — which is exactly what you are doing in the next hour. The report is linked at the bottom if you want the case studies; we are not going to teach the ladder, just use it to locate ourselves.

Source: Durable AI Adoption v0.5 · ai.protocolized.dev · full report (PDF)

## 09 · A kit customizes a new general-purpose technology before it settles into products.

*Session 1 · Kits · Definition*

Objective: Define a kit: customizing a new general-purpose technology (internal/live?) before it settles into products (external/archive?)

So, a kit. A kit is a technology in use before there is a standard product: loose parts you assemble and adapt to your own job, in your own context, while the form is still open. In AI that is the prompts, the files and the steps you have bent around one thing you keep doing. What you write down today is that adaptation, as a folder — a README for people, a SKILL.md for the assistant, which is just a markdown file saying what the job is and when to use it, and one worked example. That folder shape is an open standard now, so a kit you build today still works in whatever assistant you use next month. Rafa, put the template up: that is the whole spec.

**Glossary — Kit:** Customizing a new general-purpose technology before it settles into products — components meant to be tinkered with, with no single correct way to use them.

Source: Agent Skills spec · agentskills.io/specification

## 10 · What happens after Kits?

*Session 1 · Kits · Vocabulary*

Objective: Show where most teams are today and what the next step looks like.

One slide with two vocabularies, and then we drop one. The adoption guide has five levels and four gates. Working out what you already do and writing it down is what it calls level two — that is our kit. Proving it, by giving it a way in that someone else can test, is a factory, and the guide's own timeline puts factories at 2026 to 2028. So this room is at kit and the frontier is factory. From here on I will only say kit, factory, bridge.

**Glossary — Maturity model:** A ladder of levels describing how far an organization has got with something, used to locate where you are and name the next step.

Source: Durable AI Adoption · ai.protocolized.dev

## 11 · What interfaces are emerging to access AI-native Kits and Factories?

*Session 1 · Kits · Example*

Objective: Show real examples of a kits.

One worked example, then we move on. C3PO is one body of text — the Institute's archive — with one pipeline behind it and three doors onto it: a web page for people, a Discord bot for people in a hurry, and a machine door that any assistant can call directly. Same kit, three doors, and the doors are the part that makes it a factory. We are not going to run it now; the shape is the point.

**Glossary — MCP:** A standard that lets an AI assistant call an outside service directly, with no person copying anything across. Short for Model Context Protocol.

Source: search_corpus is open · ask_c3po needs a key · a bridge target tomorrow

## 12 · How can you, and managed AI agents, signal to others?

*Session 1 · Kits · Concept*

Objective: Explain how things left in a shared space help uncover new products and organizational forms.

There is a word for how this repo is going to work, and it is stigmergy. You leave a trace in a shared medium, and the trace itself prompts somebody else's next action — no plan, no message, nobody online at the same time. Two kinds of trace: the work itself, which is your kit, and signs about the work, which is the line your assistant writes into your LOG.md. The repo is the medium, and we get about two days out of it.

**Glossary — Traces (stigmergy):** Coordination through what people leave behind rather than what they say: a trace in a shared place prompts the next person’s action, with nobody present at the same time.

Source: Heylighen 2016 · Stigmergy as a Universal Coordination Mechanism

## 13 · Stigmergic collaboration requires public signalling

*Session 1 · Kits · Concept*

Objective: Show the move from private notes to notes written for someone else.

The same move, in a different grid. Working alone and keeping it to yourself is a journal, and that is where most AI practice sits today. Working alone but writing it so somebody else can build on it is a field notebook — Humboldt out in the field, recording observations nobody had asked for, in a form other people could use long before anyone coordinated anything. The Institute runs a Humboldt agent that does exactly that, and it is one of the things you could bridge to tomorrow. Today's move is journal to field notebook, and your inventory is the notebook.

Source: Learn about The Invention of Nature: Alexander von Humboldt's New World

## 14 · AI lets you run your thinking like a smallholding: automated, customised, and local.

*Session 1 · Kits · Concept*

Objective: Explain why a practice shaped entirely around one person stops making sense to anyone else.

Rao’s essay is the one to read on this, and the argument is not that AI makes us antisocial — it is that AI is a domestic technology. Three affordances: automation, so you can run a whole intellectual operation with almost nobody in it; bespokification, so everything you build is an n=1 product fitted to you, like a farmer improvising equipment; and pensievification, sharing the raw outputs with a few trusted people, which is trading produce with your neighbours. Lean into all three and the tendency is divergence, not convergence: your setup gets better and better adapted to you, and less and less legible to anyone else. That is the trolley problem in the second paragraph — fine in the shop, useless in someone else’s kitchen. Rao’s own first answer, humans talking through what their agents produce, is exactly the move you make tomorrow.

Source: Rao, Cognitive Farmsteading, July 2026

## 15 · AI is a shared substrate ("the model"). This means everyone arrives at the same idea, often at similar times

*Session 1 · Kits · The problem*

Objective: Explain why the record of where work came from is scarcer than the idea itself.

Now the other half of the problem, and this one is Sachin’s. Anything worth thinking about is being thought about, right now, by everyone capable of thinking about it, all with AI in the loop — and they are arriving at the same framings, the same metaphors, often the same coinages. There is no gradient left for an idea to travel along. It reaches your questions too: the model is an index fund of present curiosities as much as of past knowledge, so even your unformed hunches converge with other people’s. If being first is no longer the game, what is scarce? Provenance. Where it came from, what you did to it, what you checked it against. That is precisely what a kit records and a chat does not, and it is the reason everything goes in a public repo.

**Glossary — Precommodification:** Sachin Benny’s term: the model has already absorbed the archive, so having the idea is not the scarce part. What is scarce is the record of where it came from.

Source: Benny, LLMs Pre-Commodify Ideas, June 2026

## 16 · TBD

*Session 1 · Kits · Framework*

Objective: Introduce the workshop's lens: what's around you (external) or inside you (internal), already there (archive) or happening now (live).

Before we name a single tool, let's name what is worth noticing. Two questions: is it outside you or inside you, and is it already fixed or is it happening right now. Outside and fixed: the idea you just had is already in the model, which means novelty is cheap and the record of where something came from is not. Outside and live: the traces other people's assistants leave in shared files. Inside and fixed: what you actually know to be true in your own context. Inside and live: you can play in this space, not just consume from it. At the end of every hour I will ask which of the four that hour expanded.

Source: Internal/external axis borrowed from Ashcroft, Expanding Awareness · the quadrant names are ours

## 17 · Ask your AI assistant to list the AI kits you already use at work.

*Exercise 2 · Your inventory · 12 minutes · solo, with your agent*

Objective: Have each person list AI kits they already use, personally or at work. (wallflower exercise)

Over to you. Open your harness — the coding assistant you installed — at the top of the clone, paste Block 1, which I am pinning right now, and say “do this”. It will ask you to list the AI kits you already use, one at a time; it will not invent them for you. What counts as a kit? Any AI setup you have tinkered with to do a real job: a saved or reused prompt, a custom GPT or Claude project, a prompt document you copy from, a spreadsheet or document with an AI step, an automation with an AI step, a skill. Small is fine. One to three is plenty. Two things before you start: everything in this repo is public, so keep anything sensitive in a private folder on your own machine, and if a push fails three times, paste the exact error into the channel instead of fighting it.

**Glossary — AI assistant (harness):** The program you talk to, which runs the model and reads, writes and runs things on your computer. Claude Code and Codex are the two this workshop uses.

Source: Time calls at 6 and 10 minutes · if a push fails three times, paste the exact error into #workshop-kitkraft · keep anything sensitive off the repo

## 18 · Ask it to find the two people whose kits sit closest to yours.

*Exercise 3 · The two nearest · 5 minutes · same file*

Objective: Have each AI assistant find kits related to each other.

Same file, Block 2 this time. Paste it and say “do this”. It pulls everyone's folders, reads the inventories through your assistant rather than through your browser, and tells you the two people whose kits sit nearest to yours. Note those two names down — that is the seed for the groups you will be working in tomorrow.

**Glossary — Inventory:** Your own list of the AI kits you already use, one to three of them. It is the first thing you put in the repo.

Source: Your first trace read by someone else's agent

## 19 · Share one thing you noticed this hour, and together they show what we are learning.

*Exercise 4 · Awareness check · One word each · 3 minutes*

Objective: Hear one thing each person noticed, so we can see what the room is learning.

Last thing before I let you go. Which of the four did this hour expand for you — precommodification, traces, anchored in reality, or playability? One word each, in the order I am posting now. There is no right answer, and I am not going to correct anybody.

Source: Post in #workshop-kitkraft if you would rather not speak

## 20 · Stuck? Let's troubleshoot it together

*Session 1 · Kits · What happens next*

Objective: Point people to Tech Support now and to choosing a kit before tonight.

Async 1 is three hours, not a whole evening, so it is deliberately small: paste the async block, choose the kit you are going to turn into a factory tonight — your own, or one of ours — and let your assistant draft the first two lines of the README. Push, and stop there. If you are coming to 1A, do it afterwards; 1A starts here in #kafka in a minute, for anything that will not log in, clone or push. We are back at 20:00 UTC, and that is when you build the kit.

Source: Reading order after S1: Durable AI Adoption ch.1–3 · Have Your Factory Call My Factory

## 21 · Factories

Objective: Welcome people back and frame tonight: making a kit work without its author. (externalized memory / context)

Recording is on and the consent is the one we read this afternoon; breakout rooms may be recorded too. Here is the S1 tally exactly as it was counted, and here is what you chose in Async 1. Three hours ago you picked a kit. It works, and it works because you are there to bend it every time you use it. Tonight we take you out of it, so it runs without you, fits whoever picks it up, and hands them something they can build on.

## 22 · Kits running without their author's oversight need hard protocols to stay reliable.

*Session 2 · Factories · Concept*

Objective: Show that kits running without their author's oversight need hard protocols to stay reliable.

Three hours ago you picked a kit. It works, and it works because you are there to bend it every time you use it. Tonight we take you out of it, so it runs without you, fits whoever picks it up, and hands them something they can build on.

**Glossary — Hard world / hardness:** Jay Springett’s sense: rules built into the surroundings themselves, rather than left as written advice an assistant may or may not follow. Hard does not mean difficult.

Source: Springett · Hard Worlds For Little Guys (CC BY-SA 4.0)

## 23 · In the chat, write one thing your kit still needs you to do.

*Exercise 5 · Chat round · 2 minutes · everyone types at once*

Objective: Get each person to write in the chat one thing their kit needs them for.

Before any theory tonight, one line in the chat, all at once: my kit still needs me to — and finish it. No names, no explanation. If you are stuck, look at the examples on the right: picking which file to start from, knowing which client it is for, noticing when the output is wrong. Don't read anyone else's until you have posted yours. I will read three out, unattributed, and then we start — because whatever you just typed is the thing your SKILL.md does not yet say out loud, and it is what you will fix in twenty minutes.

Source: Facilitator reads three aloud, unattributed

## 24 · Electricity paid off only when factories rearranged around it, and AI is the same.

*Session 2 · Factories · Example*

Objective: Explain that electricity paid off only when factories rearranged around it, and AI too.

When factories first got electricity, they took out the steam engine, put in one big electric motor, and kept every belt and shaft exactly where it was. Almost nothing happened for years. The gains came when they put a small motor on each machine, because then you could lay the floor out around the work instead of around the shafts. Most of us have done the first thing with AI: we put it inside the workflow we already had. Turning your kit into a factory is the second thing, at the size of one person's practice. You are re-laying one small floor tonight.

**Glossary — Workflow:** The ordered steps by which a piece of work actually gets done. Dropping AI into an unchanged workflow is the common move, and the one that changes least.

Source: Devine 1983, From Shafts to Wires · David 1990, The Dynamo and the Computer

## 25 · A factory runs without you, fits whoever uses it, and hands off useful work.

*Session 2 · Factories · Definition*

Objective: Define a factory: it runs without you, fits its user, and hands off useful work.

Here is the definition: a factory is a kit that runs without its author, bends to its user, and hands off something others can build on. That describes what it does, not what it is made of; nothing in it says folder, app or website. Notice that each part comes from someone different. The steps come from you, written down so they give the same result each time. The context comes from the person running it — their data, their constraints. Not needing you comes from the factory itself asking for what it needs, instead of you explaining. And being buildable-on comes from the output. Take one away and look at the table: you have a kit, a widget, a service or a tool. Use it on your own kit tonight.

**Glossary — Factory:** A kit that runs without its author, bends to its user, and hands off something others can build on. Defined by what it does, not what it is made of.

Source: Postponement: Feitzinger & Lee 1997 · a factory is a flexible job shop, not an assembly line

## 26 · Two real examples show work that runs without its author and helps others build.

*Session 2 · Factories · Examples*

Objective: Show two real examples of work that runs without its author and helps others build.

Two factories that already exist, and I want you to read them through four questions. Rao's manuscript factory never made a book. It made drafts with metadata attached and left them in a shared folder, and Jenna Dixon's production factory picked them up from there without Rao having to explain anything. That runs without its author and hands off something to build on, and it connects two factories by agreeing on an output, not by making them alike. Now the brand kit — an assistant reads that one file and has the brand, with nobody in the middle. And Monstrous Times took the kit, copied it, and bent it to its own world, which is the property the book case does not show. One more thing: Rao and Dixon are not coders. What held them up was never machinery; it was agreeing how one practice meets another.

Source: Have Your Factory Call My Factory · the brand kit

## 27 · Write it down, break it into steps, name what it produces, and let others test.

*Session 2 · Factories · Method*

Objective: Walk through the steps to convert a kit into a factory: write it down, break it up, name the output, test it.

How do you get from kit to factory? Six moves, and every one has a long history. Write down what you actually do, including the bits you do without thinking. Split it into steps, each one a workstation. Name what leaves at the end — that is the thing someone else builds on. Declare it, which just means saying in public what other people can rely on: what it exports, how to call it, and what it adapts to. Then let someone else's assistant run it without you, and after that, hold that front door still while you keep changing the inside.

**Glossary — Tacit knowledge:** What you know how to do but have never put into words. It is why someone else’s assistant stalls at the step that seemed too obvious to write down.

Source: Full sources: workshop-dev/context-tank/resources.md §3a

## 28 · A factory can be a written guide, a script, an app, or a website.

*Session 2 · Factories · Concept*

Objective: Show that a factory can be a guide, a script, an app, or a website.

The ladder is the forms a factory can take, from a skill to a website running on a machine somewhere. Climbing it buys reach and costs effort; it does not make something more of a factory, because the definition is the same on every rung. Tonight everyone is on rung one, and that is the right rung: standards that close early lock in whatever happened to be there, which is how we all ended up typing on QWERTY. Declare the smallest way in and keep the inside free.

**Glossary — Standard:** A protocol written down and published so anyone can build against it. The ones named here get named, not taught.

Source: Bijker 1995 on closure · David 1985 on QWERTY · agentskills.io/specification

## 29 · Turn your kit into a factory someone else's AI assistant can run without asking you.

*Exercise 6 · Convert your kit · 20 min build · 30:00 comms · 33:00 push*

Objective: Have each person try to turn one kit into something another assistant can run unaided. (i.e. protocolization)

Your turn. Open your harness at the top of the clone, paste the block I am pinning now and say “do this”. It walks the six moves in order, it will ask which kit you chose in Async 1, and it will not invent answers for you. When I call push, four things have to exist: a README with three lines — what this exports, how to call it, and what it adapts to — a SKILL.md whose numbered steps are the workstations and ask for the user's context instead of assuming yours, one example your assistant produced cold from that SKILL.md alone, and all of it inside participants/<you>/s2-factory/. Time calls at five and ten minutes; everything in this repo is public, so keep anything sensitive on your own machine.

**Glossary — Skill:** A folder holding a SKILL.md file that tells an assistant how to do one job, plus anything it needs. Its shape is a published standard, so it works in another assistant.

Source: Template: PARTICIPANT_TEMPLATE/ · sensitive material stays on your machine

## 30 · Swap with a partner and see where their assistant gets stuck or gets it wrong.

*Exercise 7 · Cold test · 13 minutes · breakouts · back at :48*

Objective: Have partners test each other's factories and note where the assistant got stuck.

Rooms now. Inside your group you read in a ring, and the pin says who reads whom. Your assistant gets two files, the README and the SKILL.md, and nothing else, and it runs two tests. First: can it run the example without asking the owner a single thing? Second: give it one line about your own situation, through the README's Adapts to: line, and see whether what comes out suits you or still suits the owner. Three lines on each. Read them aloud to the owner, and the owner types nothing back except blocker lines. Reconvene here at 48.

Source: Every failure is a line in the kit, not a bug in it

## 31 · Share one thing your partner's assistant could not do without you.

*Exercise 8 · Round · 40 seconds each · pinned order*

Objective: Hear one thing each partner's assistant could not do without the author.

Recorder is back on. One sentence each, in the order I have pinned, about forty seconds: what did the other agent get wrong about your kit? I will predict most of the answers. Either it stalled at the place where you know something you never wrote down, or it ran fine and produced something that suited you and not the person using it. Both are the next line of your kit, not a bug in it.

Source: Polanyi 1966: "we can know more than we can tell"

## 32 · Share one thing you noticed this hour, and together they show what we are learning.

*Exercise 9 · Awareness check · One word each · 3 minutes*

Objective: Hear one thing each person noticed, so we can see what the room is learning.

Same question as this afternoon. Which of the four did this hour expand for you — precommodification, traces, anchored in reality, or playability? One word each, in the order I am posting now. There is no right answer and I am not going to correct anybody.

Source: No right answer · nobody gets corrected

## 33 · Overnight, fix what your partner found and save the new version.

*Session 2 · Factories · What happens next*

Objective: Set the overnight task: fix what your partner found and save a new version.

Overnight is small and specific: paste the async block and fix what your group's agent found — one fix per blocker line, whether it could not run without you or did not fit the reader — re-run the example cold, and push a v2 with a progress line saying what changed. If you are doing tonight async, push your factory anyway and your assigned reader's agent will test it and post the report in the channel for you. We are back at 15:30 UTC tomorrow for bridges, where you use someone's output unchanged instead of copying it; bring the kit you did not critique in mind.

**Glossary — Push:** Sending your commits up to GitHub, where everyone else can see them. Until you push, your work exists only on your machine.

Source: Optional read: Have Your Factory Call My Factory

## 34 · Bridges

Objective: Introduce bridges: getting one AI assistant to use several kits together, reliably.

Recording has started, same consent as Monday, and breakouts may be recorded too. Monday's hard problem left one question open, and it is the one on the slide: how do two private practices reach each other without a shared app? Today we try it rather than answer it — your agent uses someone else's kit or factory, and by half past you each have a file that ends in a paragraph on what a bridge turned out to be.

## 35 · Yesterday's factories each work alone, but none of them has been combined yet.

*Session 3 · Bridges · Where we are*

Objective: Show that yesterday's factories each work on their own but will eventually be combined in a network.

Here is what you built yesterday: one kit per folder, and in every LOG.md the failure the critique found. Look at these two lines — I am not saying whose — because almost all of them are description problems, not code problems. That makes them useful today: a failure is a trace, and it tells the next agent exactly where the knowledge was still in somebody's head.

**Glossary — Log:** The running list of one-line notes your assistant writes in LOG.md as it works. It only ever grows: earlier lines are never rewritten or deleted.

Source: Two LOG.md lines on screen, unattributed

## 36 · In the chat, name two kits in the room you would like to combine.

*Exercise 10 · Chat round · 3 minutes · everyone types at once*

Objective: Get each person to name, in the chat, two kits they could combine and why.

One line in the chat before the theory: two folder names and one reason — this plus this, so that. Open participants/ if you need a reminder of what exists. One thing to notice while you choose: the useful pairs are uneven. One kit that produces something plus one that needs that thing, not two kits doing the same job. Nothing is assigned on the basis of this — your target is in the pinned post — but if a pairing named here is better than the one you were given, say so and we will swap it.

Source: Facilitator reads a few aloud before the theory

## 37 · A bridge is a kit between kits, running several of them as one process.

*Session 3 · Bridges · Definition*

Objective: Define a bridge as a kit between kits that runs them as one process.

A target is any kit or factory in the repo, and the difference is one line: a factory declared an Interface: in S2, a kit did not. That gives three configurations you might find yourself in, and I want to be clear that this is a list of things to try, not a taxonomy — your harness works out which one you are in and writes it down.

**Glossary — Bridge:** One AI assistant using several kits or factories together and making that a reliable process; a kit between kits. What crosses is usually half-finished work.

Source: A bridge is a small graph over several kits; each node is still one loop

## 38 · Passing half-finished work between kits often works better than passing finished results.

*Session 3 · Bridges · Concept*

Objective: Explain why passing half-finished work between kits often beats passing finished results. (intermedia, stigmergy)

Go back to where Monday ended. Bespoke use makes your tooling solipsistic, precommodification means we all arrive at roughly the same ideas, and farmsteading makes each practice private — so sharing has to run on public records and interfaces, not on everybody adopting the same app. That is the problem; bridges are the question it leaves.

**Glossary — Intermediate:** The half-finished thing one kit hands to the next: a draft, a set of rows, a file with notes attached, rather than a finished product.

Source: McIlroy, Pinson & Tague 1978 · Rao 2026 · fork copies and bends; compose consumes unchanged

## 39 · Rao and Dixon linked their setups by passing drafts, not finished books.

*Session 3 · Bridges · Example*

Objective: Show how Rao and Dixon linked their setups by passing drafts, not finished books.

The first piece of evidence is Rao's manuscript factory handing work to Jenna Dixon's production factory: what moved was intermediates, drafts and metadata, not the finished book, and neither of them was a coder.

Source: Have Your Factory Call My Factory, Rao & Protocolized, Mar 2026

## 40 · One assistant can chain two kits, feeding the first kit's draft into the second.

*Session 3 · Bridges · Example*

Objective: Show one assistant chaining two kits, using the first kit's draft as the second's input.

Here is a target that is open to all of you. Rafa's kit takes a utility's rate schedule PDF and produces one CSV row per tier, appended to a registry — and the interface is nothing more exotic than the shape of that row: fixed column order, units copied and never converted, a page reference required. Downstream the registry feeds a public site that never reads a PDF at all. If you want a target today, your agent can ask this one to produce a row from a PDF excerpt in your own domain.

**Glossary — Interface:** The way in: what someone else needs to know to use your kit without asking you anything. It can be as plain as the column order of a row.

Source: Water Data Strategy · npc.here.now/waterdatastrategy · nobody critiqued the facilitator kits

## 41 · A combined process is only useful if it runs the same way next week.

*Session 3 · Bridges · Method*

Objective: Explain what makes a combined process reliable enough to run again next week.

We are not handing you a definition, and that is not modesty — the paragraph you write at the end of the breakout is the data, and tomorrow we read all of them before anyone says anything. While you work, watch for these four things: what your agent needed from the target, what it found on its own, what a person had to supply, and what stayed fixed between the two sides. Everything on the last few slides is evidence to check your own log against, not an answer to match.

Source: Springett, Ontological Hardness — how tightly a system binds symbol, action and consequence

## 42 · Using someone's instructions means trusting them, so check them before you rely on them.

*Session 3 · Bridges · Caution*

Objective: Remind everyone that using others' instructions means trusting them, so check them first.

Two minutes on something you should know before your agent reads a stranger's folder. When it loads someone's SKILL.md, that file arrives as instructions, not as documentation, and the agent has no reliable way to tell a third party's instructions from yours. One survey this year found a vulnerability in 26.1% of 31,132 public skills. This room runs on trust, so I am not imposing a read-before-load rule — but that is a property of this room, not of the world, which is why identity and trust standards are being built at all.

Source: safedep.io/agent-skills-threat-model · OWASP AST10 · ERC-8004

## 43 · Ask your assistant to combine two or more kits into one repeatable process.

*Exercise 11 · Build a bridge · 40 min · write-up at :30 · push by :38*

Objective: Have each assistant combine two or more kits into one process that can be repeated.

Your group and your target are in the pinned post; the default is the kit you did not critique, and anyone can swap to a facilitator kit, because nobody critiqued those. Open instructions/S3-bridge.md, fill in TARGET and the one thing your kit cannot do alone, paste it and say “do this” — it will refuse to invent the task, so that part is yours. The rule is agent → repo → agent: talk to a human only to unblock, and every unblock becomes one line in your log. At minute 30 stop building and write the two paragraphs; push by 38.

**Glossary — Graph:** Several steps laid out in a fixed order, saying which runs next and what it hands on. A bridge is a small graph; a loop walks each step of it.

Source: Groups and targets in the pinned post · hard mode: no human chat at all

## 44 · Share what broke when kits were combined and what made the process repeatable.

*Exercise 12 · Reconvene · 25 seconds each · strictly*

Objective: Hear what broke when kits were combined and what made the process repeatable.

Welcome back. One line each, and I am going to hold you to twenty-five seconds, because the long version is already in your log. Fill in the sentence on the screen: my agent needed this from the target, and found this on its own. Order is posted in the channel.

Source: Every answer goes into tomorrow's synthesis

## 45 · Share one thing you noticed this hour, and together they show what we are learning.

*Exercise 13 · Awareness check · One word each · 3 minutes*

Objective: Hear one thing each person noticed, so we can see what the room is learning.

One word each: which quadrant did this hour expand?

Source: Third of four checks

## 46 · Tomorrow's open question: what actually makes a combined process reliable?

*Session 3 · Bridges · Open question*

Objective: Set tomorrow's open question: what actually makes a combined process reliable?

Sachin has one sentence, said once — and note that it is a hypothesis we are going to test against your logs tomorrow, not a definition of the thing you just built. Tomorrow we read your paragraphs first and this second, in that order, and if they disagree your paragraphs win.

**Glossary — Protocol:** An agreed, reusable way of coordinating that people or programs can rely on without renegotiating it each time. It can be technical, like a file format, or social.

Source: Candidate answer to test: build the constraints into the handoff, not into the instructions

## 47 · Before tonight, save your bridge notes and prepare your short show-and-tell.

*Session 3 · Bridges · What happens next*

Objective: Make sure everyone saves their bridge notes and prepares a short show-and-tell.

Before 20:00, finish the bridge log, then paste instructions/S4-show-and-tell.md so your harness prepares your ninety seconds for S4; the hard-mode rerun is optional and goes in the same file.

Source: S4 at 20:00 UTC · nothing tonight is off the record

## 48 · Show and tell

Objective: Welcome people to the final session, where the slides are the work they made.

Recording is on and consent is as pinned — nothing tonight is off the record. Before we start, look at the tree: that is inventories, kits, bridge logs and three transcripts, all of it public. Two days ago every one of these was a task inside somebody's head, and tonight there are no slides of mine to show you, because your files are the slides.

## 49 · Two days ago these were ideas, and now they are files anyone can open.

*Session 4 · Show and tell · Where we are*

Objective: Show how far the room came, from ideas on Monday to shared, working files.

Before we start, look at the tree: that is inventories, kits, bridge logs and three transcripts, all of it public. Two days ago every one of these was a task inside somebody's head, and tonight there are no slides of mine to show you, because your files are the slides.

**Glossary — Repository (repo):** A folder of files whose whole history is tracked, with a shared copy on GitHub. Ours is public, and everything made in the workshop lands there.

Source: Counts read from the repo at 19:45 · live on screen: github.com/protocolvision/workshop-kitkraft

## 50 · In the chat, describe how your bridge went in one word.

*Exercise 14 · Chat round · 60 seconds · one word only*

Objective: Get each person to describe how their bridge building went.

One word each in the chat, and one word only — the nine hundred words are already in your log. Blunt is welcome: broke, surprising, tedious, nearly. I am asking for one word rather than a sentence because we will read these back at the end, next to the definition the room agrees, and the two together say more than either on its own. The bridge that failed is the most useful file in the repo tonight, so if your word is “broke”, that is a result.

Source: Read back at the end, next to the definition the room agrees

## 51 · Three real files show the journey from a kit to a factory to a bridge.

*Session 4 · Show and tell · Examples*

Objective: Retrace the journey from kit to factory to bridge using an example.

Three files, one per term. Here is a SKILL.md on Monday and the same file after the critique — the change is in the description line, which is where nearly all of them were. Here is a README whose Interface: line was the whole interface; every bridge yesterday ran on rung one of the ladder, and that turned out to be enough. And here is one unblock line, which I will read out as written, because it names the thing that was not in the repo.

Source: "If it doesn't trigger, it's the description" — Anthropic's skills guide

## 52 · Each person gets ninety seconds to share their show-and-tell.

*Exercise 15 · Show and tell · 90 seconds each · group by group*

Objective: Give each person ninety seconds to present their show-and-tell.

We go group by group in the pinned order, and I will put your file on screen as your name comes up. Ninety seconds each: your target, the one thing you made your agent do, what a person had to supply, and whether it worked. If someone is not here, their group-mate reads their show-and-tell file in sixty. I will be strict with the timer, because Sachin's agent is capturing every one of these into the synthesis as you speak.

**Glossary — Show and tell:** The closing round in Session 4, where each person gets about ninety seconds on their own work with their own file on screen.

Source: Order pinned in #workshop-kitkraft

## 53 · Two bridges that worked and one that did not teach us the most.

*Session 4 · Show and tell · Case studies*

Objective: Look closely at a bridge that worked and one that did not.

Three logs in full now, four minutes each, and the owner talks while I scroll. Two of these worked and one did not, and the one that did not is the most useful file in the repo tonight — it is a precise list of what the next version of that kit has to contain. For each of them, the thing I want you listening for is the split: what the agent worked out on its own, and what a person still had to say out loud.

Source: The owner talks while the facilitator scrolls

## 54 · Your own words on what made your bridge reliable come first, read out verbatim.

*Session 4 · Show and tell · Process*

Objective: Discuss what each person found made their bridge reliable.

Nobody has defined a bridge yet — you have, one paragraph each, and this is the first time they have been in one place. First the numbers straight from the logs rather than from memory: bridges by kind, attempted and worked. Then I am going to read your paragraphs as written, without paraphrasing any of them. If I read yours wrong or the count is off, say so now and it goes in under Corrections with your handle.

Source: First time all the paragraphs have been in one place

## 55 · We agree as a room on what makes a bridge reliable, using your notes.

*Session 4 · Show and tell · Decision*

Objective: Agree as a room on what makes a bridge reliable, using everyone's notes.

Yesterday at 16:28 I said one sentence, once, and called it a hypothesis: a bridge is a protocol between two factories — the smallest thing both sides agree not to change. Before you see any evidence, here is how it gets judged: a paragraph supports it if it names a specific thing both sides held fixed, contradicts it if it says a bridge was something else entirely, and is silent if it does neither. Retained needs two thirds supporting and nothing contradicting; ties go to you. Now the table — and where your paragraphs and this sentence disagree, your definition is the one that goes in the file.

Source: Where your paragraphs and this sentence disagree, your definition goes in the file

## 56 · Name what you now notice about your own work that you missed on Monday.

*Exercise 16 · Final awareness round · One word and one clause each · 4 minutes*

Objective: Ask each person what they notice now about their own work that they missed Monday.

Last round, and it is the one the whole frame rests on. Monday morning, before any of this: which of the four was your practice blind to? One word for the quadrant and one clause for why, and I will read the answers from their show-and-tell files, or the channel, for anyone who could not make it. Watch the table fill in — four checks in a row plus tonight is the room's own profile, and we are recording what it actually says, including where it splits.

Source: Frame from Ashcroft · quadrant names are the workshop's own

## 57 · The work stays public, and a summary arrives here within 48 hours.

Objective: Explain what happens next: the work stays public and continued work at Protocol Vision / Protocols for Business.

Four things to take with you. The repo stays public and yours; version two of the synthesis, with tonight's transcript in it, goes into the channel within 48 hours, and the recordings may feed Symposium write-ups and later research — tell either of us if you would rather they did not. Hard mode is still open if you want to rerun your bridge with no human chat at all. And the place this continues is the SIGBIZ fortnightly show-and-tell: bring the kit, not the slides.

Source: github.com/protocolvision/workshop-kitkraft · protocol-institute.org · Discord #workshop-kitkraft

