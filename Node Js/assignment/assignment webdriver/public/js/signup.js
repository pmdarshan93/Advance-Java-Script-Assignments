let username=document.querySelector("#username")
let email=document.querySelector("#useremail")
let password=document.querySelector("#password")
let error=document.querySelector("#error");

document.querySelector("#signup").addEventListener("submit",async function(e){
    e.preventDefault();
    error.classList.add("hide");
    let signup=await fetch('/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            'name':username.value,
            'email':email.value,
            'password':password.value
        })
    })
    console.log(signup)
    if(signup.status==201){
        console.log("success");
        window.location.href='/login';
    }else if(signup.status==409){
        error.classList.remove("hide");
    }else if(signup.status==500){
        console.log(res);
    }
})

email.addEventListener("change",()=>{
    error.classList.add("hide");
})