var bird = function (canvasElem, image, widthFact, heightFact, xFactor, y) {
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
    this.x = this.canvas.width() * xFactor;
    this.y = y;
    this.vx = 1;
    this.vy = 0;
    this.running = false;
    this.raf = null;
    this.nameObj= "Bird";

};

bird.prototype.clear = function (){
    this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
};

bird.prototype.draw = function () {

        this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};


bird.prototype.drawNew = function () {

   /*       this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 70, 0, Math.PI, false);
      this.ctx.closePath();
      this.ctx.lineWidth = 5;
      this.ctx.fillStyle = 'red';
      this.ctx.fill();
      this.ctx.strokeStyle = '#550000';
      this.ctx.stroke(); */

    //this.ctx.clearRect(this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact);
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact) 
};



