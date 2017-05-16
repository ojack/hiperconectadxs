//incluir otros librerias y modulos
var express = require('express')
var app = express();
var server = require('http').Server(app);
var myip = require('quick-local-ip');
var io = require('socket.io')(server);

//crear un servidor en puerto 8000
server.listen(8000, function(){
	//imprimir la direccion ip en la consola
	console.log("servidor disponible en http://"+myip.getLocalIP4()+":8000")
});

var peers = []
//nueva conexion al servidor de websockets
io.on('connection', function (socket) {
 
 	 // recibir datos del cliente
    socket.on('mouse',
      function(data) {
      	//mostrar la informacion en la consola
        console.log("'mouse' " + data.x + " " + data.y);
      
        // enviar los datos a los otros clientes
        socket.broadcast.emit('mouse', data);
      }
    );

});


app.use(express.static('public'));

