const os=require('os');
console.log(os.type());
console.log(os.cpus().length);

console.log("Hello Node js");

let fs=require('fs');

fs.writeFileSync("Hello.txt","Welcome to Node Js\n");
fs.appendFileSync("Hello.txt","APpdended text")

fs.writeFile("name.txt","Hello from async file writer ",(err)=>{
    console.log("File Writern");
});

let data=fs.readFileSync('name.txt','utf-8');
console.log(data);


