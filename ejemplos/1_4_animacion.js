//definir un variable que corresponde a la posicion del rectangulo
var posX = 0;

function setup() {
  createCanvas(1000, 800);
  noStroke()
  background(0, 0, 0)
}


function draw() {
 posX = posX + 1 //agregar uno a la posicion
 if(posX > width) posX = 0 //si la posicion es mas que el ancho de la pantalla, volver el valor a zero
 	
 fill(120, 237, 196, 255)
 rect(posX, mouseY, 2, 2);
 //rect(posicion, mouseY+20, 2, 2);
 //rect(posicion, mouseY+40, 2, 2);
 //rect(posicion+5, mouseY+60, 2, 2);
 //rect(posicion-10, mouseY+80, 2, 2);
 
}