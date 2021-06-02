var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [{
    id: 1,
    texto: "Hola soy un mensaje",
    autor: "Jorge Gonzalez Hernandez"
}];

app.use(express.static('public'));

app.get('/',function(req, res){
 res.status(200).send("Hola Mundo");
});

io.on('connection', function(socket){
    console.log('Alguien se ha conectado con socket')
    socket.emit('messages', messages);
    socket.on('new-message', function(data){
    messages.push(data); 
    io.sockets.emit('messages', messages);    
    });
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");

});