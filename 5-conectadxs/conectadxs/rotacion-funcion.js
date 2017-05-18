//Ejemplo de girar un objecto con el eje en el centro del lienzo

var rot = 0//variable para la rotación
function setup() {
  createCanvas(800, 600)
   background(0)

   //modo de dibujar desde el centro del objeto y no desde la esquina
   //https://p5js.org/es/reference/#/p5/rectMode
   rectMode(CENTER)

   noFill()
}

function draw() {
  rot = rot + 0.1 //incrementar la rotación
  
  stroke(255)

//dibujar la rotacion various veces, cambiando el color
  cuadro(20, 200, rot/2)
  stroke(66, 244, 232)
  cuadro(400, 200, -rot/4)
  stroke(0)
  cuadro(200, 400, rot)
}

function cuadro(x, y, r){
  //guardar el estado de dibujo (colores, transformacion)
  push()
   //trasladar todo el sistema de coordenados al punto x, y
  translate(x, y)

  //girar segun la variable rot
  rotate(r)

  //dibujar el rectangulo
  rect(0, 0, mouseX, x)

  //volver al estado previo de dibujo
  pop()
}

