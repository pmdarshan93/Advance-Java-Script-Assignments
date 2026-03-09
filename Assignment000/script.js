let button=document.querySelector("#execute");
let result=document.querySelector("#result");
let select=document.querySelector("#selectBox");
let api=new XMLHttpRequest();


button.addEventListener("click",()=>{
    result.innerText="";
    if(select.value!=""){
    let url=("https://api.api-ninjas.com/v1/exercises?muscle="+select.value);
    api.open("get",url,true);
    api.setRequestHeader("X-Api-Key","KQY5E8NRako8WjGMBCtoBw==iAt6BsRFk2TUwfbk");
    api.send();
    api.onload = ()=>{
    if(api.status==200){
        let data=JSON.parse(api.responseText);
        console.log(api.responseText)
        for(let i=0;i<data.length;i++){
            result.innerText+=(i+1)+".  "+data[i].name+" - "+data[i].equipment+"\n";
        };
            
    }
    else{
        console.log("Error accquired");
    }
    }
}
else{
    result.innerText="Please give a input";
}
})

