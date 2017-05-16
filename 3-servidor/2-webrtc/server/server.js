//incluir otros librerias y modulos
var fs = require('fs');
var express = require('express')
var app = express();
var myip = require('quick-local-ip');
var https = require('https')

//Usar certificado y key para crear un servidor con conexion encryptado
var privateKey  = fs.readFileSync('certs/key.pem', 'utf8');
var certificate = fs.readFileSync('certs/certificate.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
//iniciar el servidor
var httpsServer = https.createServer(credentials, app);

//iniciar los websockets en el servidor
var io = require('socket.io')(httpsServer);


//crear un servidor en puerto 8000
httpsServer.listen(8000, function(){
  //imprimir la direccion ip en la consola
  console.log("servidor disponible en https://"+myip.getLocalIP4()+":8000")
});


//nueva conexion al servidor de websockets
io.on('connection', function (socket) {
 

     socket.on('join', function(room) {
      // Get the list of peers in the room
      var peers = io.nsps['/'].adapter.rooms[room] ?
                Object.keys(io.nsps['/'].adapter.rooms[room].sockets) : []
      
      // Send them to the client
      socket.emit('peers', peers);
      // And then add the client to the room
      socket.join(room);
    });


     socket.on('signal', function(data) {
      var client = io.sockets.connected[data.id];
      client && client.emit('signal', {
        id: socket.id,
        signal: data.signal,
      });
    });



});


app.use(express.static('public'));

