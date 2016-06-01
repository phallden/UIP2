var spinIt;
var birdIntervall;
$(document).ready(function () {
    var farmerTipOrg = $("#farmertip").clone();
    var pigCanvas = document.getElementById('pigCanvas');
    var skyCanvas = document.getElementById('cloudCanvas');
    var overlayCanvas = document.getElementById('overlayCanvas');
    overlayCanvas.height = $(document).height();
    overlayCanvas.width = window.innerWidth;


    overlayCanvas.addEventListener('click', function (e) {
        endTut();

    });
    pigCanvas.addEventListener('click', function (e) {
        var mousePos = getMousePos(pigCanvas, e)
        pigs.forEach(function (pig) {
            if (mousePos.x > pig.x && mousePos.x < parseInt(pig.x + pig.canvas.width() * pig.widthFact) && mousePos.y > pig.y && mousePos.y < parseInt(pig.y + (pig.canvas.width() * pig.widthFact * pig.heightFact))) {
                pigSound.play();
                fetchText('animalDesc', 'pig');
                $("#animal .modal-content").css("background-color", "#FFDACF")
                document.getElementById('animal').style.display = 'inline-block';
            }
        });

        horses.forEach(function (horse) {
            if (mousePos.x > horse.x && mousePos.x < parseInt(horse.x + horse.canvas.width() * horse.widthFact) && mousePos.y > horse.y && mousePos.y < parseInt(horse.y + (horse.canvas.width() * horse.widthFact * horse.heightFact))) {
                horseSound.play();
                fetchText('animalDesc', 'horse');
                $("#animal .modal-content").css("background-color", "#9A6668")
                document.getElementById('animal').style.display = 'block';
            }
        });

        cows.forEach(function (cow) {
            if (mousePos.x > cow.x && mousePos.x < parseInt(cow.x + cow.canvas.width() * cow.widthFact) && mousePos.y > cow.y && mousePos.y < parseInt(cow.y + (cow.canvas.width() * cow.widthFact * cow.heightFact))) {
                cowSound.play();
                fetchText('animalDesc', 'cow');
                $("#animal .modal-content").css("background-color", "#FFDCAC")
                document.getElementById('animal').style.display = 'block';
            }
        });

    });

    pigCanvas.addEventListener('mousemove', function (e) {
        var mousePos = getMousePos(pigCanvas, e)
        if (mousePos.x > windObj.x && mousePos.x < parseInt(windObj.x + windObj.canvas.width() * windObj.widthFact) && mousePos.y > windObj.y && mousePos.y < parseInt(windObj.y + (windObj.canvas.width() * windObj.widthFact * windObj.heightFact))) {
            if (windObj.running == false) {
                windObj.running = true;
                spinIt = setInterval(animateWindmill, 300);
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
        var mousePos = getMousePos(skyCanvas, e);
        if (mousePos.x > sunObj.x && mousePos.x < parseInt(sunObj.x + sunObj.canvas.width() * sunObj.widthFact) && mousePos.y > sunObj.y && mousePos.y < parseInt(sunObj.y + (sunObj.canvas.width() * sunObj.widthFact * sunObj.heightFact))) {
            sunObj.imageChoice = 2;
        }
        else
            sunObj.imageChoice = 1;
    });


    skyCanvas.addEventListener('click', function (e) {
        $("#farmer-bubble").hide();
    });

    skyCanvas.addEventListener('mouseout', function (e) {
        birdObj.x = birdObj.canvas.width() * birdObj.xFactor;
        birdObj.y = 50;
    });

    pigCanvas.addEventListener('click', function (e) {
        var mousePos = getMousePos(pigCanvas, e)
        if (mousePos.x > farmerObj.x && mousePos.x < parseInt(farmerObj.x + farmerObj.canvas.width() * farmerObj.widthFact) && mousePos.y > farmerObj.y && mousePos.y < parseInt(farmerObj.y + (farmerObj.canvas.width() * farmerObj.widthFact * farmerObj.heightFact))) {
            $("#farmer-bubble").show();
        } else {
            $("#farmer-bubble").hide();
        }
    });
});
/**
 * getOffset
 * return x and y location of the mouse on canvas.
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
 * closeTooltop
 * close tooltip if mouse is clicked.
 * @param
 * **/
function closeTooltip() {
    $("#farmertip").tooltip("close");
}
/**
 * animateWindmill
 * to create the spinning effect of the windmill
 * @param
 * **/
function animateWindmill() {
    windObj.spin();
}

/**
 * getMousePos
 * store mouse positions over the canvas.
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
