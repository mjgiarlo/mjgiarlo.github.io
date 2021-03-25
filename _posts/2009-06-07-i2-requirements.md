---

title: "I2: Requirements"
wordpress_id: 327
wordpress_url: https://mike.giarlo.name/blog/?p=327
date: 2009-06-07 17:14:56 -04:00
---
[<a href="https://mike.giarlo.name/blog/category/niso-i2/">Series</a>]

The I2 IR scenario subgroup approached the issue of institutional identifiers in repositories by first brainstorming about the various issues, problems, and sticking points that make identifiers in this space (and elsewhere) such a complex topic.  Folks on the subgroup are repository managers or are otherwise involved with or knowledgeable about the repository space, so the brainstorming exercise yielded a good number of concerns.

The purpose of the exercise was to enumerate concerns and issues that could inform a draft survey to be administered to repository managers and experts around the globe in different organizational contexts: libraries, subject disciplines, archives, historical societies, etc.  The purpose of the survey is to get an idea of the use cases and constraints around institutional identifiers in these different repository contexts, the assumption being that we ought to have requirements grounded in real world usage before we go off building a standard.

I will note here that the subgroup has worked up a draft survey that has just recently been reviewed by a small group of folks who know about survey design, and we hope to administer the survey to the aforementioned <em>Reporati</em> this week[^1].  Which is to say that I don't yet have a strong grasp of the use cases out there in the wild, and this series should be construed as my own premature cognitive fumblings.  But let's assume for now that what we learn from the survey results matches our initial brainstorming exercise.

Here is a slightly modified and boiled down version of the concerns and issues the subgroup came up with for a potential institutional identifier standard, which resembles a set of minimum requirements:

<ol>
	<li>Should be agnostic to type of institution, e.g., libraries, museums, personal collections, historical societies</li>
	<li>Should handle varying institutional granularity, e.g., institution-level, campus-level, division-level, unit-level</li>
	<li>Should handle linking among institutions and subordinate units</li>
	<li>Should express different sorts of relationships among these institutions and units</li>
	<li>Should relate to existing relevant identifiers and registries</li>
	<li>Should be globally unique</li>
	<li>Should be actionable</li>
	<li>Should enable retrieval of metadata sufficient to identify the institution, which may vary widely by institution</li>
	<li>Should accommodate changes as institutions come and go and re-organize and be able to relate defunct institutions to new ones</li>
</ol>

I doubt the list is exhaustive; I am almost certain we will uncover all sorts of tangly and esoteric use cases that add requirements.  I expect it.  Why else would we be gathering to discuss the need for an institutional identifier if it were a solved problem or a simple one?[^2]

Nevertheless, looking at the above list, the task we've taken on starts to feel less onerous.  And thinking about identifier systems constrained by the list of concerns, the mind starts to cook up all sorts of possible solutions.  I'll share one in the next post in this series, a strawman proposal of sorts, and how it addresses each of these requirements.

[^1]: We will also x-post to repo-related mailing lists as well, and some of us may blog or tweet about it.  My inclination is to cast as wide a net as possible so as not to miss important use cases.  We can always scope things out later on, but it's useful to be inclusive at this point lest our own assumptions carry the group forward.
[^2]: The cynical among you might have interesting answers to this question.
