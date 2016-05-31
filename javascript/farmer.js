

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
        $this.ctx.drawImage( this, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact);
    };
    // this.ctx.drawImage( this.cloudImage, this.x, this.y, this.canvas.width(), this.canvas.height())  
};

Farmer.prototype.draw = function () {
    this.ctx.drawImage( this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
};

Farmer.prototype.positionBubble = function () {
    $("#farmertip").parent().css({position: 'relative'});
    $("#farmer-bubble").css({top: farmerObj.y + 150, left: farmerObj.x - 400, position:'absolute'});
    $("#farmer-bubble").show();
};


Farmer.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}



