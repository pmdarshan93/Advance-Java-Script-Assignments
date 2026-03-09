let multipleTimes = true;


const observer=new MutationObserver(()=>{
   const password= document.querySelector(`input[type="password"]`);
   const name= document.querySelector(`input[type="text"]`); 
   const email =document.querySelector(`input[type="email"]`);
   console.log(name,password,email);
   let pass="";
   let uname ="";
   let button=password.parentElement.parentElement.querySelector('button');
   const user = name || email;
   if(!user || !password){
      return ;
   }

   password.addEventListener('blur',(e)=>{
      console.log(password.value)
      pass=password.value
   })
   name.addEventListener('blur',(e)=>{
      console.log(name.value)
     uname=name.value
   })

   button.addEventListener('click',()=>{
      let save=confirm("DO you want to save password")
      if(!save) return ;
      chrome.runtime.sendMessage({
         "action" :"SAVE_PASSWORD",
         "data" : {
            "website" : window.location.href,
            "host" : window.location.hostname,
            "app" : uname,
            "password" : pass
         }
      })
   })

});



observer.observe(document.body,{
   childList : true,
   subtree : true
})


