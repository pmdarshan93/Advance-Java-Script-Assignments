
const path=require('path');
const port=3000;
const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    // res.send('<h1> Welcome to My express app</h1>');
    res.sendFile(path.join(__dirname,"/public/views/index.html"));
})

app.get('/about',(req,res)=>{
res.sendFile(path.join(__dirname,'/public/views/about.html'))
})

app.get('/random',(req,res)=>{
    const min=parseInt(req.query.min) || 1;
    const max=parseInt(req.query.max)||100;
    const random=Math.floor(Math.random()*(max-min+1)+min)
    res.json({
        min,max,random
})
})
// const server=http.createServer(app);
// console.log(__dirname)
// function handler(req,res){
//     if(req.url==="/"){
//         fs.readFile(path.join(__dirname,'/index.html'),(err,data)=>{
//             if(err){
//                 res.statusCode=500;
//                 res.setHeader=('Content-Type','text/plain');
//                 res.end("Error loading file");
//             }
//             else{
//                 res.statusCode=200;
//                 res.setHeader=('Content-Type','text/html');
//                 res.end(data);
//             }
//         })
//     // res.statusCode=200;
//     // res.setHeader('Content-Type','text/plain');
//     // res.end("Hello From Server");
//      }
//     else if(req.url=="/about"){
//         res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     res.end("Hello From About serve");
//     }
    
// }

app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting server"+err);
    }
    else{
        console.log("Server running in th port "+port);
    }
})


/// 10-12

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/public/views"));

app.get('/users',(req,res)=>{
    const users=["Dhiya san","Mathi san","Santhi san","Ravi san","Vasanth san"];
    res.render("user",{users,title:"User List"});
})