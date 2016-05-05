var bird = function (canvasElem, image, widthFact, heightFact, xFactor, y) {
    // Initial values
    //
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.birdImage = image;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    this.canvas.attr('width', $(this.container).width()); //max width
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.running = false;
    this.raf = null;
    this.nameCanvas = "Sky";

};

bird.prototype.clear = function (){
    this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
};

bird.prototype.draw = function () {
        this.ctx.drawImage(this.birdImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

bird.prototype.drawNew = function (x,y) {
    this.ctx.drawImage(this.birdImage, x, y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

bird.prototype.animate = function () {

};





