$( document ).ready(function() {
	openTut('startTut', true)
});

/**
 * .focusObj
 * Focus on an object with a keyhole effect, fading out the background leaving only one area in focus
 * @param objname
 * **/
 function focusObj(objname){
 	var object;
 	// Find the desired(objname) object from the tutorial object array.
 	//
 	//
 	for (k = 0; k < tutobjects.length; ++k){
 		if (tutobjects[k].nameObj === objname) {
 			object = tutobjects[k];
 			break;
 		}
 	}

 	// Set the over-layer/tutorial canvas to a higher z-index to be able to get the keyhole effect.
 	$('.over-layer').css( "zIndex", 3)

 	// The farmer conversation bubble needs a higher index, otherwise it will not be clickable.
 	$('#farmer-bubble').css( "zIndex", 4)

 	// Fetch canvases and there contexts.
 	var ovrCanvas = document.getElementById("overlayCanvas");
 	var maskCanvas = document.createElement('canvas');
 	var ctx = ovrCanvas.getContext('2d');
 	maskCanvas.width = ovrCanvas.width;
 	maskCanvas.height = ovrCanvas.height;
 	var maskCtx = maskCanvas.getContext('2d');

 	// Save the initialized canvases, clean canvases.
 	ctx.save();
 	maskCtx.save();

 	// Retrieve the position {x,y} of the canvas relative to the viewport.
 	var offset = getOffset(object);

 	ctx.drawImage(maskCanvas, 0, 0);

 	// Fill the canvas with a black transparent color.
 	maskCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
 	maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

 	// Make the keyhole, higher transparency for the circular object and don not affect the existing content if they
 	// do not overlap.
 	//
		maskCtx.globalCompositeOperation = 'destination-out'
		maskCtx.fillStyle = "rgba(0, 0, 0, 0.9)";
		maskCtx.moveTo(object.x + offset.x + (object.canvas.width() * object.widthFact)/2,
			object.y + offset.y + document.body.scrollTop + ((object.canvas.width() * object.widthFact * object.heightFact)/2));
	
	// Depending on the object factor between hight and width, the radius is created differently.	
		if(((object.canvas.width() * object.widthFact)/2) > ((object.canvas.width() * object.widthFact * object.heightFact)/2))
			maskCtx.arc(object.x + offset.x + (object.canvas.width() * object.widthFact)/2,
				(object.y + offset.y + document.body.scrollTop + ((object.canvas.width() * object.widthFact * object.heightFact)/2)),
				object.canvas.width() * object.widthFact * 0.6, 0, 2 * Math.PI);
		else
			maskCtx.arc(object.x + offset.x + (object.canvas.width() * object.widthFact)/2,
				(object.y + offset.y + document.body.scrollTop + ((object.canvas.width() * object.widthFact * object.heightFact)/2)),
				((object.canvas.width() * object.widthFact * object.heightFact)) * 0.7, 0, 2 * Math.PI);

		// Draw overlay canvas on object canvas.
		maskCtx.fill();
		ctx.drawImage(maskCanvas, 0, 0);
		maskCtx.restore();
		ctx.restore();
	}


	function unfocusObj(){
		// Reset overlay canvas in both z-index and clear it.
		$('.over-layer').css( "zIndex", 0)
		var ovrCanvas = document.getElementById("overlayCanvas");
		var ctx = ovrCanvas.getContext('2d');
		ctx.clearRect(0, 0, ovrCanvas.width, ovrCanvas.height);

	}

/**
 * .startTut
 * Initialise the tutorial
 * @param
 * **/
 function startTut(){
 	var overlayCanvas = document.getElementById('overlayCanvas');
 	//Set the hight and with of the overlay/tutorial canvas to fill the window.
 	overlayCanvas.height = $(window).height();
 	overlayCanvas.width = window.innerWidth;
 	// Display navigation bar in the farmer bubble.
 	$(".tut-navbar").show();
 	// Set first window, explaining how the tutorial works.
 	openTut("Info", true)
 }

/**
 * .endTut
 * Close the tutorial
 * @param
 * **/
 function endTut(){
 	// Set start window, question from the farmer.
 	openTut('startTut', true);
 	// Clear the overlay/tutorial canvas
 	unfocusObj();
 	$(".tut-navbar").hide();
 	$("#farmer-bubble").hide();
 }

/**
 * .openTut
 * Opens wanted tab in the farmer bubble, created in index.html.
 * @param
 * **/
 function openTut(cityName, first) {
	// Hide all the tabs.
	var i;
	var x = document.getElementsByClassName("tut-tab");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	// Show wanted tab from cityName.
	var test = document.getElementById(cityName);
	test.style.display = "block";
	// If tab is not #Info, create the keyhole effect.
	if(first == null){
		unfocusObj();
		focusObj(cityName);
	}
}

