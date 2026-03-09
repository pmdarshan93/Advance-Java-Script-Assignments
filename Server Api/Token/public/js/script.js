
async function genrate_access_token(){
    let client_Id = document.querySelector("#clientId").value;
    let client_Sceret = document.querySelector("#clientSecret").value;
    let refresh_Token = document.querySelector("#refreshToken").value;
  console.log(client_Id,client_Sceret,refresh_Token)
    let req = await fetch("/get_refresh_token",{
        method : "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          clientId : client_Id,
          clientSecret : client_Sceret,
          refreshToken : refresh_Token
        })
    })
    let accessToken = await req.json();
    console.log(accessToken)
}