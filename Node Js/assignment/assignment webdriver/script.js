const port = 2506;
const path = require('path');
const express = require('express');
const {test}=require('/public/utils/script')

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/public/views"));

app.get('/', (req, res) => {
    test();
    res.render("index", { title: "Home Page" });
})

app.get('/about', (req, res) => {
    res.render("about", { title: "About" });
})

app.get('/contact', (req, res) => {
    res.render("contact", { title: "Contact" });
})

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, (err) => {
    if (err) {
        console.log("Error in starting server" + err);
    }
    else {
        console.log("Server running in th port " + port);
    }
})