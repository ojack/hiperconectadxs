//definir un variable para la imagen
var img;

function setup() {
	//crear lienzo
	createCanvas(640, 480);

	//cargar imagen
	img = loadImage("imagenes/bgta.jpg")
}

function draw() {
	//aplicar un color
	tint(255, 40, 100)
	
	//dibujar la imagen en el lienzo
	image(img, 0, 0, width, height)

	
}