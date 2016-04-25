var i = 0
var objects = [];

function init(){
	/** main function, init **/
	for(k=0; k < 3; k++){
		objects[i] =  new Cloud("respondCanvas", '../images/Cloud.png', (0.1 - k/30), 1.1, (0+(k*140)), (k*30));
		i++;
	}
	var loopBG = setInterval(function(){
    // do your thing
    for (k = 0; k < objects.length; ++k) {
    	objects[k].clear();
    }
    for (k = 0; k < objects.length; ++k) {
    	objects[k].tick();
    	objects[k].draw();
    }
}, 20);
}
$(document).ready( function(){
	init();
});