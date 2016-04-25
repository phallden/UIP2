var Sun = function(canvasElem, imageName, widthFact, heightFact,x ,y) {

    // console.log("Ball created");

    // Initial values
    //
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.sunImage = new Image();
    this.sunImage.src = imageName;
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

Sun.prototype.draw = function () {
    $this = this;
    this.sunImage.onload = function() {
        $this.ctx.drawImage( $this.cloudImage, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact)
    };
};


/*Sun.prototype.tick = function() {
    this.x += this.vx;

    // Detection of the walls. This is not perfect, so it is left as an exercise to improve it.
    //

    if (this.x + this.vx > this.canvas.width() || this.x + this.vx < 0) {
        this.vx = -this.vx;
        this.x = 0;
    }
};

Sun.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}*/



/*
var canvas = document.getElementById('canvasID');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
      };

      imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';*/
