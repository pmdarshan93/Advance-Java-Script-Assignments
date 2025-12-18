const express=require('express')
const {Server}=require('socket.io')
const path=require('path')
const http=require('http')

const app=express();
const server=http.createServer(app);

app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

server.listen(2008,(err)=>{
    if(!err){
        console.log("Server is running in 2008");
    }
})

const io=new Server(server);

io.on('connection',(socket)=>{
    console.log('new user connected ',socket.id);
    socket.on('chat',(msg)=>{
        console.log(msg,socket.id);
        io.emit('chat',msg);
    })
})
