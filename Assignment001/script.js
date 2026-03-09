// question 1

let file1 = document.querySelector("#file1");
let file2 = document.querySelector("#file2");
let file3 = document.querySelector("#file3");
let btn=document.querySelector("#button");
let promise1, promise2, promise3;
let out=document.querySelector("#output");

init();

function init() {
    promise1=updatePromise(file1);
    promise2=updatePromise(file2);
    promise3=updatePromise(file3);
    main();
}

function updatePromise(file) {
   return  new Promise((resolve, reject) => {
        if (file.files[0] != undefined) {
            resolve("s1");

        }
        else {
            reject("r1");
    }
    })
}

function main() {
    Promise.all([promise1, promise2, promise3]).then((val) => {
        btn.disabled=false;
    }).catch((error) => {
        btn.disabled=true;
        console.log(error);
    })
}

btn.addEventListener("click",()=>{
out.innerText="Mission Respect ++";
})

file1.addEventListener("change", () => {
    promise1=updatePromise(file1);
    main();
})

file2.addEventListener("change", () => {
    promise2=updatePromise(file2);
    main();
})

file3.addEventListener("change", () => {
    promise3=updatePromise(file3);
    main();
})


// question2 
let driver1=document.querySelector("#driver1");
let driver2=document.querySelector("#driver2");
let driver3=document.querySelector("#driver3");
let btn2=document.querySelector("#button1");
let avail1,avail2,avail3;
let output1=document.querySelector("#output1");

init2();

function init2(){
    avail1=updateAvail(driver1);
    avail2=updateAvail(driver2);
    avail3=updateAvail(driver3);
    main2();
}

function updateAvail(driver){
return new Promise((resolve,reject)=>{
    if(driver.checked){
        resolve(driver.id);
    }
    else{
        reject("busy");
    }
})
}

driver1.addEventListener("change",()=>{
    avail1=updateAvail(driver1);
})
driver2.addEventListener("change",()=>{
    avail2=updateAvail(driver2);
})
driver3.addEventListener("change",()=>{
    avail3=updateAvail(driver3);
})


function main2(){
    Promise.any([avail1,avail2,avail3]).then((val)=>{
        output1.innerText=val+" is Available";
    }).catch((error)=>{
        output1.innerText="No Cab is Available";
    })
}

btn2.addEventListener("click",()=>{
    main2();
})


// question3 

let msg=document.querySelector("#msg");
let phto=document.querySelector("#phto");
let contact=document.querySelector("#contact");
let notes=document.querySelector("#notes");
let btn3=document.querySelector("#button3");
let output2=document.querySelector("#output2");
let query1,query2,query3,query4;
init3();

function init3(){
    query1=updateQuery(msg);
    query2=updateQuery(phto);
    query3=updateQuery(contact);
    query4=updateQuery(notes);
    main3();
}

function updateQuery(query){
return new Promise((resolve,reject)=>{

    if(query.checked){
        resolve(query.id+" success");
    }
    else{
        reject(query.id+" rejected");
    }
})
}

function main3(){
    Promise.allSettled([query1,query2,query3,query4]).then((val)=>{
        output2.innerText="";
        for(query of val){
            if(query.status=="fulfilled"){
                console.log(query);
            output2.innerText+=query.value+"\n";
            }else{
            output2.innerText+=query.reason+"\n";
            }
        }
    }).catch((error)=>{
        console.log(error);
    })
}

msg.addEventListener("change",()=>{
    query1=updateQuery(msg);
})

phto.addEventListener("change",()=>{
    query2=updateQuery(phto);
})

contact.addEventListener("change",()=>{
    query3=updateQuery(contact);
})

notes.addEventListener("change",()=>{
    query4=updateQuery(notes);
})
btn3.addEventListener('click',()=>{
   main3();
})