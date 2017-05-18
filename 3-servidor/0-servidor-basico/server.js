//incluir otros librerias y modulos
var express = require('express')
var app = express();
var server = require('http').Server(app);
var myip = require('quick-local-ip');

var io = require('socket.io')(server)


//crear un servidor en puerto 8000
server.listen(8001, function(){
  //imprimir la direccion ip en la consola
  console.log("servidor disponible en http://"+myip.getLocalIP4()+":8000")
});

//nueva conexion al servidor de websockets
io.on('connection', function (socket) {
 
 	

});


app.use(express.static('public'));

