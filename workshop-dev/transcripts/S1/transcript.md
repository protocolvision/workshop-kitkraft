# KITCRAFT-S1 — #kafka — Mon Sep 21 2026

[15:30:00] Sachin: /record channel:#kafka name:KITCRAFT-S1
speakers: Rafa, Sachin, Ingrid, Dev, Marisol, Tomás, Aiko, Kwame
live transcript: #kitcraft-transcripts · recorder: OpenRecapper (Deepgram Nova-3, diarized) · plenary only

[15:30:05] Sachin: Okay, recording is on. I just posted it in #kitcraft. Welcome, everyone. This is AI Kitcraft.
[15:30:15] Sachin: Six of you, two of us, two days, one repo. That's the whole setup. I'm Sachin, I open each session and I run the text channel, the recorder and the repo. Rafa runs the activities and does most of the theory. We hand back and forth.
[15:30:35] Sachin: Aiko, I see you. It's half past midnight in Tokyo. Thank you. If you go quiet we'll assume you're asleep, not offended.
[15:30:45] Sachin: The spine of the two days is three words. Kit, factory, bridge. Today is kit. Where you are, what a kit actually is, and you write your inventory. Tonight at 20:00 UTC you build the kit. Tomorrow you bridge it to someone else's, and then we recap.
[15:31:05] Sachin: One rule for the room. Everything you make lands in the repo. Not in chat, not on your desktop. The repo.
[15:31:15] Sachin: Before we start, the record. This room, #kafka, is being recorded. A bot transcribes it with your Discord display name next to what you say, streams the transcript live to #kitcraft-transcripts, and after each session the transcript goes into the public workshop repo. Breakout rooms are not recorded.
[15:31:45] Sachin: Your harness writes one-line log entries into the public repo as you work; that is the autolog, and it is part of the record too. Anything of yours — a transcript passage, a log line, a file — comes out on request; ask Rafa or me, no reason needed.
[15:32:05] Sachin: If you would rather not be on the recording, stay muted and use #kitcraft; you lose nothing. The audio is deleted after seven days; the text stays. Put nothing in a public kit that you would not put on a public website. Questions go to #kitcraft. Recording started at half past.
[15:32:30] Sachin: Anyone want to be off the transcript? Say so now or in the channel.
[15:32:40] Sachin: Okay. And after Tuesday: the repo stays public, we post the synthesis in Discord within forty-eight hours, and that's it. Nothing else happens to your material without you hearing about it first.
[15:33:00] Sachin: Ice-breaker. Name, where you work, one line. Your posture from Robert's survey, one word. And one recent surprise with AI, or one personal rule you use. Seventy-five seconds each. I posted the order in #kitcraft. I'll go first so you can see the shape.
[15:33:20] Sachin: Sachin Benny. I write Summer Lightning, essays about what these models do to ideas. Posture, Partnership. My surprise: I asked a model for an idea I was quite proud of, it gave it back to me in a better form than I'd had it, and it was already in there. I'd had it second. That's the whole thing I'm going to bang on about at the end of the hour.
[15:33:55] Sachin: Rafa, you next, then Ingrid.
[15:34:00] Rafa: Rafa. I work on the AI maturity model with the business SIG, and I do water-rate data. Pulling rate schedules out of utility PDFs into a registry. Posture, Partnership.
[15:34:20] Rafa: My rule is boring. The agent never converts units. If the PDF says hundred cubic feet, the row says hundred cubic feet. Every time I let it convert, it converted wrong once in twenty and I couldn't see which one. So the rule is in the kit now, not in my head.
[15:34:45] Rafa: Ingrid.
[15:34:50] Ingrid: Hello. Ingrid Solheim. I do grants and reporting at a climate-policy nonprofit in Oslo, forty people. Funder reports, twelve funders, the board pack, the impact dashboard. I should say first that I am not technical; I had never opened a terminal before Saturday. Posture, Compliance. The survey put me there and I think it is right; I do what the tool suggests.
[15:35:20] Ingrid: My surprise is a small one, sorry. The pre-work email told me to open Claude Code and paste a block into it, and I do not have Claude Code, I have ChatGPT. It was addressed to a program I do not own. I got it onto a personal laptop on Saturday and paid for it, and then it stopped because something called gh is not installed. So I am here without a harness. Sachin has my file from Sunday and I will come to the clinic. That is me.
[15:36:00] Sachin: Thank you, Ingrid. Dev.
[15:36:05] Dev: Dev Raghunathan. Product manager at a twenty-five-person company doing governance tooling for DAOs, Lisbon. Posture, Partnership. Surprise from the pre-work: I asked my digest skill to explain itself to a colleague and it couldn't, because the whole thing says "do the digest thing". Works every fortnight for me, useless to anyone else. So that's what I'm here to fix, and yes, I've already pushed twice, once on a branch I shouldn't have made.
[15:37:15] Sachin: Marisol.
[15:37:20] Marisol: Marisol Peña. Senior planning analyst, community development, in a city in California of about a hundred and twenty thousand. I write council staff reports and I answer public-records requests. Posture, Hypervigilance: I verify everything and I use it less than I could.
[15:37:50] Marisol: My rule is about citations. Every council item the model gives me, I open the item before the number goes in a report, and the number that goes in is the one I read on the page, not the one it typed. The surprise that made the rule: it gave me an item with the right topic, a plausible date and a plausible number, and the number belonged to a different item. A council member would have found that one before I did.
[15:38:20] Marisol: That's me.
[15:38:30] Sachin: Tomás. Seventy-five seconds, and I say that with love.
[15:38:35] Tomás: Tomás Ricci, Buenos Aires, where it is half past twelve and raining, which is the correct weather for a workshop about archives. I write a fortnightly newsletter on the history of infrastructure and technology — about three thousand people receive it and perhaps four hundred read it, which is the honest ratio for anyone who publishes. Some consulting for think tanks when the newsletter does not pay the rent, which is most fortnights.
[15:39:00] Tomás: Posture. I have to confess I have not done Robert's survey. I opened it on Sunday, it asked how often I check the model's answer, and I closed the tab, which is itself an answer. So if I have to guess, and I do: the one where you trust it too much. Overreliance. I would like to say Partnership — everyone would like to say Partnership — but I paste a draft in, I change the adjectives, and I call that editing.
[15:39:30] Tomás: The surprise, then. Sachin's story from the other side. I asked Claude for a history of the Buenos Aires tramway concessions and it gave me a paragraph I recognised: it was my paragraph, from an issue two years ago, slightly better. So the model had read me and I had not read myself. Borges again, sorry — he said he was prouder of what he had read than of what he had written, and I find I can no longer separate the two.
[15:39:55] Tomás: And the rule. I do have a rule, it is a bad one: every claim gets a source. But I have never once checked whether the source the model handed me is one I have actually —
[15:40:00] Sachin: I'm cutting you there, Tomás, we'll get the rest tomorrow. Aiko.
[15:40:03] Tomás: — read. Yes. Tomorrow. Sorry, Aiko, go.
[15:40:10] Aiko: Aiko Tanaka. Studio manager at a twelve-person architecture and interior studio in Tokyo. The partners design; I make the studio run — proposals, schedules, client emails, the brand kit. Posture, Partnership.
[15:40:30] Aiko: My rule: nothing the model writes leaves the studio in the studio's name until I have read it once as the client would. It is good at the shape of a proposal and wrong about what the partners will actually take on, and that part is not written anywhere. That is what I would like to write down here.
[15:40:50] Aiko: And yes, it is half past midnight; I will be brief rather than absent. Thank you.
[15:41:05] Sachin: Thank you. Kwame, you're last.
[15:41:10] Kwame: Kwame Mensah. I'm the programme manager for a public-health data lab at a university in Accra, about thirty people. I run the weekly lab update, the grant milestones, the ethics-committee paperwork, and onboarding of new research assistants.
[15:41:35] Kwame: Posture, Compliance. That is the survey's word and I think it is fair.
[15:41:45] Kwame: My rule is for the weekly update. The model never decides what goes in the "needs PI attention" box. It drafts the page, but that box I fill by hand, every week, because which milestone is late is a fact and which late milestone is a problem is politics. I keep that part out of the prompt on purpose.
[15:42:10] Kwame: And I use Codex, not Claude, so I will be the one asking whether the instructions work the same. Done.
[15:42:20] Sachin: Good. Two Partnership, two Compliance, one Hypervigilance, one Overreliance, if I counted right. I've put the tally in the channel. Rafa will come back to that at the end.
[15:42:35] Sachin: Now, what this is not. It's not workflow optimisation. It's not build a website in an afternoon. It's not prompt tricks. You can get all of that elsewhere and most of it is fine.
[15:42:55] Sachin: Here's the picture I want in your head. Rural America, around 1915. Farmers have Model Ts. Ford sold them a car. What the farmers did was jack up the back wheel, run a belt off it, and drive a corn sheller. A washing machine. A saw. For years. Ford watched them and eventually built the tractor. The tractor came out of the farmers, not the other way round.
[15:43:30] Sachin: That's where we are with these models. Everyone's got a Model T. Everyone's jacking up the back wheel and doing something odd in the barn. Nobody's built the tractor yet. This workshop is the barn phase, done on purpose, and written down.
[15:43:50] Sachin: And the other thing it's not. It's not "adopt a tool". The tools that hide what's going on, that make it smooth, those are the townships. Neat, and you can't see the plumbing. We're doing the opposite. You're going to see every pipe. Rafa.
[15:44:05] Rafa: Thanks. Two grids, then I stop drawing grids. First one is the frame for the whole two days. It's on screen and Sachin's put it in the channel.
[15:44:20] Rafa: Two axes. External or internal. Is it out there in the environment or is it you. And archive or live. Is it already there, or is it happening now. Four boxes.
[15:44:40] Rafa: External, archive. That's what Sachin just described. Your idea was already in the model. We call that box precommodification patterns. What's scarce there isn't the idea. It's knowing where it came from.
[15:45:00] Rafa: External, live. Traces. What other people's agents are leaving behind in shared files, in repos, in channels. Ant pheromones, basically. I'll come back to this one properly in ten minutes.
[15:45:20] Rafa: Internal, archive. Anchored in reality. Your actual data, your actual constraints, the thing you know about your funders or your council that isn't written anywhere. It's the check against the model's confident fiction.
[15:45:40] Rafa: Internal, live. Playability. The space is playable. You can act in it. Not just take things out of it.
[15:45:55] Rafa: The reason this grid matters: at the end of every session I'm going to ask one question. Which box did the last hour expand for you. One word. That's the whole check-in. The four answers across two days tell us what the workshop actually did, as opposed to what we planned.
[15:46:20] Rafa: The axes are ours. The quadrant names are ours. The internal-external cut is borrowed from Michael Ashcroft's Alexander Technique work. If the grid doesn't fit your experience, say so tomorrow; that's data.
[15:46:40] Rafa: Second grid, quicker. This one's about movement. One person or many. Interior or exterior. A journal is one person, interior. A novel is many readers, still interior. An exposed kit is one person, exterior. Stigmergy is many, exterior.
[15:47:10] Rafa: Right now most of you are in the journal box. Your AI use is a private habit. Ingrid's ChatGPT project. Marisol's OneNote of prompts. By tonight you're in the exposed kit box. Tomorrow, when bridges happen, that's the first step toward the fourth box. Traces are what make the fourth box reachable. Hold that.
[15:47:30] Sachin: One in the channel already. Someone's asking whether a shared Notion database is a journal or an exposed kit.
[15:47:38] Rafa: Good question. It's a novel. Many readers, still interior, because only you know how to use it. It becomes an exposed kit when a stranger's agent can run it from what's written. Not when more people can see it.
[15:47:45] Rafa: Questions on the grids? Put them in the channel, Sachin picks them up. I'm going to keep moving.
[15:48:00] Rafa: Okay, and one more picture, because some of you have read the maturity model and I want to connect the vocabularies once and then never again.
[15:48:15] Rafa: The maturity model has five levels, and each level has a governed version and a cultivated version. Between levels there are gates. Discover, encode, prove, harvest. Discover is you notice something works. Encode is you write it down so it works again.
[15:48:45] Rafa: A kit is discover plus encode. That's level two, cultivated. That's this room, today and tonight.
[15:49:00] Rafa: A factory is prove. It's a kit with an interface. Somebody who isn't you can test it. That's tomorrow's second session, and it's where the frontier is. The guide's timeline puts factories at twenty twenty-six to twenty-eight. So we're not behind. We're at the edge of what anyone's doing.
[15:49:30] Rafa: A bridge is harvest. Another factory consumes yours. Tuesday afternoon. Nobody really knows what a bridge is yet, which is why the last session is about defining it from what you did.
[15:49:50] Rafa: So. Kit, factory, bridge. Encode, prove, harvest. Same three steps, two names. From now on I only use the short ones.
[15:50:05] Rafa: Now, what a kit actually is. It's a folder. That's it. Four things in the folder.
[15:50:20] Rafa: A file called SKILL dot md. That one's for the agent. It has a name, a one-line description, when to use this, the steps, the constraints, and a list of things not to do. A README for humans. An examples folder with one input and the output it produced. And a log file.
[15:50:50] Rafa: This folder shape is now an open standard. Anthropic published it in December. It's stewarded with the AGENTS file under the Linux Foundation now. Thirty-odd tools read it. So the kit you write tonight in Claude Code works in Codex on Wednesday, and in whatever comes out next month. That's the point of a standard.
[15:51:20] Rafa: I'm sharing the template. Look at it for twenty seconds. That's the whole spec. There's no more.
[15:51:30] Sachin: Template's in the channel, and the link to the spec under it.
[15:51:45] Rafa: A kit is not code. I want to be very clear about that because some of you tensed up when I said folder. It's encoded domain knowledge. The thing you know that a stranger doesn't. Ingrid knows which numbers each funder actually checks. That's the kit. Nobody's writing Python.
[15:52:10] Rafa: One practical thing, from every guide I've read and from my own kit. If the kit doesn't trigger, if the agent doesn't pick it up when it should, the fix is almost always the one-line description. Not the steps. The description. You'll see this tomorrow.
[15:52:35] Rafa: And a strange thing about kits now. When you use someone's kit, you're working with an archival version of them. Their knowledge from last Tuesday, read by a model that changes under you. Paper fixes the words. These things fix the archive, roughly, but not the reader. Keep that in mind when a kit does something odd. The kit didn't change. The reader did.
[15:53:10] Rafa: Right. Traces. This is the box I skipped.
[15:53:20] Rafa: Francis Heylighen, who's a systems theorist, defines stigmergy like this. Indirect coordination, where the trace an action leaves in a medium stimulates the next action. No plan. No message. Nobody has to be there at the same time. Termites build cathedrals this way. Nobody has the blueprint.
[15:53:50] Rafa: He splits traces in two. Sematectonic traces are the work itself. The termite's bit of mud. Your kit is that. Marker-based traces are signs about the work. The pheromone. Your log file is that. Every line your harness writes is a marker for the next agent that walks past.
[15:54:20] Rafa: The repo is the medium. That's why everything goes in the repo and not in chat. Chat evaporates. The repo is the mud.
[15:54:35] Rafa: So this workshop is stigmergy with a two-day half-life. Six agents leaving traces in one folder, and tomorrow afternoon we find out whether anyone's agent followed anyone else's trail.
[15:54:55] Rafa: There's a parallel hackathon this week on securing stigmergic systems. They own the security side. I'm staying on coordination. If you want the scary version, go to their room.
[15:55:10] Rafa: One worked example and then I hand back to Sachin. C3PO. It's the Protocol Institute's search bot. If you've been on this server you've seen it.
[15:55:30] Rafa: One corpus. Everything the institute has published. One ingest pipeline. And then three doors into it. A web page. The Discord bot you can at-mention. And an MCP endpoint, which is the thing an agent calls. Same kit behind all three.
[15:55:55] Rafa: The doors are the factory part. The corpus is the kit. That's the difference in one picture. We're not calling it live today. Just look at the shape. One thing, three interfaces, and somebody else's agent can use it without asking anyone.
[15:56:25] Rafa: Sachin. The hard problem.
[15:56:35] Sachin: Right. So Rafa's told you what a kit is and why you'd share it. I'm going to tell you why you probably won't, and why that's the actual problem.
[15:56:50] Sachin: Bespoke use makes tooling solipsistic. That's a mouthful, so: the way you've set up your AI only makes sense to you. Ingrid's ChatGPT project with the template pasted in. Dev's digest skill that says "do the digest thing". Perfect for the owner. Meaningless to anyone else.
[15:57:20] Sachin: Two things make it worse. One is what I said at the start. Precommodification. Your idea is already in the model. So when you finally do write it down and share it, it doesn't feel scarce. Why bother. But the idea was never the scarce part. Where it came from, who had it, what they did with it — that's the part the model can't give you, and that's the part that lives in a shared record.
[15:57:55] Sachin: The other is what Venkat calls cognitive farmsteading. Three moves. Automation: you get the machine to do the thing. Bespokification: you get it to do the thing exactly your way. Pensievification: you pour your memory into it so it knows what you know. Each one makes your setup more yours and less anyone's. You end up with a beautiful homestead in the middle of nowhere.
[15:58:30] Sachin: Here's the picture. A grocery cart. Great in the store. Push it around, fill it up. Take it home, it's useless. It doesn't fit through the kitchen door. That's your bespoke setup. It works where you built it.
[15:58:50] Sachin: And the opposite failure is what Venkat called digital homelessness, years ago now. Very online, no home. All commons, nothing that's yours. Most of you are homesteaders. A few of you are homeless. Neither can share anything.
[15:59:15] Sachin: The way out isn't a shared app. Everyone's tried the shared app. It's public records and interfaces. A record that someone else's agent can read. An interface someone else's agent can call. That's what the repo is for. And the first public record is the one you're about to write.
[15:59:40] Sachin: Questions before Rafa gives you the exercise? One or two. In voice or in the channel.
[16:00:10] Marisol: One from me, about the public record. In twelve minutes my agent reads the other five files and tells me which two are nearest to mine, and I am not allowed to open them. How do I know it is right? Is there a check in the block, or is the log line just the agent's word, written down?
[16:00:10] Dev: Quick one. If the log line is the pheromone, why does it live at the bottom of each inventory and not in one place? A stranger's agent has to open six files to read six trails.
[16:00:45] Sachin: Marisol first. No, there's no check in the block. The log line is the agent's word, written down, and that is exactly what a marker trace is: a sign about the work, not the work. The check is the one you'd do with a person: ask it "show me the line in their file that this rests on". If it can't, don't accept the name. That's a good thing to put in your log either way.
[16:01:15] Sachin: Dev. Because the trail belongs to the work. Six files, six trails, and an agent that wants all of them runs one search; a central index would be a second thing to keep true. But you've just described what a bridge might need, so hold the question for tomorrow afternoon.
[16:01:45] Sachin: Good. Rafa.
[16:02:00] Rafa: Okay. Exercise. Your inventory. This is the first thing that goes in the repo under your name. Fifteen minutes total.
[16:02:15] Rafa: Sachin has just pinned a block of text in #kitcraft. It starts with "You are the participant's harness". You don't have to read it. Open your harness inside the clone, paste the whole block, and say "do this". That's the exercise.
[16:02:40] Rafa: What it does. It reads the inventory README. It writes a file called inventory slash your name. Your three tasks, anything you've built, which task becomes your kit, public or private, your posture. It commits it, pulls, pushes, and tells you what it did. If you did the pre-work, your file already exists and it just fills it in.
[16:03:10] Rafa: Private means the content stays on your machine and only a stub goes in the repo. There is no private repo. Marisol, that's your path, and it's fine.
[16:03:25] Rafa: If the push fails three times, the harness will print an error and stop. Paste that error in #kitcraft. Sachin will push the file under your name. Don't fight git. That's not what the fifteen minutes are for.
[16:03:45] Rafa: Ingrid, Aiko. No harness yet. Write the file by hand from the README, five sections, and paste it in the channel. Sachin commits it. You get the harness at the clinic straight after this.
[16:04:05] Rafa: One rule while you wait for your agent. You do not go and read other people's inventories in the browser. Not yet. In twelve minutes you'll ask your agent to do it, and that's the point. Go.
[16:04:30] Sachin: Block is pinned. Thread for push errors is open underneath it.
[16:05:00] Sachin: For the Codex people: the block works the same. If it asks which folder it's in, that's your clue you opened it outside the clone. Quit, cd, open again.
[16:06:00] Rafa: I'm staying in voice. Theory questions, ask me here. Push questions, the channel.
[16:07:00] Rafa: A thing you'll notice while it works. It's going to ask you yes or no questions about each task. Recurring, tacit. Answer honestly. "Depends on something I know" is the whole reason it's a kit and not a prompt.
[16:07:40] Sachin: One push rejected in the thread, it's retrying. That's normal, six people on one branch.
[16:08:30] Rafa: Dev, I saw yours land. First one in. Kwame, did yours go?
[16:08:40] Kwame: Yes, it went. It stopped twice on the branch name and then pushed. I will put the detail in the channel.
[16:09:15] Rafa: Marisol, your file says private, good. Your agent should have written the stub and nothing else. If it wrote the archive path in there, take it out before it pushes. Actually, Sachin's pushing yours; check it before you send it.
[16:10:00] Rafa: Tomás, if your agent is writing more than forty lines, tell it to stop. It's an inventory, not an essay.
[16:11:00] Sachin: Two hand-written files: Ingrid's went straight onto the website, Aiko's is in the channel. I'll commit Aiko's under her name; I can't do it while I'm pushing Marisol's and running the thread, so it's after the clinic.
[16:11:30] Rafa: Aiko, thank you for staying awake for a file. It'll matter tomorrow.
[16:12:00] Rafa: Quick check. Who's pushed, who's stuck. Sachin's got the list from the repo. Just say pushed, stuck, or waiting.
[16:12:05] Sachin: From the branch, in order of landing. Dev, 2b45f64. Tomás, 14bd8da. Kwame, 78e46ca, from a folder we'll talk about at the clinic. Marisol, your commit is on your machine and the push was refused, so I'm pushing it for you now. Ingrid, I see a commit called "Create ingrid.md" from the website; that's yours and it counts. Aiko, yours is in the channel; it isn't on the branch yet.
[16:12:10] Dev: Pushed.
[16:12:15] Kwame: Pushed. Report is in the channel.
[16:12:20] Aiko: Waiting. No harness, so I wrote the file by hand from the section list in the block and pasted it in the channel at 16:10. Sachin, it is yours to commit; tell me if the format is wrong.
[16:12:40] Ingrid: Stuck, I think. Or, sorry, not stuck exactly. The harness stopped at the gh thing again, so I put the file on the website myself, under inventory. It is there now. I posted about it in the channel. I hope that was allowed.
[16:12:40] Marisol: Stuck. Codex wrote and committed, and stopped at the push, three tries. The error is in the channel.
[16:13:00] Sachin: Tomás, you're in, I said so. Nobody's stuck on anything I can't push around.
[16:13:30] Sachin: Four from harnesses on the branch, Marisol's pushed by me, Ingrid's from the website. Aiko's is in the channel until after the clinic. Marisol, yours came through, thank you.
[16:13:50] Sachin: And Dev, the branch. I saw your harness try to make one. It's main only, no branches, tell it so once and it'll stop.
[16:14:00] Rafa: Good. Four more minutes. If your harness is done, don't touch anything. Wait for the second prompt.
[16:15:00] Rafa: While we wait. Look at what your agent wrote under tacit. That line is the seed of tomorrow's failure. Whatever it put there is the thing the other agent won't know.
[16:16:30] Sachin: Five on the branch, one in the channel. Good enough; second block goes up in ninety seconds, and it'll see four or five files depending on when Ingrid's lands.
[16:18:00] Rafa: Second prompt. Sachin's pinning it now. Block two. Same thing, paste it, say "do this".
[16:18:15] Rafa: What it does. It pulls the repo, so it can see the other five files. It reads them. It tells you the two inventories closest to yours and why. And it checks that your own file has a log line, and writes one if it doesn't.
[16:18:40] Rafa: Write the two names down. Those are the seeds for the triads tonight. Sachin's already got provisional triads from the registration form. If your agent disagrees with him, say so in the channel and he'll look.
[16:19:00] Rafa: Ingrid and Aiko, you can't run this one yet. Ask your triad-mate to tell you what their agent said about you. That's a bridge, by the way. A bad one. We'll do better tomorrow.
[16:19:10] Sachin: Question in the channel: can I read the inventories in the browser now? No. Tomorrow. Today only through the agent. It's the rule for a reason, not a trick.
[16:19:35] Ingrid: Sorry, Rafa, before Dev answers, I should say this. While the others were running the second block I opened the inventory folder on the website and read Dev's and Marisol's files, because I could not run anything and I wanted to have something to say. I have just seen Sachin's message that we must not. I am sorry; I have closed it.
[16:19:50] Sachin: Thank you for saying so, Ingrid. No harm; the rule is for the exercise, and you've just logged the exception yourself, out loud, which is more than most people do.
[16:19:20] Rafa: Three minutes.
[16:20:30] Rafa: If your agent says only three inventories landed, it didn't pull. Tell it to pull and run again.
[16:20:50] Sachin: Correction from the branch, Rafa: three others is right for the harness people. Ingrid's is landing from the website now and Aiko's is still in the channel, so a pull sees four files, not six. Nobody's agent is wrong.
[16:21:10] Tomás: Rafa, mine came back. I'll just read it. It says — "Nearest: devr, governance-call digest, documents in, a decisions table out, fortnightly like the newsletter. Marisol, precedent search, an archive in, what-was-decided-and-where out, the same shape as the claim ledger. The log line exists on GitHub." So not Kwame. I have not looked at either file, or at mine, but that is what it says. I'll put it in the channel.
[16:21:15] Rafa: And if it names me, that's the example file. Tell it to skip anything starting with an underscore. That's a bug in my instructions, I'll fix it tonight.
[16:22:00] Rafa: Right. Log lines. Sachin's agent has scanned every inventory for a line under the log heading. Sachin, read the list.
[16:22:05] Sachin: Scanned a minute ago. Dev: two S1 lines and the memory line, fired. Tomás: three S1 lines, memory line in, fired. Marisol: nine S1 lines, the most in the room, and I pushed them for you, fired. Kwame: the line is on GitHub in 78e46ca, but the clone you did the pre-work in doesn't have it, because the harness was open in the other folder. Ingrid: the file is there, the Log heading is empty. Aiko: not on the branch yet; a hand-written line in the channel, which is honest but isn't the harness. So, four fired, one fired from the wrong folder, one couldn't, one didn't.
[16:22:30] Ingrid: That is right, I have nothing under Log. The block said the harness writes that line, and I did not have one, so I left the heading empty rather than write something that was not true. I will stay for the clinic.
[16:22:30] Aiko: Mine may not count either: the log line in my file is hand-written and says "no harness", so if the scan wants a harness line, it will not find one. If that puts me in 1A — it is 01:30 here in three minutes. Could my part of the clinic be written instructions I do in my morning, and you or the pin tell me what "fixed" looks like?
[16:22:45] Rafa: So that's two missing.
[16:23:00] Kwame: Understood. What I see is in the channel; the file on GitHub has the line, my clone does not. I will stay for the clinic. Kwame, that's the Codex-outside-the-folder thing. Ingrid, you never had a harness, so no surprise. Both of you stay for the clinic, it's a five-minute fix. Everyone else, your harness is writing the record for you. That's the marker trace. It fired.
[16:23:10] Rafa: Awareness check. The grid from the start. Which box did this hour expand for you. One word. Precommodification, traces, anchored, playability. Same order as the ice-breaker. Ingrid.
[16:23:20] Ingrid: Anchored. Sorry, one word. Anchored.
[16:23:40] Rafa: Dev.
[16:23:45] Dev: Traces. Reading Kwame's file through the agent told me more about the shape of my own than writing mine did.
[16:24:00] Rafa: Marisol.
[16:24:05] Marisol: Anchored. My file says what I actually have, which is a stub, and the log says who wrote which line.
[16:24:20] Rafa: Tomás. One word.
[16:24:25] Tomás: One word. My agent just told me my nearest neighbours are Dev and Marisol, and I did not know that, and I have not read their files, or mine, and it wrote mine. So it was already in there. Precommodification.
[16:24:45] Rafa: Aiko.
[16:24:50] Aiko: Anchored. The line about what the partners will not take on. I had never written it down before tonight.
[16:25:05] Rafa: Kwame.
[16:25:10] Kwame: Traces.
[16:25:25] Rafa: Sachin's tallied it in the channel. I expected precommodification to win, because reading the two nearest inventories through your agent usually shows more overlap than people like. We'll see if I was right when I read the tally. No corrections from me; your answer is your answer.
[16:25:40] Sachin: Tally's up. I'm not reading it out; it's in the channel.
[16:25:50] Rafa: The question to carry to tomorrow: how do bridges show up in a kit era. Nobody knows. That's Tuesday. Sachin, logistics.
[16:26:05] Sachin: Three things and then you're free. First, Async 1. It's three hours, not an evening, because the next session is tonight at 20:00 UTC. That's 22:00 in Berlin, 13:00 Pacific, 05:00 in Tokyo, sorry Aiko.
[16:26:30] Sachin: So Async 1 is small. I'll post a file in the channel at 16:32 called async-1. Open your harness inside the clone, paste the whole thing, say "do this". It drafts your kit's README from the inventory. Two paragraphs. What job, for whom, what goes in, what comes out. Then you rewrite two lines of it by hand. That's all. Push it before 20:00.
[16:27:00] Sachin: If you're going to the clinic, do Async 1 after the clinic, not before.
[16:27:10] Sachin: Second, the clinic. 1A. It starts in three minutes, right here in #kafka, and it isn't recorded. Ingrid, Aiko, Kwame, stay. Marisol, stay if you want to do your own push tonight; otherwise I'll keep pushing for you and that's fine too. Anyone else with a red error, stay.
[16:27:40] Sachin: Third, triads. I'll confirm them in the pin at 16:45 from the inventories. Provisional ones are already there. Tonight you build the kit and then your triad reads each other's kits cold. Instructions will be pinned before the rooms open; you won't need to remember anything from now.
[16:28:05] Sachin: Reading, if you want it, is pinned in order. Nothing is required before tonight. The kit exercise needs your inventory and your harness, and you've got both.
[16:28:25] Sachin: Last question, anyone? Voice or channel.
[16:29:00] Sachin: Okay. That's Session 1. Thank you. Recording's coming off. Clinic people, stay in voice.
[16:29:30] Sachin: /stop

(Copied from the recorder by Sachin at 16:50 UTC; one segment, 15:30–16:29:30. 1A not recorded.)
