let data=document.querySelector("#userData")
let btn=document.querySelector("#store")
chrome.storage.local.get(('note'),(response)=>{
    if(response.note){
        document.querySelector("#ans").innerText= response.note;
    }
})
btn.addEventListener('click',()=>{
    chrome.storage.local.set({note :document.querySelector("#ans").innerText+data.value},()=>{
        console.log('notes saved');
    })
document.querySelector('#ans').innerText+=data.value
})

document.querySelector("#clear").addEventListener('click',()=>{
    console.log("Storeage cleared")
    chrome.storage.local.clear();
})