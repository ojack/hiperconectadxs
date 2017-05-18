//Ejemplo de girar un objecto con el eje en el centro del lienzo

var rot = 0//variable para la rotación
function setup() {
  createCanvas(800, 600)
   background(0)

   //modo de dibujar desde el centro del objeto y no desde la esquina
   //https://p5js.org/es/reference/#/p5/rectMode
   rectMode(CENTER)
}

function draw() {
  rot = rot + 0.1 //incrementar la rotación

  noFill()
  stroke(255)

  //trasladar todo el sistema de coordenados
  //hacia la derecha y hacia abajo
  //ahora, el punto (0, 0) esta en el centro del lienzo
  translate(width/2, height/2)

  //girar segun la variable rot
  rotate(rot)

  //dibujar el rectangulo
  rect(0, 0, mouseY, mouseX)

}

