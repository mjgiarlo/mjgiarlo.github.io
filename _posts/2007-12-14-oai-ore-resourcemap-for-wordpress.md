--- 

title: OAI-ORE ResourceMap for WordPress
wordpress_id: 111
wordpress_url: http://lackoftalent.org/michael/blog/2007/12/14/oai-ore-resourcemap-for-wordpress/
date: 2007-12-14 17:14:38 -05:00
---
This is very rough, but here's a WordPress plugin that provides a <a href="http://lackoftalent.org/michael/blog/wp-content/plugins/oai-ore/rem.php" target="_blank">resource map</a> for the aggregation of all posts within an installation of WordPress.  I'll be working on this some more, but for now, it does appear to work and validate (as Atom).  Useful?  If so, I'll zip it up and commit it to the wp-plugins svn.

Note:<a href="http://inkdroid.org/journal/" target="_blank">Ed</a> reminds me that xsltproc can be used to transform the Atom-based resource map into RDF via GRDDL:

<code>xsltproc http://www.openarchives.org/ore/atom-grddl.xsl http://lackoftalent.org/michael/blog/wp-content/plugins/oai-ore/rem.php</code>

<strong>Update:</strong> The plugin has its own <a href="http://lackoftalent.org/michael/blog/ore-wordpress-plug-in/" target="_blank">page</a>.
