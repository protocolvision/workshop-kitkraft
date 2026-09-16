# Glossary

Plain definitions of the words you will hear across the four sessions, written for people who have never installed a developer tool. Look a word up when you meet it; nothing here has to be read in advance.
If a word is missing, or a definition does not land, ask in **#workshop-kitkraft** on Discord and we will fix it.

## The machine

**Model** — The trained program that turns the text you give it into text it gives back, and the thing people usually mean by "the AI". It does not look anything up while it answers unless something in your setup goes and fetches it.

**Inference** — One run of the model: text goes in, the model works through it once, and text comes back. Every step your assistant takes is another run, which is why a long job costs more and takes longer.

**Token** — The unit a model reads and writes: roughly a short word, or a piece of one. Size limits, speed and price are all counted in tokens rather than in words or pages.

**Usage limit** — The cap on how much a paid plan lets you use in a few hours, measured by how much text goes in and out. Long conversations use it up faster, because everything already said is read again at every step.
*In this workshop:* if you hit it mid-exercise, nothing is broken. It resets, and a group-mate can carry on in the meantime.

**Loop** — An assistant working in a cycle: take a step, look at what came back, correct it, and go again until the job is done or it gives up. Most of what an AI assistant does is one loop running for a while.
*In this workshop:* a kit is usually a single loop. You paste a block and your assistant works through it.

**Graph** — Several steps laid out in a fixed order, saying which one runs next and what it hands on. The graph draws the path; a loop walks each step of it.
*In this workshop:* a bridge is a small graph. Several kits in an order, each passing half-finished work to the next.

**Context window** — Everything the model can see at once while it answers: your question, the files it has opened, and what has already been said. It has a fixed size, so a long session eventually pushes the earliest material out of view.

**Prompt** — What you type or paste to get the model to do something. A prompt you have saved and reused is already a small kit (see kit).

**Hallucination** — A confident answer that is simply untrue: an invented source, a made-up number, a file that does not exist. It is a normal failure of these systems rather than a rare fault.
*In this workshop:* every block you paste tells your assistant to ask you rather than invent an answer.

**Latent space** — A way of talking about everything the model has absorbed and can recombine. The point for us is that the idea you are about to have is probably already in there (see precommodification).

**Data centre** — The building full of computers where the model actually runs. Your assistant sits on your own machine, the thinking happens somewhere else, and that is what a paid plan pays for.

## What you work with

**AI assistant (a.k.a. harness)** — The program you actually talk to, which runs the model, reads and writes files on your computer, and runs commands for you. Claude Code and Codex are the two the workshop uses, and "harness" is the shorter word for the same thing.
*In this workshop:* everything you make is made by pasting a block into your assistant and saying "do this".

**Agent** — An AI assistant that has been given a job and left to work at it, deciding its own next step each time, instead of answering one question at a time. A useful shorthand is a model plus a harness plus a loop.

**Skill** — A folder holding a `SKILL.md` file that tells an assistant how to do one job, along with anything it needs, such as a worked example. Its shape is a published standard (see standard), so a skill you write for one assistant works in another.
*In this workshop:* the factory you build in Session 2 is a skill.

**MCP** — A standard that lets an AI assistant call an outside service directly, with no person copying anything across. Short for Model Context Protocol.

**API** — A fixed way for one program to ask another for something, agreed in advance so neither side has to guess.

**Repository (repo)** — A folder of files whose whole history is tracked, with a shared copy on GitHub, the website that hosts it. Ours is `protocolvision/workshop-kitkraft`, it is public, and everything made in the workshop lands there.

**git** — The tool underneath a repo that records every change, who made it and when, so nothing is lost and several people can work at the same time. Your assistant drives it; you do not have to.

**Commit** — Saving a set of changes into the repo's history with a one line message saying what changed. A commit sits on your own machine until you push it.

**Push** — Sending your commits up to GitHub, where everyone else can see them. Until you push, your work exists only on your machine.

**Branch** — A separate line of work in a repo, kept apart from the main one until someone merges it back.
*In this workshop:* we do not use branches. Everything goes straight to `main`.

**Terminal / command line** — The window where you type commands instead of clicking. It is where you start your AI assistant, and that is very nearly all you will use it for.

## How your assistant knows things

**Session** — One conversation with your assistant, from when you open it to when you close it. When it closes, the conversation is gone unless something was saved to a file.

**Memory** — What an assistant carries from one session to the next, which by default is nothing. Anything it seems to remember was written into a file it reads when it starts.
*In this workshop:* this is why everything goes into the repo. Your log and `AGENTS.md` are your assistant's memory of the workshop.

**Global settings** — Instructions and preferences that apply everywhere your assistant runs, kept in a folder in your home directory. Set something there once and it follows you into every project. Claude Code keeps them in `~/.claude`, Codex in `~/.codex`.
*In this workshop:* you should not need to touch these.

**Working directory** — The folder your assistant was opened in. It is where it looks first, where its commands run, and roughly where it thinks the job is.
*In this workshop:* open it at the top of your copy of the repo, the folder that contains `AGENTS.md`.

**Project instructions** — A file in the working directory that your assistant reads as it starts, telling it how to behave in that project. `AGENTS.md` is the shared standard, and Claude Code also reads `CLAUDE.md`.
*In this workshop:* our `AGENTS.md` is why your assistant knows to write only in your own folder and keep a log.

**Tools** — The actions an assistant can take beyond writing text: reading and editing files, running commands, searching the web, or calling an outside service through MCP. A model on its own can only answer; tools are what let it do things.

**Permissions** — What your assistant may do without asking you first. It usually asks before editing a file or running a command, and you can allow something once or for good.
*In this workshop:* if you are not sure what it is asking to do, say no and ask in the channel.

## The workshop's words

**Kit** — Customizing a new general-purpose technology before it settles into products. Put another way, a kit is a set of components meant to be tinkered with, with no single correct way to use them.
*In this workshop:* your kit is the prompts, files and steps you have already bent around one job you keep doing.

**Factory** — A kit that runs without its author, bends to its user, and hands off something others can build on. It is defined by what it does, not by what it is made of: a skill, a single file that calls a model, an app or a website can each be one.

**Bridge** — One AI assistant using several kits or factories together and making that a reliable process; a kit between kits. What crosses a bridge is usually half-finished work rather than a finished result.
*In this workshop:* what stays open is what makes a combination reliable, and the paragraph you write in Session 3 is the evidence Session 4 works from.

**Intermediate** — The half-finished thing one kit hands to the next: a draft, a set of rows, a file with notes attached, rather than a finished product.

**Interface** — The way in: what someone else needs to know to use your kit without asking you anything. It can be as plain as the shape of a document or the column order of a row.
*In this workshop:* the `Interface:` line in your README is the line that turns a kit into a factory.

**Inventory** — Your own list of the AI kits you already use, one to three of them, written in Session 1. It is the first thing you put in the repo.

**Log** — The running list of one line notes your assistant writes in `LOG.md` as it works. It only ever grows: earlier lines are never rewritten or deleted.

**Breakout group** — The two to four people you work with in a side room on Discord. You read each other's kits there, and the next day you bridge to one of them.

**Show and tell** — The closing round in Session 4, where each person gets about ninety seconds on their own work with their own file on screen.

## Ideas behind the workshop

**Protocol** — An agreed, reusable way of coordinating that people or programs can rely on without renegotiating it each time, in the sense used across Summer of Protocols and the Protocol Institute. It can be technical, like a file format, or social, like a contract or a handshake.

**Standard** — A protocol written down and published so that anyone can build against it. The ones named in the workshop are Agent Skills, AGENTS.md, MCP and A2A; they get named, not taught.

**Kit phase** — The stage of a technology when people are adapting loose parts to their own jobs and nobody has built the standard product yet. Rural drivers ran farm machinery off jacked-up Model Ts for years before anyone built a tractor, and AI is at that stage now.

**Closure** — The point at which a technology stops being open to interpretation and one form wins as the product. Closing early locks in whatever happened to be lying around, which is why the workshop asks you to declare as little as you can get away with.

**Traces (stigmergy)** — Coordination that happens through what people leave behind rather than what they say to each other: a trace left in a shared place prompts the next person's action, with no plan, no message and nobody present at the same time. The work itself is one kind of trace and notes about the work are another.
*In this workshop:* the repo is the shared place; your factory is the first kind of trace and your `LOG.md` the second.

**Precommodification** — Sachin Benny's term for the fact that the model has already absorbed the archive, so the idea you are about to have is in some sense already available and having it is not the scarce part. What is scarce is the record of where something came from (see provenance).

**Provenance** — Where something came from and what happened to it on the way: whose work it was, what was changed, and what it was checked against.

**Hard world / hardness** — Jay Springett's sense: rules built into the surroundings themselves, rather than left as written advice an assistant may or may not follow. Hard here does not mean difficult or harsh.
*In this workshop:* the more independently a kit runs, the more its reliability rests on hardness rather than on instructions.

**Tacit knowledge** — What you know how to do but have never put into words. It is why someone else's assistant stalls at the step that seemed too obvious to write down, and finding those steps is the point of the Session 2 critique.

**Maturity model** — A ladder of levels describing how far an organization has got with something, used to locate where you are and name the next step. The Protocol Institute's AI Capability Maturity Model is the one behind kit, factory and bridge.

## Words you'll hear in AI adoption work

**Forward deployed** — Putting the people who build the tooling alongside the people doing the work, instead of collecting requirements and building at a distance.

**Tinkering** — Changing something you did not design until it does your job. It is the ordinary activity of the kit phase, and writing it down is what the workshop asks of you.

**Human in the loop** — An arrangement in which a person checks or approves a step before the work carries on. Taking the person out raises both the speed and the risk.

**Guardrails** — Limits on what an assistant is allowed to do, set so that a mistake stays cheap and reversible.

**Evaluation (evals)** — A repeatable test of whether a kit or a model actually does the job, run on known cases so you can tell whether a change made things better or worse.

**Workflow** — The ordered steps by which a piece of work actually gets done. Dropping AI into an unchanged workflow is the common move, and the one that changes least.

**Adoption / enablement** — The organizational work of getting people to use something and helping them get good at it, as opposed to buying or building it.

## Where these come from

- [Durable AI Adoption (AI Capability Maturity Model)](https://ai.protocolized.dev/) — maturity model, kit phase, the levels behind kit, factory and bridge
- [Rao, "Have Your Factory Call My Factory"](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory) — factory, intermediate, the first bridge case
- [Benny, "LLMs Pre-Commodify Ideas"](https://summerlightning.substack.com/p/llms-pre-commodify-ideas) — precommodification, provenance
- [Springett, "Hard Worlds For Little Guys"](https://thejaymo.net/2026/03/19/hard-worlds-for-little-guys/) and [Springett, "Ontological Hardness"](https://thejaymo.net/2026/03/19/ontological-hardness/) — hard world, hardness
- [Heylighen, "Stigmergy as a Universal Coordination Mechanism"](https://pespmc1.vub.ac.be/Papers/Stigmergy-Springer.pdf) — traces
- [NPC Memo, "Agent-Shaped Problems"](https://npcmemo.substack.com/p/agent-shaped-problems) — agent, protocol
- [Summer of Protocols](https://summerofprotocols.com/) and the [Protocol Institute](https://protocol-institute.org/) — protocol, standard
- [Agent Skills specification](https://agentskills.io/specification), [AGENTS.md](https://agents.md/), [MCP](https://modelcontextprotocol.io/specification/2026-07-28), [A2A](https://a2a-protocol.org/latest/specification/) — skill, MCP, standard
- [Claude Code setup](https://code.claude.com/docs/en/setup) and [Codex CLI](https://learn.chatgpt.com/docs/codex/cli) documentation — session, memory, global settings, working directory, tools, permissions, usage limit
- [Agent harness, loop and graph engineering](https://www.analyticsvidhya.com/blog/2026/08/agent-harness-loop-graph-engineering/) and [Graph engineering vs loop engineering](https://www.aibuilderclub.com/blog/graph-engineering-vs-loop-engineering) — loop, graph

The fuller annotated list, with everything the sessions draw on, is `../context-tank/resources.md`.
