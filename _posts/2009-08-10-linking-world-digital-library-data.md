---

title: Linking World Digital Library Data
wordpress_id: 457
wordpress_url: https://mike.giarlo.name/blog/?p=457
date: 2009-08-10 18:44:29 -04:00
---
As I <a href="/blog/2009/07/31/validating-ore-from-the-command-line/">mentioned earlier</a>, I've been learning about linked data in the context of dropping it into the <a href="http://www.wdl.org">World Digital Library</a> project.  I am hopeful we'll be able to deploy the RDF views[^1] before too long.  In advance of that, I thought it might be helpful to share a sample of what our RDF would look like.  The RDF below represents the WDL item for the U.S. Constitution.  I appreciate constructive criticism.

A few things to note:
<ul>
<li>Mmm, Unicode.</li>
<li>Item types are from the <a href="http://bibliontology.com/">Bibliographic Ontology</a>.</li>
<li>Most of the properties are from the <a href="http://dublincore.org/documents/dces/">Dublin Core Metadata Element Set</a> ontology, especially used where literals are objects rather than resources identified by URI. </li>
<li>Where possible I dug up or found URIs and used the <a href="http://dublincore.org/documents/dcmi-terms/">Dublin Core Metadata Terms</a> ontology.</li>
<li>An item is modeled as an aggregation of its constituent files, as defined in <a href="http://www.openarchives.org/ore/">OAI-ORE</a>.  The notion here is that an ORE aggregation of an item, as expressed in a resource map which is discoverable via a link header in each item detail page, is a "whole" item, including all of its files[^2], metadata, and translations.</li>
<li>I'm also making light use of the <a href="http://www.semanticdesktop.org/ontologies/nfo/">NEPOMUK File Ontology</a> to express that constituent files are files, and to be explicit about file sizes so that folks know in advance of retrieving it how large files are.</li>
<li>Links out to <a href="http://purl.org/NET/decimalised#">DDC</a> (Decimalised Database of Concepts), <a href="http://www.lingvoj.org/">Lingvoj</a>, <a href="http://dbpedia.org/">DBpedia</a>, and <a href="http://id.loc.gov/authorities/">Library of Congress Authorities &amp; Vocabularies</a> (e.g., LC Subject Headings) are included where possible[^3]. I'd be especially stoked to hear of other vocabs I might link to.  The more linked the data, the better.</li>
<li>The output below is Turtle for readability, but the application will offer up RDF/XML.</li>
</ul>

The data after the jump:
<!--more-->
<pre lang="ttl">
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix nfo: <http://www.semanticdesktop.org/ontologies/nfo#> .
@prefix ore: <http://www.openarchives.org/ore/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

<http://localhost/static/c/2708/service/00303_2003_001_pr.jpg>
    dc:format "image/jpeg" ;
    nfo:fileSize "259485"^^<http://www.w3.org/2001/XMLSchema#long> ;
    a nfo:FileDataObject .

<http://localhost/static/c/2708/service/00303_2003_003_pr.jpg>
    dc:format "image/jpeg" ;
    nfo:fileSize "267031"^^<http://www.w3.org/2001/XMLSchema#long> ;
    a nfo:FileDataObject .

<http://localhost/static/c/2708/reference/00303_2003_004_pr_thumb_item.gif>
    dc:format "image/gif" ;
    nfo:fileSize "56620"^^<http://www.w3.org/2001/XMLSchema#long> ;
    a nfo:FileDataObject .

<http://localhost/static/c/2708/service/00303_2003_004_pr.jpg>
    dc:format "image/jpeg" ;
    nfo:fileSize "233875"^^<http://www.w3.org/2001/XMLSchema#long> ;
    a nfo:FileDataObject .

<http://localhost/static/c/2708/service/00303_2003_002_pr.jpg>
    dc:format "image/jpeg" ;
    nfo:fileSize "245809"^^<http://www.w3.org/2001/XMLSchema#long> ;
    a nfo:FileDataObject .

<http://localhost/item/2708/about.rdf>
    dcterms:created "2009-08-10T18:11:25-04:00"^^dcterms:W3CDTF ;
    dcterms:creator <http://dbpedia.org/resource/World_Digital_Library> ;
    dcterms:modified "2009-08-10T18:11:25-04:00"^^dcterms:W3CDTF ;
    ore:describes <http://localhost/item/2708/about.rdf#item> ;
    a ore:ResourceMap .

<http://localhost/item/2708/about.rdf#item>
    dc:created "17 Septembre 1787"@fr, "17 de septiembre de 1787"@es, "17 de setembro de 1787"@pt, "17 ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ 1787 Ð³."@ru, "1787å¹´9æœˆ17æ—¥"@zh, "September 17, 1787"@en, """Ù¡Ù§ Ø§ÙŠÙ„ÙˆÙ„ Ù¡Ù§Ù¨Ù§
"""@ar ;
    dc:creator "Constitutional Convention, United States"@en, "ConvenciÃ³n Constituyente, Estados Unidos"@es, "Convention constitutionnelle, Ã‰tats-Unis"@fr, "ConvenÃ§Ã£o Constitucional, Estados Unidos"@pt, "ÐšÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ð¾Ð½Ð½Ð°Ñ ÐšÐ¾Ð½Ð²ÐµÐ½Ñ†Ð¸Ñ, Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð½Ñ‹Ðµ Ð¨Ñ‚Ð°Ñ‚Ñ‹"@ru, "Ø§Ù„Ø§ØªÙØ§Ù‚ÙŠØ© Ø§Ù„Ø¯Ø³ØªÙˆØ±ÙŠØ©ØŒ Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª Ø§Ù„Ù…ØªØ­Ø¯Ø©"@ar, "åˆ¶å®ªä¼šè®®ï¼Œç¾Žå›½"@zh ;
    dc:extent "Manuscript (4 pages of parchment)"@en, "Manuscrit (4 pages de parchemin)"@fr, "Manuscrito (4 pÃ¡ginas de pergamino)"@es, "Manuscrito (4 pÃ¡ginas em pergaminho)"@pt, "Ð ÑƒÐºÐ¾Ð¿Ð¸ÑÑŒÂ (4 Ð¿ÐµÑ€Ð³Ð°Ð¼ÐµÐ½Ñ‚Ð½Ñ‹Ñ… ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹)"@ru, "Ù…Ø®Ø·ÙˆØ·Ø© (Ù¤ ØµÙØ­Ø§Øª Ù…Ù† Ø§Ù„ÙˆØ±Ù‚ Ø§Ù„Ù†ÙÙŠØ³)"@ar, "æ‰‹è‰æœ¬ï¼ˆ4 é¡µç¾Šçš®çº¸ï¼‰"@zh ;
    dc:language "Anglais"@fr, "English"@en, "InglÃ©s"@es, "InglÃªs"@pt, "ÐÐ½Ð³Ð»Ð¸Ð¹ÑÐºÐ¸Ð¹ ÑÐ·Ñ‹Ðº"@ru, "Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©"@ar, "è‹±è¯­"@zh ;
    dc:publisher "AdministraÃ§Ã£o de Registros e Arquivos Nacionais"@pt, "Archives Nationales et Administration des documents (NARA) des Ã‰tats-Unis d'AmÃ©rique "@fr, "Los Archivos Nacionales y AdministraciÃ³n de Documentos (NARA) de los Estados Unidos de AmÃ©rica"@es, "National Archives and Records Administration"@en, "Ð£Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð½Ð°Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð°Ñ€Ñ…Ð¸Ð²Ð¾Ð² Ð¸ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð²"@ru, "Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠØ© Ù„Ù„ÙˆØ«Ø§Ø¦Ù‚ ÙˆØ§Ù„Ø³Ø¬Ù„Ø§Øª Ø§Ù„ÙˆØ·Ù†ÙŠØ©"@ar, "ç¾Žå›½å›½å®¶æ–‡ä»¶ä¸Žæ¡£æ¡ˆç®¡ç†å±€"@zh ;
    dc:subject "Constituciones"@es, "ConstituiÃ§Ãµes"@pt, "Constitutional & administrative law"@en, "Constitutions"@en, "Constitutions"@fr, "Derecho constitucional y administrativo"@es, "Direito constitucional e administrativo"@pt, "Droit constitutionnel et administratif"@fr, "Politics and government"@en, "Politique et gouvernement"@fr, "PolÃ­tica e governo"@pt, "PolÃ­tica y gobierno"@es, "ÐšÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ð¸"@ru, "ÐšÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ð¾Ð½Ð½Ð¾Ðµ Ð¸ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¸Ð²Ð½Ð¾Ðµ Ð¿Ñ€Ð°Ð²Ð¾"@ru, "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð¸ Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð¾"@ru, "Ø§Ù„Ø¯Ø³Ø§ØªÙŠØ±"@ar, "Ø§Ù„Ø³ÙŠØ§Ø³Ø© ÙˆØ§Ù„Ø­ÙƒÙˆÙ…Ø©"@ar, "Ø§Ù„Ù‚Ø§Ù†ÙˆÙ† Ø§Ù„Ø¯Ø³ØªÙˆØ±ÙŠ ÙˆØ§Ù„Ø¥Ø¯Ø§Ø±ÙŠ."@ar, "å®ªæ³•"@zh, "å®ªæ³• & è¡Œæ”¿æ³•"@zh, "æ”¿æ²»å’Œæ”¿åºœ"@zh ;
    dc:title "ConstituciÃ³n de los Estados Unidos"@es, "ConstituiÃ§Ã£o dos Estados Unidos"@pt, "Constitution des Ã‰tats-Unis"@fr, "Constitution of the United States"@en, "ÐšÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ñ Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð½Ñ‹Ñ… Ð¨Ñ‚Ð°Ñ‚Ð¾Ð²"@ru, "Ø¯Ø³ØªÙˆØ± Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª Ø§Ù„Ù…ØªØ­Ø¯Ø©"@ar, "ç¾Žå›½å®ªæ³•"@zh ;
    dcterms:DDC "342" ;
    dcterms:LCSH <http://id.loc.gov/authorities/label/Constitutions> ;
    dcterms:alternative "Constitution of the United States"@en ;
    dcterms:dateSubmitted "2009-05-07T06:45:21-04:00"^^dcterms:W3CDTF ;
    dcterms:description "1787 å¹´ 5 æœˆ 14 æ—¥ï¼Œåˆ¶å®ªä¼šè®®åœ¨è´¹åŸŽçš„è®®ä¼šå¤§æ¥¼ï¼ˆç‹¬ç«‹åŽ…ï¼‰å¬å¼€ï¼Œç›®çš„æ˜¯ä¿®è®¢ã€Šé‚¦è”æ¡ä¾‹ã€‹ã€‚ ç”±äºŽå¼€å§‹æ—¶åªæœ‰ä¸¤ä¸ªå·žçš„ä»£è¡¨å›¢å‡ºå¸­ï¼Œæˆå‘˜ä¸å¾—ä¸ä¸€å¤©å¤©åœ°ä¼‘ä¼šï¼Œç›´åˆ° 5 æœˆ 25 æ—¥ä¸Žä¼šäººæ•°è¾¾åˆ°æ³•å®šçš„ä¸ƒä¸ªå·žã€‚ é€šè¿‡è®¨è®ºå’Œäº‰è¾©ï¼Œ6 æœˆä¸­æ—¬æ—¶æ˜Žç¡®æ˜¾ç¤ºå¤§ä¼šä¸Žå…¶ä¿®æ”¹çŽ°æœ‰çš„ã€Šè”é‚¦æ¡ä¾‹ã€‹ä¸å¦‚ä¸ºæ”¿åºœé‡æ–°èµ·è‰ä¸€ä»½å…¨æ–°çš„æ¡†æž¶ã€‚ æ•´ä¸ªå¤å­£ï¼Œä»£è¡¨ä»¬éƒ½åœ¨éžå…¬å¼€ä¼šè®®ä¸­è¾©è®ºã€èµ·è‰ã€é‡æ–°èµ·è‰æ–°å®ªæ³•çš„æ¡æ¬¾ã€‚ ä¸»è¦çš„äº‰è®ºé—®é¢˜åŒ…æ‹¬è¦èµ‹äºˆä¸­å¤®æ”¿åºœå¤šå¤§æƒåˆ©ã€å…è®¸å„å·žåœ¨å›½ä¼šä¸­æœ‰å¤šå°‘ä¸ªä»£è¡¨å¸­ä½ä»¥åŠè¿™äº›ä»£è¡¨åº”è¯¥å¦‚ä½•é€‰ä¸¾äº§ç”Ÿâ€”â€”ç”±äººæ°‘ç›´æŽ¥é€‰ä¸¾è¿˜æ˜¯ç”±å„å·žç«‹æ³•äººå‘˜é€‰ä¸¾äº§ç”Ÿã€‚ è¿™éƒ¨å®ªæ³•æ˜¯å¾ˆå¤šäººæ™ºæ…§çš„ç»“æ™¶ï¼Œæ˜¯åˆä½œæ”¿æ²»è¿ä½œå’Œå¦¥åè‰ºæœ¯çš„å…¸èŒƒã€‚"@zh, "A ConvenÃ§Ã£o Federal reuniu-se na Casa de Estado (Hall da IndependÃªncia), em FiladÃ©lfia, em 14 de maio de 1787 para revisar os Artigos da ConfederaÃ§Ã£o. Em virtude de estarem presentes, inicialmente, as delegaÃ§Ãµes de apenas dois estados, os membros suspenderam os trabalhos, dia apÃ³s dia, atÃ© que fosse atingido o quÃ³rum de sete estados em 25 de maio. AtravÃ©s de discussÃµes e debates ficou claro, em meados de junho que, em vez de alterar os atuais artigos da ConfederaÃ§Ã£o, a convenÃ§Ã£o deveria elaborar uma estrutura inteiramente nova para o governo. Ao longo de todo o verÃ£o, os delegados debateram, elaboraram e reelaboraram os artigos da nova ConstituiÃ§Ã£o em sessÃµes fechadas. Entre os principais pontos em questÃ£o estavam o grau de poder permitido ao governo central, o nÃºmero de representantes no Congresso para cada Estado, e como estes representantes deveriam ser eleitos - diretamente pelo povo ou pelos legisladores do estado. A ConstituiÃ§Ã£o foi o trabalho de muitas mentes e permanece como um modelo de cooperaÃ§Ã£o entre lideranÃ§as polÃ­ticas e da arte da condescendÃªncia."@pt, "La ConvenciÃ³n Federal se reuniÃ³ en la CÃ¡mara del Estado (SalÃ³n de la Independencia) en Filadelfia el 14 de mayo de 1787, para revisar los artÃ­culos de la ConfederaciÃ³n. Debido a que las delegaciones de sÃ³lo dos estados estuvieron presentes inicialmente, los miembros levantaron sesiÃ³n de un dÃ­a para el siguiente hasta que se obtuvo un quÃ³rum de siete estadosÂ el 25 de mayo. A travÃ©s de la discusiÃ³n y el debate se hizo evidente a mediados de junio que, en lugar de modificar los actuales artÃ­culos de la ConfederaciÃ³n, la convenciÃ³n prepararÃ­a un marco totalmente nuevo para el gobierno. Durante todo el verano, los delegados debatieron, prepararon y redactaron nuevamente los artÃ­culos de la nueva ConstituciÃ³n en sesiones a puerta cerrada. Entre los principales puntos en cuestiÃ³n estuvieron cuÃ¡ntoÂ poder otorgarÂ al gobierno central, el nÃºmero de representantes en el Congreso que se iban aÂ permitir a cada Estado y la forma en que estos representantes debÃ­an ser elegidos, directamente por el pueblo o por los legisladores estatales. La ConstituciÃ³n fue el resultado del trabajo de muchas mentes y se erige como modelo de cooperaciÃ³n polÃ­tica y del arte del compromiso."@es, "La Convention FÃ©dÃ©rale s'assembla dans la Chambre LÃ©gislative (Independence Hall) Ã  Philadelphie le 14 mai 1787, pour rÃ©viser les articles de la ConfÃ©dÃ©ration. En raison de la seule prÃ©sence initiale des dÃ©lÃ©gations de deux Ã‰tats, les membres ajournÃ¨rent d'un jour Ã  l'autre jusqu'Ã  ce que le quorum de sept Ã‰tats soit obtenu le 25 mai. Ã‚ travers les discussions et les dÃ©bats, il devint clair dÃ¨s la mi-juin que, plutÃ´t que de modifier les articles existants de la ConfÃ©dÃ©ration, la convention allait plutÃ´t Ã©baucher un cadre entiÃ¨rement nouveau pour le gouvernement. Tout au long de l'Ã©tÃ©, les dÃ©lÃ©guÃ©s dÃ©battirent, Ã©laborÃ¨rent, et remaniÃ¨rent les articles de la nouvelle Constitution, Ã  huis clos. Les principaux points litigieux portaient sur la puissance Ã  accorder au gouvernement central, sur le nombre de reprÃ©sentants au CongrÃ¨s pour chaque Ã‰tat, et sur le mode d'Ã©lection de ces reprÃ©sentants - directement par le peuple ou par les lÃ©gislateurs de l'Ã©tat. La Constitution fut l'Å“uvre de nombreux esprits et reste un modÃ¨le de coopÃ©ration politique et de l'art du compromis."@fr, "The Federal Convention convened in the State House (Independence Hall) in Philadelphia on May 14, 1787, to revise the Articles of Confederation. Because the delegations from only two states were present initially, the members adjourned from one day to the next until a quorum of seven states was obtained on May 25. Through discussion and debate it became clear by mid-June that, rather than amend the existing Articles of Confederation, the convention would draft an entirely new framework for the government. All through the summer, the delegates debated, drafted, and redrafted the articles of the new Constitution in closed sessions. Among the chief points at issue were how much power to allow the central government, how many representatives in Congress to allow each state, and how these representatives should be elected--directly by the people or by the state legislators. The Constitution was the work of many minds and stands as a model of cooperative statesmanship and the art of compromise."@en, "Ð¤ÐµÐ´ÐµÑ€Ð°Ð»ÑŒÐ½Ð¾Ðµ ÑÐ¾Ð±Ñ€Ð°Ð½Ð¸Ðµ ÑÐ¾Ð±Ñ€Ð°Ð»Ð¾ÑÑŒ Ð½Ð° Ð·Ð°ÑÐµÐ´Ð°Ð½Ð¸Ðµ Ð² Ð”Ð¾Ð¼Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð° (Ð·Ð°Ð» ÐÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑ‚Ð¸) 14 Ð¼Ð°Ñ 1787 Ð³Ð¾Ð´Ð° Ð´Ð»Ñ Ð¿ÐµÑ€ÐµÑÐ¼Ð¾Ñ‚Ñ€Ð° Ð¡Ñ‚Ð°Ñ‚ÐµÐ¹ ÐšÐ¾Ð½Ñ„ÐµÐ´ÐµÑ€Ð°Ñ†Ð¸Ð¸. ÐŸÐ¾ÑÐºÐ¾Ð»ÑŒÐºÑƒ Ð²Ð½Ð°Ñ‡Ð°Ð»Ðµ Ð½Ð° Ð·Ð°ÑÐµÐ´Ð°Ð½Ð¸Ð¸ Ð¿Ñ€Ð¸ÑÑƒÑ‚ÑÑ‚Ð²Ð¾Ð²Ð°Ð»Ð¸ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð¸Ñ‚ÐµÐ»Ð¸ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð´Ð²ÑƒÑ… ÑˆÑ‚Ð°Ñ‚Ð¾Ð², Ð¡Ð¾Ð±Ñ€Ð°Ð½Ð¸Ðµ Ð±Ñ‹Ð»Ð¾ Ñ€Ð°ÑÐ¿ÑƒÑ‰ÐµÐ½Ð¾ Ð½Ð° Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð´Ð½ÐµÐ¹ Ð´Ð¾ Ñ‚ÐµÑ… Ð¿Ð¾Ñ€, Ð¿Ð¾ÐºÐ° 25 Ð¼Ð°Ñ Ð½Ðµ Ð±Ñ‹Ð» Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½ ÐºÐ²Ð¾Ñ€ÑƒÐ¼ Ð¸Ð· Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ¹ ÑÐµÐ¼Ð¸ ÑˆÑ‚Ð°Ñ‚Ð¾Ð². Ð’ Ñ…Ð¾Ð´Ðµ Ð´Ð¸ÑÐºÑƒÑÑÐ¸Ð¹ Ð¸ Ð´ÐµÐ±Ð°Ñ‚Ð¾Ð² Ðº ÑÐµÑ€ÐµÐ´Ð¸Ð½Ðµ Ð¸ÑŽÐ½Ñ ÑÑ‚Ð°Ð»Ð¾ Ð¿Ð¾Ð½ÑÑ‚Ð½Ð¾, Ñ‡Ñ‚Ð¾ ÑÐ¾Ð±Ñ€Ð°Ð½Ð¸Ðµ Ð±Ñ‹Ð»Ð¾ Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¾ ÑÐºÐ¾Ñ€ÐµÐµ ÑÐ¾ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð½Ð¾Ð²Ñ‹Ð¹ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚ ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ñ‹ Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð°, Ð½ÐµÐ¶ÐµÐ»Ð¸ Ñ‡ÐµÐ¼ Ð¿ÐµÑ€ÐµÑÐ¼Ð°Ñ‚Ñ€Ð¸Ð²Ð°Ñ‚ÑŒ ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ðµ Ð¡Ñ‚Ð°Ñ‚ÑŒÐ¸ ÐšÐ¾Ð½Ñ„ÐµÐ´ÐµÑ€Ð°Ñ†Ð¸Ð¸. Ð’ Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð²ÑÐµÐ³Ð¾ Ð»ÐµÑ‚Ð° Ð´ÐµÐ»ÐµÐ³Ð°Ñ‚Ñ‹ Ð¾Ð±ÑÑƒÐ¶Ð´Ð°Ð»Ð¸, ÑÐ¾ÑÑ‚Ð°Ð²Ð»ÑÐ»Ð¸ Ñ‡ÐµÑ€Ð½Ð¾Ð²Ñ‹Ðµ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ñ‹ ÑÑ‚Ð°Ñ‚ÐµÐ¹ Ð½Ð¾Ð²Ð¾Ð¹ ÐšÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ð¸ Ð¸ Ñ‚ÑƒÑ‚ Ð¶Ðµ Ð¸Ñ… Ð¿ÐµÑ€ÐµÑÐ¼Ð°Ñ‚Ñ€Ð¸Ð²Ð°Ð»Ð¸ Ð² Ñ…Ð¾Ð´Ðµ Ð·Ð°ÐºÑ€Ñ‹Ñ‚Ñ‹Ñ… Ð·Ð°ÑÐµÐ´Ð°Ð½Ð¸Ð¹. Ð¡Ñ€ÐµÐ´Ð¸ Ð¾ÑÐ½Ð¾Ð²Ð½Ñ‹Ñ… Ð¾Ð±ÑÑƒÐ¶Ð´Ð°Ð²ÑˆÐ¸Ñ…ÑÑ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ¾Ð² Ð±Ñ‹Ð»Ð¸ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ ÑÑ‚ÐµÐ¿ÐµÐ½Ð¸ Ð²Ð»Ð°ÑÑ‚Ð¸ Ð¸ Ð¿Ð¾Ð»Ð½Ð¾Ð¼Ð¾Ñ‡Ð¸Ð¹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¼Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ð¾ Ð±Ñ‹Ñ‚ÑŒ Ð½Ð°Ð´ÐµÐ»ÐµÐ½Ð¾ Ñ†ÐµÐ½Ñ‚Ñ€Ð°Ð»ÑŒÐ½Ð¾Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð¾, ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð° Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ¹ Ð² ÐšÐ¾Ð½Ð³Ñ€ÐµÑÑÐµ Ð¾Ñ‚ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ ÑˆÑ‚Ð°Ñ‚Ð°, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ð¿Ñ€Ð¾Ñ†ÐµÐ´ÑƒÑ€Ñ‹ Ð¿ÐµÑ€ÐµÐ¸Ð·Ð±Ñ€Ð°Ð½Ð¸Ñ ÑÑ‚Ð¸Ñ… Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ¹Â â€” Ð½ÐµÐ¿Ð¾ÑÑ€ÐµÐ´ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ Ð¶Ð¸Ñ‚ÐµÐ»ÑÐ¼Ð¸ ÑˆÑ‚Ð°Ñ‚Ð¾Ð² Ð¸Ð»Ð¸ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð´Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¼Ð¸ ÑÐ¾Ð±Ñ€Ð°Ð½Ð¸ÑÐ¼Ð¸ ÑˆÑ‚Ð°Ñ‚Ð¾Ð². ÐšÐ¾Ð½ÑÑ‚Ð¸Ñ‚ÑƒÑ†Ð¸Ñ Ð±Ñ‹Ð»Ð° Ð¿Ð»Ð¾Ð´Ð¾Ð¼ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ Ð¼Ð½Ð¾Ð³Ð¸Ñ… Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¾Ð² Ð¸ ÑÐ²Ð»ÑÐµÑ‚ÑÑ ÑÑ€ÐºÐ¸Ð¼ Ð¿Ñ€Ð¸Ð¼ÐµÑ€Ð¾Ð¼ ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸Ñ‡ÐµÑÑ‚Ð²Ð° Ð³Ð¾ÑÑƒÐ´Ð°Ñ€ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ñ… Ð´ÐµÑÑ‚ÐµÐ»ÐµÐ¹ Ð¸ Ð¸ÑÐºÑƒÑÑÑ‚Ð²Ð° ÐºÐ¾Ð¼Ð¿Ñ€Ð¾Ð¼Ð¸ÑÑÐ°."@ru, "Ø§Ø¬ØªÙ…Ø¹ Ù…Ù…Ø«Ù„Ùˆ Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„ÙØ¯Ø±Ø§Ù„ÙŠ ÙÙŠ Ù‚ØµØ± Ø§Ù„Ø¯ÙˆÙ„Ø© (Ù‚Ø§Ø¹Ø© Ø§Ù„Ø§Ø³ØªÙ‚Ù„Ø§Ù„) ÙÙŠ ÙÙŠÙ„Ø§Ø¯Ù„ÙÙŠØ§ ÙŠÙˆÙ… Ù¡Ù¤Â  Ø£ÙŠØ§Ø± Ù¡Ù§Ù¨Ù§ Ù„ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù†Ø¸Ø§Ù… Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ Ù„Ù„Ø§ØªØ­Ø§Ø¯. ÙˆØ­ÙŠØ« Ø­Ø¶Ø± ÙˆÙØ¯Ø§Ù† Ø§Ø«Ù†Ø§Ù† ÙÙ‚Ø· Ù…Ù† ÙˆÙÙˆØ¯ Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª ÙÙŠ Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©ØŒ Ø±ÙØ¹ Ø§Ù„Ø£Ø¹Ø¶Ø§Ø¡ Ø§Ù„Ø­Ø¶ÙˆØ± Ø§Ù„Ø¬Ù„Ø³Ø© Ù…Ù† ÙŠÙˆÙ… Ø¥Ù„Ù‰ Ø¢Ø®Ø± Ø­ØªÙ‰ Ø§ÙƒØªÙ…Ù„ Ø§Ù„Ù†ØµØ§Ø¨ Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠ Ø¨Ø­Ø¶ÙˆØ± ÙˆÙÙˆØ¯ Ø³Ø¨Ø¹ ÙˆÙ„Ø§ÙŠØ§Øª ÙÙŠ Ù¢Ù¥ Ø£ÙŠØ§Ø±. ÙˆÙ‚Ø¯ Ø§ØªØ¶Ø­ Ø®Ù„Ø§Ù„ Ø§Ù„Ù…Ù†Ø§Ù‚Ø´Ø§Øª ÙˆØ§Ù„Ø­ÙˆØ§Ø± Ø¨Ø­Ù„ÙˆÙ„ Ù…Ù†ØªØµÙ Ø­Ø²ÙŠØ±Ø§Ù† Ø£Ù†Ù‡ Ø¨Ø¯Ù„Ø§ Ù…Ù† ØªØ¹Ø¯ÙŠÙ„ Ù…ÙˆØ§Ø¯ Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„ÙƒÙˆÙ†ÙØ¯Ø±Ø§Ù„ÙŠ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©ØŒ ÙƒØ§Ù† Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¤ØªÙ…Ø±ÙŠÙ† ØµÙŠØ§ØºØ© Ø¥Ø·Ø§Ø± Ø¬Ø¯ÙŠØ¯ ØªÙ…Ø§Ù…Ø§ Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ù„Ø­ÙƒÙˆÙ…Ø©. ÙˆØ·ÙˆØ§Ù„ Ø°Ù„Ùƒ Ø§Ù„ØµÙŠÙØŒ Ù†Ø§Ù‚Ø´ Ø§Ù„Ù…Ù†Ø¯ÙˆØ¨ÙˆÙ† ÙˆØµØ§ØºÙˆØ§ Ø«Ù… Ø£Ø¹Ø§Ø¯ÙˆØ§ ØµÙŠØ§ØºØ© Ù…ÙˆØ§Ø¯ Ø§Ù„Ø¯Ø³ØªÙˆØ± Ø§Ù„Ø¬Ø¯ÙŠØ¯ ÙÙŠ Ø¬Ù„Ø³Ø§Øª Ù…ØºÙ„Ù‚Ø©. ÙˆÙ…Ù† Ø¨ÙŠÙ† Ø§Ù„Ù†Ù‚Ø§Ø· Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ø§Ù„ØªÙŠ Ø¯Ø§Ø± Ø­ÙˆÙ„Ù‡Ø§ Ø§Ù„Ø¬Ø¯Ù„ Ù…Ø¯Ù‰ ØµÙ„Ø§Ø­ÙŠØ§Øª Ø§Ù„Ø­ÙƒÙˆÙ…Ø© Ø§Ù„Ù…Ø±ÙƒØ²ÙŠØ© ÙˆØ¹Ø¯Ø¯ Ø§Ù„Ù…Ù…Ø«Ù„ÙŠÙ† ÙÙŠ Ø§Ù„ÙƒÙˆÙ†ØºØ±Ø³ Ù„ÙƒÙ„ ÙˆÙ„Ø§ÙŠØ© ØŒ ÙˆÙƒÙŠÙÙŠØ© Ø§Ù†ØªØ®Ø§Ø¨ Ù‡Ø¤Ù„Ø§Ø¡ Ù…Ù…Ø«Ù„ÙŠÙ† -- Ø¨Ø§Ù„Ø§Ù†ØªØ®Ø§Ø¨ Ø§Ù„Ù…Ø¨Ø§Ø´Ø± Ù…Ù† Ø§Ù„Ø´Ø¹Ø¨ Ø£Ùˆ Ù…Ù† Ù‚Ø¨Ù„ Ù…Ø´Ø±Ù‘Ø¹ÙŠ Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª. Ù„Ù‚Ø¯ ÙƒØ§Ù† Ø§Ù„Ø¯Ø³ØªÙˆØ± Ù…Ù† Ø¹Ù…Ù„ Ø¹Ù‚ÙˆÙ„ ÙƒØ«ÙŠØ±Ø© ÙˆÙ‡Ùˆ ÙŠÙ…Ø«Ù„ Ù†Ù…ÙˆØ°Ø¬Ø§ Ù„ÙÙ† Ø§Ù„Ø­ÙƒÙ… Ø§Ù„ØªØ¹Ø§ÙˆÙ†ÙŠ Ø­Ù†ÙƒØ© Ø§Ù„ØªÙˆØµÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„ÙˆØ³Ø·."@ar ;
    dcterms:identifier "http://localhost/item/2708/about.rdf#item" ;
    dcterms:language <http://www.lingvoj.org/lang/en> ;
    dcterms:publisher <http://dbpedia.org/resource/National_Archives_and_Records_Administration> ;
    dcterms:spatial <http://dbpedia.org/resource/North_America>, <http://dbpedia.org/resource/United_States_of_America>, "AmÃ©rica del Norte"@es, "AmÃ©rica do Norte"@pt, "AmÃ©rique du Nord"@fr, "Estados Unidos da AmÃ©rica"@pt, "Estados Unidos de AmÃ©rica"@es, "North America"@en, "United States of America"@en, "Ã‰tats-Unis d'AmÃ©rique"@fr, "Ð¡ÐµÐ²ÐµÑ€Ð½Ð°Ñ ÐÐ¼ÐµÑ€Ð¸ÐºÐ°"@ru, "Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð½Ñ‹Ðµ Ð¨Ñ‚Ð°Ñ‚Ñ‹ ÐÐ¼ÐµÑ€Ð¸ÐºÐ¸"@ru, "Ø£Ù…Ø±ÙŠÙƒØ§ Ø§Ù„Ø´Ù…Ø§Ù„ÙŠØ©"@ar, "Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª Ø§Ù„Ù…ØªØ­Ø¯Ø© Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠØ©"@ar, "åŒ—ç¾Ž"@zh, "ç¾Žå›½"@zh ;
    dcterms:subject <http://dbpedia.org/resource/Constitutions> ;
    dcterms:temporal "1700 AD - 1799 AD"@en, "1700 ap. J.-C. - 1799 ap. J.-C."@fr, "1700 d.C. - 1799 d.C."@es, "1700 d.C. - 1799 d.C."@pt, "1700 Ð½.Ñ. - 1799 Ð½.Ñ."@ru, "1700 å…¬å…ƒ - 1799 å…¬å…ƒ"@zh, "Ù¡Ù§Ù Ù  Ù… - Ù¡Ù§Ù©Ù© Ù…"@ar ;
    dcterms:title <http://dbpedia.org/resource/Constitution_of_the_United_States> ;
    ore:aggregates <http://localhost/static/c/2708/reference/00303_2003_004_pr_thumb_item.gif>, <http://localhost/static/c/2708/service/00303_2003_001_pr.jpg>, <http://localhost/static/c/2708/service/00303_2003_002_pr.jpg>, <http://localhost/static/c/2708/service/00303_2003_003_pr.jpg>, <http://localhost/static/c/2708/service/00303_2003_004_pr.jpg> ;
    ore:isDescribedBy <http://localhost/item/2708/about.rdf> ;
    a <http://purl.org/ontology/bibo/Manuscript> ;
    rdfs:seeAlso <http://hdl.loc.gov/loc.wdl/dna.2708> .

</pre>

[^1]: Sadly, the URIs are uglyish due to some constraints from our caching configuration.  I figure we can redirect uglyish URIs to cool ones and make use of `owl:sameAs`` if those constraints go away.
[^2]: *sans* certain low-quality derivatives such as small thumbnails and tiles for the zoom interface
[^3]: I was poking through the DBpedia output for <a href="http://www.geonames.org/">Geonames</a> URIs as well, but my method was way too slow and clunky, so that's disabled for the time being.  Clients can always follow their noses from the DBpedia output.
