---

title: Windows Server 2003 still dependent upon WINS / NetBIOS?
wordpress_id: 18
wordpress_url: https://mike.giarlo.name/blog/2005/12/07/windows-server-2003-still-dependent-upon-wins-netbios/
date: 2005-12-07 18:09:00 -05:00
---
Perhaps I am mistaken, but I thought one of the biggest purported benefits of the newest incarnation of Active Directory was its supposed reliance upon the more commonly used DNS system for computer name lookups rather the old WINS and NetBIOS lookup system. I've recently installed a new server running Windows Server 2003 Enterprise and hooked it into our Active Directory 2003 domain and configured it to run Terminal Services. Upon this assumption, I disabled NetBIOS in the TCP/IP stack and turned off the TCP/IP NetBIOS Helper service.

When I connect to the server via Remote Desktop and login with a local administrative account, I get in just fine. When I specify my domain credentials, however, my connection is refused because Terminal Services apparently has problems reaching the RPC Server. Says it is unavailable. Turning back on the NetBT Helper service clears this up, but I did not think NetBIOS would be required for name resolution given AD integration with DNS. In the eventlog, TS shows the following error after the "RPC Server is unavailable" error: "Unable to obtain Terminal Server User Configuration".

Any ideas? I'm alright with leaving on the NetBT service, but I just don't understand why it's necessary.

I have tried re-enabling NetBIOS in the stack and that has zero effect on the connection behavior. I have also checked the DNS settings and the AD domain name is in the list of default domains to search through.

NOTE: Perhaps it is due to having external University DNS servers listed instead of the AD DNS servers. Come to think of it, I'm not sure why we would be using external DNS servers if we run AD. Giving this a try.

ADDENDUM: Apparently our AD servers do not run their own DNS; the records are offloaded to the campus DNS system. Perhaps this is the culprit?
