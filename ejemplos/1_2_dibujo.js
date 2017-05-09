function setup() {
	//crear el lienzo
  createCanvas(1000, 800);
  noStroke()

  //definir el color de fondo
  background(255, 5, 92)

}

function draw() {
  //dibujar un rectangulo en la posicion x y la posicion y del mouse
  //los variables "mouseX" y "mouseY" corresponden a la posicion del mouse
  rect(mouseX, mouseY, 80, 80);
}