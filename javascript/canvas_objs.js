
$(document).ready( function(){
 
var cloud1 = new Cloud("respondCanvas", '../images/Cloud.png', 0.1, 1.1)
cloud1.start();
console.log("Image drawned?")
var loopBG = setInterval(function(){
    // do your thing
       cloud1.clear();
       cloud1.tick();
        cloud1.draw();
}, 20);
});

var Cloud = function(canvasElem, imageName, widthFact, heightFact) {

    // console.log("Ball created");

    // Initial values
    //
    this.widthFact = widthFact;
    this.heightFact = heightFact;
    this.cloudImage = new Image();
    this.cloudImage.src = imageName;
    this.canvas = $('#' + canvasElem);//document.getElementById(canvasElem);
    this.container = $(this.canvas).parent();
    this.ctx = this.canvas.get(0).getContext('2d');
  ///  var width = $(this.container).width() * widthFact;
   // var height = width * heightFact;
    this.canvas.attr('width', $(this.container).width()); //max width
  //  this.canvas.attr('height', height); //max width
    this.x = 0;
    this.y = 0;
    this.vx = 5;
    this.vy = 0;
};

Cloud.prototype.start = function () {
  $this = this;
  console.log(this.canvas.width() + ", " + this.canvas.height())
 // this.ctx.fillStyle = "#FFF"
 // this.ctx.fillRect( 0, 0, this.canvas.width(), this.canvas.height()); //fill the canvas     
//ct.drawImage(logoImage, 0, 0, c.width(), c.height());
this.cloudImage.onload = function() {
  $this.ctx.drawImage( $this.cloudImage, $this.x, $this.y, $this.canvas.width() * $this.widthFact, $this.canvas.width() * $this.widthFact * $this.heightFact)  
};
 // this.ctx.drawImage( this.cloudImage, this.x, this.y, this.canvas.width(), this.canvas.height())  
};

Cloud.prototype.draw = function () {
  console.log(this.canvas.width() + ", " + this.canvas.height())
 // this.ctx.fillStyle = "#FFF"
 // this.ctx.fillRect( 0, 0, this.canvas.width(), this.canvas.height()); //fill the canvas     
//ct.drawImage(logoImage, 0, 0, c.width(), c.height());
  this.ctx.drawImage( this.cloudImage, this.x, this.y, this.canvas.width() * this.widthFact, this.canvas.width() * this.widthFact * this.heightFact)
 // this.ctx.drawImage( this.cloudImage, this.x, this.y, this.canvas.width(), this.canvas.height())  
};

// Adding the tick function. The tick is used to move things (or to provide for other animations).
//
Cloud.prototype.tick = function() {
    this.x += this.vx;

    // Detection of the walls. This is not perfect, so it is left as an exercise to improve it.
    //

    if (this.x + this.vx > this.canvas.width() || this.x + this.vx < 0) {
        this.vx = -this.vx;
    }
};

Cloud.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
}

/**$(document).ready( function(){
    //Get the canvas & context
    var c = $('#respondCanvas');
    var ct = c.get(0).getContext('2d');
    var container = $(c).parent();
    var counter = 0;
        var c2 = $('#respondCanvas2');
    var ct2 = c2.get(0).getContext('2d');
    var container2 = $(c2).parent();
    var counter2 = 0;

    //Run function when browser resizes
    $(window).resize( respondCanvas );

    function respondCanvas(){ 
        c.attr('width', $(container).width() ); //max width
        c.attr('height', $(container).height() ); //max height

        //Call a function to redraw other content (texts, images etc)

  			//Redraw & reposition content
  			var x = c.width();
  			var y = c.height();
  					ct.fillStyle = "#DDDDDD"; //black
  			ct.fillRect( 0, 0, x, y); //fill the canvas  		
  			logoImage = new Image(),
        TO_RADIANS = Math.PI/180, 
        logoImage.src = '../images/Cloud.png';
        ct.drawImage(logoImage, 0, 0, c.width(), c.height())	

           c2.attr('width', $(container2).width() ); //max width
        c2.attr('height', $(container2).height() ); //max height

        //Call a function to redraw other content (texts, images etc)

        //Redraw & reposition content
        var x2 = c2.width();
        var y2 = c2.height();
            ct2.fillStyle = "#DDDDDD"; //black
        ct2.fillRect( 0, 0, x2, y2); //fill the canvas     
        logoImage2 = new Image(),
        TO_RADIANS2 = Math.PI/180, 
        logoImage2.src = '../images/chicken.png';
        ct2.drawImage(logoImage2, 0, 0, c2.width(), c2.height())  

  		}
  		c[0].addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(loop);
});
c[0].addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

c2[0].addEventListener('mouseover', function(e){
  raf2 = window.requestAnimationFrame(loop2);
});
c2[0].addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf2);
});
  		function loop() { 
  			ct.clearRect(0,0,c.width(), c.height()); 
  			drawRotatedImage(logoImage,c.width()/2,c.height()/2,counter); 
  			counter+=2; 

  

  		}

      function loop2(){
                    ct2.clearRect(0,0,c2.width(), c2.height()); 
        drawRotatedImage(logoImage2,c2.width()/2,c2.height()/2,counter2); 
        counter2+=2; 
      }
  		function getMousePos(canvas, evt) {
  			var rect = canvas.getBoundingClientRect();
  			return {
  				x: evt.clientX - rect.left,
  				y: evt.clientY - rect.top
  			};
  		};

  		function drawRotatedImage(image, x, y, angle) { 

		// save the current co-ordinate system 
		// before we screw with it
		ct.save(); 

		// move to the middle of where we want to draw our image
		ct.translate(x, y);

		// rotate around that point, converting our 
		// angle from degrees to radians 
		ct.rotate(angle * TO_RADIANS);

		// draw it up and to the left by half the width
		// and height of the image 
		ct.drawImage(image, -(c.width()/2), -(c.height()/2), c.width(), c.height());

		// and restore the co-ords to how they were when we began
		ct.restore(); 

        // save the current co-ordinate system 
    // before we screw with it
    ct2.save(); 

    // move to the middle of where we want to draw our image
    ct2.translate(x, y);

    // rotate around that point, converting our 
    // angle from degrees to radians 
    ct2.rotate(angle * TO_RADIANS2);

    // draw it up and to the left by half the width
    // and height of the image 
    ct2.drawImage(image, -(c2.width()/2), -(c2.height()/2), c2.width(), c2.height());

    // and restore the co-ords to how they were when we began
    ct2.restore(); 
	}
	
  logoImage = new Image(),
  TO_RADIANS = Math.PI/180, 
  logoImage.src = '../images/Cloud.png';
  ct.drawImage(logoImage, 300, 100, c.width(), c.height())
    logoImage2 = new Image(),
  TO_RADIANS2 = Math.PI/180, 
  logoImage2.src = '../images/chicken.png';
  ct2.drawImage(logoImage2, 300, 100, c2.width(), c2.height())
    //Initial call 
    respondCanvas();

  });  **/