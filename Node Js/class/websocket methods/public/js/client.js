const socket=io();

// socket.emit - only me ( a verification from server that the msg received successfully)
// socket.broadcast.emit - to all - me ( all client except the sender)
// 

const input=document.querySelector("#msg")
const btn=document.querySelector("#send")
const result=document.querySelector("#result")

btn.addEventListener("click",()=>{
    let msg=input.value
    socket.emit('chat',msg)
})

function addmsg(msg){
    let div=document.createElement("div")
    div.innerText=msg;
    result.appendChild(div)
}

socket.on('chat',(msg)=>{
   addmsg(msg)
})

socket.on('chat-msg-ack',(msg)=>{
    addmsg(msg)
})

socket.on('new-user',(msg)=>{
    addmsg(msg)
})

const roomName=document.querySelector("#roomName")
const roomMsg=document.querySelector("#roomMsg")
const join=document.querySelector("#join")
const leave=document.querySelector("#leave")
const sendRoom=document.querySelector("#sendRoom")

join.addEventListener("click",()=>{
    socket.emit("joinRoom",roomName.value)
})

leave.addEventListener("click",()=>{
    socket.emit("leaveRoom",roomName.value)
})

sendRoom.addEventListener("click",()=>{
    let room=roomName.value;
    let msg=roomMsg.value
    socket.emit('roomChat',{room,msg});
})

