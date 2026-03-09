let warning = document.querySelector("#warning")
let foodInput = document.querySelector("#food");
let currentFood;
console.log(user);
document.querySelector("#userInput").addEventListener("submit", async function (e) {
  e.preventDefault();
    isReq = true;
    hideWarning();
    document.querySelector("#tableBody").innerHTML = "";
    currentFood = foodInput.value;
    if (currentFood.indexOf("-") == -1 && currentFood.length != 0) {
      loading();
      let data = await fetch('/getData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentFood })
      })

      let list = await data.json();
      console.log(list)
      let arr = list.ans.items;
      if (arr.length != 0) {
        showTables();
        let rowColor = true;
        for (items of arr) {
          let row = document.createElement("tr")
          for ([key, value] of Object.entries(items)) {
            let key = document.createElement("td")
            key.innerText = value;
            row.appendChild(key);
          }
          row.classList.add(rowColor ? 'row1' : 'row2');
          rowColor = rowColor ? false : true;
          document.querySelector("#tableBody").appendChild(row);
        }
      } else {
        showWarning();
        hideTables();
      }
      loading();
    }
    else {
      showWarning();
      hideTables();
    }

})

document.querySelector("#userInput").addEventListener("change",()=>{
  console.log("ddd");
  hideTables();
})

function showWarning() {
  warning.innerText = "Invalid Input";
}

function hideWarning() {
  warning.innerText = "";
}

function showTables() {
  document.querySelector("#result").classList.remove("hide");
  document.querySelector("#favouriteIcon").classList.remove("hide");
}

function hideTables() {
  document.querySelector("#result").classList.add("hide");
  document.querySelector("#favouriteIcon").classList.add("hide");
}

function loading() {
  document.querySelector("#loadingMain").classList.toggle("hidden");
  document.querySelector("#getNutrition").toggleAttribute('disabled');
}


let like = document.querySelector("#like");
let unlike = document.querySelector("#unlike");
like.addEventListener("click", async () => {
  let confirmation = prompt("Did you want to add this to favourites list? yes/no");
  if (confirmation.toLowerCase().trim() === "yes") {
    let like = await fetch('/like', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ food: currentFood, "email": user.email, "date": new Date().toISOString().slice(0, 19) })
    })
    liketoggle();
  }
})

unlike.addEventListener("click", async () => {
  let confirmation = prompt("Did you want to remove this from favourites ? yes/no");
  if (confirmation.toLowerCase().trim() === "yes") {
    let unlike = await fetch('/unlike', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(
        { "food": currentFood, "email": user.email })
    })
    liketoggle();
  }
})
function liketoggle() {
  like.classList.toggle("hide");
  unlike.classList.toggle("hide");
}

document.querySelector("#logout").addEventListener("click",async(e)=>{
  console.log("dddddddd")
let clearCookie=await fetch("/logout",{
  method:'POST'
})
location.reload();
})