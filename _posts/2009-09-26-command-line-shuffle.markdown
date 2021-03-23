--- 

title: Command-line shuffle
wordpress_id: 500
wordpress_url: http://lackoftalent.org/michael/blog/?p=500
date: 2009-09-26 16:50:05 -04:00
---
Being a nerd, I tend to like the command-line.  When I'm working on my laptop at home, I tend to like listening to music.  Before I discovered that <a href="http://en.wikipedia.org/wiki/MPlayer">mplayer</a> had a really convenient shuffle idiom, I would invoke it thusly (to listen to all my Pavement tracks in shuffle mode):

<pre lang="bash">
export IFS=$'\n'
for track in $(find /mnt/upnp/MediaTomb/Audio/Artists/Pavement -name \*.mp3 | ~/bin/shuffle.py); do mplayer $track; done
</pre>

And the wee shuffle script I whipped together looks like this:

<pre lang="python">
#!/usr/bin/env python
# shuffle.py

import sys
import random

args = list(sys.stdin)
random.shuffle(args)
sys.stdout.writelines(args)
</pre>

And here's the convenient shuffle idiom that renders my arg-shuffling script somewhat useless:

<pre lang="bash">
find /mnt/upnp/MediaTomb/Audio/Artists/Pavement -name \*.mp3 | mplayer -playlist - -shuffle -loop 0
</pre>
