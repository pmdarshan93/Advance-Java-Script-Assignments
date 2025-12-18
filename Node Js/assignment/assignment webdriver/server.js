const port = 2506;
const path = require('path');
const express = require('express');
const {test}=require('./public/utils/utils')

const app = express();
app.set('view engine', 'ejs');
// app.use("views",path.join(__dirname,"public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index", { title: "Home Page" });
})

app.get('/about', (req, res) => {
    res.render("about", { title: "About" });
})

app.get('/contact', (req, res) => {
    res.render("contact", { title: "Contact" });
})

app.post('/getData',async (req,res)=>{
    console.log("----------------------")
    console.log(req.body);
    let {food}=req.body;
    console.log(food);
    let ans= await test(food);
    console.log(ans);
    res.json({ans});
})



app.listen(port, (err) => {
    if (err) {
        console.log("Error in starting server" + err);
    }
    else {
        console.log("Server running in th port " + port);
    }
})