

let appName=document.querySelector("#appName");
let password=document.querySelector("#password")

document.querySelector("#save").addEventListener('click',()=>{
    chrome.runtime.sendMessage({
        action : "SAVE_PASSWORD",
        "data" : {
            "app" : appName.value,
            "password" : password.value
        }
    },loadPasswords)
    // chrome.storage.local.clear();
})

function loadPasswords(){
    chrome.runtime.sendMessage({
        action : "LOAD_PASSWORD"
    },(response)=>{
        console.log(response)
        if(response!=undefined){
        document.querySelector("#list").innerHTML="";
        for(obj of response){
            let li=document.createElement('li');
            li.innerText=`${obj.app}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0--\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${obj.password}`;
            document.querySelector("#list").append(li);
        }
    }
    })
}

document.querySelector("#clear").addEventListener('click',()=>{
    console.log('Cleqadeeeeeeee')
    chrome.runtime.sendMessage({
        action : "CLEAR_PASSWORD"
    },loadPasswords)
})

loadPasswords();