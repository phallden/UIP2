var spinIt;
var birdIntervall;
// Initialise EventListeners.
$(document).ready(function () {
    //load canvas
    var farmerTipOrg = $("#farmertip").clone();
    var Cvs1 = document.getElementById('1groundCanvas');
    var Cvs2 = document.getElementById('2groundCanvas');
    var skyCanvas = document.getElementById('cloudCanvas');
    var overlayCanvas = document.getElementById('overlayCanvas');
    overlayCanvas.height = $(document).height();
    overlayCanvas.width = window.innerWidth;


    overlayCanvas.addEventListener('click', function (e) {
        endTut();

    });
    // Initialise the click event listener for the first canvas layer
    //
    Cvs1.addEventListener('click', function (e) {
        // If the mouse event is on the pig object and clicked, play the corresponding sound of the object,
        // fetch the information of that animal from the XML-file and paste it into a modal window and display it.
        //
        var mousePos = getMousePos(Cvs1, e)
        pigs.forEach(function (pig) {
            if (mousePos.x > pig.x && mousePos.x < parseInt(pig.x + pig.canvas.width() * pig.widthFact) && mousePos.y > pig.y && mousePos.y < parseInt(pig.y + (pig.canvas.width() * pig.widthFact * pig.heightFact))) {
                pigSound.play();
                fetchText('animalDesc', 'pig');
                $("#animal .modal-content").css("background-color", "#FFDACF")
                document.getElementById('animal').style.display = 'inline-block';
            }
        });
        // If the mouse event is on the horse object and clicked, play the corresponding sound of the object,
        // fetch the information of that animal from the XML-file and paste it into a modal window and display it.
        //
        horses.forEach(function (horse) {
            if (mousePos.x > horse.x && mousePos.x < parseInt(horse.x + horse.canvas.width() * horse.widthFact) && mousePos.y > horse.y && mousePos.y < parseInt(horse.y + (horse.canvas.width() * horse.widthFact * horse.heightFact))) {
                horseSound.play();
                fetchText('animalDesc', 'horse');
                $("#animal .modal-content").css("background-color", "#9A6668")
                document.getElementById('animal').style.display = 'block';
            }
        });
        // If the mouse event is on the cow object and clicked, play the corresponding sound of the object,
        // fetch the information of that animal from the XML-file and paste it into a modal window and display it.
        //
        cows.forEach(function (cow) {
            if (mousePos.x > cow.x && mousePos.x < parseInt(cow.x + cow.canvas.width() * cow.widthFact) && mousePos.y > cow.y && mousePos.y < parseInt(cow.y + (cow.canvas.width() * cow.widthFact * cow.heightFact))) {
                cowSound.play();
                fetchText('animalDesc', 'cow');
                $("#animal .modal-content").css("background-color", "#FFDCAC")
                document.getElementById('animal').style.display = 'block';
            }
        });

    });
    // Initialise the event listener for the second ground layer, check if the mouse position is on the windmill,
    // and if so start a sprite animation of the windmill.
    //
    Cvs2.addEventListener('mousemove', function (e) {
        var mousePos = getMousePos(Cvs2, e)
        if (mousePos.x > windObj.x && mousePos.x < parseInt(windObj.x + windObj.canvas.width() * windObj.widthFact) && mousePos.y > windObj.y && mousePos.y < parseInt(windObj.y + (windObj.canvas.width() * windObj.widthFact * windObj.heightFact))) {
            if (windObj.running == false) {
                // Start the animation of the windmill.
                windObj.running = true;
                spinIt = setInterval(animateWindmill, 300);
            }
        }
        else {
            // Stop the animation of the windmill.
            clearInterval(spinIt);
            windObj.running = false;
        }
    });
    // Initialise the event listener for the background layer and check if the position of the mouse is on the sun,
    // if so start a sprite animation of it by toggling between two images.
    //
    skyCanvas.addEventListener('mousemove', function (e) {
        // Set the birds x and y coordinate to the mouses x and y coordinate. 
        birdObj.x = e.clientX;
        birdObj.y = e.clientY;
        var mousePos = getMousePos(skyCanvas, e);
        if (mousePos.x > sunObj.x && mousePos.x < parseInt(sunObj.x + sunObj.canvas.width() * sunObj.widthFact) && mousePos.y > sunObj.y && mousePos.y < parseInt(sunObj.y + (sunObj.canvas.width() * sunObj.widthFact * sunObj.heightFact))) {
            sunObj.imageChoice = 2;
        }
        else
            sunObj.imageChoice = 1;
    });

    // Hides the farmer conversation bubble.
    skyCanvas.addEventListener('click', function (e) {
        $("#farmer-bubble").hide();
    });

    // Initialise an event listener for the background canvas to see if the position of the mouse is on it and if so
    // calculate the position of the mouse to enable the drawing of a bird on the correct position
    skyCanvas.addEventListener('mouseout', function (e) {
        birdObj.x = birdObj.canvas.width() * birdObj.xFactor;
        birdObj.y = 50;
    });

    // Initialise an event listener for the second foreground canvas to see if the mouse event is a click on the farmer.
    // If so, opens up the conversation bubble or closes it if not.
    Cvs2.addEventListener('click', function (e) {
        var mousePos = getMousePos(Cvs2, e)
        if (mousePos.x > farmerObj.x && mousePos.x < parseInt(farmerObj.x + farmerObj.canvas.width() * farmerObj.widthFact) && mousePos.y > farmerObj.y && mousePos.y < parseInt(farmerObj.y + (farmerObj.canvas.width() * farmerObj.widthFact * farmerObj.heightFact))) {
            $("#farmer-bubble").show();
        } else {
            $("#farmer-bubble").hide();
        }
    });
});
/**
 * getOffset
 * return the position {x,y} of the object relative to the viewport.
 * @param object
 *      Object = ?
 * **/
function getOffset(object) {
    var rect = object.canvas.get(0).getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };
}
/**
 * animateWindmill
 * create the spinning effect of the windmill
 * @param
 * **/
function animateWindmill() {
    windObj.spin();
}

/**
 * getMousePos
 * store mouse positions over the canvas relative to the viewport.
 * @param canvas, evt
 *      canvas = the wanted canvas
 *      evt = mouse
 * **/
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
