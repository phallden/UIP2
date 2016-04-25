
var i = 0
var clouds = [];
var pigs = [];
var sources = {
	Pig: '../images/pig.png',
	Cloud: '../images/Cloud.png',
	Sun: '../images/sun.png'
};
		/*
		for(k=0; k <= 7; k++){
			objects[k] =  new Cloud("cloudCanvas", images.Cloud, (0.1 - k/30), 1.1, 1/(4*k) , (0+(k*30)))
			Pigs[i] = new Pig("pigCanvas", images.Pig, (0.1 - k/100), 1.1, 1/(2*k), (0+(k*40)));
			i++;
		} */

function init() {
	/** main function, init **/
	for (k = 0; k < 3; k++) {
		objects[i] = new Cloud("respondCanvas", '../images/Cloud.png', (0.1 - k / 30), 1.1, (0 + (k * 140)), (0 + (k * 30)));
		i++

	}

	sunObj = new Sun("cloudCanvas", images.Sun, 0.1, 1.1, 0.85, 20);
	sunObj.draw();
	for (k = 0; k < pigs.length; k++) {
		pigs[k].draw();
		//	objects[k].draw();
	}
	var loopBG = setInterval(function () {
		clouds[0].clear();
		sunObj.draw();
		for (k = 0; k < clouds.length; ++k) {
			clouds[k].tick();
			clouds[k].draw();
		}
	}, 20);

}
window.onload = function() {
	init();
};
