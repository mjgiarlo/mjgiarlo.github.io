--- 

title: Is MARC a data model?
wordpress_id: 452
wordpress_url: http://lackoftalent.org/michael/blog/?p=452
date: 2009-08-10 08:49:55 -04:00
---
I posted a status update to <a href="http://twitter.com/mjgiarlo/statuses/3215173861">Twitter</a>, <a href="http://identi.ca/notice/7827179">identi.ca</a>, and <a href="http://facebook.com/mjgiarlo?story_fbid=255213260600">Facebook</a> late last night hoping to suss out two questions:<ol>
<li>Is MARC a data model?</li>
<li>But really: what qualifies something as a data model?</li>
</ol>

I'd poked around looking for clues to the latter and was left cold by the long Wikipedia entry.  Maybe I've been doing the micro-blog thing for too long and my ability to parse information that comes in greater-than-140-character chunks has been damaged.  Plus I like learning from examples, and what better example for the library geek than MARC?

The feedback I received was pretty impressive, and not all of it consistent with the rest.  I found it an interesting example of crowdsourcing, so to speak.  As each response came in, I would read it, cross-reference with, e.g., Wikipedia articles, for accuracy, and revise my own answers to the above questions.  I'm honing in on an answer to the former question.  The latter question is still a bit murky.

I thought I'd share the responses, too.  Responses from Twitter are included in full w/ links to the original.  Responses from quasi-public Facebook have been anonymized.  You can see my replies interspersed as well and watch the evolution of the (admittedly short) discussion.  After the jump:
<!--more-->
<blockquote><a href="http://twitter.com/bangpound/statuses/3215214058">@bangpound</a>: @mjgiarlo MARC is a markup language. It makes no declarations about how data is stored only how it's formatted.</a></blockquote>

<blockquote><a href="http://twitter.com/ranginui/statuses/3215591211">@ranginui</a>: @mjgiarlo a piece of crap, cue neil young and crazy horse</blockquote>

<blockquote><a href="http://twitter.com/anarchivist/statuses/3216566687">@anarchivist</a>: @mjgiarlo not a data model, it's a transmission format</blockquote>

<blockquote><a href="http://twitter.com/vphill/statuses/3216984096">@vphill</a>: @mjgiarlo I've heard that said about MARC too, let me know if you get an answer</blockquote>

<blockquote>A container for a data model, such as AACR2</blockquote>

<blockquote><a href="http://twitter.com/mjgiarlo/statuses/3217501084">@mjgiarlo</a>: @bangpound, @anarchivist, @vphill: So. let's see: MARC21 bib is a profile of a serialization/transmission format w/ AACR2 as the data model? </blockquote>

<blockquote><a href="http://twitter.com/anarchivist/statuses/3219349208">@anarchivist</a>: @mjgiarlo wouldn't even assume AACR2 if I was you.</blockquote>

<blockquote><a href="http://twitter.com/mjgiarlo/statuses/3223365237">@mjgiarlo</a>: @anarchivist: Okay. Something says "authors go in 100; contributors go in 700," though, right? Is that not a data model? Sorry if dense.</blockquote>

<blockquote>MARC is not a data model (and neither is AACR2) in the sense that neither of them explicitly describes entities and relationships among entities. The relationships in these two non-relational frameworks are implicit, and the semantics of the model must be supplied in the end by the people who use these frameworks. RDA/FRBR is a move toward an actual data model -- it makes some relationships explicit and can properly be represented in an Entity-Relationship diagram (with all those relationship words that explicitly express the semantics -- words like, for example, "is realized through" or "is embodied in" or "is exemplified by"), but even RDA/FRBR does not fully express all of the relationships/semantics and must be translated into an actual data model in order to be implemented -- librarians have been irresponsible, in my opinion, in refusing to learn about relational database concepts, mostly because of their slavish adherence to the old flat-file style that MARC represents.</blockquote>

<blockquote><a href="http://twitter.com/gmcharlt/statuses/3223446556">@gmcharlt</a>: @mjgiarlo MARC is many things at once, which is part of the problem. Not just transmission standard; embodies current cataloging worldview</blockquote>

<blockquote><a href="http://twitter.com/edsu/statuses/3224290838">@edsu</a>: @mjgiarlo i think there are aspects of data modeling in Z39.2 & ISO 2709, and certainly in MARC21 ; that said, i think @gmcharlt is right.</blockquote>

So, based on all the responses I've gotten (on Facebook, on Twitter, around the office), here's my current thinking:
<ul>
<li>MARC means more than one thing.</li>
<li>One meaning of MARC is MARC the binary format. A format is not a data model.</li>
<li>Another meaning of MARC is, e.g., MARC21 Bibliographic.</li>
<li>MARC21 Bibliographic is a profile of MARC, which is serialized in the MARC binary format.</li>
<li>MARC21 Bibliographic defines semantics for fields and subfields and indicators, which makes it feel like a data model.  This gets at some of the assumptions I've internalized about data models.</li>
<li>The MARC21 Bibliographic data model thus has well-defined entities, but otherwise is a poor data model, primarily because:<ol>
<li>It does not have well-defined relationships between the entities;</li>
<li>It conflates different conceptual models, such as the FRBR Group 1 entities and also mixes FRBR Group 1 entities with Group 2 and 3 entities.</li>
</ol>
</li>
<li>I'm not sure where this leaves AACR2, but it feels like it just fell out of the discussion.</li>
</ul>

I'd be pleased if the discussion continued.  If nothing else, it really satisfies my curiosity and gets my brain going (which is useful on a Monday morning).

