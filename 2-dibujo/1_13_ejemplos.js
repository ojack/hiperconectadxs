// Nervous Waves 2
// Levente Sandor, 2014
//https://www.openprocessing.org/sketch/153224

function setup() {
  createCanvas(500, 500);
  fill(0);
  noStroke();
  rectMode(CENTER);
  frameRate(30);
  noiseDetail(2, 0.9);
}

function draw() {
  background(255);
  for (var x = 10; x < width; x += 10) {
    for (var y = 10; y < height; y += 10) {
     var n = noise(x * 0.005, y * 0.005, frameCount * 0.05);
      push();
      translate(x, y);
      rotate(TWO_PI * n*1.5);
      scale(10 * n*1.5);
      rect(0, 0, 1, 1);
      pop();
    }
  }
  
}