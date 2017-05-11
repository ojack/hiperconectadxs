//definir un variable para la imagen
var img;
var webcam;

function setup() {
	//crear lienzo
	createCanvas(640, 480);

	//iniciar la camera
	webcam = createCapture(VIDEO);
	webcam.size(640, 480);
}

function draw() {
	background(0)
	blendMode(BLEND)

	//dibujar la webcam en el lienzo
	image(webcam, 0, 0, 640, 480)

	//Combina los píxeles según el modo especificado
	//modos son: BLEND, ADD, DARKEST, LIGHTEST, DIFFERENCE
	//MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN
	blendMode(HARD_LIGHT)


	push();
	translate(640,0); //desplazar los objetos en el lienzo
	scale(-1.0,1.0); //transformar con efecto del espejo
	image(webcam,0,0, 640, 480); //dibujar la webcam
	pop(); 
}