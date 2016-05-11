

var Farmer = function(canvasElem, image, widthFact, heightFact,xFactor ,y) {

    // Initial values
    //
    $this = this;
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
    this.nameObj = "Farmer";
};

Farmer.prototype.start = function () {
    $this = this;
    this.FarmerImage.onload = function() {
        $this.ctx.drawImage( this, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact)
    };
    // this.ctx.drawImage( this.cloudImage, this.x, this.y, this.canvas.width(), this.canvas.height())  
};

Farmer.prototype.draw = function () {
    this.ctx.drawImage( this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

// Adding the tick function. The tick is used to move things (or to provide for other animations).
//
Farmer.prototype.tick = function() {
    this.x += this.vx;

    // Detection of the walls. This is not perfect, so it is left as an exercise to improve it.
    //

    if (this.x + this.vx > this.canvas.width() || this.x + this.vx < 0) {
        this.vx = -this.vx;
        this.x = 0;
    }
};

Farmer.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}



