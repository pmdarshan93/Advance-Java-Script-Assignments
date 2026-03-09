import http from 'http';

console.log(http)

const server=http.createServer((req,res)=>{
    console.log("Request")
    res.write("Responding");
    res.end();
})

const PORT=2506;

server.listen(PORT,(err,data)=>{
    if(err){
        console.log("Something went wrong",err);
    }
    else{
        console.group("Server running on port : ",PORT);
    }
})