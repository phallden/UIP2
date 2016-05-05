var i = 0
var windObj;
var farmerObj;
var birdObj;
var clouds = [];
var pigs = [];
var horse = [];
var sources = {
    Pig: '../images/pig.png',
    Cloud: '../images/Cloud.png',
    Sun: '../images/sun.png',
    Sun2: '../images/chicken.png',
    windmill1: '../images/windmill.png',
    snurra: '../images/snurra.png',
    snurra1: '../images/snurra1.png',
    snurra2: '../images/snurra2.png',
    Horse: '../images/horse3.png',
    Farmer: '../images/farmer.png',
    birdPic: '../images/birdtest.png'
};
var sunObj;
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}


function init() {
    loadImages(sources, function (images) {
        windObj = new windmill("pigCanvas", images.windmill1, images.snurra, images.snurra1, images.snurra2, 0.25, 1.1, 0.70, 20);
        birdObj = new bird("cloudCanvas", images.birdPic, 0.1, 0.1, 0.2, 5);
        pigs[0] = new Pig("pigCanvas", images.Pig, 0.05, 1.1, 0.25, 200);
        pigs[1] = new Pig("pigCanvas", images.Pig, 0.05, 1.1, 0.10, 100);
        pigs[2] = new Pig("pigCanvas", images.Pig, 0.05, 1.1, 0.20, 150);
        horse[0] = new Horse("horseCanvas", images.Horse, 0.25, 0.8, 0.50, 30);
        clouds[0] = new Cloud("cloudCanvas", images.Cloud, 0.1, 1.1, 0.25, 10);
        clouds[1] = new Cloud("cloudCanvas", images.Cloud, 0.05, 1.1, 0.1, 40);
        clouds[2] = new Cloud("cloudCanvas", images.Cloud, 0.08, 1.1, 0.4, 30);
        sunObj = new Sun("cloudCanvas", images.Sun, images.Sun2, 0.1, 1.1, 0.85, 20);
        sunObj.draw();
        farmerObj = new Farmer("farmerCanvas", images.Farmer, 0.5, 1.2, 0.20, 20);
        farmerObj.draw()
        for (k = 0; k < pigs.length; k++) {
            pigs[k].draw();
            //	objects[k].draw();
        }
        for (k = 0; k < horse.length; k++) {
            horse[k].draw();
        }
        var loopBG = setInterval(function () {
            clouds[0].clear();
            sunObj.draw();

            for (k = 0; k < clouds.length; ++k) {
                clouds[k].tick();
                clouds[k].draw();
            }
        }, 20);
        windObj.draw();
    });
}
window.onload = function () {
    init();
};
