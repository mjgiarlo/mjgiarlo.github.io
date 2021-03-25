---
title: "Understanding (e.g.) DOIs for data sets"
date: 2012-10-27 18:06:51 -07:00
---
Data citation is a topic that frequently comes up in conversations around data management. During a call with a community of data curators yesterday, I was asked whether ScholarSphere supported [DOIs](http://www.doi.org/) for citing data sets.

I have to admit that while I understand the value of data citation — tracking use & re-use, measuring impact of data sets independent of their publications, giving credit to data publishers, &c. — I continually get stuck on how identifiers such as DOIs from [DataCite](http://datacite.org/) or [ARKs](https://wiki.ucop.edu/display/Curation/ARK) from [EZID](http://www.cdlib.org/services/uc3/ezid/) fit into the picture. Or, rather, why such indirect identifiers are valued more than the native HTTP URIs that are minted and managed by data repositories. Here I assume that these data repositories are run by institutions whose missions & business interests include a commitment to persistence of content and identifiers held within their repositories. (Is that a faulty or naïve assumption?)

The argument for indirect identifiers — identifiers that point at and resolve to other identifiers — like DOIs usually goes like this: hey there, cultural heritage organizations and publishers have done a pretty poor job of persisting their identifiers so far, partly because they didn’t grok the commitment they were undertaking, or because they weren’t deliberate about crafting sustainable URIs from the outset, or because they selected software with brittle URIs, or because they fell flat on some area of sustainability planning (financial, technical, or otherwise), and so because you can’t trust these organizations or their software with your identifiers, you should use this other infrastructure for minting and managing quote persistent unquote identifiers.

**SIDEBAR**: That’s a lot of becauses, all of which (to be perfectly frank) are painfully true. As an employee of a service provider within a very large academic library, I find this unacceptable. The solution from my perspective is not to punt responsibility for persistent identifiers. The solution is to confront each of those becauses and learn from our mistakes, and (as information service providers who oughta know better) to better steward and manage identifiers for data sets (and other deposits). I digress.

Are there other compelling arguments for using indirect identifiers to cite data sets? This is where you come in.

Back to the main point. Here is the million-dollar question about using (e.g.) DOIs for data sets: who manages these DOIs? Is it the service provider (such as DataCite, or [Penn State ScholarSphere](http://scholarsphere.psu.edu/))? Or is it the owner of the data set?

If it’s the service provider, how are they to know when data owners move their content elsewhere? And how does that scale?

If it’s the data owner, uh, really? Do we realistically expect data owners to manage their own DOIs? I may be being cynical here, but I somehow don’t see that happening on any scale that has an appreciable impact on the broader issue of data citability and identifier persistence.
