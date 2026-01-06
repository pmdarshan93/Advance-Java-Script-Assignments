

const email=document.querySelector("#newEmail")
const password=document.querySelector("#newPassword");

document.querySelector("#signup").addEventListener("submit",async (e)=>{
    e.preventDefault();
    let mail=email.value;
    let pass=password.value;
    console.log(mail,pass);
    let login=await fetch('/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            useremail:mail,
            pass:pass
        })
    })
})