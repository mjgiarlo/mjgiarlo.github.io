---

title: Plugin updates
wordpress_id: 190
wordpress_url: https://mike.giarlo.name/blog/?p=190
date: 2008-11-16 17:40:09 -05:00
---
I finally pushed out some embarrassingly outdated WordPress plugin updates a few moments ago.

<ul>
	<li>Updated unAPI plugin with a patch contributed by <a href="http://www.linkedin.com/in/jayluker" target="_blank">Jay Luker</a> that removes the hard-coded "wp_" table prefix.  The updated version of the plugin has been tagged as 1.4.1.</li>
	<li>Updated LinkPURL plugin with a patch contributed by <a href="http://matienzo.org/" target="_blank">Mark Matienzo</a> that enables <a href="http://purl.oclc.org/docs/inet96.html#partial" target="_blank">partial redirects</a>.  I made some additional tweaks to the plugin to make this feature configurable via the WordPress management UI.  This has been tagged as 1.1.</li>
	<li>Created a new unAPI plugin branch for Mark Matienzo's <a href="http://about.scriblio.net/" target="_blank">Scriblio</a>-oriented tweaks.  The branch is called 1.4.1-anarchivist-scriblio and it contains the scriblio.diff file.  I have yet to integrate the diffs, as the file that was patched has changed since the patch was issued.  If anyone is interested in working on unAPI/Scriblio integration, please get in touch with me.</li>
</ul>

And here is my to-do list which I hope will keep me honest.

<ul>
	<li>Update OAI-ORE plugin to support version 1.0 of the ORE specification.</li>
	<li>Add per-post (and per-page?) resource maps that wrap all embedded images and links.</li>
	<li>Enable "cool URIs" for all resource maps.</li>
</ul>

It is my hope that I'll get to those sometime before the summer begins.  :)
