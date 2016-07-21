--- 
layout: post
title: "\"Local Service\" Services Dying Repeatedly?"
wordpress_id: 30
wordpress_url: http://lackoftalent.org/michael/blog/2006/03/09/local-service-services-dying-repeatedly/
date: 2006-03-09 22:27:13 -05:00
---
One of my Windows 2003 servers began exhibiting very strange behavior a few months ago.Â  That a Windows server behaves badly isn't strange, of course, but I'd never before encountered precisely this problem.Â  I searched and searched for solutions on Google, but could not findÂ one that worked for me (though I didÂ discover thatÂ a handful of others reported having very similar issues).Â  Since I've gotten so much help from the web (via Google) before, I figured I would pay back my debt by posting the solution I found this afternoon.Â  YourÂ kilometerage mayÂ vary.

<strong>Problem</strong>
<blockquote>Services which log on as LocalService*, as opposed to LocalSystem and NetworkService, die repeatedly and at regular intervals.Â  In my case, it was every 90 seconds give or take 5.Â  I believe Windows 2003 and XP use the LocalService and NetworkService accounts for runningÂ services,Â so this may not apply to Windows 2000 or other versions of Windows.Â 

* Some of these services are Windows Time, TCP/IP NetBIOS Helper, Remote Registry, Application Layer Gateway Service, Alerter, Smart Card, SSDP Discovery Service, Universal PnP Device Host, WebClient, and Windows User Mode Driver Framework.Â </blockquote>
<strong>Solution</strong>
<blockquote>Disable WINEXIT.SCR screensaverÂ within any relevant user accounts, e.g., Default User, All Users, or any service account.Â  You can run a search in regedit for the string "winexit.scr" to turn up all such values and determine which are relevant.Â  The value I needed to delete was in HKEY_USERS/.DEFAULT/Control Panel/Desktop/SCRNSAVE.EXE.</blockquote>
<strong>Explanation</strong>
<blockquote>The server in question is to be used for public terminal services, so I intended to use the winexit.scr screensaver as a relatively lightweight, easy way to ensure that users get warned about idle time and subsequently logged off after a preset period of time.Â  There are other ways of accomplishing this, to be sure, but I've always had good experiences with winexit.scr.Â  At any rate, while watching the list of processes in Task Manager, I noticed that about every minute-and-a-half, a winexit.scr process popped up and, more interestingly, was running in the LocalService context.Â  Lightbulb!

Services running under LocalService are all launched via the svchost.exe binary that is included with Windows, and it turns out that the winexit screensaver kept shutting down these services (as I unwittingly instructed it to do) when they took advantage of their ability to log on as a service.Â  Why every 90 seconds?Â  I had winexit configured to allow only 60 seconds of idle time, and it gives the user 30 seconds of warning before killing a session.Â </blockquote>
It's almost as though computers are <em>logical</em>.Â  I just love when problems make sense.
