console.log("client js linked");

const clientSocket=io();


const msg=document.querySelector("#msgInput");
const btn=document.querySelector("#sendBtn");
const result=document.querySelector("#result");


btn.addEventListener("click",()=>{
    const message=msg.value;
    clientSocket.emit("chat",message);
    msg.value="";
})

clientSocket.on("chat",(msg)=>{
    console.log("eeeeeeeeeeeeeeee")
    console.log("message on client side "+msg);
    let li=document.createElement("li")
    li.innerText=msg;
    result.appendChild(li);
})

