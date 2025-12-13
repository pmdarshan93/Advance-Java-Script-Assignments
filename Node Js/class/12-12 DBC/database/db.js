const mysql=require('mysql2');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"D@rshan123",
    database:"dbConnection"
})

db.connect(err=>{
    if(err){
        console.log("ERror accquire Db not connected");
    }
    else{
        console.log("Db connected successfully")
    }
})

export default db;