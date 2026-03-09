let nameInput = document.querySelector("#name")
let clientId = document.querySelector("#clientId")
let clientSecret = document.querySelector("#clientSecret")
let scope = document.querySelector("#scope")
let list = document.querySelector("#token_list")

document.getElementById('addToken').onclick = function () {
    // addToken()
    document.getElementById('formOverlay').classList.remove('hidden');
};

document.getElementById('closeForm').onclick = function () {
    document.getElementById('formOverlay').classList.add('hidden');
};



document.getElementById('infoClose').onclick = function () {
    document.getElementById('infoOverlay').classList.add('hidden');
};

document.getElementById('formOverlay').onclick = function (e) {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.add('hidden');
    }
};

document.getElementById('infoOverlay').onclick = function (e) {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.add('hidden');
    }
};

function addToken() {
    chrome.runtime.sendMessage({
        "action": "generate_token",
        "data": {
            "clientId": clientId.value,
            "clientSecret": clientSecret.value,
            "scope": scope.value,
            "name": nameInput.value
        }
    }, (res) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError)
            return;
        }
        loadTokens();
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate");
    console.log(chrome.identity.getRedirectURL());
    generateBtn.addEventListener("click", function () {
        addToken();
    });
});


document.getElementById('toggleSecret').onclick = function () {
    var inp = document.getElementById('clientSecret');
    inp.type = inp.type === 'password' ? 'text' : 'password';
};
loadTokens
function showmessage(msg, type) {
    var t = document.getElementById('message');
    t.textContent = msg;
    t.className = 'message' + (type ? ' ' + type : '');
    t.classList.remove('hidden');
    setTimeout(function () {
        t.classList.add('hidden');
    }, 2000);
}

function copyToken(button) {
    var tile = button.closest('.token-tile');
    if (!tile) return;

    var tokenEl = tile.querySelector('.tile-token');
    if (!tokenEl) return;

    var tokenValue = tokenEl.textContent.trim();

    navigator.clipboard.writeText(tokenValue).then(function () {
        showmessage('Token copied!', 'success');
    }).catch(function () {
        showmessage('Token copy failed!', 'error');
    });
}

function deleteToken(button) {
    var tile = button.closest('.token-tile');
    if (!tile) return;

    tile.remove();
    showmessage('Token deleted.', 'error');
}

function showInfo(tile) {
    var name = tile.querySelector('.tile-name');
    var token = tile.querySelector('.tile-token');
    var scope = tile.querySelector('.tile-scope');

    if (!name) return;

    chrome.runtime.sendMessage({ "action": "get_details", "name": name.textContent }, (res) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        if (res) {
            document.getElementById('infoName').textContent = res.name;
            document.getElementById('infoToken').textContent =res.accessToken;
            document.getElementById('infoRefresh').textContent = res.refreshToken;
            document.getElementById('infoScope').textContent = res.scope;
            document.getElementById('infoClientId').textContent= res.clientId;
            document.getElementById('infoClientSecret').textContent = res.clientSecret;
            document.getElementById('infoCreated').textContent = new Date(+res.createdTime);
            document.getElementById('infoOverlay').classList.remove('hidden');
        }
    })


}


document.getElementById('token_list').addEventListener('click', function (e) {

    var tile = e.target.closest('.token-tile');
    if (!tile) return;

    var copyBtn = e.target.closest('.tile-btn.copy');
    if (copyBtn) {
        copyToken(copyBtn);
        return;
    }

    var deleteBtn = e.target.closest('.tile-btn.delete');
    if (deleteBtn) {
        deleteToken(deleteBtn);
        return;
    }

    var infoBtn = e.target.closest('.tile-info');
    if (infoBtn) {
        showInfo(tile);
        return;
    }
});



function loadTokens() {

    chrome.runtime.sendMessage({ action: "get_tokens" }, (res) => {

        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        if (res) {
            // console.log(res);
            list.innerHTML = "";
            let now = new Date().getTime();
            if (res.length == 0) {
                let p = document.createElement("p")
                p.innerText = "List is Empty"
                list.appendChild(p)
            }
            for (let token of res) {
                console.log(token.createdTime)
                let validstatus = +token.createdTime + 3600000 > now;
                let li = document.createElement("li")
                let parentDiv = document.createElement("div");
                let scopeDiv = document.createElement("div");
                let tokenDiv = document.createElement("div");
                let actionDiv = document.createElement("div");

                let name = document.createElement("span");
                let valid = document.createElement("span");

                let infobtn = document.createElement("button");
                let deletebtn = document.createElement("button");
                let regeneratebtn = document.createElement("button");
                let copybtn = document.createElement("button");

                let icon=document.createElement("i");

                console.log(token)
                name.innerText = token.name;
                tokenDiv.innerText = token.accessToken;
                scopeDiv.innerText = token.scope;
                infobtn.innerText = "ℹ";
                regeneratebtn.innerText = "↻";
                deletebtn.innerText = "✕";
                

                li.classList.add("token-tile");
                parentDiv.classList.add("tile-top");
                valid.classList.add("tile-dot", validstatus ? "valid" : "invalid");
                name.classList.add("tile-name");
                tokenDiv.classList.add("tile-token");
                scopeDiv.classList.add("tile-scope")
                infobtn.classList.add("tile-info");
                actionDiv.classList.add("tile-actions");
                copybtn.classList.add("tile-btn", "copy");
                regeneratebtn.classList.add("tile-btn", "regen");
                deletebtn.classList.add("tile-btn", "delete");
                icon.classList.add("fa-regular","fa-copy");

                parentDiv.append(valid, name, infobtn);
                actionDiv.append(copybtn, regeneratebtn, deletebtn);
                li.append(parentDiv, tokenDiv, scopeDiv, actionDiv);
                copybtn.append(icon);

                infobtn.setAttribute("title","Info")
                copybtn.setAttribute("title","Copy");
                regeneratebtn.setAttribute("title","Regenerate");
                deletebtn.setAttribute("title","Delete");

                list.append(li);

                regeneratebtn.addEventListener("click", (e) => {
                    chrome.runtime.sendMessage({
                        "action": "regenerate",
                        "name": name.innerText
                    }, (res) => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                            return;
                        }
                        valid.classList.remove("invalid");
                        valid.classList.add("valid");
                        loadTokens();
                    })
                })
                deletebtn.addEventListener('click', () => {
                    chrome.runtime.sendMessage({ "action": "delete_token", name: name.innerText }, (res) => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                            return;
                        }
                        // loadTokens();
                    });
                })
                // editbutton.addEventListener('click', () => {
                //     chrome.runtime.sendMessage({
                //         "action": "edit_token",
                //         "data": {
                //             "clientId": clientId.value,
                //             "clientSecret": clientSecret.value,
                //             "scope": scope.value,
                //             "name": nameInput.value
                //         }
                //     })
                // })
                // deletebutton.addEventListener('click', () => {
                //     chrome.runtime.sendMessage({ "action": "delete_token", name: name.innerText }, (res) => {
                //         if (chrome.runtime.lastError) {
                //             console.error(chrome.runtime.lastError);
                //             return;
                //         }
                //         loadTokens();
                //     });
                // })
                // copybutton.addEventListener('click', () => {
                //     navigator.clipboard.writeText(token.accessToken);
                // })
            }
        }
    })
}

loadTokens();

/*

token structure

 <li class="token-tile">
    <div class="tile-top">
        <span class="tile-dot valid"></span>
        <span class="tile-name">Cliq Webhook Dev</span>
        <button class="tile-info" title="Details">ℹ</button>
    </div>
    <div class="tile-token">1000.abc123def456xyz...</div>
    <div class="tile-scope">ZohoCliq.webhooks.CREATE</div>
    <div class="tile-actions">
        <button class="tile-btn copy" id="copy">📋 Copy</button>
        <button class="tile-btn regen">↻ Regen</button>
        <button class="tile-btn delete">✕ Del</button>
    </div>
</li>

<li class="token-tile">
    <div class="tile-top">
        <span class="tile-dot valid"></span>
        <span class="tile-name">Cliq Webhook Dev</span>
        <button class="tile-info" title="Details">ℹ</button>
    </div>
    <div class="tile-token">1000.abc123def456xyz...</div>
    <div class="tile-scope">ZohoCliq.webhooks.CREATE</div>
    <div class="tile-actions">
        <button class="tile-btn copy" id="copy">📋 Copy</button>
        <button class="tile-btn regen">↻ Regen</button>
        <button class="tile-btn delete">✕ Del</button>
    </div>
</li>

*/