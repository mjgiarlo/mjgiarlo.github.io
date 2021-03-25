---

title: Using Linux to fix Windows
wordpress_id: 109
wordpress_url: https://mike.giarlo.name/blog/2007/10/13/using-linux-to-fix-windows/
date: 2007-10-13 16:30:00 -04:00
---
The hard drive on my laptop is slowly failing and a combination of being busy, lazy, and cheap is preventing me from replacing it.  About once every two weeks over the past couple months, one of the Windows registry files becomes corrupted and the XP disk is unable to repair it.  And the HD fails basic manufacturer-provided diagnostics.  But I'm stubborn.  So I've been routinely resuscitating this box and I decided to post the process I use.

If you boot and see a message like
<blockquote>Windows could not start because the following file is missing or corrupt
C:\windows\system32\config\system</blockquote>
then you may be interested in this.
<!--more-->
I should note that there are <a href="http://xphelpandsupport.mvps.org/how_do_i_repair_a_missing_or_cor1.htm" target="_blank">more</a> <a href="http://www.help2go.com/Tutorials/Windows/C:%5Cwindows%5Csystem32%5Cconfig%5Csystem_missing_or_corrupt.html" target="_blank">Windows-y</a> ways to fix this.  But I have an Ubuntu Edgy disc on hand, and so these instructions are for using Ubuntu Edgy as <del datetime="2007-10-13T19:50:57+00:00">a band-aid</del> <ins datetime="2007-10-13T19:50:57+00:00">an adhesive bandage</ins> for a dying hard drive or a screwy Windows installation.  The ntfs-3g and ntfs-config packages are necessary to mount your local hard drive in read-write mode, otherwise these instructions would be much shorter.

I'm assuming you have a good backup from which to restore the missing or corrupt files that are preventing you from booting Windows off your hard drive.  My backups are available via a networked Samba mount.  If yours are on a secondary internal hard drive, an external hard drive, a CD or floppy or thumb drive, some of these steps won't apply to you.
<ol>
	<li>Get a copy of <a href="http://www.ubuntu.com/getubuntu/download" target="_blank">Ubuntu</a> and burn it to a bootable medium.  I'm using a Ubuntu 6.10 (Edgy) on a CD-R.</li>
	<li>Insert your bootable medium into the crappy computer.  Boot said crappy computer from the medium.  You may need to fiddle with your BIOS to get it to boot from removable media, but hopefully not.</li>
	<li>At the Ubuntu boot menu, chose "Start or Install Ubuntu."  Don't worry: it won't write over your hard drive or touch any of your data.</li>
	<li>When the operating system is done loading, click on the Applications menu, and choose Accessories, then Terminal.</li>
	<li>Since my backups are available on a Samba mount, and the Edgy CD does not have Samba installed, I first must install the Samba FS and its dependencies: <code>
sudo apt-get install smbfs</code></li>
	<li>Create a directory for mounting the Samba share:
<code>sudo mkdir /mnt/remote</code></li>
	<li>Mount the share, substituting appropriate values for the IP address and the share name:
<code>sudo smbmount //192.168.1.5/backups /mnt/remote</code></li>
	<li>If not running Edgy, see this <a href="https://help.ubuntu.com/community/MountingWindowsPartitions/ThirdPartyNTFS3G" target="_blank">guide</a> to mounting local Windows drives in read-write mode.  Otherwise, first open the aptitude sources list:
<code>sudo nano -wc /etc/apt/sources.list</code>
and add the following three lines at the bottom of the file:
<blockquote>deb http://flomertens.free.fr/ubuntu/ edgy main main-all
deb http://ntfs-3g.sitesweetsite.info/ubuntu/ edgy main main-all
deb http://flomertens.keo.in/ubuntu/ edgy main main-all</blockquote>
Save and close the file.</li>
	<li>Let aptitude update its list of sources:
<code>sudo apt-get update</code></li>
	<li>Install necessary packages:
<code>sudo apt-get install ntfs-3g ntfs-config libfuse2</code></li>
	<li>Launch the ntfs-config utility:
<code>sudo ntfs-config</code>
Call the mount point "windows", which will live at /media/windows.  Click the Add checkbox next to the device corresponding to your local drive (/dev/hda1 for me).  Click Apply.  Make sure the checkbox next to "Enable write support for internal drive" is clicked on the next dialog, and click Ok.</li>
	<li>Copy over backed up versions of missing or corrupt files: <code>
sudo cp /mnt/remote/repair/system* /media/windows/WINDOWS/system32/config/</code>
is an example I've used a couple times.</li>
	<li>Shutdown, remove the Ubuntu CD when prompted, and boot off your hard drive.  Cross fingers.  And you should be back in action.</li>
</ol>
<em>Voila?</em>
