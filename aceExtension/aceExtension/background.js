chrome.runtime.onMessage.addListener((message, sender, response) => {
    if (message.action == "generate_token") {
        let data = message.data;
        const authUrl =
            `https://accounts.zoho.in/oauth/v2/auth` +
            `?response_type=code` +
            `&client_id=${data.clientId}` +
            `&scope=${data.scope}` +
            `&redirect_uri=https://mkchipmdfgeciionolkbhmapgabmljdh.chromiumapp.org/` +
            `&access_type=offline` +
            `&prompt=consent`;

        chrome.identity.launchWebAuthFlow(
            {
                url: authUrl,
                interactive: true
            },
            function (redirectedTo) {

                // if (chrome.runtime.lastError) {
                //     console.error(chrome.runtime.lastError);
                //     return;
                // }
                console.log(redirectedTo)
                const url = new URL(redirectedTo);
                console.log(url)
                const code = url.searchParams.get("code");

                console.log("Authorization Code:", code);
                generateToken(code, data, response)
            }
        );
        // response(true);
        return true;
    }
    else if (message.action == "regenerate") {
        regenerateTokens(message.name,response);
        return true;
    }
    else if (message.action == "get_tokens") {
        chrome.storage.local.get({ "tokens": [] }, (res) => {
            response(res.tokens)
        })
        return true;
    } else if (message.action == "store_token") {
        chrome.storage.local.get({ "tokens": [] }, (res) => {
            let tokens = [...res.tokens, message.token]
            chrome.storage.local.set({ "tokens": tokens }, (res) => {
                response(tokens);
            })
        })
        return true;
    }else if(message.action=="delete_token"){
        chrome.storage.local.get({"tokens":[]},(res)=>{
            let tokens=res.tokens;
            tokens=tokens.filter((ele)=>ele.name!=message.name);
            chrome.storage.local.set({"tokens":tokens},(res)=>{
                response(tokens);
            })
        })
        return true;
    }
    else if(message.action=="get_details"){
        chrome.storage.local.get({"tokens":[]},(res)=>{
            let token = res.tokens.filter((ele)=>ele.name=message.name);
            response(token[0]);
        })
        return true;

    }
     else if (message.action == "clear_all") {
        chrome.storage.local.clear();
        response(true)
        return true;
    }

})


function generateToken(code, data, response) {
    let request = fetch("https://accounts.zoho.in/oauth/v2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "client_id": data.clientId,
            "client_secret": data.clientSecret,
            "redirect_uri": "https://mkchipmdfgeciionolkbhmapgabmljdh.chromiumapp.org/",
            grant_type: "authorization_code",
            "code": code,
        })
    }).then((res) => res.json()
    ).then((token) => {
        let newData = {
            "clientId": data.clientId,
            "clientSecret": data.clientSecret,
            "name": data.name,
            "accessToken": token.access_token,
            "refreshToken": token.refresh_token,
            "scope": data.scope,
            "createdTime": new Date().getTime(),
            "isValid": true
        }
        chrome.storage.local.get({ "tokens": [] }, (res) => {
            let tokens = [...res.tokens, newData]
            chrome.storage.local.set({ "tokens": tokens }, (res) => {
                response(tokens);
            })
        })
    })
}

function regenerateTokens(name,response) {
    chrome.storage.local.get("tokens",async (res) => {
        let tokenArr = res.tokens;
        for (let token of tokenArr) {
            if (token.name === name) {
                let newToken =await fetch("https://accounts.zoho.in/oauth/v2/token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        client_id: token.clientId,
                        client_secret: token.clientSecret,
                        grant_type: "refresh_token",
                        refresh_token: token.refreshToken
                    })
                }).then(res => res.json()
                ).then((newToken) => {
                    token.accessToken =newToken.access_token
                    token.createdTime = new Date().getTime();
                    console.log(token.createTime)
                })
            }
        }
        chrome.storage.local.set({"tokens" : tokenArr},(res)=>{
            response(tokenArr);
        })
    })
}