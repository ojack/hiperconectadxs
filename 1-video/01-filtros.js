//definir un variable para la imagen
var img;

function setup() {
	//crear lienzo
	createCanvas(640, 480);

	//cargar imagen
	img = loadImage("imagenes/flores.jpg")
}

function draw() {
	
	//dibujar la imagen en el lienzo
	image(img, 0, 0, width, height)

	//aplicar filtros al lienzo
	filter(INVERT)
	filter(POSTERIZE, 5)
}