//incluir otros librerias y modulos
var express = require('express')
var app = express();
var server = require('http').Server(app);
var myip = require('quick-local-ip');


//crear un servidor en puerto 8000
server.listen(8000, function(){
  //imprimir la direccion ip en la consola
  console.log("servidor disponible en http://"+myip.getLocalIP4()+":8000")
});

app.use(express.static('public'));

