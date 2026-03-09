console.log("Script connected")

const socket=io();
const msgInput=document.querySelector("#input");
const btn=document.querySelector("#send");
const result=document.querySelector("#result")

btn.addEventListener("click",()=>{
    let msg=msgInput.value;
socket.emit('chat',msg);
})

socket.on('chat',(msg)=>{
    let div=document.createElement("div")
    div.innerText=msg
    result.appendChild(div);
})