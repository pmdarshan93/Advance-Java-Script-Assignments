const validator = require("validator");
const {v4:uuid} = require("uuid");
const dayjs = require("dayjs");
const chalk = require("chalk");
// console.log(chalk.green("node e"));
// ----------------------------  Validator ----------------------------

let user = {
    name: "Darshan",
    email: "ipmdarshan@gmail.com",
    password: "Admina@1",
    mobile: "9940965141",
    website: "",
    isError: false
}

let user2={
    name: "",
    email: "ipmdarshvscan@gmil.com",
    password: "dmifena@",
    mobile: "2395524",
    website: "www.google.kvjal;hicom",
    isError: false
}


function checkUser(user) {
    //------------------   Validate name --------------------
    if (validator.isEmpty(user.name)) {
        console.log(chalk.red("Name feild cannot be empty"));
        user.isError = true
    }
    // ---------------- Validate email ---------------------
    if (validator.isEmpty(user.email)) {
        console.log(chalk.red("Email feild can't be empty "));
        user.isError = true;
    }
    else if (!validator.isEmail(user.email)) {
        console.log(chalk.red("invalid email"));
        user.isError = true;
    }
    // ---------------- Validate password ---------------------

    if (validator.isEmpty(user.password)) {
        console.log(chalk.red("Password feild cannot be empty"));
        user.isError = true;
    }
    else if (!validator.isStrongPassword(user.password, { minLength: 8, minNumbers: 1, minSymbols: 1 })) {
        console.log(chalk.red("Password is not strong"));
    }
    // ---------------- Validate mobile ---------------------

    if (validator.isEmpty(user.mobile)) {
        console.log(chalk.red("Mobile field cannot be empty"))
    }
    else if (!validator.isMobilePhone(user.mobile, "en-IN")) {
        console.log(chalk.red("Mobile number is not valid"));
        user.isError = true;
    }

    // ---------------- Validate url ---------------------
    if (!validator.isEmpty(user.website) && validator.isURL(user.website)) {
        console.log(chalk.red("Url is not valid"));
        user.isError = true;
    }

    console.log(user.isError?chalk.red("Invalid user"):chalk.green("user valid"));
}
console.log("-------------- User 1 ----------------")
checkUser(user);
console.log("\n-------------- User 2 ----------------\n")
checkUser(user2);
// -------------------------- Booking id --------------------------------------

// Create booking

function createBooking(name,movie,seat){
return {
    "id":uuid(),
    "name" :name,
    "movie":movie,
    "seat":seat
}
}


let b1=createBooking("Anil","Leo",1);
let b2=createBooking("Frog","Kanguva",2);

// Check booking

function printBooking(booking){
console.log("Name : "+booking.name+"\tMovie : "+booking.movie+"\tSeat : "+booking.seat+"\t Id : "+booking.id);
}
console.log("\n-------------- Bookings  ----------------\n")

printBooking(b1);
printBooking(b2);

// check unique of uuid
let uuidArr=[];
for(let i=0;i<10;i++){
    uuidArr.push(uuid());
}

uuidArr2=new Set(uuidArr);
console.log("\n-------------- Checking all id's are unique ----------------\n")
console.log(uuidArr.length==uuidArr2.size? chalk.green(" ALL ID'S ARE UNIQUE"):chalk.red("All ID's Are Not Unique"));

// ------------------------------- Date -------------------------------------------------

let task=[]
function addTask(name,date){
task.push({"name":name,"date":date,"isOverDue":false});
}

function displayTask(task){
    let due=dayjs().diff(task.date,"day");
    task.isOverDue=due>=0;~
    console.log(task.isOverDue?chalk.red("name : "+task.name+"\tdate : "+dayjs(task.date).format("YYYY-MM-DD")+ "\tisOverDue : "+task.isOverDue+"\t"+(due>=0?(due==0?"Due is within 24 hours":`Due is ago ${due} days`):"")):chalk.green("name : "+task.name+"\tdate : "+dayjs(task.date).format("YYYY-MM-DD")+ "\tisOverDue : "+task.isOverDue+"Due : "+(-due)+" days are remaining"));
}

addTask("Complete node js",dayjs("2025-12-20"));
addTask("Complete Advance js",dayjs("2025-11-20"));
addTask("Complete node js",dayjs("2025-12-10"));

console.log("\n-------------- Task List ----------------\n")
for(tasks of task){
    displayTask(tasks);
}

function makeOverDue(T){
    T.isOverDue=true;
}

// function calculateDates()

