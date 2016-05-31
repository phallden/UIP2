var Cloud = function (canvasElem, image, widthFact, heightFact, xFactor, y) {

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
    this.nameObj = "Cloud";
};
/**
 * .start
 * Start the animation
 * @param
 * **/
Cloud.prototype.start = function () {
    $this = this;
    this.cloudImage.onload = function () {
        $this.ctx.drawImage($this.img, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact)
    };
    // this.ctx.drawImage( this.cloudImage, this.x, this.y, this.canvas.width(), this.canvas.height())
};
/**
 * .draw
 * Draw a Cloud object on the canvas
 * @param
 * **/
Cloud.prototype.draw = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

/**
 * .tick
 * The tick is used to move things (or to provide for other animations)
 * @param
 * **/
Cloud.prototype.tick = function () {
    this.x += this.vx;

    if (this.x + this.vx > this.canvas.width() || this.x + this.vx < 0) {
        this.vx = -this.vx;
        this.x = 0;
    }
};
/**
 * .clear
 * Clear the canvas of cloud objects
 * @param
 * **/
Cloud.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}


