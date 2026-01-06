let useremail=document.querySelector("#userEmail");
let password=document.querySelector("#loginPassword");
let login=document.querySelector("#login")
let error=document.querySelector("#error");

login.addEventListener("submit",async function(e){
  error.classList.add('hide');
  e.preventDefault();
  let mail=useremail.value;
  let pass=password.value;
  if(mail!="" && pass!="" && mail.length>7 && pass.length>7){
  let login=await fetch("/login",{
    method:'POST',
    headers:{
    "content-Type":"application/json",
    },
    body:JSON.stringify({
      "useremail":mail,
      "password":pass
    })
  })
console.log(login)
  if(login.status==200){
    window.location.href = "/";
  } 
  else{
    error.classList.remove("hide");
  }
}
else{
  console.log("invalid username or password");
}
})
