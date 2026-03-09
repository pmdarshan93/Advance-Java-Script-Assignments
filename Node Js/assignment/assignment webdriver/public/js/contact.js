console.log(user);
let form=document.querySelector("#contactForm");
let mobileNo=document.querySelector("#phone")
let message=document.querySelector("#message")
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let confirmation=prompt("Submit the form ? Yes/No");
    console.log(confirmation)
    if(confirmation.toLowerCase().trim()==='yes'){
        console.log(({"email":user.email,mobile:mobileNo.value,'message':message.value,'date':new Date().toISOString().slice(0, 19)}));
        let addFeedback=await fetch('/addFeedback',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({mail:user.email,mobile:mobileNo.value,'message':message.value,'date':new Date().toISOString().slice(0, 19)})
        })
        if(addFeedback.status==500){
            alert("Server side Error please try again");
        }
    }
})