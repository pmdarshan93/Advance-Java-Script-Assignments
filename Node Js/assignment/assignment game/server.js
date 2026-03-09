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
        console.log("Server is running the port : " + 1902);
})

app.get("/", (req, res) => {
    res.render('main');
})

// app.get('/computer', (req, res) => {
//     res.render('main');
// })

// app.get('/player', (req, res) => {
//     res.render('main', { mode: 2 });
// })

let rooms=[];

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('createRoom', () => {
        let roomNo = Math.round(Math.random() * 10000);
        socket.join(roomNo);
        socket.emit('roomId', roomNo);
    })
    socket.on('joinRoom', (roomId) => {
        index=-1;
        for(let i=0;i<rooms.length;i++){
            if(Object.keys(rooms[i])[0]==roomId){
                index=i;
                break;
            }
        }
        console.log("Initial Index and room"+index+" "+rooms);
        if(index==-1){
        rooms.push({[roomId]:{users:0,options:[]}});
        index=rooms.length-1;
        }
        console.log("FInal Index and room"+index+" "+rooms);
        if(rooms[index][roomId].users<2){
            rooms[index][roomId].users++;
            console.log("joinedddddddddddd"+rooms);
            socket.join(roomId);
        }
        else{
            console.log("Room FIll");
        }
    })
    socket.on('myChoice',(arr)=>{
        console.log(arr[0],arr[1]);
        let localId=socket.id;
        console.log(localId);
        let room=rooms[rooms.indexOf(arr[0])][arr[0]];
        room.options.push({localId:arr[1]});
        console.log(rooms);
        if(room.options.length>1){
        io.to(arr[0]).emit(room.options);
        room.options=[];
        }
    })
})

//
