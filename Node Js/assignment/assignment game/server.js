const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const path = require('path')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');

server.listen(1902, (err) => {
    if (!err)
        console.log("Server is running on port: " + 1902);
})

app.get("/", (req, res) => {
    res.render('main');
})

// rooms: { [roomId]: { users: 0, options: [], sockets: [] } }
let rooms = {};

io.on('connection', (socket) => {
    console.log('Connected:', socket.id);

    socket.on('createRoom', () => {
        let roomNo = Math.round(Math.random() * 10000).toString();
        rooms[roomNo] = { users: 0, options: [], sockets: [socket.id] };
        socket.join(roomNo);
        socket.emit('roomId', roomNo);
        console.log('Room created:', roomNo);
    });

    socket.on('joinRoom', (roomId) => {
        roomId = roomId.toString().trim();
        if (!rooms[roomId]) {
            socket.emit('roomNotFound');
            return;
        }

        if (rooms[roomId].users >= 2) {
            socket.emit('roomFull');
            return;
        }

        rooms[roomId].users++;
        rooms[roomId].sockets.push(socket.id);
        socket.join(roomId);
        console.log('Joined room:', roomId, '| Users:', rooms[roomId].users);

        socket.emit('joinedRoom', roomId);

        let p1SocketId = rooms[roomId].sockets[0];
        io.to(p1SocketId).emit('opponentJoined');
    });

    // arr = [roomId, choiceIndex]
    socket.on('myChoice', (arr) => {
        let roomId = arr[0].toString();
        let choiceIndex = arr[1];

        if (!rooms[roomId]) {
            console.log('Room not found:', roomId);
            return;
        }

        let room = rooms[roomId];
        let alreadySubmitted = room.options.find(o => o.socketId === socket.id);
        if (alreadySubmitted) return;

        room.options.push({ socketId: socket.id, choice: choiceIndex });

        if (room.options.length >= 2) {
            let [p1, p2] = room.options;
            io.to(p1.socketId).emit('opponentOption', p2.choice);
            io.to(p2.socketId).emit('opponentOption', p1.choice);
            room.options = [];
        }
    });

    socket.on('disconnect', () => {
        console.log('Disconnected:', socket.id);
        for (let roomId in rooms) {
            let room = rooms[roomId];
            if (room.sockets.includes(socket.id)) {
                room.sockets.forEach(id => {
                    if (id !== socket.id) {
                        io.to(id).emit('opponentLeft');
                    }
                });
                delete rooms[roomId];
                console.log('Room deleted:', roomId);
                break;
            }
        }
    });
});
