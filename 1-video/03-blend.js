//definir un variable para la imagen
var img;
var webcam;

function setup() {
	//crear lienzo
	createCanvas(640, 480);

	webcam = createCapture(VIDEO);
	webcam.size(640, 480);
	//cargar imagen
	img = loadImage("imagenes/flores.jpg")
}

function draw() {
	blendMode(BLEND)
	//dibujar la imagen en el lienzo
	image(webcam, 0, 0, 640, 480)

	//Combina los píxeles según el modo especificado
	//modos son: BLEND, ADD, DARKEST, LIGHTEST, DIFFERENCE
	//MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN
	blendMode(ADD)

	//dibujar la imagen en el lienzo
	image(img, 0, 0, 640, 480)

}