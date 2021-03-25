--- 

title: NLB vs. MSCS, or load-balancing versus clustering
wordpress_id: 16
wordpress_url: http://lackoftalent.org/michael/blog/2005/12/06/nlb-vs-mscs-or-load-balancing-versus-clustering/
date: 2005-12-06 17:04:00 -05:00
---
Not quite sure you grasp the subtleties of difference between load-balancing (NLB) and server clustering (MSCS)? After all, both are technologies that allow distinct server nodes to be externally visible via a virtual server, and support failover. The fundamental similarities might overshadow their concisely stated difference:

Server clusters â€“ uses a shared-nothing architecture, which means that a resource can be active on only one server in the cluster at any one time. Because of this, it is well suited to applications that maintain some sort of state (for example, a database).

Network Load Balancing (NLB) â€“ uses a load balancing architecture, which means that a resource can be active on ALL servers in the cluster at any one time. Because of this, it is well suited to applications that do not maintain state (for example, a Web server).

Note: This information is copyright Â© 2003, Microsoft Corporation, gleaned from the freely available documentation on cluster quorums for Windows Server 2003. I provide it here for the sake of convenience and exposure.
