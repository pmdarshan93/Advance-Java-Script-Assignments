let genbtn = document.querySelector("#generate")
let clientId = document.querySelector("#clientId")
let clientSecret = document.querySelector("#clientSecret")
let scope = document.querySelector("#scope")
let nameInput = document.querySelector("#name")
let list = document.querySelector("#token_list")
let clearAll = document.querySelector("#clearAll");


genbtn.addEventListener("click", () => {
    // let div=document.createElement("div")
    // div.innerText=chrome.identity.getRedirectURL();
    // console.log(chrome.identity.getRedirectURL())
    // document.querySelector("#token").append(div);
   

})

clearAll.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "clear_all" }, () => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        loadTokens();
    })
})

function loadTokens() {

    chrome.runtime.sendMessage({ action: "get_tokens" }, (res) => {

        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        if (res) {
            console.log(res);
            list.innerHTML = "";
            let now = new Date().getTime();
            if (res.length == 0) {
                let p = document.createElement("p")
                p.innerText = "List is Empty"
                list.appendChild(p)
            }
            for (let token of res) {
                token.is_valid = +token.created_time + 3600000 > now;
                let li = document.createElement("li")
                let details = document.createElement("details")
                let summary = document.createElement("summary")
                let p = document.createElement("p")
                let regenbutton = document.createElement("button")
                let editbutton = document.createElement("button")
                let deletebutton = document.createElement("button")
                let copybutton = document.createElement("button")
                regenbutton.innerText = "Regenerate";
                editbutton.innerText = "Edit";
                deletebutton.innerText = "Button";
                copybutton.innerText = "Copy";
                summary.innerText = token.name
                p.innerText = JSON.stringify(token)
                details.append(summary, p);
                li.append(details, regenbutton, editbutton, deletebutton, copybutton);
                list.append(li);
                regenbutton.addEventListener("click", () => {
                    chrome.runtime.sendMessage({
                        "action": "regenerate",
                        "name": summary.innerText
                    }, (res) => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                            return;
                        }
                        loadTokens();
                    })
                    // console.log(summary.innerText)
                })
                editbutton.addEventListener('click', () => {
                    chrome.runtime.sendMessage({
                        "action": "edit_token",
                        "data": {
                            "clientId": clientId.value,
                            "clientSecret": clientSecret.value,
                            "scope": scope.value,
                            "name": nameInput.value
                        }
                    })
                })
                deletebutton.addEventListener('click', () => {
                    chrome.runtime.sendMessage({ "action": "delete_token", name: summary.innerText }, (res) => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                            return;
                        }
                        loadTokens();
                    });
                })
                copybutton.addEventListener('click', () => {
                    navigator.clipboard.writeText(token.accessToken);
                })
            }
        }
    })
}

loadTokens();