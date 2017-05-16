//https://www.openprocessing.org/sketch/199480
var webcam; 

var escalo = 10;
var numFilas, numColumnas

//empezar con numeros aleatorios para calcular el noise
var nx = Math.random(100);
var ny = Math.random(100);
var nz = Math.random(1000);


function setup() {
    //crear el lienzo
  createCanvas(640, 480);
  
  //iniciar video desde la camera
  webcam = createCapture(VIDEO);
  webcam.size(640/escalo, 480/escalo);
  

  background(0);
  stroke(255);
  noFill();

}


function draw() {
//color negra con transparencia 
fill(0, 40)

//dibujar un rect llenando el lienzo
rect(0, 0, width, height)
noFill()
//acceder los pixeles de la webcam

webcam.loadPixels()
//iteracion por cada linea horizontal
  for (var j = 0; j < webcam.height; j++) {

    //empezar la linea
    beginShape();
    //agregar un punto a la linea
    vertex(0, j*escalo);

    //iteracion por cada columna de pixeles horizontales
    for (var i = 0; i < webcam.width; i++) {
      
      var index = (i + j * webcam.width)*4; //indice del pixel
      var r = webcam.pixels[index+0] // valor rojo
      var g = webcam.pixels[index+1] //valor verde
      var b = webcam.pixels[index+2] //valor azul

      //calcular el brillo del pixel
      var brillo = (r+g+b)/3

      var y = j*escalo + brillo/3; //posicion y segun la fila + el brillo
    
      curveVertex(i*escalo, y); //agregar un punto en la linea
    }

    vertex(width, j*escalo);

    endShape();
  }
  nz+=.01; 
}


