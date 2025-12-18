const planets=require("/home/darsh-zstk429/VS CODE/JS Advance/Node Js/assignment/assignment planet/public/assets/data.json")

function loadData(input,view){
    let obj={};
    for(let planet of planets){
        if(input==planet.name)
        obj=planet;
    }
    if(view=="overView"){
        return {title:obj.name,planet:obj.name,planetImage:obj.images.planet,internal:obj.images.internal,planetContent:obj.overview.content,wikipedia:obj.overview.source,rotation:obj.rotation,revolution:obj.revolution,radius:obj.radius,temp:obj.temperature,color:obj.color,geologyPlanet:"none"};
    }
    if(view=="structure"){
        return {title:obj.name+"-Structure",planet:obj.name,planetImage:obj.images.internal,planetContent:obj.structure.content,wikipedia:obj.structure.source,rotation:obj.rotation,revolution:obj.revolution,radius:obj.radius,temp:obj.temperature,color:obj.color,geologyPlanet:"none"};
    }
    if(view=="geology"){
        return {title:obj.name+"-Geology",planet:obj.name,planetImage:obj.images.planet,planetContent:obj.geology.content,wikipedia:obj.geology.source,rotation:obj.rotation,revolution:obj.revolution,radius:obj.radius,temp:obj.temperature,color:obj.color,geologyPlanet:`url(${obj.images.geology})`};
    }
}

module.exports={loadData}