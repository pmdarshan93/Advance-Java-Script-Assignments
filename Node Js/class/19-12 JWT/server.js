const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const jwt=require("jsonwebtoken")
const cookieparser=require("cookie-parser")

let app=express();

// is to tell where the static files are located
app.use(express.static(path.join(__dirname,"public")))
// to parse the request body as json and access throught req.body
app.use(express.json());
// to parse the form data 
app.use(express.urlencoded({ extended: true }));
// to tell express to use ejs as view Engine
app.set("view engine","ejs");
// to tell the express where the view files are stored
app.set("views",path.join(__dirname,'public/views'))
// to use environment variables from .env file
dotenv.config();
// to parse the cookie of the browser and store it in req.cookie
app.use(cookieparser());

app.listen(3000,(err)=>{
    if(!err)
    console.log("Server is running in port 3000");
})

let users=[]

app.get('/',(req,res)=>{
    res.render('signup');
    console.log()
})

app.post('/signup',(req,res)=>{
    const {email,password}=req.body;
    let user={
        email:email,
        password:password
    }
    users.push(user);
    res.redirect("/login");
})


app.get("/login",(req,res)=>{
    res.render("index");
})


app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    let log= login(email,password);
    if(log){
        const jwtToken=jwt.sign({
            name:email,
            "password":password
        },
        process.env.secret,
        {expiresIn:"10s"}
        )
        res.cookie("JWTToken",jwtToken,{httpOnly:true});
        res.redirect('dashboard')
    }
})

app.get('/dashboard',verifyJWT,(req,res)=>{
    console.log(req.user);
res.render('dashboard');
})

function verifyJWT(req,res,next){
    const jwtToken=req.cookies.JWTToken;
    if(!jwtToken){
        console.log("Nov valid jwt token");
        return res.redirect("/login");
    }
    try{
        const decoded=jwt.verify(jwtToken,process.env.secret)
        req.user=decoded;
        next();
    }
    catch(err){
        return res.redirect("/login");
    }
}

function login(email,password){
    for(let i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
            return true;
        }
    }
    return false;
}

 








