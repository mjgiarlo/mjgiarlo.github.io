---

title: A restrictive IPSec script
wordpress_id: 10
wordpress_url: https://mike.giarlo.name/blog/2005/11/30/a-restrictive-ipsec-script/
date: 2005-11-30 18:12:00 -05:00
---
What do you do when you've got a server to install and you're too lazy to burn a CD with all the latest service packs and hotfixes? I suppose you could attach the server to the Internet and head over to Microsoft's <a href="http://windowsupdate.microsoft.com/">Windows Update</a> website. But then you would be committing a grievous <em>faux pas</em> among systems people. Only connect an unpatched machine to the Internet if you wish to have it 0wN3d in seconds flat.

One strategy for patching up your server is to install on your local network a server running Windows Software Update Services, and configure IPSec on your new server to allow connections only to the local WSUS server. For the sake of convenience, I have also allowed outgoing DNS requests. If you know the IP address of the WSUS server, these are probably unnecessary, but otherwise shouldn't pose much of a risk.

Here's an IPSec script, which I called newServerLockdown.txt, that you may use to accomplish this task.

<pre>
# IPSec Configurations to Lock Down a New Server
#
# WHAT IS THE POINT?
# Well, good security practices dictate keeping servers off the network until they have been
# fully patched, which is rarely achievable from system CDs. Thus, before a server is conn-
# ected to the network, we use IPSec to restrict traffic such that no host may initiate an
# incoming connection, and only the local Windows Software Update Server may be contacted.
#
# HOW TO RUN THIS SCRIPT
# netsh -f newServerLockdown.txt
#
# THEN WHAT?
# Once the server is fully patched, hotfixed, and service packed, these IPSec rules may be
# blown away with two commands, or so it is believed by the author:
# netsh ipsec dynamic delete all
# netsh ipsec static delete all
#
# NOTE
# Originally tested on November 23, 2005
# Inspiration from:
# http://www.unisanet.unisa.edu.au/staff/davidgardiner/ipsec/netsh-script.txt
# and
# http://www.windowsitpro.com/Articles/Print.cfm?ArticleID=41571

############# Set IPSec mode to dynamic ############

pushd ipsec dynamic

# Dump packet drops to the Event Log
set config property=ipsecdiagnostics value=7

# Allow as few exemptions as possible
set config property=ipsecexempt value=3

# During boot sequence, allow only stateful connections initiated by the server
set config property=bootmode value=stateful

popd

############ Set IPSec mode back to dynamic ############

pushd ipsec static
set store location=local

# Clean the slate and remember these settings
# DO NOT DO THIS IF YOU DO NOT WANT YOUR STATIC CONFIGS ZAPPED!
delete all

# Create a new policy
add policy name="Restrict to WSUS" activatedefaultrule=NO

# Create actions for filters to use
add filteraction name="PERMIT" action=PERMIT
add filteraction name="BLOCK" action=BLOCK

# Default policy - block everything
add filterlist name="All incoming traffic"
add filter filterlist="All incoming traffic" protocol=ANY srcaddr=ANY dstaddr=ANY description="Block all incoming traffic"
add rule name="Default incoming block" policy="Restrict to WSUS" filterlist="All incoming traffic" filteraction="BLOCK"

# Allow outgoing DNS requests
add filterlist name="DNS resolution"
add filter filterlist="DNS resolution" protocol=TCP srcaddr=ME srcport=0 dstaddr=DNS dstport=53 mirrored=YES
add filter filterlist="DNS resolution" protocol=UDP srcaddr=ME srcport=0 dstaddr=DNS dstport=53 mirrored=YES
add rule name="Allow DNS resolution" policy="Restrict to WSUS" filterlist="DNS resolution" filteraction="PERMIT"

# Allow outgoing HTTP connections to WSUS
add filterlist name="HTTP" description="Allow outbound HTTP connections to WSUS"
add filter filterlist="HTTP" protocol=TCP srcaddr=ME srcport=0 dstaddr=YOUR.WSUS.HOST.NAME dstport=80 mirrored=YES
add filter filterlist="HTTP" protocol=TCP srcaddr=ME srcport=0 dstaddr=YOUR.WSUS.HOST.NAME dstport=443 mirrored=YES
add rule name="Allow HTTP traffic to WSUS" policy="Restrict to WSUS" filterlist="HTTP" filteraction="PERMIT"

# Activate policy
set policy name="Restrict to WSUS" assign=YES

popd
exit
</pre>
