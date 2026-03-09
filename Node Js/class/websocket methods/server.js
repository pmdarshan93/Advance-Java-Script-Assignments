const express = require('express')
const path = require('path')
const http = require('http')
const { Server } = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

server.listen(2008, (err) => {
    if (!err) {
        console.log("Server is running on 2008");
    }
})

io.on('connection', (socket) => {
    console.log('new user connected : ' + socket.id);
    socket.broadcast.emit('new-user',"New user "+socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected : ', socket.id)
    })
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
        socket.emit('chat-msg-ack', "This is send from server");
    })
    socket.on('joinRoom',(roomName)=>{
        socket.join(roomName);
        socket.emit('chat-msg-ack',`Joined Room : ${roomName}`);
    })
    socket.on('leaveRoom',(roomName)=>{
        socket.leave(roomName)
        socket.emit('chat-msg-ack',"Left Room "+roomName)
    })
    socket.on('roomChat',({room,msg})=>{
        io.to(room).emit('chat',`Room[${room}] : ${msg}`);
        socket.emit("chat-msg-ack",` Messagae : ${msg} send to room : ${room}`)
    })
})
