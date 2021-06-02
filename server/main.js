var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var message = [{
    id: 1,
    texto: "soy un mensaje",
    autor: "jorge gonzalez"
}];

app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send("hola mundo de sockets");
});

io.on('connection', function(socket){
    console.log('Alguien se ha conectado usando sockets')
    socket.emit('messages', message);
    socket.on('new-message', function(data){
            message.push(data);
    io.socket.emit('messages', mesagges);
    });
});

server.listen(3002, function(){
    console.log("El serevidor esta corriendo en http://localhost:3002")
});