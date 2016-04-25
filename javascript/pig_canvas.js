

var pig = function(canvasElem, imageName, widthFact, heightFact,x ,y) {

    // console.log("Ball created");

    // Initial values
    //
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.pigImage = new Image();
    this.pigImage.src = imageName;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    ///  var width = $(this.container).width() * widthFact;
    // var height = width * heightFact;
    this.canvas.attr('width', $(this.container).width()); //max width
    //  this.canvas.attr('height', height); //max width
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
};

/*pig.prototype.start = function () {
    $this = this;
    // this.ctx.fillStyle = "#FFF"
    // this.ctx.fillRect( 0, 0, this.canvas.width(), this.canvas.height()); //fill the canvas
//ct.drawImage(logoImage, 0, 0, c.width(), c.height());
    this.pigImage.onload = function() {
        $this.ctx.drawImage( $this.pigImage, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact)
    };
    // this.ctx.drawImage( this.pigImage, this.x, this.y, this.canvas.width(), this.canvas.height())
};*/



pig.prototype.draw = function () {
    // this.ctx.fillStyle = "#FFF"
    // this.ctx.fillRect( 0, 0, this.canvas.width(), this.canvas.height()); //fill the canvas
//ct.drawImage(logoImage, 0, 0, c.width(), c.height());
    this.ctx.drawImage( this.pigImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
    // this.ctx.drawImage( this.pigImage, this.x, this.y, this.canvas.width(), this.canvas.height())
};

/*// Adding the tick function. The tick is used to move things (or to provide for other animations).
//
pig.prototype.tick = function() {
    this.x += this.vx;

    // Detection of the walls. This is not perfect, so it is left as an exercise to improve it.
    //

    if (this.x + this.vx > this.canvas.width() || this.x + this.vx < 0) {
        this.vx = -this.vx;
        this.x = 0;
    }
};*/

pig.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}

$(window).resize( respondCanvas );
function respondCanvas(){
    for (k = 0; k < objects.length; ++k) {
        console.log(objects[k]);
        objects[k].canvas.attr('width', $(objects[k].container).width() ); //max width
        objects[k].canvas.attr('height', $(objects[k].container).height() ); //max height
    }
};


