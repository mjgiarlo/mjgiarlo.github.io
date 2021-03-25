---

title: WDL metadata mapping, and, parsing TEI in Python
wordpress_id: 430
wordpress_url: https://mike.giarlo.name/blog/?p=430
date: 2009-07-13 18:27:46 -04:00
---
<h2>Context</h2>

Early on in the effort to develop the first public version of the World Digital Library <a href="http://www.wdl.org/">web application</a>, we developed a (non-public) Django-based cataloging application where Library of Congress catalogers could manage metadata for WDL items.  Management in this sense includes creation of records, editing of records, versioning of edits, mapping of source records, and some light workflow for assignment of records to individual catalogers and for hooking into translation processes[^1].

I worked primarily on the source record mapping tools.  They take a number of formats as input and are called by the cataloging application to map metadata from these formats into the WDL domain model.  Several though not all of which are XML-based, and thus easily dealt with in Python, via the <a href="http://codespeak.net/lxml/api.html">etree module in the lxml package</a>.

<a href="http://onebiglibrary.net/">Dan</a> recently kicked off a new R&D project for evaluating (any) metadata against any number of metadata profiles, mapping into a generic data dictionary, the goal being to determine how feasible it would be to develop a toolset for aiding remediation of metadata across any number of digital collections.  I have been working on this project with Dan, and got started by seeing how generalizable the WDL metadata mapping tools are.  Turns out they're fairly generalizable once you tweak the various format-specific mapping rules to map into the generic data dictionary model rather than the WDL model (around 15 elements, and somewhere between Dublin Core and MODS in terms of specificity but flatly structured like DC).

Some of the test data I am working with now, that has nothing to do with WDL, is SGML-based <a href="http://quod.lib.umich.edu/t/tei/">TEI 2</a> markup.  The closest I worked with on WDL was <a href="http://www.tei-c.org/release/doc/tei-p5-doc/html/MS.html">TEI P5 for manuscript description</a> which is serialized in XML.  Turns out my TEI mapping rules from before blew up on this TEI 2 stuff, as lxml.etree (naturally) wasn't digging the non-XML input.  I googled around a bit for how best to parse TEI (or any SGML) in Python and then discovered it's actually simple as pie.

<h2>Code</h2>

If you've got the <a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a> module installed[^2]:
<pre lang="python">
>>> from BeautifulSoup import BeautifulSoup
>>> tei = open('foo.sgm').read()
>>> BeautifulSoup(tei).findAll('title')[0].string
u'[Memorandum to Dr. Botkin]: a machine readable transcription.'
</pre>

If not, the <a href="http://codespeak.net/lxml/lxmlhtml.html">lxml.html</a> module works too:
<pre lang="python">
>>> from lxml import html
>>> h = html.parse(open('foo.sgm'))
>>> h.xpath('//title')[0].text
'[Memorandum to Dr. Botkin]: a machine readable transcription.'
</pre>

<h2>Data</h2>

And here's what the sample data looks like:
<pre lang="xml">
<!doctype tei2 public "-//Library of Congress - Historical Collections (American Memory)//DTD ammem.dtd//EN"
[
<!entity % images system "07010101.ent"> %images;
]>
<tei2>
<teiheader type="text" date.created="1994/03/15" date.updated="2002/04/05" status="updated" creator="National Digital Library Program
, Library of Congress">
<filedesc>
<titlestmt>
<amid type="aggitemid">wpa0-07010101</amid>
<title>[Memorandum to Dr. Botkin]: a machine readable transcription.</title>
<amcol><amcolname>Life Histories from the Folklore Project, WPA Federal Writers&apos; Project, 1936-1940; American Memory, Library of Congress.</amcolname><amcolid type="aggid"></amcolid>
</amcol>
<respstmt>
<resp>Selected and converted.</resp>
<name>American Memory, Library of Congress.</name>
</respstmt></titlestmt>
<publicationstmt>
<p>Washington, DC, 1994.</p>
<p>Preceding element provides place and date of transcription only.</p>
<p>For more information about this text and this American Memory collection, refer to accompanying matter.</p>
</publicationstmt>
<sourcedesc>
<lccn></lccn>
<sourcecol>U.S. Work Projects Administration, Federal Writers&apos; Project (Folklore Project, Life Histories, 1936-39); Manuscript Division, Library of Congress.</sourcecol>
<copyright>Copyright status not determined; refer to accompanying matter.</copyright></sourcedesc>
</filedesc>
<encodingdesc>
<projectdesc><p>The National Digital Library Program at the Library of Congress makes digitized historical materials available for education and scholarship.</p></projectdesc>
<editorialdecl><p>This transcription is intended to have an accuracy of 99.95 percent or greater and is not intended to reproduce the appearance of the original work.  The accompanying images provide a facsimile of this work and represent the appearance of the original.</p></editorialdecl>
<encodingdate>1994/03/15</encodingdate>
<revdate>2002/04/05</revdate>
</encodingdesc>
</teiheader>
<text type="manuscript">
<body>
<div>
<pageinfo>
<controlpgno entity="I07010101">0001</controlpgno>
<printpgno></printpgno></pageinfo>
<p>Memorandum to Dr. Botkin from G. B. Roberts, May 26, 1941</p>
<p>Subject:  Alabama Material</p>
<p>This material has not yet been accessioned and has only
<del rend="overstrike">beeen</del> been roughly classified as life histories, folklore, and miscellaneous data and copy save in the case of the 2 ex-slave items and the essay on Jesse Owens, each of which was recommended.</p>
<p>Total no. of items recommended:  3 (14 pp.)
<handwritten>In progress</handwritten></p></div></body></text></tei2>
</pre>

[^1]: Catalogers cataloged stuff in the English language, but every metadata record needed to be translated into the other six U.N. languages: Spanish, Russian, French, Arabic, Chinese, and Portuguese.
[^2]: And you are but one `sudo easy_install BeautifulSoup`` away from that.
