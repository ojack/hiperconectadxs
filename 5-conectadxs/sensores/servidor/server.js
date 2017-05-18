//incluir otros librerias y modulos
var fs = require('fs');
var express = require('express')
var app = express();
var arduinoApp =  express();
var myip = require('quick-local-ip');
var https = require('https')
var http = require('https')

//CREAR SERVIDOR HTTPS (encryptado) para poder usar 
//Usar certificado y key para crear un servidor con conexion encryptado
// (para poder usar la camera)
var privateKey  = fs.readFileSync('certs/key.pem', 'utf8');
var certificate = fs.readFileSync('certs/certificate.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, app);

//iniciar los websockets en el servidor
var io = require('socket.io')(httpsServer);

app.use(express.static('public'));
//crear un servidor en puerto 8000
httpsServer.listen(8000, function(){
  //imprimir la direccion ip en la consola
  console.log("servidor disponible en https://"+myip.getLocalIP4()+":8000")
});


//crear otro servidor para comunicar con el arduino
arduinoApp.get('/', function(req, res) {
  res.send('HTTP ESP8266 Test Server')
});

//recibir los datos del arduino
arduinoApp.use('/pot', function (req, res, next) {
   var v = req.param('value')
   console.log("sensor value: " + v)
   io.sockets.emit('value', v);
   res.send();
 
});

//iniciar servidor del arduino
arduinoApp.listen(8080, function(){
  //imprimir la direccion ip en la consola
  console.log("recibiendo datos en http://"+myip.getLocalIP4()+":8080")
});






