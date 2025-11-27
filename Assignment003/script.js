function addItem(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Items added ");
    },1000)
})
}

function payment(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Payment Successfully $$$");
    },1000)
})
}

function  invoice(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Invoice Generated");
    },1000)
})
}

function deliver(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" Delivered Successfully ");
    })
})
}


function makeOrder(){
    addItem().then((msg)=>{
        addChainEle(msg);
        return payment();
    }).then((msg)=>{
        addChainEle(msg);
        return invoice();
    }).then((msg)=>{
        addChainEle(msg);
        return deliver();
    }).then((msg)=>{
        addChainEle(msg);
    })
}

async function makeAsyncOrder(){
    let itemAdd=await addItem();
    addAsynceEle(itemAdd);
    let amount=await payment();
    addAsynceEle(amount);
    let voice=await invoice();
    addAsynceEle(voice);
    let deli=await deliver();
    addAsynceEle(deli);
}

function addChainEle(msg){
let div=document.createElement("div");
div.innerText=msg;
div.classList.add("child");
document.querySelector("#chain").append(div);
}

function addAsynceEle(msg){
    let div=document.createElement("div");
    div.innerText=msg;
    div.classList.add("child");
    document.querySelector("#async").append(div);
    }
    

document.querySelector("#trigger").addEventListener("click",()=>{
    document.querySelector("#chain").innerHTML='';
    document.querySelector("#async").innerHTML='';
    makeOrder();
    makeAsyncOrder();
})

// QUiz;
function qn1(){
   
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve("Define Syngamy")
        },0)
    })
    
}

function qn2(){
        return new Promise((resolve)=>{
    setTimeout(()=>{
            resolve("What is Square of sin^2 + cos^2 ?")
        },5000)
    })
    
}

function qn3(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve("Director of Kanthara ?")
        },5000)
    })
}

function qn4(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Quize Ended");
        },5000)
    })
}

 function makeQuiz(){
    qn1().then((msg)=>{
        document.querySelector("#question").innerText=msg;
        return qn2();
    }).then((msg)=>{
        document.querySelector("#question").innerText=msg;
        return qn3();
    }).then((msg)=>{
        document.querySelector("#question").innerText=msg;
       return qn4();
    }).then((msg)=>{
        document.querySelector("#question").innerText=msg;
    })
}

document.querySelector("#triggerQn").addEventListener("click",()=>{
    makeQuiz();
})

