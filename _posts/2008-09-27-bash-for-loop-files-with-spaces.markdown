--- 
layout: post
title: Bash, For loop, Files with spaces
wordpress_id: 154
wordpress_url: http://lackoftalent.org/michael/blog/?p=154
date: 2008-09-27 15:08:53 -04:00
---
Dear Future Me,

Are you trying to iterate over filenames with spaces in them using a bash 'for' loop?Â  And instead of iterating over the filenames, you wind up seeing a list of filename parts split by said spaces?Â  Use case: you want to print out a list of unique extensions for all files in the current directory and below:

&nbsp;&nbsp;&nbsp;&nbsp;<code>for file in `find . -type f`; do echo ${file##*.}; done | sort | uniq</code>

If any filenames have spaces in them, you may see odd results.Â   The answer?Â  Set the input field separator (IFS) environment variable to the newline character (rather than the default space character):

&nbsp;&nbsp;&nbsp;&nbsp;<code>export IFS=$'\n'</code>

And <em>voila</em>.
