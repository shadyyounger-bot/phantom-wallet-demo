// Nova Wallet Demo JavaScript
// Educational project only
// Load saved data
window.onload = function(){
    const savedName = localStorage.getItem("novaName");
    const savedBalance = localStorage.getItem("novaBalance");
    if(savedName){
        document.getElementById("username").innerText = savedName;
    }
    if(savedBalance){
        document.getElementById("balance").innerText = savedBalance;
    }
};
// Change demo username
function changeName(){
    let name = prompt(
        "Enter demo profile name:"
    );
    if(name){
        document.getElementById("username")
        .innerText = name;
        localStorage.setItem(
            "novaName",
            name
        );
    }
}
// Update demo portfolio value
function changeBalance(){
    let amount = prompt(
        "Enter demo portfolio value:"
    );
    if(amount){
        let value = "$" + amount;
        document.getElementById("balance")
        .innerText = value;
        localStorage.setItem(
            "novaBalance",
            value
        );
    }
}
// Dark / Light mode
functio
