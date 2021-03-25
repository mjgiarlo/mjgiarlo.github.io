---

title: Use cases for Handle identifiers?
wordpress_id: 107
wordpress_url: https://mike.giarlo.name/blog/2007/10/05/use-cases-for-handle-identifiers/
date: 2007-10-05 00:13:40 -04:00
---
Reading Adam Smith's D-Lib <a href="http://dlib.org/dlib/september07/smith/09smith.html" target="_blank">article</a> has got me thinking about identifiers again.  I don't agree with some of the assertions in the section titled "A Persistent Identifier Primer" -- URIs <em>are</em> in fact persistent; we just break them through poor management -- and so I'm led to a fundamental question: what are the good use cases for Handle (or ARK, or PURL) identifiers?

I get the need for persistent and globally unique identifiers; I'm just wondering why one needs special software with a separate URI namespace to gain persistence.

One potential use case might be resources that are outside of the organization's control -- i.e., licensed content from vendors -- but surely folks are using Handles for many resources that are created and managed <em>within the organization</em>.  And I'm curious why they have decided that Handles are more durable than native URIs (the URIs to which Handles redirect), and how they deal with the problem of downstream (post-redirection) citation and bookmarking.  How useful is this sort of identifier scheme if your users never even see the supposedly more persistent URI for a resource?

As a former proponent of Handles and ARKs, this may seem like a hypocritical question to pose.  If I had to answer my own question, I would say that Handles seem like a good option because they save you some work and headaches in the short-term; you don't need to get together with your web team and come up with a scalable and sustainable URI policy; just assign native URIs in the usual haphazard way and generate Handles to compensate for a lack of identifier policies.

But if you're already making an organizational commitment to identifier persistence -- and if you're rolling out Handles, I'd wager that's likely -- why not do so by minting carefully-considered <a target="_blank" href="http://www.w3.org/Provider/Style/URI">cool URIs</a>?  Less management and technology overhead and less confusion for your users are two good reasons to consider it.
