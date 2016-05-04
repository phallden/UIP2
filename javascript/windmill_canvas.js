var windmill = function (canvasElem, image, image2, image3, image4, widthFact, heightFact, xFactor, y) {
    // Initial values
    //
    $this = this;
    var canvastest = $('#' + canvasElem);

    var windObj = {
        widthFact: widthFact,
        heightFact: heightFact,
        windmill: image,
        wind1: image2,
        wind2: image3,
        wind3: image4,
        canvas: canvastest,//document.getElementById(canvasElem);
        container: $(this.canvastest).parent(),
        ctx: null,
        running: false,
        x: null,
        y: y,
        vx: 0,
        vy: 0,
        nameCanvas: "Sky"
    }
    windObj.ctx = windObj.canvas.get(0).getContext('2d');
    windObj.canvas.attr('width', $(windObj.container).width()); //max width
    windObj.x = (windObj.canvas.width() * xFactor);
    var imageCount = 1;
    var interVall;
    var printImage;

    function spin() {


        function change(i) {
            if (i == 1) {
                printImage = windObj.wind1;
            } else if (i == 2) {
                printImage = windObj.wind2;
            } else {
                printImage = windObj.wind3;
            }
        }

        if (imageCount == 4) {
            imageCount = 1;
        }
        //console.log(imageCount);
        change(imageCount);
        imageCount = imageCount + 1;
        windObj.ctx.clearRect(windObj.x, windObj.y, windObj.canvas.width() * windObj.widthFact, windObj.canvas.width() * windObj.widthFact * windObj.heightFact);
        windObj.ctx.drawImage(printImage, windObj.x, windObj.y, windObj.canvas.width() * windObj.widthFact, windObj.canvas.width() * windObj.widthFact * windObj.heightFact)
        interVall = window.requestAnimationFrame(spin);
    }


    this.addEventListener('mouseover', function () {
            if (windObj.running == false) {
                windObj.running = true;
                console.log(windObj.running);
                interVall = window.requestAnimationFrame(spin);
            }
        }
        , false);

    windObj.canvas.on("mouseout", function (e) {
        console.log("mouesout");
        window.cancelAnimationFrame(interVall);
        windObj.running = false;
        console.log(windObj.running);
    })

};



