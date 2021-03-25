---

title: Convert Windows shortcuts into Ubuntu shortcuts
wordpress_id: 173
wordpress_url: https://mike.giarlo.name/blog/?p=173
date: 2008-10-29 19:40:43 -04:00
---
[<strong>Update</strong>: Feel free to grab the code via bzr with <code>bzr branch http://lackoftalent.org/bzr/shortcut_converter</code>.]

Here's another entry in the "dumb little scripts that work for me and may or may not be helpful to other folks" department...

I use both Windows and Ubuntu at home, gradually transitioning from the former to the latter.  I've accumulated a bunch of Windows URL shortcuts, mostly things I wanted to read once so instead of bookmarking them, I dragged their links to my desktop.  This creates .URL files which are simple little plain-text two-liners.  It turns out that on Ubuntu, and probably similar *nix systems, web shortcuts are also simple little plain-text files.  These files have the .desktop extension (though you won't see the extension by looking at the desktop).

I wanted a way to convert my .URL files to .desktop files so that I can just toss them on my Ubuntu desktop and double-click them the same way I would if I were on Windows.  This cruddy little Python script does the trick.

<pre lang="python" line="1">
#!/usr/bin/env python
# shortcut_converter.py

from __future__ import with_statement
import os.path
import sys

TEMPLATE = """[Desktop Entry]
Version=1.0
Encoding=UTF-8
Name=%(basename)s
Type=Link
URL=%(url)s
Icon=gnome-fs-bookmark
"""

def convert(f):
    """ Takes a full filepath to a .URL file, converts it to a .desktop file
        in the same directory """
    print "Converting %s" % f
    (filepath, filename) = os.path.split(f)
    (basename, extension) = os.path.splitext(filename)
    with open(f) as urlfile:
        lines = [line.strip() for line in urlfile.readlines()]
    url = lines[1].split('URL=')[1]
    dtfname = os.path.join(filepath, '%s.desktop' % basename)
    with open(dtfname, 'w') as dtfile:
        print "Writing %s" % dtfile.name
        dtfile.write(TEMPLATE % locals())

if __name__ == '__main__':
    for arg in sys.argv[1:]:
        if os.path.isfile(arg) and arg[-3:].lower() == 'url':
            convert(arg)
        else:
            print "*** %s is not a URL file" % arg
</pre>

I used scp to pull over all my .URL files and then invoked the script thusly:

<code>python shortcut_converter.py *.URL</code>

worksforme!
