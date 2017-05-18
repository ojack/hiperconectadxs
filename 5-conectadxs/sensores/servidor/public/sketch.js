//https://www.openprocessing.org/sketch/199480
var webcam; 
var socket; //variable para la conexión al servidor por websockets

var escalo = 6;

var mult = 1
var numFilas, numColumnas



function setup() {
    //crear el lienzo
  createCanvas(640, 480);
  
  //iniciar video desde la camera
  webcam = createCapture(VIDEO);
  webcam.size(640/escalo, 480/escalo);
  

  background(0);
  stroke(255);
  noFill();


   // iniciar conexión con el servidor de websockets
  socket = io.connect(window.location.origin);
  
  socket.on('value',
    // cuando recibimos datos por el servidor
    function(data) {
       //console.log(data)
       //escalo = parseInt(data)/10
       mult = (data/100 - 3)
    }
  );

}


function draw() {
//color negra con transparencia 
fill(0, 255)

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

      var y = j*escalo - brillo/3*mult; //posicion y segun la fila + el brillo
    
      curveVertex(i*escalo, y); //agregar un punto en la linea
    }

    vertex(width, j*escalo);

    endShape();
  }

}







