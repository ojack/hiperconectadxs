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

//usar un bucle para repetir una instruccion varias veces
for(var i = 1; i < 40; i++){
    rect(posX, mouseY + i*20, 2, 2);
  }
}