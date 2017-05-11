function setup() {
//crear el lienzo
  createCanvas(1000, 800);
  noStroke()

   //definir el color de fondo
  background(255, 5, 92)
 
}

function draw() {
 if(mouseIsPressed){
 	//si el mouse está oprimido, poner color negro
 	fill(0, 0, 0, 80);
 }	else {
 	//si no, poner verde
 	fill(120, 237, 196, 80)
 }
  
  //si el teclado esta oprimido, pintar el fondo con un color aleatorio
  if(keyIsPressed){
  	background(Math.random()*255, Math.random()*255, Math.random()*255)
  }

  rect(mouseX, mouseY, 80, 80);
}