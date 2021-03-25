---

title: Problems joining a Windows 2003 Active Directory domain
wordpress_id: 9
wordpress_url: https://mike.giarlo.name/blog/2005/11/30/problems-joining-a-windows-2003-active-directory-domain/
date: 2005-11-30 17:57:00 -05:00
---
One of the first tasks that has been assigned to me is the installation and configuration of a pair of network load-balanced Terminal Servers running Windows Server 2003. The department has already cobbled together documentation on how to build servers within the locally developed and recognized best practices, and I am loath to deviate from these in my first month of employment. I got up to the point of joining the first TS node ("TS1") to the AD domain pretty smoothly. When I attempted to move TS1 out of its workgroup and into the domain, I was prompted for a password (which is a good thing, and is to be expected).  When I attempted to use my domain admin account in the form "DOMAIN\account", I was rudely greeted with an "unknown username or bad password" error.  When I tried to provide my credentials in the form of "account@domain.university.edu", I received the unfamiliar "Element not found" message.

After poking around for a few hours, I came up with the following fix:
<ol>
	<li>The administrative account being used to join the server to the domain must be allowed logon rights on the server being added. This must be done on the domain controller.</li>
	<li>NTLM v2 authentication must be enabled in the Local Security Policy of the new server. Go to Administrative Tools / Local Security Policy and navigate to Security Settings / Local Policies / Security Options. In the right-hand pane, locate the policy named Network security : LAN Manager authentication level and change its value to Send NTLMv2 response only. (Note: I am unsure what other repercussions might be caused by changing this setting.)</li>
</ol>
These steps might not work for you, as they were likely necessary in my environment due to networking and domain configuration particulars.
