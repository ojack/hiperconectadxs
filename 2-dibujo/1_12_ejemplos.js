var t;
var theta;
var maxFrameCount = 200;
var space = 540/8;
var d = 202.5*2;

var a = 140;
var b = 47;


function setup() {
  createCanvas(540, 540, P2D);
  rectMode(CENTER);

  }

function draw() {
  background(185,10,65);
  push();
  translate(width/2, height/2);

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t;

  for (var x = -d; x <= d; x += space ){
    for (var y = -d; y <=d; y += space) {

      var offSet = (x*a)+(y*b);      
      var sz1 = map(cos(-theta+offSet), 0, 1, space/2, 0);
      var sz2 = map(cos(-theta+offSet), 0, 1, space/2, 0);
      noStroke();
      fill(255,250,170);
      ln(x, y, sz1, sz2);
    }
  } 
  pop();
}

function ln(xPos, yPos, s1, s2) {
  push();
  translate(xPos, yPos);
  
  var pos = space/2;
    quad(0-pos+s1, 0-pos, 0+pos, 0-pos+s2, 
         0+pos-s1, 0+pos, 0-pos, 0+pos-s2);
  
  pop();
}