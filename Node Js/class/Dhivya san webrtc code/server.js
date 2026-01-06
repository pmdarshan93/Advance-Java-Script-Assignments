const express = require("express");
const {createServer} = require("http");
const {Server} = require("socket.io");
const path = require("path");

//initialize
const app = express();
const server = createServer(app);
const io = new Server(server);

//middleware configuration
app.use(express.static(path.join(__dirname,"public")));

io.on("connection",(socket)=>{
    //name sockets by mapping their ids
    console.log("User connected:",socket.id);
    socket.on("username:changed", uname=>{
        console.log("Username changed to:",uname);
        socket.username = uname;
    });

   socket.on("disconnect",()=>{
    console.log("User disconnected:",socket.id,socket.username);
   });

   socket.on("offer",(offer)=>{
    socket.broadcast.emit("offer",{offer,from:socket.username});
   });

   socket.on("answer",(answer)=>{
    socket.broadcast.emit("answer",{answer,from:socket.username});
   });

   socket.on("ice-candidate",(candidate)=>{
    socket.broadcast.emit("ice-candidate",{candidate,from:socket.username});
   });  

});
// app.get("/webrtc",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","webrtc.html"));
// })
server.listen(3300,()=>{
    console.log("Server running in port 3300");
})




/*const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

//socket io logic
io.on("connection",(socket)=>{
    //name sockets by mapping their ids
    console.log("User connected:",socket.id);
    socket.on("username:changed", uname=>{
        console.log("Username changed to:",uname);
        socket.username = uname;
    });

   socket.on("disconnect",()=>{
    console.log("User disconnected:",socket.id,socket.username);
   });

   socket.on("offer",(offer)=>{
    socket.broadcast.emit("offer",{offer,from:socket.username});
   });

   socket.on("answer",(answer)=>{
    socket.broadcast.emit("answer",{answer,from:socket.username});
   });

   socket.on("ice-candidate",(candidate)=>{
    socket.broadcast.emit("ice-candidate",{candidate,from:socket.username});
   });  

  
});
app.get("/webrtc",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","webrtc.html"));
})
server.listen(3300,()=>{
    console.log("Server running on http://localhost:3300");
});*/