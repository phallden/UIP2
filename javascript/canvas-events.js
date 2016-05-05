var spinIt;
$( document ).ready(function() {
 
	var pigCanvas = document.getElementById('pigCanvas');
	var skyCanvas = document.getElementById('cloudCanvas');

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