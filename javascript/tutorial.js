$( document ).ready(function() {
	openTut('startTut', true)
}); 


function focusObj(objname){
	var object;
	for (k = 0; k < tutobjects.length; ++k){
		if (tutobjects[k].nameObj === objname) {
			object = tutobjects[k];
			break;
		}
	}

	$('.over-layer').css( "zIndex", 3)

	$('#farmer-bubble').css( "zIndex", 4)
	var ovrCanvas = document.getElementById("overlayCanvas");
	var maskCanvas = document.createElement('canvas');
	var ctx = ovrCanvas.getContext('2d');
	maskCanvas.width = ovrCanvas.width;
	maskCanvas.height = ovrCanvas.height;
	var maskCtx = maskCanvas.getContext('2d');

	ctx.save();

	maskCtx.save();

		var offset = getOffset(object);

		ctx.drawImage(maskCanvas, 0, 0);
		maskCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
		maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
		
		//maskCtx.globalCompositeOperation = 'xor';
		maskCtx.globalCompositeOperation = 'destination-out'
		maskCtx.fillStyle = "rgba(0, 0, 0, 0.9)";
		maskCtx.moveTo(object.x + offset.x + (object.canvas.width() * object.widthFact)/2,
			object.y + offset.y + document.body.scrollTop + ((object.canvas.width() * object.widthFact * object.heightFact)/2));
		
		maskCtx.arc(object.x + offset.x + (object.canvas.width() * object.widthFact)/2,
			object.y + offset.y + document.body.scrollTop + ((object.canvas.width() * object.widthFact * object.heightFact)/2),
			object.canvas.width() * object.widthFact * 0.9, 0, 2 * Math.PI);
		maskCtx.fill();
		

		ctx.drawImage(maskCanvas, 0, 0);
		maskCtx.restore();
		ctx.restore();
}

function unfocusObj(){
	$('.over-layer').css( "zIndex", 0)
	var ovrCanvas = document.getElementById("overlayCanvas");
	var ctx = ovrCanvas.getContext('2d');
	ctx.clearRect(0, 0, ovrCanvas.width, ovrCanvas.height);
	//$("#farmertip").tooltip("close");
}

function startTut(){
	$(".tut-navbar").show();
	openTut("Info", true)
}

function endTut(){
	unfocusObj();
	$(".tut-navbar").hide();
	$("#farmer-bubble").hide();
}
function openTut(cityName, first) {
	//
	
	var i;
	var x = document.getElementsByClassName("tut-tab");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	//$("#tut-content #" + cityName).show();
	//document.getElementById(cityName).style.display = "block";
	var test = document.getElementById(cityName);
	test.style.display = "block";
	if(first == null){
		unfocusObj();
		focusObj(cityName);
	}
}

