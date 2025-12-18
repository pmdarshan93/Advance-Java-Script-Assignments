const express=require("express")
const http=require("http")
const path=require("path")

const{Server}=require('socket.io');

const app=express();
const server=http.createServer(app);
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"index.html"));
})

server.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running in the port 3000")
    }
})


// const io=new Server(server);

// io.on('connection',(socket)=>{
//     console.log('a user connected',socket.id);
//     socket.on("chat",(msg)=>{
//         console.log("Message received successfully "+msg);
//         io.emit("chat",msg);
//     })
// })

// const { createServer } = require("http");
// const { Server } = require("socket.io");
// const { instrument } = require("@socket.io/admin-ui");

// const httpServer = createServer();

// const io = new Server(httpServer, {
//   cors: {
//     origin: ["https://admin.socket.io"],
//     credentials: true
//   }
// });

// instrument(io,{
//   auth: false,
//   mode: "development",
// });

// httpServer.listen(3003);


// open socket server in server side


// const io = new Server(server,{
//   cors: {
//     origin: ["https://admin.socket.io"],
//     credentials: true
//   }
// });   //http server is an argument

// instrument(io, {
//   auth: false,
//   mode: "development",
// });


// io.on('connection',(socket) => {
//     log("A usrr connected : ",socket.id);
    
//     socket.on('chat-msg',(msg) => {
//         log("Message received ",msg);
//         io.emit('chat-msg',msg);
//         socket.emit('chat-msg-ack',"Message received loud and clear for id : "+socket.id);
//     });

//     socket.broadcast.emit('new-usr',"New user joined id : "+socket.id);


//     socket.on('disconnect',() => {
//       log("User disconnected "+socket.id)
//       socket.broadcast.emit('new-usr',"User left id : "+socket.id);
//     })

    
//     socket.on('join-room',(room) => {
//       socket.join(room);
//     })

//     socket.on('room-msg',({roomname,msg}) => {
//       io.to(roomname).emit('room-msg-all',msg);
//     })
    
// });

// // # types of emit

// // io.emit() => to all + me
// // socket.emit() => only me
// // socket.broadcast.emit => to all - me
// // 

// // namespaces (Portal separation)

