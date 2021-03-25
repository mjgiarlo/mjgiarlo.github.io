---

title: "HOWTO: Get Twhirl 0.8.7 working on Ubuntu"
wordpress_id: 222
wordpress_url: https://mike.giarlo.name/blog/?p=222
date: 2008-12-16 15:22:49 -05:00
---
I use the Adobe AIR-based <a href="http://twhirl.org/">Twhirl</a> as a <a href="http://twitter.com/">Twitter</a> and <a href="http://identi.ca/">identi.ca</a> client on my Ubuntu box.  Twitter recently made some changes to their authentication API, apparently, which prevented Twhirl from connecting as of version 0.8.6.  The fine folks over at Twhirl pushed out 0.8.7 in a jiffy but it included some AIR 1.5 dependencies.  The problem was that Adobe AIR for Linux only comes in 1.0 and 1.1 versions.

I was a tad frustrated that such a seemingly minor Twitter API upgrade resulted in a fundamentally different (and broken) version of Twhirl, but I couldn't fault them for trying to respond quickly.  I followed the <a href="http://twitter.com/twhirl">twhirl</a> user on Twitter when this went down, and I was pleased to find out that they've whipped up a special AIR 1.1 Twhirl client for us Linux users.

I ran into some problems trying to install the client.  The first problem I ran into was due to a corrupt download.  If the file is less than 997K or so, you should try to download it again.  If Firefox fails you, there's always wget.  Want to make sure you've got a good file?  Run unzip against it (an .air file is a .zip file underneath its raincoat).  If it succeeds, you're golden.

The other problem was an old version of Adobe AIR.  You want adobeair_linux_b1_091508.bin installed, not adobeair_linux_a1_033108.bin.  Here's how you "upgrade" AIR from the alpha to the beta (1.1) and get Twhirl 0.8.7-air11 installed:
<ol>
<li><code>sudo adobeair_linux_a1_033108.bin -uninstall</code></li>
<li><code>sudo apt-get remove adobeair-enu</code> (This step was not necessary on another box I tested.  It could be that the original box I tried these steps on was munted up.)</li>
<li><em>This may be optional</em>!  Clean out /opt/Adobe Air/, ~/.adobe/AIR/, and /root/.adobe/AIR/.  Note that this step will wipe your settings for all your AIR applications.
<li>Download the <a href="http://labs.adobe.com/downloads/air_linux.html">AIR 1.1 beta for Linux</a></li>
<li><code>adobeair_linux_b1_091508.bin</code>  (Some report that Firefox and other browsers must be closed during this step, but I couldn't reproduce that.)</li>
<li>Download the latest <a href="http://www.twhirl.org/files/twhirl-0.8.7-air11.air">AIR 1.1 Twhirl for Linux</a></li>
<li>Then navigate to the twhirl-0.8.7-air11.air via Nautilus and double-click it.</li>
</ol>
Worked for me, at least.
