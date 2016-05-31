var Sun = function (canvasElem, image, image2, widthFact, heightFact, xFactor, y) {
    // Initial values
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.img = image;
    this.img2 = image2;
    this.imageChoice = 1;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    this.canvas.attr('width', $(this.container).width()); //max width
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.raf = null;
    this.nameObj = "Sun";

};

/**
 * .draw
 * Draw the sun image on the canvas
 * @param
 * **/
Sun.prototype.draw = function () {
    if (this.imageChoice == 1)
        this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
    else
        this.ctx.drawImage(this.img2, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

/**
 * .animate
 * Perform a custom animation of a set of CSS properties.
 * @param
 * **/
Sun.prototype.animate = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)


};


