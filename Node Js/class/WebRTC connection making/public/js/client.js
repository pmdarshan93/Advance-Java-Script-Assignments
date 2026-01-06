console.log("connected");
const clientSocket = io();

let localStream;
let peerConnection;

function getLocalStream() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
        localStream = stream;
        localVideo.srcObject = stream;
    }).catch(err => {
        console.log("Error accessing media devices ", err);
    })
}

getLocalStream();

const configuration = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" }
    ]
}

function createPeerConnection() {
    peerConnection = new RTCPeerConnection(configuration);
    if (localStream) {
        localStream.getTracks().forEach(track => {
            peerConnection.addTrack(track, localStream);
        })
    }

    peerConnection.ontrack=(event)=>{
        const remoteVideo=document.getElementById("remoteVideo");
        remoteVideo.srcObject=event.streams[0];
    }

    peerConnection.onicecandidate=(event)=>{
        if(event.candidate){
            clientSocket.emit('ice-candidate',event.candidate);
        }
    }
}


document.querySelector("#startCall").addEventListener("click", async () => {
    createPeerConnection();
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    clientSocket.emit('offer', offer);
    console.log("local description set ... Offer send");

})

clientSocket.on("offer",async ({offer,from})=>{
    console.log("Offer received ...  Creating anser TO : ",from)
    createPeerConnection();
    await peerConnection.setRemoteDescription(offer);
    answer =await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    clientSocket.emit("answer",answer);
    console.log("Local of p2 and remote of p1 description set ...  Answer sent . from : ",from);
});

clientSocket.on("answer",async ({answer,from})=>{
    await peerConnection.setRemoteDescription(answer);
    console.log("Remote descritpion set with answer form p2 ... name",from);
})

client