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
  background(0)
  stroke(255)
  

  for(var i = 0; i < 20; i++){
     for(var j = 0; j < 20; j++){
      //  strokeWeight(j*0.6)
        fill(j*10, 100, i*5, 100)
        cuadro(i*40, j*40, i*0.1+rot*0.1)
      }
  }
}

function cuadro(x, y, r){
  //guardar el estado de dibujo (colores, transformacion)
  push()
   //trasladar todo el sistema de coordenados al punto x, y
  translate(x, y)

  //girar segun la variable rot
  rotate(r)

  //dibujar el rectangulo
  rect(0, 0, 36, mouseY)

  //volver al estado previo de dibujo
  pop()
}

