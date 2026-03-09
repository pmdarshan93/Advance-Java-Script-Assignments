chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message);
    if(message.action=="SAVE_PASSWORD"){
        chrome.storage.local.get({password:[]},(result)=>{
            const arr=[...result.password,message.data]
            chrome.storage.local.set({password:arr});
        })
    }
    else if(message.action=="LOAD_PASSWORD"){
        console.log("loadddddd")
        chrome.storage.local.get({password:[]},(result)=>{
            sendResponse(result.password);
        })
        // chrome.storage.local.clear();
        return true;
    }
    else if(message.action=="CLEAR_PASSWORD"){
        console.log("errrrrrrr")
        chrome.storage.local.clear();
    }
})