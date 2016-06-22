var i = 0
var windObj;
var farmerObj;
var birdObj;
var clouds = [];
var pigs = [];
var horses = [];
var objects = [];
var tutobjects = [];
var cows = [];
var sources = {
   //Initialise the  images.
    Pig: '../images/pig.png',
    Cloud: '../images/Cloud.png',
    Sun: '../images/sun.png',
    Sun2: '../images/sun2.png',
    windmill1: '../images/windmill.png',
    snurra: '../images/snurra.png',
    snurra1: '../images/snurra1.png',
    snurra2: '../images/snurra2.png',
    snurra3: '../images/snurra3.png',
    snurra4: '../images/snurra4.png',
    snurra5: '../images/snurra5.png',
    snurra6: '../images/snurra6.png',
    snurra7: '../images/snurra7.png',
    snurra8: '../images/snurra8.png',
    snurra9: '../images/snurra9.png',
    snurra10: '../images/snurra10.png',
    snurra11: '../images/snurra11.png',
    Horse: '../images/horse3.png',
    Farmer: '../images/bobfarmer.png',
    birdPic: '../images/birdtest.png',
    Cow: '../images/cow.png'
};
var sunObj;
/**
 * loadImages
 * created to load images into object images
 * @param sources,callback
 *      sources =
 *      callback =
 * **/
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

/**
 * init
 * on bodyload init is initated. Init is used to draw all the images to the canvas.
 * **/
 function init() {
    setCvsWidth(true);
    loadImages(sources, function (images) {
        //Create windmill
        tutobjects[0] = objects[0] = windObj = new windmill("2groundCanvas", images.windmill1,
            images.snurra,
            images.snurra1,
            images.snurra2,
            images.snurra3,
            images.snurra4,
            images.snurra5,
            images.snurra6,
            images.snurra7,
            images.snurra8,
            images.snurra9,
            images.snurra10,
            images.snurra11,
            0.30, 1.1, 0.10, 0);
        // Create a bird object and store it in arrays.
        tutobjects[1] = objects[1] = birdObj = new Bird("cloudCanvas", images.birdPic, 0.07, 0.1, 0.2, 50);
        // Create pig objects and store it in arrays.
        tutobjects[2] = objects[2] = pigs[0] = new Pig("1groundCanvas", images.Pig, 0.1, 1.1, 0.3, 70);
        objects[3] = pigs[1] = new Pig("1groundCanvas", images.Pig, 0.1, 1.1, 0.10, 105);
        objects[4] = pigs[2] = new Pig("1groundCanvas", images.Pig, 0.1, 1.1, 0.25, 150);
        // Crate horse objects and store it in arrays
        tutobjects[3] = objects[5] = horses[0] = new Horse("1groundCanvas", images.Horse, 0.40, 0.5, 0.20, 250);
        // Create cloud objects and store it in arrays.
        objects[6] = clouds[0] = new Cloud("cloudCanvas", images.Cloud, 0.1, 1.1, 0.25, 10);
        objects[7] = clouds[1] = new Cloud("cloudCanvas", images.Cloud, 0.05, 1.1, 0.1, 40);
        objects[8] = clouds[2] = new Cloud("cloudCanvas", images.Cloud, 0.08, 1.1, 0.4, 30);
        // Create a sun object  and store it in arrays.
        tutobjects[4] = objects[9] = sunObj = new Sun("cloudCanvas", images.Sun, images.Sun2, 0.1, 1.1, 0.85, 20);
        // Create a farmer object  and store it in arrays.
        objects[10] = farmerObj = new Farmer("2groundCanvas", images.Farmer, 0.2, 1.2, 0.55, 220);
        // Create cow objects on the second ground canvas and store it in arrays.
        tutobjects[5] = objects[11] = cows[0] = new Cow("1groundCanvas", images.Cow,  0.15, 1.1, 0.50, 50 );
        objects[12] = cows[1] = new Cow("1groundCanvas", images.Cow, 0.15, 1.1, 0.70, 100 );
        drawAll(true); // Draw all animals.
        //Loop, used to create moving clouds and bird.
        var loopBG = setInterval(function () {
            clouds[0].clear();
            sunObj.draw();
            birdObj.drawNew();

            for (k = 0; k < clouds.length; ++k) {
                clouds[k].tick();
                clouds[k].draw();
            }
        }, 20);


        if (matchMedia) {
          var mq = window.matchMedia("(min-width: 800px)");
          mq.addListener(WidthChange);
          WidthChange(mq);
      }
  });
}
/**
 * onload
 * used to run init on load
 * **/
 window.onload = function () {
    init();
};

function resetCanvas(){

   for (k = 0; k < pigs.length; k++) {
    pigs[k].resetWidth();
        }
        windObj.resetWidth();
}


/**
 * drawAll
 * draw all animal to canvas.
 * @param first
 *  first = true,false, depending on first time drawing the object.
 * **/
function drawAll(first){

   for (k = 0; k < objects.length; k++) {
    objects[k].setX();
}


for (k = 0; k < pigs.length; k++) {
    pigs[k].draw();
}
for (k = 0; k < horses.length; k++) {
    horses[k].draw();
}
for (k = 0; k < cows.length; k++) {
    cows[k].draw();
}
farmerObj.draw();
windObj.draw();
}

function setCvsWidth(first){
 $( "canvas" ).each(function( index ) {
    var parent = $(this).parent()
    var newWidth = parent.width();
    $(this).attr('width', newWidth);
}); 
 if(!first)
    drawAll(first);
}


function WidthChange(mq) {
    //resetCanvas();
    setCvsWidth(false);
    if (mq.matches) {
        farmerObj.positionBubble(true);

    } else {
        farmerObj.positionBubble(false);

    }
}
