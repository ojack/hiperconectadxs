/*
  Guardar valores de amplitud (nivel) de sónido, y mostrar en tiempo
 */

var mic, soundFile;
var amplitude;

var prevLevels = new Array(60); //Array para todos los valores previos de amplitud


function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  rectMode(CENTER);
  //definir modo de color en "hue, saturation, lightness" en lugar de rgb
  colorMode(HSB);

  mic = new p5.AudioIn();
  mic.start();

  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
  amplitude.smooth(0.6);
}

function draw() {
  background(0);
  fill(255, 10)

  var level = amplitude.getLevel();

  // rectangle variables
  var spacing = 10;
  var w = width/ (prevLevels.length * spacing);

  var minHeight = 10;
  var roundness = 20;

  // agregar nueva nivel a final del array
  prevLevels.push(level);

  // quitar el primer elemento del array
  prevLevels.splice(0, 1);

  // iteracion por todos los niveles previos de audio
  for (var i = 0; i < prevLevels.length; i++) {
    //calcular posicion x según la posicion en el Array
    var x = map(i, prevLevels.length, 0, width/2, width);

    //calcular altura según el valor de amplitude
    var h = map(prevLevels[i], 0, 0.02, minHeight, height);

    //calcular color según nivel de audio
    var hueValue = map(h, minHeight, height, 255, 0);

    fill(hueValue, 255, 200, 255);

    rect(x, height/2, w, h);
    rect(width - x, height/2, w, h);
  }

}