var loaded = false;
var isHashUri = function(uri) {
    return uri.indexOf("#") != -1;
};

jQuery(function ($) {
    $('#ganchor').click(function() {
	if (loaded) {
	    return true;
	} else {
	    loaded = true;
	}
	var rdfjson = $("html").rdf().databank.dump();
	var width = 1800;
	var height = 1000;
	var g = new Graph();
	
	$.each(rdfjson, function (subj, predvals) { 	
	    // jQuery-ese idiom for "continue"
	    // we're skipping assertions about the page itself
	    if (!isHashUri(subj))
		return true;
	    g.addNode(subj);
	    $.each(predvals, function (pred, objvals) {
		g.addNode(pred);
		g.addEdge(subj, pred, { directed : true });	
		$.each(objvals, function (k, obj) {
		    g.addNode(obj.value);
		    g.addEdge(pred, obj.value, { directed : true });
		    /*
		    var triple = {
		        subject: subj,
		        predicate: pred,
		        object: obj.value, 
		        objtype: obj.type
		    };
                    */
		});
	    });
	});

	var layouter = new Graph.Layout.Spring(g);
	layouter.layout();

	var renderer = new Graph.Renderer.Raphael("graph", g, width, height);
	renderer.draw();

    });
});