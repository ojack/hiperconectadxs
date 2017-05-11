var webcam; 

function setup() {
  //crear el lienzo
  createCanvas(640, 480);
  
  //iniciar video desde la camera
  webcam = createCapture(VIDEO);
  webcam.size(640, 480);

  //esconder el video
  //webcam.hide();
}

function draw() {
  //dibujar un frame del video en el lienzo
  image(webcam, 0, 0, 620, 480);
}