const path = require('path');
const express = require('express');
const { computeCaloriesBurned, estimateFromActivity, fetchCaloriesFromApi, getMetForActivity } = require('./utils/calories');
// console.log("Directory Name:", __dirname);

// const users = ["Dhivya", "Priya", "Kumar", "Arun", "Meena"];
// //initialize express
const app = express();

// parse JSON bodies for API endpoints
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); // to serve static files
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render("home", { title: "Home" });
    // res.send('<h1>Welcome to Calories Burned Calculator</h1>');
})
app.get('/calorie',(req,res)=>{
    const weight = parseFloat(req.query.weight);
    const minutes = parseFloat(req.query.minutes);
    const met = parseFloat(req.query.met);
    const activity = req.query.activity;

    try {
        // const caloriesBurned = computeCaloriesBurned(weight, minutes, met);
        const caloriesBurned = estimateFromActivity(activity, weight, minutes);
        res.json({ caloriesBurned });
        }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
})
app.get('/about',(req,res)=>{
    res.render("about",{title:"About Us"});
    // res.sendFile(path.join(__dirname, 'public/html/about.html'));
    // res.send('<h1>About Page: This is the about page of Calories Burned Calculator</h1>');
})

app.get('/contact',(req,res)=>{
    res.render("contact",{title:"Contact Us"});
});
app.get("/users", (req, res) => {
  res.render("users", { users });
});
app.get('/random',(req,res)=>{
    const min = parseInt(req.query.min) || 1;
    const max = parseInt(req.query.max) || 100;

  // Random number logic
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  res.json({
    min,
    max,
    random
  });

})
// API endpoint
app.post('/api/calories', async (req, res) => {
    const { weight, minutes, activity } = req.body || {};
    // basic validation
    if (!weight || !minutes || !activity) return res.status(400).json({ error: 'weight, minutes and activity are required' });
    const w = parseFloat(weight);
    const m = parseFloat(minutes);
    if (Number.isNaN(w) || w <= 0 || Number.isNaN(m) || m <= 0) return res.status(400).json({ error: 'weight and minutes must be positive numbers' });

    
    const apiKey = "API_KEY_HERE";
    if (apiKey) {
        try {
            
            const data = await fetchCaloriesFromApi(activity, m, apiKey);
            // api-ninjas returns an array of objects; try to extract calories if present
            let calories = null;
            console.log("Using external API for calories calculation",data);
            if (Array.isArray(data) && data.length > 0 && typeof data[0].total_calories === 'number') calories = data[0].total_calories;
            // fallback: if API didn't return calories, compute locally
            if (calories == null) {
                const kcal = estimateFromActivity(activity, w, m);
                return res.json({ calories: kcal, source: 'local', note: 'API returned no calories; used local estimate' });
            }
            return res.json({ calories, source: 'api', raw: data });
        } catch (err) {
            // on API failure, fallback to local estimate
            try {
                const kcal = estimateFromActivity(activity, w, m);
                return res.json({ calories: kcal, source: 'local', note: 'API failed; used local estimate', apiError: err.message });
            } catch (e) {
                return res.status(500).json({ error: 'Failed to calculate calories', details: e.message });
            }
        }
    }

    // No API key -> local estimate
    try {
        const kcal = estimateFromActivity(activity, w, m);
        const met = getMetForActivity(activity);
        return res.json({ calories: kcal, source: 'local', met });
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
});


//404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});
// const server = http.createServer(app);




app.listen(3000,(err,data)=>{
    if(err){
        console.log("Error in starting server:", err);
    }
    console.log("Server running in port 3000");
})