

const email=document.querySelector("#loginEmail")
const password=document.querySelector("#password");

document.querySelector("#login").addEventListener("submit",async (e)=>{
    e.preventDefault();
    let mail=email.value;
    let pass=password.value;
    let login=await fetch('/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            useremail:mail,
            password:pass
        })
    })
})