var Bird = function (canvasElem, image, widthFact, heightFact, xFactor, y) {
    // Initial values
    $this = this;
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.xFactor = xFactor;
    this.img = image;
    this.canvas = $('#' + canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
    //this.canvas.attr('width', $(this.container).width()); //max width
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.running = false;
    this.raf = null;
    this.nameObj= "Bird";

};
/**
 * .clear
 * clear bird from canvas.
 * @param
 * **/
Bird.prototype.clear = function (){
    this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
};
/**
 * .draw
 * draw bird on canvas.
 * @param
 * **/
Bird.prototype.draw = function () {
        this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};

/**
 * .drawNew
 * draw new bird on new location.
 * @param
 * **/
Bird.prototype.drawNew = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact) 
};

Bird.prototype.setX = function(){
    this.x = this.canvas.width() * this.xFactor;
}

