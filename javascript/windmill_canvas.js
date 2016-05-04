var windmill = function (canvasElem, image, image2, image3, image4, widthFact, heightFact, xFactor, y) {
    // Initial values
    //
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.windmill = image;
    this.wind1 = image2;
    this.wind2 = image3;
    this.wind3 = image4;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.canvas.attr('width', $(this.container).width()); //max width
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    this.running = false;
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.nameCanvas = "Sky";
}


var imageCount = 1;
var interVall;
var printImage;
windmill.prototype.spin = function () {
    function change(i) {
        if (i == 1) {
            printImage = this.wind1;
        } else if (i == 2) {
            printImage = this.wind2;
        } else {
            printImage = this.wind3;
        }
    }

    if (imageCount == 4) {
        imageCount = 1;
    }
    //console.log(imageCount);
    change(imageCount);
    imageCount = imageCount + 1;
    this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
    this.ctx.drawImage(printImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
    interVall = window.requestAnimationFrame(windObj.spin);
}


this.addEventListener('mouseover', function () {
        if (this.running == false) {
            this.running = true;
            console.log(this.running);
            interVall = window.requestAnimationFrame(windObj.spin);
        }
    }
    , false);

this.canvas.on("mouseout", function (e) {
    console.log("mouesout");
    window.cancelAnimationFrame(interVall);
    this.running = false;
    console.log(this.running);
});




