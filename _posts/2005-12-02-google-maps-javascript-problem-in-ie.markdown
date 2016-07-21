--- 
layout: post
title: Google Maps JavaScript problem in IE
wordpress_id: 13
wordpress_url: http://lackoftalent.org/michael/blog/2005/12/02/google-maps-javascript-problem-in-ie/
date: 2005-12-02 22:51:00 -05:00
---
Internet Explorer likes to throw the "Operation Aborted" error when trying to hook into the Google Maps API via JavaScript, at least when the JavaScript is placed where it is supposed to, i.e., a reference to the Google Maps JavaScript in the page HEAD and the actual rendering of the map within the DIV tag.

To fix this in IE, move the DIV block JavaScript code near the bottom of your HTML. Place it right between the terminating BODY tag and the terminating HTML tag. The problem seems to be that IE gets all confused when JavaScript attempts to make modifications to the page -- e.g., sucking down a map from Google -- while still rendering the body HTML. There are a couple other fix options here:

http://www.mapki.com/index.php?title=FAQs#Browser_Problems

It is worth noting that this "fix" does not break functionality in Firefox. And, really, who cares about the other browsers? Communists and robots, my friend.

In the HEAD of your page, you may include the initial JavaScript
<blockquote><code>&lt;script src="http://maps.google.com/maps?file=api&v=1&key=BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH" mce_src="http://maps.google.com/maps?file=api&v=1&key=BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH" type="text/javascript"&gt;&lt;/script&gt;</code>Â </blockquote>
Though it surprised me that I couldn't remove the terminating SCRIPT tag and instead make the first SCRIPT tag self-terminating, i.e., instead of <code>&lt;script foo="bar"&gt;&lt;/script&gt;</code>, I tried <code>&lt;script foo="bar"/&gt;</code> and it didn't work.

The JavaScript that actually renders the map within the DIV tag, <em>cleverly</em> named "map", should look similar to the following:
<blockquote><code>
&lt;/BODY&gt;
&lt;script type="text/javascript"&gt;
//&lt;![CDATA[Â 

var map = new GMap(document.getElementById("map"));
map.setMapType(G_HYBRID_TYPE);
map.addControl(new GSmallMapControl());
map.addControl(new GMapTypeControl());
map.centerAndZoom(new GPoint(-666.666,66.6666), 2);
map.openInfoWindowHtml(map.getCenterLatLng(), "100 Main St.&lt;BR&gt;Nowheresville, ZZ 99999
ZZZ");

//]]&gt;
&lt;/script&gt;
&lt;/HTML&gt;
</code></blockquote>
