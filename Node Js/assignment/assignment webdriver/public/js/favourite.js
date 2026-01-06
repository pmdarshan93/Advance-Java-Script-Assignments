let selectTag=document.querySelector("#favouriteList")
document.addEventListener('DOMContentLoaded',async()=>{
    console.log(user)
    console.log(user.email)
    let foods=await fetch("/getFavourites",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({mail:user.email})
    });
    let response=await foods.json();
    console.log(response);
    let foodList=response.foodlist;
    console.log(response.foodlist)
    for(items of foodList){
        console.log(items.food)
        let option=document.createElement('option')
        option.setAttribute("value",items.food);
        option.innerText=items.food;
        selectTag.appendChild(option)
    }
})

selectTag.addEventListener('change',async(e)=>{
  hideTables();
  document.querySelector("#tableBody").innerHTML = "";
    loading();
    let data = await fetch('/getData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentFood:selectTag.value })
      })
      let list = await data.json();
      console.log(list)
      let arr = list.ans.items;
      if (arr.length != 0) {
        showTables();
        let rowColor=true;
        for (items of arr) {
          let row = document.createElement("tr")
          for ([key, value] of Object.entries(items)) {
            let key = document.createElement("td")
            key.innerText = value;
            row.appendChild(key);
          }
          row.classList.add(rowColor?'row1':'row2');
          rowColor=rowColor?false:true;
          document.querySelector("#tableBody").appendChild(row);
        }
}
loading();
})

function loading(){
    document.querySelector("#loadingMain").classList.toggle("hidden");
}


function showTables() {
  document.querySelector("#result").classList.remove("hide");
}

function hideTables() {
  document.querySelector("#result").classList.add("hide");
}