var Cow = function (canvasElem, image, widthFact, heightFact, xFactor, y) {

    // Initial values
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.xFactor = xFactor;
    this.img = image;
    this.canvas = $('#' + canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
   // this.canvas.attr('width', $(this.container).width()); //max width
    this.xFactor = xFactor;
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.nameObj = "Cow";
};

/**
 * .draw
 * draw cow
 * @param
 * **/
Cow.prototype.draw = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};


/**
 * .clear
 * used to clear cow from canvas
 * @param
 * **/
Cow.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}

Cow.prototype.setX = function(){
    this.x = this.canvas.width() * this.xFactor;
}

