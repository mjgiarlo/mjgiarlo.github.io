--- 

title: OAI-PMH in XQuery
wordpress_id: 104
wordpress_url: http://lackoftalent.org/michael/blog/2007/09/25/oai-pmh-in-xquery/
date: 2007-09-25 13:48:44 -04:00
---
Thanks for the nod, <a href="http://thedil.wordpress.com/2007/09/25/xquery-and-oai/" target="_blank">Winona</a>.  Hopefully you folks will get some good use out of the <a href="http://diglib2.princeton.edu/oss/wiki/xqOAI" target="_blank">XQuery-based OAI-PMH data provider</a> I've been working on.

I just want to clarify that only one small bit of the code is specific to X-Hive, and that's a call to an extension that gets last-modified dates from the X-Hive service.  We do not reliably store this information in the metadata itself, and so I needed to go this route.  Some folks do store this in MODS or elsewhere in descriptive or administrative metadata.  It should be a two-line change to short-circuit this behavior (xhive-exts:last-update() is only invoked in two places, I believe).

I'm currently working on adding EAD support, modularizing things a bit more, and streamlining configuration.  resumptionTokens will come after that, I hope.

I'll be interested to hear more of UVM's implementation and how I can make this thing more useful to others.
