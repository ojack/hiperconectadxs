//https://www.openprocessing.org/sketch/422454

var circle = 200;
var rot;
var col;
var freq = 0.000005; 
var cont = 0;
var r;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(242);
  translate(300, 300);
  rotate(radians(rot));

  ellipseMode(RADIUS);
  for (var i=0; i<500; i+=5) {

    circle= 200 + 60*sin(millis()*freq*i);
    col=map(circle, 150, 250, 255, 60);
    r=map(circle, 150, 250, 10, 2);
    fill(col, 0, 74);
    noStroke();
    stroke(col, 0, 74);
    ellipse(circle*cos(i), circle*sin(i),r,r);    
    rot=rot+0.00005;
  }
}