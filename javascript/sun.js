var Sun = function (canvasElem, image, image2, widthFact, heightFact, xFactor, y) {
    // Initial values
    //
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.sunImage = image;
    this.sunImage2 = image2;
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
    this.nameCanvas = "Sky";

};

Sun.prototype.draw = function () {
    if (this.imageChoice == 1)
        this.ctx.drawImage(this.sunImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
    else
        this.ctx.drawImage(this.sunImage2, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

Sun.prototype.animate = function () {
    console.log("TEST")
    this.ctx.drawImage(this.sunImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)


};


