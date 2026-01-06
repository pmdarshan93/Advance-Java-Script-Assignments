const express=require('express');
const http=require('http');
const path=require('path');
const {Server}=require('socket.io');

// intialization
const app=express();
const server=http.createServer(app);
const io=new Server(server);

//middleware configuration
app.use(express.static(path.join(__dirname,'public')));


io.on('connection',(socket)=>{
    console.log(socket.id);
})

server.listen(3000,(err)=>{
    if(!err){
        console.log("Server is running in port 3000");
    }
})



// app.get("/",(req,res)=>{
//     res.render("index.html");
// })