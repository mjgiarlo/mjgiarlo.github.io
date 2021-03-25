---

title: "Managing Services: From Red Hat to Debian"
wordpress_id: 31
wordpress_url: https://mike.giarlo.name/blog/2006/04/19/managing-services-from-red-hat-to-debian/
date: 2006-04-19 09:03:09 -04:00
---
A note forÂ Linux sysadmins who're scouringÂ Google for answers to this issue:Â

Having administered Red Hat servers for years at prior places of work, I'd gotten quite used to doing things the Red Hat Wayâ„¢, e.g., using the <em>chkconfig</em> and <em>setup</em> tools to manage services and the runlevels at which they are enabled.Â  These tools apparently aren't used in Debian, which is the preferred distro at MPOW.Â  Instead, I've used <em>update-rc.d </em>and <em>rcconf</em>, respectively, to manage services on Debian.Â  They work similar to the aforementioned Red Hat tools, but I'm not yet that familiar with them; I'm inclined to say that the RH tools are more intuitive to use, but I may have some recall bias.

Â
