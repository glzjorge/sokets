var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send("hola mundo de sockets");
});

io.on('connection', function(socket){
    console.log('Alguien se ha conectado usando sockets')
    socket.emit('messages', {
        id: 1,
        texto: "soy un mensaje",
        autor: "jorge gonzalez"
    });
});

server.listen(3002, function(){
    console.log("El serevidor esta corriendo en http://localhost:3002")
});