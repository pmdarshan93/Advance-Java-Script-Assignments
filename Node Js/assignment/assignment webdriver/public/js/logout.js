
document.querySelector("#logout").addEventListener("click",async(e)=>{
  console.log("dddddddd")
let clearCookie=await fetch("/logout",{
  method:'POST'
})
location.reload();
})