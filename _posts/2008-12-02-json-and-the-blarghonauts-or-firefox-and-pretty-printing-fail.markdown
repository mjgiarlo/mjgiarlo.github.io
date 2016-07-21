--- 
layout: post
title: JSON and the Blarghonauts, or, Firefox and Pretty-Printing FAIL
wordpress_id: 196
wordpress_url: http://lackoftalent.org/michael/blog/?p=196
date: 2008-12-02 17:25:41 -05:00
---
There must be a better way of viewing pretty-printed JSON from Firefox than this.  (EDIT: Hail, <a href="http://lackoftalent.org/michael/blog/json-in-firefox/">JSONovich</a>!)

<pre lang="python" line="1">
#!/usr/bin/env python
# ~/bin/jsonhandler.py 
# Take some JSON from a file or stdin, format it, output to a tempfile, 
# open in EDITOR

from __future__ import with_statement
import os
import sys
import simplejson
import tempfile

EDITOR = "/usr/bin/gedit"

if __name__ == "__main__":
    if len(sys.argv) == 2:
        # if invoked as jsonhandler.py {FILE}
        json = open(sys.argv[1])
    else:
        # if JSON is piped in (e.g., from Firefox, 
        # or cat {FILE} | jsonhandler.py)
        json = sys.stdin
    json = simplejson.load(json)
    # the with_statement is kind of gratuitous but I like it
    with open(tempfile.mktemp('.json'), 'w') as jsonfile:
        simplejson.dump(json, jsonfile, indent=4)
    # all of that and gedit doesn't even highlight JSON
    # I have emacs highlighting JSON but this generates a "stdin is not 
    # a tty" error, so EDITOR is not set to emacs
    # xemacs works a little better, but I need to click:
    # "Options > Syntax Highlighting > In this buffer" every time, despite 
    # saving to custom.el, so EDITOR is not set to xemacs
    # Very annoying!
    os.system("%s %s" % (EDITOR, jsonfile.name))
</pre>

And then I set ~/bin/jsonhandler.py as the action for application/json in Edit | Preferences | Applications.

Yuck.  Help?
