var socket; //variable para la conexión al servidor por websockets

function setup() {
//crear el lienzo
  createCanvas(1000, 800);
  noStroke()

   //definir el color de fondo
  background(255, 5, 92)
 

 // iniciar conexión con el servidor de websockets
  socket = io.connect(window.location.origin);
  
  socket.on('mouse',
    // cuando recibimos datos por el servidor
    function(data) {
      //dibujar un circulo azul
      fill(0,0,0, 40);
      noStroke();
      ellipse(data.x,data.y,40,80);
    }
  );
}

function draw() {
 //seleccionar el color
  fill(120, 237, 196, 80)
  
  //si el teclado esta oprimido, pintar el fondo con un color aleatorio
  if(keyIsPressed){
    background(Math.random()*255, Math.random()*255, Math.random()*255)
  }

  //dibujar un rectangulo
  rect(mouseX, mouseY, 80, 80);

  //crear un objeto para enviar la informacion del mouse
  var mouseObj = {
    x: mouseX,
    y: mouseY
  };

  // enviar la informacion del mouse al servidor
  socket.emit('mouse', mouseObj);
}