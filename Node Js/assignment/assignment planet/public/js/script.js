document.addEventListener("DOMContentLoaded",async function(){
    selectButton(document.title);
})


function select(planet){
    document.querySelector(`#${planet}`).classList.add("selectedPlanet");
}

function selectButton(button){
    console.log(button)
    if(button.includes("Structure")){
        document.querySelector("#structure").classList.add("selected");
    }
    else if(button.includes("Geology")){
        document.querySelector("#geology").classList.add("selected");
    }
    else{
        document.querySelector("#overview").classList.add("selected");
    }
}