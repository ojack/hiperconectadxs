//https://www.openprocessing.org/sketch/199480

var xstep = 5; // espacio entry cada punto x
var ystep = 5; //espacio entre cada linea

var numFilas, numColumnas

//empezar con numeros aleatorios para calcular el noise
var nx = Math.random(100);
var ny = Math.random(100);
var nz = Math.random(1000);


function setup() {
  
   //crear lienzo
  createCanvas(640, 640);
  background(0);
  stroke(255);
  noFill();

 
  numFilas = height/ystep
  numColumnas = width/xstep

}


function draw() {
 background(0);

//iteracion por cada linea horizontal
  for (var j = 0; j < numFilas; j++) {

    //empezar la linea
    beginShape();

    vertex(0, j*ystep);

    for (var i = 0; i < numColumnas; i++) {
      nx = (i*xstep)/234;
      ny = (j*ystep)/165; 

      var vibracion = map(noise(nx, ny, nz), 0, 1, -100, 100) //vibracion entre -100 y 100 segun la calculacion de noise
      var y = vibracion +j*ystep; //calcular la posicion y 
    
      curveVertex(i*xstep, y); //agregar un ponto en la linea
    }

    vertex(width, j*ystep);

    endShape();
  }
  nz+=.01; 
}