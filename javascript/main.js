var i = 0
var clouds = [];
var pigs = [];
var sources = {
	Pig: '../images/pig.png',
	Cloud: '../images/Cloud.png'
};

<<<<<<< HEAD
function loadImages(sources, callback) {
	var images = {};
	var loadedImages = 0;
	var numImages = 0;
	// get num of sources
	for(var src in sources) {
		numImages++;
	}
	for(var src in sources) {
		images[src] = new Image();
		images[src].onload = function() {
			if(++loadedImages >= numImages) {
				callback(images);
			}
		};
		images[src].src = sources[src];
	}
}




function init(){
	loadImages(sources, function(images) {
		pigs[0] = new Pig("pigCanvas", images.Pig, 0.05, 1.1, 0.25, 200);
		pigs[1] = new Pig("pigCanvas", images.Pig, 0.05, 1.1, 0.10, 100);
		pigs[2] = new Pig("pigCanvas", images.Pig, 0.05, 1.1, 0.20, 150);
		clouds[0] =  new Cloud("cloudCanvas", images.Cloud, 0.1, 1.1, 0.25, 10)
		clouds[1] =  new Cloud("cloudCanvas", images.Cloud, 0.05, 1.1, 0.1 , 40)
		clouds[2] =  new Cloud("cloudCanvas", images.Cloud, 0.08, 1.1, 0.4 , 30)
		/*
		for(k=0; k <= 7; k++){
			objects[k] =  new Cloud("cloudCanvas", images.Cloud, (0.1 - k/30), 1.1, 1/(4*k) , (0+(k*30)))
			Pigs[i] = new Pig("pigCanvas", images.Pig, (0.1 - k/100), 1.1, 1/(2*k), (0+(k*40)));
			i++;
		} */
		for(k=0; k < pigs.length; k++){
=======
function init(){
	/** main function, init **/
	for(k=0; k < 3; k++) {
		objects[i] = new Cloud("respondCanvas", '../images/Cloud.png', (0.1 - k / 30), 1.1, (0 + (k * 140)), (0 + (k * 30)));
		i++

	}

	new Sun("respondCanvas2", '../images/sun.png',(0.1 - 1 / 30), 1.1, (0 + (1 * 140)), (0 + (1 * 30)));
	Sun.draw();
>>>>>>> 6c8742d381e02fcdff5e2d06d22b9b240956c288

			pigs[k].draw();
		//	objects[k].draw();
		} 
		var loopBG = setInterval(function(){
			for (k = 0; k < clouds.length; ++k) {
				clouds[k].clear();
			}
			for (k = 0; k < clouds.length; ++k) {
				clouds[k].tick();
				clouds[k].draw();
			}
		}, 20); 
	});
}
window.onload = function() {
	init();
};
