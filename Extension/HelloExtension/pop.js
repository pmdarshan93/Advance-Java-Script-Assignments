document.addEventListener('DOMContentLoaded',()=>{
    let button= document.createElement('button')
    button.innerText="Click Me";
    document.body.appendChild(button)
    button.addEventListener('click',()=>{
        let div=document.createElement('div')
        div.innerText="hello from js";
        document.body.appendChild(div)
    })
})