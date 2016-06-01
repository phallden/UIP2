var windmill = function (canvasElem, image,
                         image2,
                         image3,
                         image4,
                         image5,
                         image6,
                         image7,
                         image8,
                         image9,
                         image10,
                         image11,
                         image12,
                         image13,
                         widthFact,
                         heightFact,
                         xFactor,
                         y) {
    // Initial values
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.xFactor = xFactor;
    this.imgMain = image;
    this.img = image2;
    this.img1 = image3;
    this.img2 = image4;
    this.img3 = image5;
    this.img4 = image6;
    this.img5 = image7;
    this.img6 = image8;
    this.img7 = image9;
    this.img8 = image10;
    this.img9 = image11;
    this.img10 = image12;
    this.img11 = image13;
    this.canvas = $('#' + canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
   // this.canvas.attr('width', $(this.container).width()); //max width
    this.running = false;
    this.raf = null;
    this.printImage = image2;
    this.imageCount = 1;
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.nameObj = "Windmill";
}

var interVall;
var printImage;

/**
 * .draw
 * helpfunction for drawing the windmill on canvas.
 * @param img
 *      img = the image that will be printed
 * **/
windmill.prototype.draw = function (img) {
    if (img == null) {
        this.ctx.drawImage(this.imgMain, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
        this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);

    } else {
        this.ctx.drawImage(this.imgMain, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
        this.ctx.drawImage(img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);

    }
};
/**
 * clearWindmill
 * helpfunction for removing the windmill from canvas
 * @param
 * **/
windmill.prototype.clearWindmill = function () {
    this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
};



/**
 * .change
 * helpfunction for switching between wing images on the windmill
 * @param i
 *      i = change between images, where i=1 is the first, and i=10 is the last.
 * **/
windmill.prototype.change = function (i) {
    if (i == 1) {
        printImage = this.img3;
    } else if (i == 2) {
        printImage = this.img4;
    } else if (i == 3){
        printImage = this.img5;
    } else if (i == 4){
        printImage = this.img6;
    } else if(i == 5){
        printImage = this.img7;
    } else if(i == 6){
        printImage = this.img8;
    }else if(i == 7){
        printImage = this.img9;
    }else if(i == 8){
        printImage = this.img10;
    }else if(i == 9){
        printImage = this.img11;
    }
}
/**
 * .spin
 * helpfunction for clearing windmill and drawing windmill
 * @param
 * **/
windmill.prototype.spin = function () {
    if (this.imageCount == 10) {
        this.imageCount = 1;
    }
    this.change(this.imageCount);
    this.imageCount = this.imageCount + 1;
    this.clearWindmill();
    this.draw(printImage);
}


windmill.prototype.resetWidth = function(){
    this.canvas.attr('width', $(this.container).width());
}

windmill.prototype.setX = function(){
    this.x = this.canvas.width() * this.xFactor;
}