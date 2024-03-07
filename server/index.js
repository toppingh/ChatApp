const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('새로 연결되었어요!!!');
    
    socket.on('disconnect', () => {
        console.log('연결이 끊어졌어요!!!');
    });
});


app.use(router);

server.listen(PORT, () => console.log(`서버가 ${PORT}번으로 열렸삼!`));