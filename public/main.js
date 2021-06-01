var socket = io.connect('http://localhost:3002', {'forceNew': true});

socket.on('messages', function(data){
    console.log(data);
});