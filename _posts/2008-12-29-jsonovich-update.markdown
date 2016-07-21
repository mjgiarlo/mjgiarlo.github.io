--- 
layout: post
title: JSONovich update
wordpress_id: 251
wordpress_url: http://lackoftalent.org/michael/blog/?p=251
date: 2008-12-29 21:00:32 -05:00
---
<a href="/michael/blog/json-in-firefox">JSONovich</a> is now up to version 0.6.  Recent revisions have added the following functionality:
<ul>
  <li>Reads in JSON and converts to UTF-8 for some naive Unicode handling</li>
  <li>Wraps long lines at the right edge of the window</li>
  <li>Adds a check to see if a native JSON parsing library is already loaded (as will be the case in Firefox 3.1). Uses that library if so, otherwise loads the module included in JSONovich.</li>
  <li>Handles JSON syntax errors more gracefully. Used to eat bad data and display nothing, but syntax errors (from the JSON parser) are now surfaced.</li>
</ul>
I've also tossed the source up on <a href="http://code.google.com/p/jsonovich/" target="_blank">code.google.com</a> for version control.

In the meantime, those of you who are using JSONovich can help increase its exposure by heading over to its entry at <a href="https://addons.mozilla.org/en-US/firefox/addon/10122" target="_blank">addons.mozilla.org</a>, logging in, downloading, rating, and reviewing the extension.  Reviews and ratings help get extensions "promoted" from the sandbox to the public site, which provides the ability for automatic updates when new versions of the extension are released.
