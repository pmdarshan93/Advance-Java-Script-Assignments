const port=2525;
const path=require('path');
const express=require('express');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/public/views"));

app.get("/",(req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running "+port);
    }
})