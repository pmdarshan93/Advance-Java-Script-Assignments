
let input=document.querySelector("#city");
let btn=document.querySelector("#click");
let temp=document.querySelector("#temp");
let humid=document.querySelector("#humidity");
let wind=document.querySelector("#windspeed");
let error=document.querySelector("#error");


let apikey="EQ5ML6KA9ZZULEZUWYLNMXLFH";

console.log(input.value)
btn.addEventListener("click",()=>{
    let api= fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=us&key=${apikey}&contentType=json`);
    api.then((res)=>{
      return res.json()
    }).then((obj)=>{
        console.log(obj);
        temp.innerText=obj.currentConditions.temp+"*F";
        humid.innerText=obj.currentConditions.humidity;
        wind.innerText =obj.currentConditions.windspeed;
        error.innerText='';
    })
    .catch((err)=>{
        console.log("eeeeeeeeeeee")
        temp.innerText="--";
        humid.innerText="--";
        wind.innerText="--";
        error.innerText="Invalid city Name";
    })
})
