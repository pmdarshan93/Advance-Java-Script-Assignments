const port = 2507;
const path = require('path');
const express = require('express');
const { test } = require('./public/utils/utils')
const { con } = require('./public/utils/dbConnection');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cookieparser = require('cookie-parser');

const app = express();

// is to tell where the static files are located
app.use(express.static(path.join(__dirname, "public")))
// to parse the request body as json and access throught req.body
app.use(express.json());
// to parse the form data 
app.use(express.urlencoded({ extended: true }));
// to tell express to use ejs as view Engine
app.set("view engine", "ejs");
// to tell the express where the view files are stored
app.set("views", path.join(__dirname, 'public/views'))
// to use environment variables from .env file
dotenv.config();
// to parse the cookie of the browser and store it in req.cookie
app.use(cookieparser());

app.listen(port, (err) => {
    if (err) {
        console.log("Error in starting server" + err);
    }
    else {
        console.log("Server running in th port " + port);
    }
})

app.get('/login', (req, res) => {
    res.render("login", { title: "Login" });
})

app.get('/',verifyJWT, (req, res) => {
    res.render('index', { title: "HOME PAGE",user:req.user});
})

app.get('/signup', (req, res) => {
    res.render("signup", { title: "SignUp" });
})

app.get('/about',verifyJWT, (req, res) => {
    res.render("about", { title: "About" });
})

app.get('/contact',verifyJWT, (req, res) => {
    res.render("contact", { title: "Contact","user":req.user});
})

app.get('/favourite',verifyJWT,(req,res)=>{
    res.render('favourite',{title:"Favourites",user:req.user});
})

app.post('/login', async (req, res) => {
    let { useremail, password } = req.body;
    let status;
    try{
    status =await login(useremail, password);
    }catch(err){
        status=500;
    }
    if (status == 200) {
        JWToken=jwt.sign({
            email:useremail
        },
        process.env.secret,
        {expiresIn:"10m"})
        res.cookie("JWToken",JWToken,{
            httpOnly:true,
            secure:false,
            sameSite: "strict",
            maxAge: 10 *60 * 1000

        })
       return  res.status(status).json({message:"Login successful"});
    }
    else if(status=401){
        return res.status(status).json({message:"Invalid Login"});
    }
    else{
        return res.status(status).json({message:"Server Side Error"});
    }
})


app.post('/signup', (req, res) => {
    let { name, email, password } = req.body;
    const checkQuery = "select * from userList where useremail=?";
    const insertQuery = "insert into userList (useremail,password,name) values(?,?,?)"

    con.query(checkQuery, [email], (err, result) => {
        if (err)
            return res.sendStatus(500);

        if (result.length > 0){
            return res.sendStatus(409)
        }
            con.query(insertQuery, [email, password, name], (err, result) => {
                if (err){
                   return res.sendStatus(500);
                }
                   return res.sendStatus(201)
            })
        
    })
   
})


app.post('/getData', async (req, res) => {
    let { currentFood } = req.body;
    let ans = await test(currentFood);
    res.json({ ans });
})

async function login(useremail, password) {
    const query = "select * from userList where useremail= ? and password=?";
    let result =await new Promise((resolve,reject)=>{
     con.query(query, [useremail, password], function (err, resul) {
            if (err) {
                reject(500);
            }
            if (resul.length > 0) {
                resolve(200);
            }
            else {
                resolve(401);
            }
        })
    })
    return result;
}

function verifyJWT(req,res,next){
    const JWToken=req.cookies.JWToken;
    if(!JWToken){
        return res.render("login")
    }
    try{
        const decoded=jwt.verify(JWToken,process.env.secret)
        console.log(decoded)
        req.user=decoded;
        next();
    }catch(err){
        return res.render("/login");
    }
}

app.post('/like',(req,res)=>{
    let query="insert into favourite (food,ownerId,date) values (?,(select id from userList where useremail= ?),?)";
    let {food,email,date}=req.body;
    con.query(query,[food,email,date],(err,result)=>{
        if(err){
        console.log(err);
        
            return res.sendStatus(503);
    }
    return res.sendStatus(200);
    })
})

app.post('/unlike',(req,res)=>{
let query="delete from favourite where food=? and ownerId=(select id from userList where useremail=?)";
let {food,email}=req.body;
con.query(query,[food,email],(err,result)=>{
    if(err){
        console.log(err)
        return res.sendStatus(503)
    }
    return res.sendStatus(200);
})
})

app.post('/getFavourites',(req,res)=>{
    let query='select food from favourite where ownerId=(select id from userList where useremail=?)';
    let {mail}=req.body;
    con.query(query,[mail],(err,result)=>{
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        console.log(result)
        return res.json({foodlist:result});
    })
})

app.post('/addFeedback',(req,res)=>{
    let query='insert into feedback values ((select id from userList where useremail=?),?,?,?)'
    console.log(req.body.mail)
    let {mail,mobile,message,date}=req.body;
    con.query(query,[mail,mobile,message,date],(err,result)=>{
    if(err){
        return res.sendStatus(500)
    }        
    return res.sendStatus(200)
    })
})

app.post('/logout',(req,res)=>{
    res.clearCookie("JWToken",{
        path:"/",
        httpOnly:true,
        secure:false,
        sameSite: "strict",
    });
    res.redirect("/")
})