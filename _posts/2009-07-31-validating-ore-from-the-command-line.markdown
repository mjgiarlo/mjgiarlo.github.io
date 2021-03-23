--- 

title: Validating ORE from the Command-line
wordpress_id: 440
wordpress_url: http://lackoftalent.org/michael/blog/?p=440
date: 2009-07-31 14:52:54 -04:00
---
I've been periodically poking at getting <a href="http://linkeddata.org/">Linked Data</a>/RDF views hooked into the <a href="http://www.wdl.org/">World Digital Library</a> web application, following <a href="http://inkdroid.org/journal/">Ed Summers</a>' <a href="http://lists.w3.org/Archives/Public/public-lod/2009May/0301.html">lead</a> from his work on <a href="http://chroniclingamerica.loc.gov/">Chronicling America</a>.  The RDF views also use the <a href="http://www.openarchives.org/ore/">OAI-ORE</a> vocabulary to express aggregations -- in WDL, an item is an aggregation of its constituent files.  The goal is to provide a semantically rich and holistic representation of a WDL item (identifier, constituent files, metadata, translations, and so on). 

The ORE format is a new one for me so it's hard to say whether the output of my dev branch is valid ORE or not.  Plus I'm a sucker for validators.  Turns out <a href="http://www.csc.liv.ac.uk/~azaroth/">Rob Sanderson</a> has developed a <a href="http://code.google.com/p/foresite-toolkit/">Python library for validating ORE</a>, and this little snippet is what I've been using to validate the ORE.  I didn't put much effort into making it readable, so much as banging something functional out so I can meet deadlines, so mea culpa and all that.  But without further hemming and hawing, the code:

<pre lang="python">
# validate.py
import sys
from foresite import *

rem = RdfLibParser().parse(ReMDocument(sys.argv[1]))
aggr = rem.aggregation
n3 = RdfLibSerializer('n3')
rem2 = aggr.register_serialization(n3)
print rem2.get_serialization(n3).data
</pre>

Most of this code is naively copied and pasted from Rob's excellent <a href="http://code.google.com/p/foresite-toolkit/wiki/PythonLibrary">Foresite documentation</a>.

I invoke it thusly: <code>python validate.py {URL}</code>

And the output:

<pre lang="n3">
@prefix _27: <http://www.semanticdesktop.org/ontologies/nfo#>.
@prefix _28: <http://localhost/en/item/1/id#>.
@prefix _29: <http://localhost/en/item/1/>.
@prefix bibo: <http://purl.org/ontology/bibo/>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix dcterms: <http://purl.org/dc/terms/>.
@prefix ore: <http://www.openarchives.org/ore/terms/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix rdfs1: <http://www.w3.org/2001/01/rdf-schema#>.

 _28:ResourceMap a ore:ResourceMap;
     dc:format "text/rdf+n3";
     dcterms:created "2009-07-31T14:23:31Z";
     dcterms:modified "2009-07-31T14:23:31Z";
     ore:describes _29:id. 

 _29:id a bibo:Image,
         ore:Aggregation;
     dcterms:DDC "973";
     dcterms:alternative "Antietam, Maryland. Allan Pinkerton, President Lincoln, and Major General John A. McClernand"@en;
     dcterms:created "1862å¹´10æœˆ3æ—¥"@zh,
         "3 de octubre de 1862"@es,
         "3 de outubro de 1862"@pt,
         "3 octobre 1862"@fr,
         "3 Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ 1862 Ð³Ð¾Ð´Ð°"@ru,
         "October 3, 1862"@en,
         "Â Ù£ Ø¢ÙƒØªÙˆØ¨Ø±ØŒ Ù¡Ù¨Ù¦Ù¢"@ar;
     dcterms:creator "Gardner, Alexander"@en,
         "Gardner, Alexander"@es,
         "Gardner, Alexander"@fr,
         "Gardner, Alexander"@pt,
         "Ð“Ð°Ñ€Ð´Ð½ÐµÑ€, ÐÐ»ÐµÐºÑÐ°Ð½Ð´Ñ€"@ru,
         "Ø¬Ø§Ø±Ø¯Ù†Ø±, Ø£Ù„ÙŠÙƒØ³Ù†Ø¯Ø±"@ar,
         "åŠ å¾·çº³, äºšåŽ†å±±å¤§"@zh;
... (and so on and so forth)
     dcterms:title "Antietam, Maryland. Allan Pinkerton, President Lincoln, and Major General John A. McClernand: Another View"@en,
         "Antietam, Maryland. Allan Pinkerton, el Presidente Lincoln y el GeneralÂ Principal John A. McClernand: Otra visiÃ³n"@es,
         "Antietam, Maryland. Allan Pinkerton, le prÃ©sident Lincoln et le gÃ©nÃ©ral-major John A. McClernand: Autre vue"@fr,
         "Antietam, Maryland. Allan Pinkerton, Â Presidente Lincoln e Major-General John A. McClernand: Outra Vista"@pt,
         "ÐÐ½Ñ‚Ð¸Ñ‚ÑÐ¼, ÑˆÑ‚Ð°Ñ‚ ÐœÑÑ€Ð¸Ð»ÐµÐ½Ð´. ÐÐ»Ð»Ð°Ð½ ÐŸÐ¸Ð½ÐºÐµÑ€Ñ‚Ð¾Ð½, Ð¿Ñ€ÐµÐ·Ð¸Ð´ÐµÐ½Ñ‚ Ð›Ð¸Ð½ÐºÐ¾Ð»ÑŒÐ½ Ð¸ Ð³ÐµÐ½ÐµÑ€Ð°Ð»-Ð¼Ð°Ð¹Ð¾Ñ€ Ð”Ð¶Ð¾Ð½ Ð. ÐœÐ°ÐºÐºÐ»ÐµÑ€Ð½Ð°Ð½Ð´: Ð”Ñ€ÑƒÐ³Ð¾Ð¹ ÑÐ½Ð¸Ð¼Ð¾Ðº"@ru,
         "Ø£Ù†ØªÙŠÙ†Ø§Ù…ØŒ Ù…ÙŠØ±ÙŠÙ„Ø§Ù†Ø¯ Ø£Ù„Ø§Ù† Ø¨ÙŠÙ†ÙƒØ±ØªÙˆÙ†ØŒ Ø§Ù„Ø±Ø¦ÙŠØ³ Ù„ÙŠÙ†ÙƒÙˆÙ„Ù†ØŒ ÙˆØ§Ù„Ù„ÙˆØ§Ø¡ Ø¬ÙˆÙ† Ø£. Ù…Ø§ÙƒÙ„ÙŠØ±Ù†Ø§Ù†Ø¯: Ù…Ù†Ø¸Ø± Ø¢Ø®Ø±"@ar,
         "å®‰è’‚ç‰¹å§†ï¼Œé©¬é‡Œå…°å·ž è‰¾ä¼¦Â·å¹³å…‹é¡¿ã€æž—è‚¯æ€»ç»Ÿå’Œå°‘å°†çº¦ç¿°Â·A Â·é©¬å…‹å…‹æ‹‰å—: å¦ä¸€ä¸ªè§†è§’"@zh;
     ore:aggregates <http://localhost/static/c/1/reference/04326u_thumb_item.gif>,
         <http://localhost/static/c/1/service/04326u.tif>;
     ore:isDescribedBy <http://localhost/en/item/1/item.rdf>;
     rdfs:seeAlso <http://hdl.loc.gov/loc.wdl/dlc.1>. 

 <http://localhost/static/c/1/reference/04326u_thumb_item.gif> a _27:FileDataObject;
     dcterms:format "image/gif";
     _27:fileSize "34531"^^<http://www.w3.org/2001/XMLSchema#long>. 

 <http://localhost/static/c/1/service/04326u.tif> a _27:FileDataObject;
     dcterms:format "image/tiff";
     _27:fileSize "1301614"^^<http://www.w3.org/2001/XMLSchema#long>. 

 ore:Aggregation rdfs1:isDefinedBy <http://www.openarchives.org/ore/terms/>;
     rdfs1:label "Aggregation". 

 ore:ResourceMap rdfs1:isDefinedBy <http://www.openarchives.org/ore/terms/>;
     rdfs1:label "ResourceMap". 
</pre>

You might pick up on some warts I have yet to fix, but there you go.
