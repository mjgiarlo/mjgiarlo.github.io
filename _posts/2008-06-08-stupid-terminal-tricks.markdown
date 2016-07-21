--- 
layout: post
title: Stupid terminal tricks
wordpress_id: 128
wordpress_url: http://lackoftalent.org/michael/blog/?p=128
date: 2008-06-08 01:19:05 -04:00
---
Sometimes I find it useful to keep long-running processes in a session of <a href="http://en.wikipedia.org/wiki/GNU_Screen" target="_blank">screen</a>.Â  And sometimes I launch one of said processes outside of screen, and then I yell something like "doh!" or an expletive, because, as I said, I do find screen useful.Â  Depending on how far the process has gotten, whether it was the sort of operation that would not run happily again, or how much cleanup a second run would require, I either kill the process and restart it or I suspend it with Ctrl+z and send it to the background with <code>bg %</code> so that it doesn't die when I log off.Â  The latter is a decent option.Â  But, darn it, I like screen.

Well, perhaps I'm the last to know, but there's this neat little tool called <a href="http://pasky.or.cz/~pasky/dev/retty/" target="_blank">retty</a> that allows you to attach running processes to your terminal.Â  I installed it in Ubuntu Hardy the typical way (<code>sudo apt-get install retty</code>).Â  So, the next time I screw up, I'll Ctrl+z, bg it, and then <code>screen retty {PID}</code>.Â  <i>Voila</i>!
