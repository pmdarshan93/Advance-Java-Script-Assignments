// const port = 2507;
// const path = require('path');
// const express = require('express');
const queryString = require('querystring');
// const { access } = require('fs');
// const app = express();

// app.use(express.static(path.join(__dirname, "public")))
// app.set("view engine", "mjs");
// app.set("views", path.join(__dirname, 'public/views'))
// app.use(express.json());

// app.listen(port,(err)=>{
//   if(!err)
//     console.log("Port is running on 2507")
//   else
//   console.log("err")
// })

// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname, 'public/views/index.html'))
// })

// app.post("/get_refresh_token",(req,res)=>{
//   let {clientSecret, clientId,refreshToken} =req.body;
//   let token=genrate_access_token(clientId,clientSecret,refreshToken) ;
//   console.log("TOken"+token)
//   res.json({access_token : token})
// })

// let queryString = require('querystring')
// let clientSceret = "1c4652c6c5bdf5a1889163aa11ff43ef298007d8ff"; 
// let clientId = "1000.9PW02RI3TUUP4KQHQ8O9A2M3NDL8UN";


// let refreshToken = "1000.1e819ea246a231e1e6605cdd624589e7.e064a1d83caaddd11047ffeb23dd6f97";

// let grandToken = "1000.5eeae78e47a54e03a5e72a940c106ea9.2db5e3764ce7f12e599cee438a6602de"

// let https = require('https');

// let body = queryString.stringify({
//   refresh_token : refreshToken,
//   grant_type : "refresh_token",
//   client_id : clientId,
//   client_secret : clientSceret
// })

// let body1 = queryString.stringify({
//   grant_type : "authorization_code",
//   client_id : clientId,
//   client_secret : clientSceret,
//   code : grandToken
// })

// let option = {
//     host : "accounts.zoho.in",
//     path: "/oauth/v2/token?",
//     method : "POST",
//     headers : {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       "Content-Length": body.length
//     }
// }

// let option1 = {
//   host : "accounts.zoho.in",
//   path: "/oauth/v2/token",
//   method : "POST",
//   headers : {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     "Content-Length": body1.length
//   }
// }

// const req=https.request(option1,(res)=>{
//   result ='';
//   res.on('data',smallData  => {
//     result += smallData;
//   });

//   res.on('end', () => {
//     console.log("Response:", result);
//     console.log("RESPSSSSS  ", JSON.parse(result))
//     refreshToken = JSON.parse(result).refresh_token
//     console.log(refreshToken)
//     genrate_Refresh_Token();
//   });
// } )

// req.on('error', (err) => {
//   console.error("Error:", err);
// });


// req.write(body1);
// req.end();

// console.log(body)
async function genrate_access_token(clientId,clientSecret,refreshToken){
  // console.log(clientId,clientSecret,refreshToken)
// const req=https.request(option,(res)=>{
//   result ='';
//   res.on('data',smallData  => {
//     result += smallData;
//   });

//   res.on('end', () => {
//     console.log("Response:", result);
//     console.log(JSON.parse(result).access_token)
//   });
// })

// req.on('error', (err) => {
//   console.error("Error:", err);
// });


// req.write(body);
// req.end();
let response = await fetch("https://accounts.zoho.in/oauth/v2/token",{
  method : "POST",
  headers : {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body : queryString.stringify({
    client_id : clientId,
    client_secret : clientSecret,
    grant_type : "refresh_token",
    refresh_token : refreshToken
  })
})
let newToken = await response.json();
console.log(newToken)
return newToken.access_token;
}

// genrate_Refresh_Token();


async function send_message(){
  let msg = await fetch("https://cliq.zoho.in/api/v2/buddies/sree.shanmugakumar@zohocorp.com/message",{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "Authorization" : "Zoho-oauthtoken 1000.201b88b4c3cf26bcd017ad55e4245527.cc6777ac416a6c085142654d33134f3b"},
    body : JSON.stringify({"text" : "hii bro   {@sree.shanmugakumar@zohocorp.com}"})
  })
  // console.log(msg)
  console.log(msg.status)

}

setInterval(()=>{
  send_message();

},1000)




// async function genrateTokens(grandToken, clientId, clientSecret) {
//   console.log(grandToken,clientId,clientSecret)
//   let response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//       },
//       body: queryString.stringify({
//           client_id: clientId,
//           client_secret: clientSecret,
//           grant_type: "authorization_code",
//           code: grandToken,
//           redirect_uri: "http://localhost:8080/trade-show-team-project/"
//       })
//   })
//   let object = await response.json();
//   console.log(object)
//   return object;
// }

// genrateTokens("1000.b855b58daf77b439bd3aef9fb15d537b.36bc6a8855cbd9421174e13bf944313c","1000.PYZBKVHC0WNMO5EPOFDYDRVJD20CCR","568de9ca9d6fce9c1992f9f3040247ca0bd602c55e")
