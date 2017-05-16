/*
 * Leer la amplitud del audio entrando con el micrófono
 */

var mic;
var amplitude;
var mapMax = 1.0;


function setup() {
  //crear lienzo
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  noStroke();

  //recibir audio del microfono
  mic = new p5.AudioIn();
  //iniciar micrófono
  mic.start();

  //crear un objeto para calcular amplitute
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
  // amplitude.smooth(0.8); 
}

function draw() {
  background(0);

  //nivel de amplitud
  var level = amplitude.getLevel();
  text('Amplitude: ' + level, 20, 20);
  text('mapMax: ' + mapMax, 20, 40);

  // calcular la posición y del ellipse basado en la amplitud del sónido
  var ellipsePos = map(level, 0, mapMax, height-40, 0);
  ellipse(width/2, ellipsePos, 100, 100);
}