const express=require("express")
const path=require("path")
const {createServer}=require("http")
const {Server}=require('socket.io');

const app=express();
const server=createServer(app);
const io=new Server(server);

// middlware function
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.set("views",path.join(__dirname,"public/views"));

server.listen(3000,(err)=>{
    if(!err){
        console.log("Port is running in 3000");
    }
});


io.on('offer',(socket)=>{
    socket.broadcast.emit('offer',)
})