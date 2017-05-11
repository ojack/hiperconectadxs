function setup() {
	//crear lienzo
	createCanvas(320, 240);
}

function draw() {
	background(0)
	//aceder los pixeles del lienzo
	loadPixels();
	//iteracion por cada fila
	for( var y = 0; y < height; y++){
		//iteracion por cada columna
		for(var x = 0; x < width; x++){

			var index = (x + y * width)*4; //indice del pixel
			pixels[index+0] = x // rojo
			pixels[index+1] = random(255) //verde
			pixels[index+2] = y //azul
			pixels[index+3] = 255 //transparencia

		}
	}
	updatePixels()
}