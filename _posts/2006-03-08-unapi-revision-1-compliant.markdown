--- 
layout: post
title: unAPI revision 1-compliant
wordpress_id: 29
wordpress_url: http://lackoftalent.org/michael/blog/2006/03/08/unapi-revision-1-compliant/
date: 2006-03-08 00:04:33 -05:00
---
I noticed <a title="dchud's unAPI.info announcement" href="http://onebiglibrary.net/projects/unapi/unapi-info" target="_blank">Dan Chudnov's earlierÂ note</a> about the launch of the <a title="unAPI.info" href="http://unapi.info/" target="_blank">unAPI website</a>Â and noted in particular the the <a title="unAPI revision 1 spec" href="http://unapi.info/specs/" target="_blank">unAPI revision 1 specification</a>.Â  I decided to give Technosophia a run through some error cases and some of the errors came up as 400 where they should have been 404 or 406.Â  I made a few minor tweaks to <a title="unAPI WP plugin" href="http://www.wallandbinkley.com/quaedam/?p=59" target="_blank">pbinkley's unAPI WordPress plug-in</a>Â and I believe Technosophia is now fully compliant with unAPI revision 1.Â 

Here are the test cases I used:
<ul>
	<li><a href="http://www.lackoftalent.org/michael/blog/unapi.php" target="_blank">/unapi.php</a>
<strong>200 Ok</strong></li>
	<li><a href="http://www.lackoftalent.org/michael/blog/unapi.php?uri=oai%3Alackoftalent.org%3Atechnosophia%3A25" target="_blank">/unapi.php?uri=oai%3Alackoftalent.org%3Atechnosophia%3A25</a>
<strong>300 Multiple Choices</strong></li>
	<li><a href="http://www.lackoftalent.org/michael/blog/unapi.php?uri=oai%3Alackoftalent.org%3Atechnosophia%3A25&format=mods" target="_blank">/unapi.php?uri=oai%3Alackoftalent.org%3Atechnosophia%3A25&format=mods</a>
<strong>200 Ok</strong></li>
	<li><a href="http://www.lackoftalent.org/michael/blog/unapi.php?uri=oai%3Alackoftalent.org%3Atechnosophia%3A25&format=BADFORMAT" target="_blank">/unapi.php?uri=oai%3Alackoftalent.org%3Atechnosophia%3A25&format=BADFORMAT</a>
<strong>406 Not Acceptable</strong></li>
	<li><a href="http://www.lackoftalent.org/michael/blog/unapi.php?uri=BADURI&format=mods" target="_blank">/unapi.php?uri=BADURI&format=mods</a>
<strong>404 Not Found</strong></li>
	<li><a href="http://www.lackoftalent.org/michael/blog/unapi.php?format=mods" target="_blank">/unapi.php?format=mods</a>
<strong>400 Bad Request</strong></li>
</ul>
Woohoo?

Â 
