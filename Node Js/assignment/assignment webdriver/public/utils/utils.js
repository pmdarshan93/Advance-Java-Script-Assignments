const axios=require('axios');



async function test(food){
    const url= `https://api.calorieninjas.com/v1/nutrition?query=${food}`;
    const apiKey = "KQY5E8NRako8WjGMBCtoBw==ReKUNzaT2M86iRYM";
    const option = {
    method:"GET",
    headers: {
        'X-API-KEY': apiKey
    }
}

const res=await fetch(url,option);
return res.json();
}

module.exports={test};