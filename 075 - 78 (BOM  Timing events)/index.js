/*  BOM - Browser object model
    Timing Events - SetTimeout, SetInterval
    
*/  

console.clear();

setTimeout(() => {
    console.log("Hello, World!");
}, 2000);

setTimeout(display, 3000);
function display(){
    console.log("Display Function");
}

//setTimeout
const saveBtn = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveBtn.addEventListener("click", saveUser);
 
function saveUser(){
    message.textContent = "User Saved Successfully!";
    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}


//setInterval
saveBtn.addEventListener("click",displayCountdown);
function displayCountdown(){
    let count = 1;
    message.textContent = count;
    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);
}