let warning = document.querySelector("#warning")

document.querySelector("#api").addEventListener("submit", async function (e) {
  e.preventDefault();
  hideWarning();
  document.querySelector("#tableBody").innerHTML="";
  console.log("ds")
  let food = document.querySelector("#food").value;
  if (food.indexOf("-") == -1 && food.length!=0) {
    let data = await fetch('/getData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ food })
    })

    let list = await data.json();
    console.log(list)
    let arr = list.ans.items;
    console.log(arr.length)
    if (arr.length!=0) {
      for (items of arr) {
        let row = document.createElement("tr")
        for ([key, value] of Object.entries(items)) {
          let key = document.createElement("td")
          key.innerText = value;
          row.appendChild(key);
        }
        document.querySelector("#tableBody").appendChild(row);
      }
    } else {
      showWarning();
    }
  }
  else {
    showWarning();
  }
})


function showWarning() {
  console.log("war")
  warning.innerText = "Invalid Input";
}

function hideWarning() {
  warning.innerText = "";
}

