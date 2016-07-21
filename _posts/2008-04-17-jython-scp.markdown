--- 
layout: post
title: Jython scp
wordpress_id: 124
wordpress_url: http://lackoftalent.org/michael/blog/?p=124
date: 2008-04-17 16:08:42 -04:00
---
In spite of some <a href="http://lackoftalent.org/michael/blog/2008/04/11/jythons-and-javas-and-bears-oh-my/" target="_blank">open questions</a>, I've been making some progress on my Jython-based transport tool.  Right now it's pretty dumb and simple: it copies files to and fro via scp.

Being a newb at both Java and Jython made finding the right libraries a bit of a challenge, and so I'm posting some code here for folks in the same boat.  It's not particularly pretty due to 1) wanting to get something working very quickly, and 2) weird errors when I try to make things prettier (such as getting rid of the hard-coded bits), but I'll resolve these soon.
<!--more-->
The jython code:
<pre name="code" class="python">
# Biter.py
import java
from org.apache.tools.ant import Project
from org.apache.tools.ant.taskdefs.optional import ssh

class Biter(java.lang.Object):
    def __init__(self):
        self.keyfile = '/home/user/.ssh/id_rsa'

    def transport(self, from_uri, to_uri):
        "@sig public void transport(String from_uri, String to_uri)"
        scp = ssh.Scp()
        scp.setKeyfile(self.keyfile)
        scp.setPassphrase('')
        scp.setTrust(True)
        scp.setProject(Project())
        scp.setFile(from_uri)
        scp.setTodir(to_uri)
        scp.execute()
        print "%s -&gt; %s" % (from_uri, to_uri)
</pre>
I set my CLASSPATH to include /usr/share/jython2.2.1/jython.jar, /usr/share/java/jsch-0.1.28.jar, /usr/share/ant/lib/ant-jsch.jar, /usr/share/ant/lib/ant.jar, and '.', and then compile to bytecode via <code>jythonc -idp gov.loc.repository.transport Biter.py</code>.  Once it's compiled, I can use the Biter class in Java code thusly:
<pre name="code" class="java">
# BiterClient.java
import gov.loc.repository.transport.Biter;

public class BiterClient {
    public static void main(String[] args) {
        Biter biter = new Biter();
        biter.transport("/home/user/tmp/test1", "user@example.org:tmp/test2");
        biter.transport("user@example.org:tmp/test2", "/home/user/tmp/test3");
    }
}
</pre>
I should note that the passphrase and keyfile are not necessary if you're passing valid username and password credentials in the remote to_ or from_uri (and the server in question supports password auth).  But pubkey auth is useful for our purposes and that's why it's in there.

Hopefully someone somewhere finds this helpful. :)
