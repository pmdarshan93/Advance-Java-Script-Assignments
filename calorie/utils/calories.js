const axios = require("axios");
const url = "https://api.api-ninjas.com/v1/caloriesburned";

function computeCaloriesBurned(weightKg, minutes, met) {
	if (typeof weightKg !== 'number' || weightKg <= 0) throw new TypeError('weightKg must be a positive number');
	if (typeof minutes !== 'number' || minutes <= 0) throw new TypeError('minutes must be a positive number');
	if (typeof met !== 'number' || met <= 0) throw new TypeError('met must be a positive number');

	const hours = minutes / 60;
	const calories = met * weightKg * hours;
	return Number(calories.toFixed(2));
}

// Common MET values (approximate). Keys are normalized (lowercase, underscores).
const METS = {
	sitting: 1.0,
	walking: 3.5,
	brisk_walking: 4.5,
	running: 8.0,
	cycling: 7.5,
	swimming: 6.0,
	yoga: 2.5,
	gardening: 3.0,
	hiking: 6.0,
};

function getMetForActivity(activity) {
	if (!activity) return null;
	const key = String(activity).toLowerCase().replace(/\s+/g, '_');
	return METS[key] || null;
}

function estimateFromActivity(activity, weightKg, minutes) {
	const met = getMetForActivity(activity);
	if (!met) throw new Error(`Unknown activity: ${activity}`);
	return computeCaloriesBurned(weightKg, minutes, met);
}

async function fetchCaloriesFromApi(activity, minutes, apiKey) {
	if (!apiKey) throw new TypeError('API key required for external lookup');
	const params = { activity, duration: minutes };
	const headers = { 'X-Api-Key': apiKey };
	const res = await axios.get(url, { params, headers });
	return res.data;
}


// console.log(computeCaloriesBurned(70, 30, 3.5)); // weight 70kg, 30 minutes, MET 3.5
// console.log(estimateFromActivity('walking', 70, 30));

module.exports = { computeCaloriesBurned, getMetForActivity, estimateFromActivity, fetchCaloriesFromApi };

