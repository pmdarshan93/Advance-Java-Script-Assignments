console.log("Loaded in client.js");
const clientSocket = io();

const localVideo = document.getElementById("localVideo");
const stopVideo = document.getElementById("stop");
const endCall = document.getElementById("endCall");

// for user name
const usernameInput = document.getElementById("username");
usernameInput.addEventListener("change", (event) => {
    const username = event.target.value;
    console.log("Username changed to:", username);
    clientSocket.emit("username:changed", { username }); //for better understanding 
});

let localStream;
let screenStream;
let peerConnection;
const configuration = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" }
    ]
};

localhost:2507
// for local video connection with video tag of our local
function getLocalStream(){
    // navigator.mediaDevices.getDisplayMedia()
    navigator.mediaDevices.getUserMedia({video:true,audio:false}).then(stream=>{
        localVideo.srcObject=stream;
        localStream=stream;
    }).catch(err=>{
        console.error("Error accessing media devices.",err);
    }); 
}
getLocalStream();

function createPeerConnection(){
    peerConnection=new RTCPeerConnection(configuration);

    if(localStream){
        localStream.getTracks().forEach(track=>{
            console.log(track);
         peerConnection.addTrack(track,localStream);
        });
    }
    

    peerConnection.onicecandidate=(event)=>{
        if(event.candidate){
            clientSocket.emit("ice-candidate",event.candidate);
        }
    };

    peerConnection.ontrack=(event)=>{
        // Assuming only one stream is sent by remote
        const remoteVideo=document.getElementById("remoteVideo");
        // for(events of event.streams){
        //   let video=  document.createElement("video");
        //   video.srcObject=events;
        //   document.querySelector("#remote").append(video);
        // }
        remoteVideo.srcObject = event.streams[0];
    };
}

document.getElementById("startCall").addEventListener("click",async()=>{
    console.log("----------------")
    createPeerConnection();
    const offer=await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    clientSocket.emit("offer",offer);
    console.log("Local description set ... Offer sent.");
}); 

clientSocket.on("offer",async({offer,from})=>{
    console.log("Offer received ... Creating answer. To: ",from);
    createPeerConnection();
    await peerConnection.setRemoteDescription(offer);
    const answer=await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    clientSocket.emit("answer",answer);
    console.log("Local of p2 and remote of p1 description set ... Answer sent. from: ",from);
});

clientSocket.on("answer",async({answer,from})=>{
    await peerConnection.setRemoteDescription(answer);
    console.log("Remote description set with answer from p2...name: ",from);
});

clientSocket.on("ice-candidate",async({candidate,from})=>{
    await peerConnection.addIceCandidate(candidate);
    console.log("ICE candidate added from remote peer name: ",from);
    //ICE candidate means network information to connect peers
});


stopVideo.addEventListener("click",()=>{
    if(localStream){
        // console.log("Stopping local video stream.",localStream.getTracks());
        localStream.getTracks().forEach(track=>{
            track.stop();
        });
        localVideo.srcObject=null;
        localStream=null;
    }
    else{
        getLocalStream();
    }
});


endCall.addEventListener("click", () => {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        remoteVideo= null;
    }
    localVideo.srcObject = null;
});

// // document.getElementById("startShare").onclick = async () => {
// //   try {
// //     screenStream = await navigator.mediaDevices.getDisplayMedia({
// //       video: true,
// //       audio: false
// //     });

// //     document.getElementById("screenVideo").srcObject = screenStream;
// //   } catch (err) {
// //     console.error("Screen capture error:", err);
// //   }
// // };

// // document.getElementById("stopShare").onclick = () => {
// //   if (screenStream) {
// //     screenStream.getTracks().forEach(track => track.stop());
// //   }
// // };
