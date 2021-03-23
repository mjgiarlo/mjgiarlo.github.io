--- 

title: Home and End keys - PuTTY - bash - Linux
wordpress_id: 8
wordpress_url: http://lackoftalent.org/michael/blog/2005/11/30/home-and-end-keys-putty-bash-linux/
date: 2005-11-30 17:30:00 -05:00
---
Here's a simple one. But first, some backstory.

I'd been using the tcsh shell on my Linux servers for years, but I am now working in an environment where bash is the preferred shell. I view it as an opportunity to poke around in a shell that's relatively unfamiliar to me as a dyed-in-the-wool tcsh user[<a href="http://www.lackoftalent.org/michael/blog/wp-admin/post.php#one">1</a>]. I'd also been used to connecting to my Linux servers with the SSH Communications Security version of the Secure Shell client. Unfortunately, the newest version of this client, which <em>is</em> available to me, will not connect to our department's boxes due to the version (or configuration) of the OpenSSH libraries that have been installed. I'm new to this job, so I'm accepting this more or less on the authority of comments made by coworkers; I haven't independently verified this, though I can confirm that I can't connect with the SSH client. I switched to the <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty">PuTTY</a> SSH client, since it's free, widely used, and supported by my colleagues. And, oh yeah, it connects to our Linux boxes.

One of the neat features of the SSH Communications Security client is the ability map keys to certain other keys. For instance, I used to map the Home and End keys to &lt;Ctrl-a&gt; and &lt;Ctrl-e&gt; for ease of navigation on the command-line; sometimes the command strings I have to type are, to put it technically, <em>really frickin' long</em> and it's nice to be able to make edits to the beginning and end of these command strings without holding down the left and right arrow keys for an hour. PuTTY does not have a key-mapping feature, so I was wondering how to get my Home and End keys to do more than just generate the '~' character. (Though such a feature is on PuTTY's wish-list.)

It turns out there's a <em>simple fix</em>: just set the environment variable, TERM, to the value of "linux" in ~/.bash_profile (or .bashrc).

<code>export TERM=linux</code>

should do the trick. Make sure you logout and login again, or just source your bash config files. It's possible that other TERM values do the trick as well, but "linux" has worked for me. Prior to that, the TERM variable was set to the value "xterm".

For some more shell-based key mapping geared toward the Backspace and Delete keys, see the <a href="http://www.ibb.net/~anne/keyboard.html">Consistent BackSpace and Delete Configuration</a> page.

<a name="one"></a>1. While I've used tcsh as my default shell for years, I do acknowledge the argument that <a href="http://www.faqs.org/faqs/unix-faq/shell/csh-whynot/">csh programming is considered harmful</a>. I use the Bourne shell and Perl for scripting, though primarily the latter.
