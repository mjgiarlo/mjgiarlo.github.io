---
title: "Web discovery and library resources, or, SEO 101"
date: 2010-02-19 12:08:51 -07:00
---
I attended the Penn State library faculty research [colloquium](https://web.archive.org/web/20160705200049/http://search.twitter.com/search?q=psulrq) on Wednesday, during which I learned all sorts of things about the interesting research being done by my colleagues in the University Libraries.  One very interesting talk was by Doris Malkmus, one of our archivists, who was studying how history professors use primary sources, online and otherwise, in their undergraduate lectures.  It was no surprise to me that the #1 discovery method for online primary sources was Google, and that institutional repositories hardly rank at all.

(Sidebar: I wonder: with online content fragmenting, multiplying, and getting remixed and aggregated, does the definition of "primary source" strain for digital networked resources?)

This discovery elicited a number of responses about how difficult search engine optimization is and how we really need to ramp up our marketing efforts.

I wouldn't argue with either reaction, really.  I do sense a huge missed opportunity here, though, one that we are perfectly capable of not missing.  And let me be perfectly clear: I'm no SEO expert.  But let me also say that I've seen, firsthand, major SEO advancements in libraries I've worked at, and much of the work was pretty straightforward.

I [tweeted](https://web.archive.org/web/20160705200049/http://twitter.com/mjgiarlo/statuses/9257943271) my "SEO for dummies" list and got a couple of [very](https://web.archive.org/web/20160705200049/http://twitter.com/dchud/statuses/9266883971) [good](https://web.archive.org/web/20160705200049/http://twitter.com/vphill/statuses/9259297130) responses in addition to a retweet or two.  Here's what I said:

> Googleability = increased findability + low-cost marketing. How do to it: 1\. allow crawlers; 2\. clean URLs; 3\. rich item metadata; 4\. links.

To this list, folks suggested I add "0\. stable application" and "5\. sitemaps", both key suggestions, though I don't have much experience with sitemaps so I won't say more about those.

What's my point?  It's not rocket science to get our web resources discoverable on Google and the other major search engines.

What's the value in that?  More people are going to find library materials via a Google search than by navigating the dark alleys and dead ends of library websites.  Yes, our silo boundaries have been useful to us to keep dissimilar materials apart for management and such, but no, they are totally useless to our users.  My former colleague [Ed Summers](https://web.archive.org/web/20160705200049/http://inkdroid.org/ehs) reminded me today that a silo is not really a silo if it's on the web.  Merely being on the web isn't enough, though, and here are the simple and practical lessons I've learned that may be the difference between getting found on Google and "NO JUICE FOR YOU!"

1.  **Stable application**: If your site isn't reliably up, user-agents will have a hard time finding it.  That means disgruntled users and crawlers who never fully find you.
2.  **Allow web crawlers**: Unless you have a really compelling (read: legal) reason to disallow crawlers (and robots and spiders, oh my), you really ought to allow them.  But only if you care about discoverability.  If your app cannot handle the load of crawlers, go back to #1 and start over.  Hire an engineer who knows about scale and performance, preferably.  (See anecdote 1 later in this post.)
3.  **Clean URLs**: I'm not sure this is entirely necessary for SEO, to be honest, but it does seem like a common practice among those who are good web citizens.
4.  **Rich item metadata**: Collection-level metadata is not good enough.  Collections are a useful abstraction for librarians but less so for users.  Rather than impose a collection view upon users, move relationships among items and common metadata elements into item pages.  (See anecdote 2 later in this post.)
5.  **Links**: Link out to stuff.  Get folks to link in to your stuff.  (See anecdote 3 later in this post.)


**Anecdote 1**: The Library of Congress has a digital newspaper application called [Chronicling America](https://web.archive.org/web/20160705200049/http://chroniclingamerica.loc.gov/).  At the time it was created, it served as a test bed for some technologies that had not seen wide uptake at the Library, but in time its developers realized the architecture couldn't keep up with the traffic coming in from the web crawlers.  A robots.txt file was created restricting crawlers and time went by.  The application was rebuilt from the ground up with the intent "to increase the usability of [the] application by providing faster responses to HTTP requests, allowing these requests via standardized APIs, as well as allowing all pages to be crawled by search engines."  The results were remarkable: average hits per day grew from roughly 75,000 to nearly 500,000.

**Anecdote 2**: When the Library of Congress went live with the [World Digital Library](https://web.archive.org/web/20160705200049/http://www.wdl.org/en/), clearly helped by a massive press event at UNESCO in Paris (the largest such event in UNESCO history, apparently), its developers watched the mentions roll in via [Twitter Search](https://web.archive.org/web/20160705200049/http://search.twitter.com/search?q=wdl).  The most interesting thing I learned that day is despite all the cool maps and timelines and facets, users were primarily linking directly to item pages (each of which was helped by surfacing all of the rich descriptive metadata as well as links to related and similar items).

**Anecdote 3**: The digital initiatives team at the University of Washington libraries has done some [studies](https://web.archive.org/web/20160705200049/http://www.dlib.org/dlib/may07/lally/05lally.html) assessing the impact of adding links to their digital collections from Wikipedia pages.  Usage spiked after the links were put in place, thanks to Wikipedia's popularity and the mechanics of Google's PageRank algorithm for judging relevance.

These are practical steps we can take, and frankly may be the best marketing (judging cost v. impact) libraries can do to increase usage of our digital materials.
