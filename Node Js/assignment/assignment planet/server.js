const port=2007;
const path=require('path');
const express=require('express');
const fs=require('fs')
const {loadData}=require('./public/utils/util.js');

const server=express();
server.set('view engine','ejs');
server.use(express.static(path.join(__dirname,'public')));
server.use(express.json());

server.listen(port,(err)=>{
    if(err){
        console.log("Error acquired");
    }
    else{
        console.log("Connection successful on port 2007");
    }
})

server.get("/",(req,res)=>{
    let planet=req.query.para1
    let view=req.query.para2
    if(planet==undefined)
    res.render("planet",loadData("Mercury","overView"))
else
    res.render("planet",loadData(planet,view));
})

