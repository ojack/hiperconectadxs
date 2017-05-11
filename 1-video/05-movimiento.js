var webcam; //variable para refir  
var anterior;

function setup() {
  //crear el lienzo
  createCanvas(640, 480);

  //crear otro lienzo para guardar el cuadro anterior
  anterior = createGraphics(640, 480)

  //iniciar video desde la camera
  webcam = createCapture(VIDEO);
  webcam.size(640, 480);

}

function draw() {
	//elegir modo de dibujo
	blendMode(BLEND)
	background(0)
	
	//dibujar el cuadro(frame) anterior
	image(anterior, 0, 0, width, height)
	

	blendMode(DIFFERENCE)
	image(webcam, 0, 0, width, height)


	var buton = get(200, 300)
	var movimiento = buton[0] + buton[1] + buton[2]

	blendMode(BLEND)
	
	fill(255, 0, 0)
	ellipse(200, 300, 40+movimiento, 40+movimiento)

	//dibujar el contenido del webcam en el lienzo
}