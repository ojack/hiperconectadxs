function setup() {
//crear un lienzo con tamaño 1000px por 800px
  createCanvas(1000, 800);

 //definir el color de fondo
  background(255, 0, 80)

  //dibujar los ellipse y rectangulo desde el centro
  ellipseMode(CENTER);
  rectMode(CENTER); 
}

function draw() {
//dibujar un rectangulo en el punto x: 100, y: 200, ancho: 80, altura: 80
  rect(100, 200, 80, 80);

  ellipse(400,60,100,100);

  // Cuerpo
  stroke(0);
  fill(150);
  rect(240, 145, 20, 100);

  // Cabeza
  fill(255);
  ellipse(240, 115, 60, 60); 

  // Ojos
  fill(0); 
  ellipse(221, 115, 16, 32); 
  ellipse(259, 115, 16, 32);

  // Piernas
  stroke(0);
  line(230, 195, 220, 205);
  line(250, 195, 260, 205); 
}