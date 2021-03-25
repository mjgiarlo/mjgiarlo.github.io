---

title: Useful Trac reports?
wordpress_id: 71
wordpress_url: https://mike.giarlo.name/blog/2007/01/16/useful-trac-reports/
date: 2007-01-16 17:54:55 -05:00
---
I had to create some Trac reports a while back, and figured I would share them with the world wide (time)waste.

The first selects all completed milestones:

<pre>SELECT name,
    date(completed, 'unixepoch') as Completed,
    date(due, 'unixepoch') as Due,
    description
FROM milestone
WHERE completed > 1
ORDER BY completed DESC</pre>

And the second lists all of your closed tickets:

<pre>SELECT p.value AS __color__,
    (CASE status
        WHEN 'closed' THEN 'color: #777; background: #ddd; border-color: #ccc;'
        ELSE
            (CASE owner WHEN '$USER' THEN 'font-weight: bold' END)
    END) AS __style__,
    id AS ticket, summary, component, version, milestone,
    t.type AS type, severity, priority, time AS created,
    changetime AS _changetime, description AS _description,
    reporter AS _reporter
FROM ticket t, enum p
WHERE status IN ('closed') AND p.name = t.priority AND p.type = 'priority' AND owner = '$USER'
ORDER BY (status = 'assigned') DESC, p.value, milestone, severity, time</pre>

They were pretty easy to whip up based on the other reports, but I figured I might save someone else a few minutes by sharing.  For all that I've <strike>plagiarized</strike> borrowed from the web, it's time to pay that karma down a bit.
