var webcam; 

var escalo = 16;

function setup() {
  //crear el lienzo
  createCanvas(640, 480);
  
  //iniciar video desde la camera
  webcam = createCapture(VIDEO);
  webcam.size(640/escalo, 480/escalo);

  rectMode(CENTER)
  //esconder el video
  //webcam.hide();
}

function draw() {
	background(0)
	webcam.loadPixels()
	
	//iteracion por cada fila
	for( var y = 0; y < webcam.height; y++){
		//iteracion por cada columna
		for(var x = 0; x < webcam.width; x++){

			var index = (x + y * webcam.width)*4; //indice del pixel
			var r = webcam.pixels[index+0] // valor rojo
			var g = webcam.pixels[index+1] //valor verde
			var b = webcam.pixels[index+2] //valor azul

			//calcular el brillo del pixel
			var brillo = (r+g+b)/3

			//definir el tamaño del rectangulo según el brillo 
			ellipse(x*escalo, y*escalo, brillo/10, brillo/10)
		}
	}
}