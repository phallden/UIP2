var spinIt;
$( document ).ready(function() {
	var farmerTipOrg = $("#farmertip").clone();
	var pigCanvas = document.getElementById('pigCanvas');
	var skyCanvas = document.getElementById('cloudCanvas');
	var farmerCanvas = document.getElementById('farmerCanvas');
	var horseCanvas = document.getElementById('horseCanvas');
	$( "#farmertip" ).tooltip({
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
	});
	$("#farmertip").parent().css({position: 'relative'});
	
	pigCanvas.addEventListener('click', function(e) {
		console.log(pigs)
		var mousePos = getMousePos(pigCanvas,e)
		pigs.forEach(function(pig) {       
			if(mousePos.x > pig.x && mousePos.x < parseInt(pig.x + pig.canvas.width() * pig.widthFact) && mousePos.y > pig.y && mousePos.y < parseInt(pig.y + (pig.canvas.width() * pig.widthFact * pig.heightFact))){
				pigSound.play();
				document.getElementById('animal').style.display='block';
			}
		}); 

    });
	
	horseCanvas.addEventListener('click', function(e) {
		var mousePos = getMousePos(horseCanvas,e)
		horse.forEach(function(horse) {
			if(mousePos.x > horse.x && mousePos.x < parseInt(horse.x + horse.canvas.width() * horse.widthFact) && mousePos.y > horse.y && mousePos.y < parseInt(horse.y + (horse.canvas.width() * horse.widthFact * horse.heightFact))){
				horseSound.play();
				document.getElementById('horse').style.display='block';
			}
		});

	});

	pigCanvas.addEventListener('mousemove', function(e) {
		var mousePos = getMousePos(pigCanvas,e)
		if(mousePos.x > windObj.x && mousePos.x < parseInt(windObj.x + windObj.canvas.width() * windObj.widthFact) && mousePos.y > windObj.y && mousePos.y < parseInt(windObj.y + (windObj.canvas.width() * windObj.widthFact * windObj.heightFact))){
			if (windObj.running == false) {
				windObj.running = true;
				//windObj.spin();
				spinIt = setInterval(animateWindmill,300);
				//windObj.raf = window.requestAnimationFrame(windObj.spin());
			}
		}
		else{
			clearInterval(spinIt);
			windObj.running = false;
		}
	});
	
    skyCanvas.addEventListener('mousemove', function (e) {
        //birdObj.x = e.clientX;
        //birdObj.y = e.clientY;
        birdObj.clear();
        birdObj.drawNew(e.clientX, e.clientY);
        var mousePos = getMousePos(skyCanvas, e);
        if (mousePos.x > sunObj.x && mousePos.x < parseInt(sunObj.x + sunObj.canvas.width() * sunObj.widthFact) && mousePos.y > sunObj.y && mousePos.y < parseInt(sunObj.y + (sunObj.canvas.width() * sunObj.widthFact * sunObj.heightFact))) {
            sunObj.imageChoice = 2;
        }
        else
            sunObj.imageChoice = 1;
    });
	farmerCanvas.addEventListener('click', function(e) {
		var mousePos = getMousePos(farmerCanvas,e)
		if(mousePos.x > farmerObj.x && mousePos.x < parseInt(farmerObj.x + farmerObj.canvas.width() * farmerObj.widthFact) && mousePos.y > farmerObj.y && mousePos.y < parseInt(farmerObj.y + (farmerObj.canvas.width() * farmerObj.widthFact * farmerObj.heightFact))){


			$("#farmertip").css({top: farmerObj.y - 70, left: farmerObj.x + 50, position:'absolute'});
			$("#farmertip").tooltip({ items: "#farmertip", content: "Hello my name is BOB, it stands for 'Big Ordinary Bob'"});
			$("#farmertip").tooltip("open");
		}else{
			$("#farmertip").tooltip("close");
		}
	});


	skyCanvas.addEventListener('mousemove', function(e) {
		var mousePos = getMousePos(skyCanvas,e);
		if(mousePos.x > sunObj.x && mousePos.x < parseInt(sunObj.x + sunObj.canvas.width() * sunObj.widthFact) && mousePos.y > sunObj.y && mousePos.y < parseInt(sunObj.y + (sunObj.canvas.width() * sunObj.widthFact * sunObj.heightFact))){
			sunObj.imageChoice = 2;
		}
		else
			sunObj.imageChoice = 1;
	});

});

function animateWindmill() {
	windObj.spin();
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}