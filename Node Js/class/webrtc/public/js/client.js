console.log("Connected");
const clientSocket=io();

function getLocalStream(){
    navigator.mediaDevices.getDisplayMedia({video:true,audio:true}).then((stream)=>{
        localStream=stream;
        localVideo.srcObject=stream;
        console.log(stream);
    })
}


document.querySelector("#start").addEventListener("click",()=>{
    getLocalStream();
})

document.querySelector("#stop").addEventListener("click",()=>{
    if(localStream){
        console.log("Stopping video stream",localStream.getTracks());
        localStream.getTracks().forEach(element => {
            element.stop();
        });
        localVideo.srcObject=null;
    }
})
