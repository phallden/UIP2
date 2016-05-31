var Pig = function (canvasElem, image, widthFact, heightFact, xFactor, y) {

    // Initial values
    //
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.img = image;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    this.canvas.attr('width', $(this.container).width()); //max width
    this.xFactor = xFactor;
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.nameObj = "Pig";
};

/**
 * .draw
 * Used to draw pig object on the canvas
 * @param
 * **/
Pig.prototype.draw = function () {
    console.log("Pig: " + this.canvas.width() * this.widthFact * this.heightFact)
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

/**
 * .clear
 * Empty the canvas
 * @param
 * **/
Pig.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}




