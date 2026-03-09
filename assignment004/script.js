// Class Structure

class Customer {
    constructor(accountNo, name, pin, balance) {
        this.accountNo = accountNo;
        this.name = name;
        this.pin = pin;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    balanceCheck(amount) {
        return this.balance >= amount;
    }

    displayBalance() {
        return this.balance;
    }
}



class InputCheck {

    pinCheck(pin) {
        return pin.length == 4 && /[0-9]/g.test(pin);
    }

    amountCheck(amount) {
        return amount > 0;
    }
}

class Bank {
    constructor() {
        this.arr = this.renderData();
        console.log(this.arr);
    }

    renderData() {
        if (localStorage.getItem("customerData") == null) {
            return [];
        }
        let arr = JSON.parse(localStorage.getItem("customerData"));
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Customer(arr[i].accountNo, arr[i].name, arr[i].pin, arr[i].balance)
        }
        return arr;
    }

    storeData() {
        localStorage.setItem("customerData", JSON.stringify(this.arr));
    }

    login(accountNo, pin) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].accountNo == accountNo && this.arr[i].pin == pin) {
                return i;
            } console.log(pin);

        }
        return -1;
    }

    signUp(name, pin) {
        this.arr.push(new Customer(Date.now(), name, pin, 0));
        this.storeData();
    }
}

class History {
    constructor(action, amount, time) {
        this.action = action;
        this.amount = amount;
        this.time = time;
    }


}

// Bank
let bank;
document.addEventListener("DOMContentLoaded", () => {
    bank = new Bank();
})

// Login Handling
let login = document.querySelector("#login");
let main = document.querySelector("main");
let loginMain = document.querySelector("#loginMain");
let signup = document.querySelector("#signUp");
let activateSignup = document.querySelector("#activateSignup");
let activateLogin = document.querySelector("#activateLogin");
let loginError = document.querySelector("#loginError");
let signUpError = document.querySelector("#signupError");
let accountNo = document.querySelector("#accountNo");
let pin = document.querySelector("#pin");
let name=document.querySelector("#nameInput");
let newpin=document.querySelector("#newPin");
let logout = document.querySelector("#logout");
let deposit = document.querySelector("#deposit");
let withdraw = document.querySelector("#withdraw");
let history = document.querySelector("#history");
let depositSelect = document.querySelector("#showDeposit");
let withdrawSelect = document.querySelector("#showWithdraw");
let historySelect = document.querySelector("#showHistory");
let depositCancel = document.querySelector("#depositCancel");
let withdrawCancel = document.querySelector("#withdrawCancel");
let depositTrigger = document.querySelector("#depositTrigger");
let withdrawTrigger = document.querySelector("#withdrawTrigger");
let depositValue = document.querySelector("#depositValue");
let withdrawValue = document.querySelector("#withdrawValue");
let balance = document.querySelector("#balanceView");
let withdrawWarning=document.querySelector("#withdrawWarning");

let currentId;

activateSignup.addEventListener("click", () => {
    loginMain.classList.add("hide");
    signup.classList.remove("hide");
})

activateLogin.addEventListener("click", () => {
    loginMain.classList.remove("hide");
    signup.classList.add("hide");
})



loginMain.addEventListener("submit", function (e) {
    e.preventDefault();
    let accountNovalue = accountNo.value;
    let pinvalue = pin.value;
    currentId = bank.login(accountNovalue, pinvalue);
    if (currentId != -1) {
        loginned();
    }
    else {
        loginError.innerText = " * Invalid account Number or Password *";
    }
})

signup.addEventListener("submit", function (e) {
    e.preventDefault();
    cusName = name.value;
    pin = newpin.value;
    if (pin >= 1000) {
        bank.signUp(cusName, pin);
        currentId=bank.arr.length-1;
        loginned();
    }
    else {
        signUpError.innerText = " * Password must be 4 digit number *";
    }
})

function loginned() {
    login.classList.add("hide");
    main.classList.remove("hide");
    changeName();
    updateBalance();
}

function changeName() {
    document.querySelector("#name").innerText = bank.arr[currentId].name;
    document.querySelector("#accNoDisplay").innerText = bank.arr[currentId].accountNo;
}

logout.addEventListener("click", () => {
    hideWarning();
    accountNo.value = "";
    pin.value = "";
    name.value="";
    login.classList.remove("hide");
    main.classList.add("hide");
})

depositSelect.addEventListener("click", () => {
    hideWarning();
    deposit.classList.remove("hide");
    depositSelect.classList.add("selected");
    withdrawSelect.classList.remove("selected");
    withdraw.classList.add("hide");
    history.classList.add("hide");
})

withdrawSelect.addEventListener("click", () => {
    hideWarning();
    deposit.classList.add("hide");
    withdraw.classList.remove("hide");
    withdrawSelect.classList.add("selected");
    depositSelect.classList.remove("selected");
    history.classList.add("hide");
})

historySelect.addEventListener("click", () => {
    hideWarning();
    deposit.classList.add("hide");
    withdraw.classList.add("hide");
    history.classList.remove("hide");
    history.classList.add("selected");
    showHistory();
})

function showHistory() {
    
}

function addHistory(action,amount){

}

function updateBalance() {
    balance.innerText = "$" + bank.arr[currentId].balance;
}

depositTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    let amount = depositValue.value;
    bank.arr[currentId].deposit(+amount);
    updateBalance();
    depositValue.value = "";
    alert("Deposit Successful");
})

withdrawTrigger.addEventListener("click",(e)=>{
    e.preventDefault();
    let amount=withdrawValue.value;
    if(bank.arr[currentId].balanceCheck(amount)){
    bank.arr[currentId].withdraw(+amount);
    updateBalance();
    withdrawValue.value="";
    bank.storeData();
    alert("Withdraw Successful");
    }
    else{
        withdrawWarning.classList.remove("hide");
    }
})

depositCancel.addEventListener("click",()=>{
    deposit.classList.add("hide");
})

withdrawCancel.addEventListener("click",()=>{
    hideWarning();
    withdraw.classList.add("hide");
})

function hideWarning(){
    withdrawWarning.classList.add("hide");
}