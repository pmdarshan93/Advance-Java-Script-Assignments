const axios=require('axios');

function test(){
let url = "https://api.calorieninjas.com/v1/nutrition?query=";
const apiKey = "KQY5E8NRako8WjGMBCtoBw==ReKUNzaT2M86iRYM";
const option = {
    method: 'GET',
    header: {
        'X-API-KEY': apiKey
    }
}

axios.get(url+"idli",option).then((res)=>console.log(res))
.catch((err)=>console.log(err));
}

module.exports(test)