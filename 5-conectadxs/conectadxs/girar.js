//



function setup() {
 

  createCanvas(800, 600)
   background(0)
   rectMode(CENTER)
   
}

function draw() {
  fill(0, 10)
  rect(width/2, height/2, width, height)
  

  push()
  noFill()
  stroke(255)
  translate(width/2, height/2)
  rotate(frameCount/100)
  rect(0, 0, mouseY, mouseX)
   rotate(PI/4.0+frameCount/200)
   rect(0, 0, mouseX, mouseY)
  pop()
  //
  
}

