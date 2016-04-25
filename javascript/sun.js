
var Sun = function(canvasElem, image, widthFact, heightFact, xFactor, y) {

    // Initial values
    //
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.sunImage = image;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    this.canvas.attr('width', $(this.container).width()); //max width
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
};

Sun.prototype.draw = function () {
    this.ctx.drawImage( this.sunImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};
