--- 
layout: post
title: Unescaping HTML in Python
wordpress_id: 140
wordpress_url: http://lackoftalent.org/michael/blog/?p=140
date: 2008-08-01 14:56:42 -04:00
---
Dear Future Me,

You've forgotten how to decode (or unescape) HTML or XML in Python again, haven't you?Â  My, my, that old age does catch up with you.

Well, it turns out that ï»¿<code>xml.sax.saxutils.unescape()</code> works like a charm.Â  I'm certain that edge cases lurk here and there, so caveat, um, coder.

UPDATE: Edge case found.  Note that unescape() will not work on &amp;apos; or &amp;quot;, and so there is:<br> <code>xml.sax.saxutils.unescape("&lt;p&gt;This is &amp;quot;markup&amp;quot;&lt;/p&gt;", {"&amp;apos;": "'", "&amp;quot;": '"'})</code>
