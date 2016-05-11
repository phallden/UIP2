var spinIt;
var birdIntervall;
$( document ).ready(function() {
	var farmerTipOrg = $("#farmertip").clone();
	var pigCanvas = document.getElementById('pigCanvas');
	var skyCanvas = document.getElementById('cloudCanvas');
	//var farmerCanvas = document.getElementById('farmerCanvas');
	var overlayCanvas = document.getElementById('overlayCanvas');
	overlayCanvas.height = $( document ).height();
	overlayCanvas.width = window.innerWidth;
/*	$( "#farmertip" ).tooltip({
		position: {
			using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
				.addClass( "arrow" )
				.addClass( feedback.vertical )
				.addClass( feedback.horizontal )
				.appendTo( this );
			}
		}
	}); */
	$("#farmertip").parent().css({position: 'relative'});
	pigCanvas.addEventListener('click', function(e) {
		var mousePos = getMousePos(pigCanvas,e)
		pigs.forEach(function(pig) {       
			if(mousePos.x > pig.x && mousePos.x < parseInt(pig.x + pig.canvas.width() * pig.widthFact) && mousePos.y > pig.y && mousePos.y < parseInt(pig.y + (pig.canvas.width() * pig.widthFact * pig.heightFact))){
				pigSound.play();
				fetchText('animalDesc','pig');
				$("#animal .modal-content").css( "background-color", "#FFDACF")
				document.getElementById('animal').style.display='inline-block';
			}
		}); 

		horses.forEach(function(horse) {       
			if(mousePos.x > horse.x && mousePos.x < parseInt(horse.x + horse.canvas.width() * horse.widthFact) && mousePos.y > horse.y && mousePos.y < parseInt(horse.y + (horse.canvas.width() * horse.widthFact * horse.heightFact))){
				horseSound.play();
				fetchText('animalDesc','horse');
				$("#animal .modal-content").css( "background-color", "brown")
				document.getElementById('animal').style.display='block';
			}
		}); 

	});

	pigCanvas.addEventListener('mousemove', function (e) {
		var mousePos = getMousePos(pigCanvas, e)
		if (mousePos.x > windObj.x && mousePos.x < parseInt(windObj.x + windObj.canvas.width() * windObj.widthFact) && mousePos.y > windObj.y && mousePos.y < parseInt(windObj.y + (windObj.canvas.width() * windObj.widthFact * windObj.heightFact))) {
			if (windObj.running == false) {
				windObj.running = true;

                //windObj.spin();
                spinIt = setInterval(animateWindmill, 300);
                //windObj.raf = window.requestAnimationFrame(windObj.spin());
            }
        }
        else {
        	clearInterval(spinIt);
        	windObj.running = false;
        }
    });

	skyCanvas.addEventListener('mousemove', function (e) {

        birdObj.x = e.clientX;
        birdObj.y = e.clientY;
        //birdObj.clear();
        //birdObj.drawNew();
        var mousePos = getMousePos(skyCanvas, e);
        if (mousePos.x > sunObj.x && mousePos.x < parseInt(sunObj.x + sunObj.canvas.width() * sunObj.widthFact) && mousePos.y > sunObj.y && mousePos.y < parseInt(sunObj.y + (sunObj.canvas.width() * sunObj.widthFact * sunObj.heightFact))) {
        	sunObj.imageChoice = 2;
        }
        else
        	sunObj.imageChoice = 1;
    });


	skyCanvas.addEventListener('mouseover', function (e) {
		birdIntervall = setInterval(animateBird,10);
	});

	skyCanvas.addEventListener('mouseout', function (e) {
		clearInterval(birdIntervall);
	});

pigCanvas.addEventListener('click', function(e) {
	console.log("HITFaRMER")
	var mousePos = getMousePos(pigCanvas,e)
	if(mousePos.x > farmerObj.x && mousePos.x < parseInt(farmerObj.x + farmerObj.canvas.width() * farmerObj.widthFact) && mousePos.y > farmerObj.y && mousePos.y < parseInt(farmerObj.y + (farmerObj.canvas.width() * farmerObj.widthFact * farmerObj.heightFact))){
		$("#farmer-bubble").css({top: farmerObj.y + 300, left: farmerObj.x - 250, position:'absolute'});
$("#farmer-bubble").show();
		/*$("#farmertip").css({top: farmerObj.y - 200, left: farmerObj.x + 50, position:'absolute'});

		$("#farmertip").tooltip({ items: "#farmertip", content: '<p>Hello my name is BOB, it stands for "Big Ordinary Bob" </p>'+
			'<p> Do you want som exceptionell help? </p><br> <button onclick="focusObj('+"'Horse'"+')">Yes Mr. Bob</button> <button onclick="unfocusObj()"">Screw you Bobbsan</button>'});
		
$("#farmertip").tooltip({ items: "#farmertip", content: $('#tut-content').html()});
		
		$("#farmertip").tooltip("open"); */
	}else{
		$("#farmer-bubble").hide();
		//$("#farmertip").tooltip("close");
	}
});

});

function getOffset(object){
	var rect = object.canvas.get(0).getBoundingClientRect();
	return {
		x:  rect.left,
		y:  rect.top
	};
}

function closeTooltip(){
	$("#farmertip").tooltip("close");
}

function testFunc(e){
	focusObj("Pig");
/*
	$('.over-layer').css( "zIndex", 4)
	var ovrCanvas = document.getElementById("overlayCanvas");
	var maskCanvas = document.createElement('canvas');
	var ctx = ovrCanvas.getContext('2d');
	maskCanvas.width = ovrCanvas.width;
	maskCanvas.height = ovrCanvas.height;
	var maskCtx = maskCanvas.getContext('2d');
		
		ctx.save();
		//ctx.clearRect(0, 0, ovrCanvas.width, ovrCanvas.height);
		
		maskCtx.save();

	console.log(tutobjects);
	for (k = 0; k < tutobjects.length; ++k) {
		var offset = getOffset(tutobjects[k]);
		var mousePos = getMousePos(document.getElementById("overlayCanvas"), e);
	
		ctx.drawImage(maskCanvas, 0, 0);
		maskCtx.fillStyle = "rgba(0, 0, 0, 0.1)";
		maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
		
		//maskCtx.globalCompositeOperation = 'xor';
		maskCtx.globalCompositeOperation = 'destination-out'
		maskCtx.fillStyle = "rgba(0, 0, 0, 0.9)";
		maskCtx.moveTo(tutobjects[k].x + offset.x + (tutobjects[k].canvas.width() * tutobjects[k].widthFact)/2,
			tutobjects[k].y + offset.y + document.body.scrollTop + ((tutobjects[k].canvas.width() * tutobjects[k].widthFact * tutobjects[k].heightFact)/2));
		
		maskCtx.arc(tutobjects[k].x + offset.x + (tutobjects[k].canvas.width() * tutobjects[k].widthFact)/2,
			tutobjects[k].y + offset.y + document.body.scrollTop + ((tutobjects[k].canvas.width() * tutobjects[k].widthFact * tutobjects[k].heightFact)/2),
			tutobjects[k].canvas.width() * tutobjects[k].widthFact * 0.8, 0, 2 * Math.PI);
		maskCtx.fill();
		

		ctx.drawImage(maskCanvas, 0, 0);
		maskCtx.restore();
		ctx.restore(); 

		}*/

	/*	
		if(mousePos.x > tutobjects[k].x + offset.x + (objects[k].canvas.width() * objects[k].widthFact)){
			drawArrow(farmerObj.x, farmerObj.y , tutobjects[k].x + offset.x + (objects[k].canvas.width() * objects[k].widthFact),
				tutobjects[k].y + offset.y + document.body.scrollTop + ((objects[k].canvas.width() * objects[k].widthFact * objects[k].heightFact)/2),
				document.getElementById("overlayCanvas"));
		}else{
			drawArrow(mousePos.x, mousePos.y , tutobjects[k].x + offset.x ,
				tutobjects[k].y + offset.y + document.body.scrollTop + ((objects[k].canvas.width() * objects[k].widthFact * objects[k].heightFact)/2),
				document.getElementById("overlayCanvas"));
} */



	/*	console.log(e)
		    var headlen = 10;   // length of head in pixels
		    var angle = Math.atan2(objects[k].y-e.clientY,objects[k].x-e.clientX);
		   overlayCtx.moveTo(e.clientX, e.clientY);
		   overlayCtx.lineTo(objects[k].x, objects[k].y);
		   overlayCtx.lineTo(objects[k].x-headlen*Math.cos(angle-Math.PI/6),objects[k].y-headlen*Math.sin(angle-Math.PI/6));
		    overlayCtx.moveTo(objects[k].x, objects[k].y);
		    overlayCtx.lineTo(objects[k].x-headlen*Math.cos(angle+Math.PI/6),objects[k].y-headlen*Math.sin(angle+Math.PI/6));

		    objects[k].ctx.beginPath();
		    objects[k].ctx.arc(objects[k].x + (objects[k].canvas.width() * objects[k].widthFact)/2,
		    	parseInt(objects[k].y + (objects[k].canvas.width() * objects[k].widthFact * objects[k].heightFact)/2),objects[k].canvas.width() * objects[k].widthFact * 0.7,0,2*Math.PI);
objects[k].ctx.stroke();  */

}

function drawArrow(fromx, fromy, tox, toy, c){
                //variables to be used when creating the arrow
                var ctx = c.getContext("2d");
                var headlen = 1;

                var angle = Math.atan2(toy-fromy,tox-fromx);

                //starting path of the arrow from the start square to the end square and drawing the stroke
                ctx.beginPath();
                ctx.moveTo(fromx, fromy);
                ctx.lineTo(tox, toy);
                ctx.strokeStyle = "#cc0000";
                ctx.lineWidth = 12;
                ctx.stroke();

                //starting a new path from the head of the arrow to one of the sides of the point
                ctx.beginPath();
                ctx.moveTo(tox, toy);
                ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

                //path from the side point of the arrow, to the other side point
                ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));

                //path from the side point back to the tip of the arrow, and then again to the opposite side point
                ctx.lineTo(tox, toy);
                ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

                //draws the paths created above
                ctx.strokeStyle = "#cc0000";
                ctx.lineWidth = 22;
                ctx.stroke();
                ctx.fillStyle = "#cc0000";
                ctx.fill();
            }

            function animateWindmill() {
            	windObj.spin();
            }
			function animateBird(){
				birdObj.drawNew();
			}

            function getMousePos(canvas, evt) {
            	var rect = canvas.getBoundingClientRect();
            	return {
            		x: evt.clientX - rect.left,
            		y: evt.clientY - rect.top
            	};
            }
