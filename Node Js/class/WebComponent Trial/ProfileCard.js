const template=document.createElement('template')

class ProfileCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// template.innerHTML=