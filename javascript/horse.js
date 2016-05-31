/**
 * Created by pontushallden on 2016-05-04.
 */


var Horse = function (canvasElem, image, widthFact, heightFact, xFactor, y) {

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
    this.nameObj = "Horse";
};

Horse.prototype.start = function () {
    $this = this;
    this.HorseImage.onload = function () {
        $this.ctx.drawImage(this, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact)
    };
};

Horse.prototype.draw = function () {
    console.log("Horse: "+ this.canvas.width() * this.widthFact * this.heightFact);
    this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
};


Horse.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}



