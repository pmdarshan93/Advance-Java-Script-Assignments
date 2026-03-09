const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "abi@1234",
    database : "accesstokengenerator"
})

module.exports={connection};

