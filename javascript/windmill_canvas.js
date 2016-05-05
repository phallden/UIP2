var windmill = function (canvasElem, image, image2, image3, image4, widthFact, heightFact, xFactor, y) {
    // Initial values
    //
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.windmillMain = image;
    this.wind1 = image2;
    this.wind2 = image3;
    this.wind3 = image4;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);    
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    this.canvas.attr('width', $(this.container).width()); //max width
    this.running = false;
    this.raf = null;
    this.printImage = image2;
    this.imageCount = 1;
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.nameCanvas = "Sky";
}

var interVall;
var printImage;

windmill.prototype.draw = function (img) {
    if (img == null) {
        this.ctx.drawImage(this.windmillMain, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
        this.ctx.drawImage(this.wind1, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);

    } else {
        this.ctx.drawImage(this.windmillMain, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
        this.ctx.drawImage(img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);

    }
};

windmill.prototype.clearWindmill = function () {
    this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
};

windmill.prototype.change = function (i) {
    if (i == 1) {
        printImage = this.wind1;
    } else if (i == 2) {
        printImage = this.wind2;
    } else {
        printImage = this.wind3;
    }
}

windmill.prototype.spin = function () {
    if (this.imageCount == 4) {
        this.imageCount = 1;
    }
    //console.log(imageCount);
    this.change(this.imageCount);
    this.imageCount = this.imageCount + 1;
    //this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
    this.clearWindmill();
    //this.ctx.drawImage(printImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
    this.draw(printImage);
    //this.raf = window.requestAnimationFrame(this.spin());
}

/*
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

 */




