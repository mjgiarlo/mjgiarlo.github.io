---
title: "Ingest is a barrier to ingest"
date: 2011-02-11 11:35:51 -07:00
---
Last week I attended the latest iteration of one of my favorite conferences, [Code4Lib 2011](http://code4lib.org/conference/2011), which included a full-day [CURATEcamp](http://curatecamp.org/) hackfest as a pre-conference session (sponsored by the [Digital Library Federation](http://www.clir.org/dlf.html)).  Rather than writing up a full report of the event -- no one really reads those, right? -- I wanted to comment on a conversation from the hackfest.

A group gathered to discuss digital forensics, specifically in the context of forensics work done pre-ingest.  I've heard other folks talk about pre-ingest processes and so I wondered aloud: what does it say about our repositories, and the ingest process, that we do so much pre-ingest?  The consensus was that the ingest process is frequently expensive.  A subgroup split off to explore this.

The ingest process is a topic I'm keenly interested in since we (Penn State's [digital stewardship program](http://stewardship.psu.edu/)) are in the middle of building a prototype ingest application ("[CAPS](http://github.com/DanCoughlin/caps)").  If we can learn some lessons from our peers about how to make ingest easier and faster, the timing is right to build on these lessons and make novel, more interesting mistakes rather than boring, well-known ones.

Here are the barriers to ingest that were identified:

*   **Identifiers are precious** -- Ingesting an object usually kicks off a series of processes, one of which mints a new identifier for an object.  There is a perception that identifiers are a limited commodity, that they are somehow precious or rare.
*   **Promise of permanence** -- There is a perception that ingesting an object creates a contract for the permanence of that object.  The contract may be illusory depending on the "repository" into which the object was ingested.
*   **Findability** -- Once an object is ingested, it is difficult to find.  I would have liked to pursue this point a bit further.  What it suggests to me is that in some contexts, the repository has not been sufficiently incorporated into the workflows or work environments of those doing the ingest, so it feels like alien territory rather than the local filesystems and mapped drives they are accustomed to.  Pure speculation on my part.
*   **Complex downstream workflows** -- Given that ingest is a series of processes, there is concern that "just ingesting something" might cause breakage downstream.  For instance, if an object is ingested, is it automatically published somewhere end-users can get to it, and has the object been fully prepared for publication?  One such workflow might be automatic generation of derivatives, which is an expensive operation for certain formats and large files.
*   **Rights** -- Related to the above bullet, there is concern that end-user access rights be cleared in advance to ingest, for fear that the object will wind up in the wrong hands.
*   **Metadata** -- The ingest process requires too much metadata input.  This concern is tied to findability above, and together they suggest an all-too-familiar tension: how much metadata is enough to make an object findable later, and how much is enough to make the ingest process cumbersome?
*   **Psychological factors** -- There is a mindset wherein curation happens outside of the repository and preservation happens inside -- that these are distinctly different activities which happen serially if at all -- in which case one might be loath to ingest an object until it's "ready" for the repository, whatever that means.
*   **Personal time** -- The ingester simply lacks the time to push the right buttons.
*   **Software performance** -- The ingest process is slow due to lack of optimization, lack of attention to scale, lack of performance tuning, and so forth.

There are a number of lessons to be learned from the above.  I'll write soon about those and how we're applying them to our CAPS project at Penn State.

Have any barriers to add to the list?
