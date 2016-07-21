--- 
layout: post
title: Lynx and HTTPS/SSL on Ubuntu (8.10)
wordpress_id: 269
wordpress_url: http://lackoftalent.org/michael/blog/?p=269
date: 2009-01-12 13:46:15 -05:00
---
Dear Future Me,

It has been a while, hasn't it?  Yes, it has ((In the future you will have evolved beyond answering your own questions, no doubt, but here in the past, in this quaint and backwards era, it is quite common to hold conversations with yourself.  Or myself.  But I (i.e., you) digress!  (We digress in the past as well!  Quite the confusing state of affairs, conversationally speaking!) )).

Did you try to view an HTTPS/SSL URL in Lynx ((Do they even have Lynx in that brave new world of the future?  Does the lynx <a href="http://en.wikipedia.org/wiki/Lynx" target="_blank">species</a> still exist?  Did the polar ice caps melt and wipe out all non-domesticated felines?  Inquiring, unevolved minds of the past want to know! )) again, only to be met, most cruelly, with the following error message?<blockquote>
$ lynx https://example.org/resource/ ((I am assuming that in the future <a href="http://en.wikipedia.org/wiki/Example.com" target="_blank">example.org</a> remains a reserved dummy domain.))
<br/>
Alert!: This client does not contain support for HTTPS URLs.
</blockquote>

Well, have no fear!  The lynx package, at least within the aptitude repositories for Ubuntu 8.10 (Intrepid Ibex), has no SSL support as you have just witnessed.  The lynx-cur package, on the other hand ((I hear that in the future hands will be replaced by hooks and detachable chainsaws and the like?)), does!  Support SSL, that is.  Fix yourself thusly:<blockquote>
$ sudo apt-get install lynx-cur
</blockquote>

<em>N.B.</em> the new lynx looks for its configuration in a different place than the old lynx, so you may need to fiddle with things if you've tricked out lynx with bells and whistles and racing stripes and nitrous boosts.  Otherwise, huzzah!
