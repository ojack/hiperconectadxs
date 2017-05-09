var posicion = 0;

function setup() {
  createCanvas(1000, 800);
  noStroke()
  background(0, 0, 0)

 
}


function draw() {
  posicion = posicion + 1
  if(posicion > width) {
    posicion = 0
  }
  
  fill(255, (mouseX/width)*255, 20, 160)
  for(var i = 1; i < 40; i++){
    rect(posicion, mouseY+i*20, 2, 2);
  }

 
 //rect(posicion, mouseY+20, 2, 2);
 //rect(posicion, mouseY+40, 2, 2);
 //rect(posicion+5, mouseY+60, 2, 2);
 //rect(posicion-10, mouseY+80, 2, 2);
 
}