const io = require('socket.io-client');

//Relace server ip with actual ip of the server

const socket = io('http://172.29.90.16:5000');

socket.on('connect',() => {
    console.log('Connected to the server:', socket.id);

    //Send a message to the server
    socket.emit('message', 'Hello from the client');
 
    //Listen for the responses from the server
    socket.on('message', (data)=> {
        console.log('Received response:', data);

    });
});

socket.on('disconnect', () => {
    console.log('Disconnected form the server');
});