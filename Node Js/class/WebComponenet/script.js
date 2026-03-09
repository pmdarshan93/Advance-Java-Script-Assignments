const template=document.createElement('template');
template.innerHTML=`
<style>
h3{
font-size:40px;
color:orange;
}
img{
    height:600px;
    width:1000px;
}
</style>
<div>
<h3>
</h3>
<img>
<p><slot name="email"/></p>
</div>
`
// const template2=document.createElement("template");
// template2.innerHTML=`
// <style>
// h3{
//     font-size:100px;
//     color:orange;
//     }
//     img{
//         height:600px;
//         width:1000px;
//     }
//     </style>
//     <div>
//     <h3>
//     </h3>
//     <img>
//     </div>
// `
class UserCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.appendChild(template2.content.cloneNode(true));
        this.shadowRoot.querySelector("h3").innerHTML=this.getAttribute("name")+": parra ";
        this.shadowRoot.querySelector("img").setAttribute("src",this.getAttribute("data-image"));
    }


connectedCallback(){
    console.log("Element Instered");
}

disconnectionCallback(){
    console.log("Element Removed");
}

attributeChangedCallback(){
    console.log("Attribute updated"); 
}
}

customElements.define("user-card",UserCard);
