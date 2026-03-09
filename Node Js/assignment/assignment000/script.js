import { Console } from 'console';
import fs from 'fs';

function readFile(fileName){
try{
    names=fs.readFileSync(fileName,'utf-8');
    return names;
}
catch(err){
    console.log("Error Happened : "+err);
    return;
}
}

function writeFile(fileName,content){
    try{
    fs.writeFileSync(fileName,content)
    }catch(err){
        console.log("Error Happend : "+err);
    }
}

console.log("----------  Create  Student FIle  and Wrtie Names----------");

writeFile("Students.txt","Aravind,Malathi,Karim,Vijay");


console.log("\nStudents file Created Successfully\n")

console.log(" ----------Read Student File and display the names----------\n")
console.log("Student List\n")
let names;

names=readFile("Students.txt");



function displayStudents(names){
    let arr=names.split(",");
for(let i=0;i<arr.length;i++){
    console.log((i+1)+"."+arr[i]);
}
}
displayStudents(names);

console.log("\n----------Append New Names to FIle----------\n")

try{
fs.appendFileSync('Students.txt',",Aisha,Kavin");
}catch(error){
    console.log("Error happened : "+error)
}
console.log("\nNew Names Appended Successfully\n")
names=readFile("Students.txt");
displayStudents(names);

console.log("\n----------Update the Student Name----------\n")

names=names.replace("Karim","Karnan");
writeFile("Students.txt",names);
names=readFile("Students.txt")
console.log("\nNkarim Updated Successfully\n")
displayStudents(names)

console.log("\n---------- Create a backup dir and a copy student file into backup file----------\n")
fs.mkdirSync("backup",{ recursive: true });

writeFile("backup/Student_backup.txt",readFile("Students.txt"))

console.log("Created Directory and copied the file into back up file")

console.log("\n---------- Rename the file ---------\n")
try{
fs.renameSync("Students.txt","Student_list.txt");
console.log("Renamed Successfully \n")
}catch(err){
    console.log(err);
}


fs.unlink("backup/Student_backup.txt",(err)=>{
    console.log("Deleted Successfully  Asyncly because we didn't use the file after this step if we use we will do it sync");
})


class Student{
    constructor(name,age,std){
        this.name=name;
        this.age=age;
        this.std=std;
    }
    display(){
        console.log("Name : "+this.name+"\tAge : "+age+"\tStandard : "+std);
    }
}

console.log("\n---------- Create a json file and write and read ---------\n")

let s1=new Student("Abi",17,13);
let s2=new Student("Sree",18,13);
let s3=new Student("Vijay",16,13);
let s4=new Student("Aathesh",17,13);
let s5=new Student("Gowtham Bhai",19,15);

let arr=[s1,s2,s3,s4];

writeFile("Student_data.json",JSON.stringify(arr));

console.log("Created JSON file and stored the values\n\n Objects readed from the file\n");



arr=JSON.parse(readFile("Student_data.json"));
arr.push(s5);

for(let obj of arr){
    console.log(obj)
}

writeFile("Student_data.json",JSON.stringify(arr));

console.log("\n--------- Thank You ------------\n")