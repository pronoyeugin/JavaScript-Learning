/*  Best practices for javascript coding 
    1. use camelCase for naming
    2.variable declaration on top side and initialize
    3.avoid unnecessary variables
    4.switch, case, default
    5.object and array with const     
*/

// 
let firstName, nameName, userEmail, userInfo;

firstName = "Pronoy Eugin";
lastName = "Khalko";;

// must use default in switch or multiple case
switch(key){

    case value:

    break;

    default:
    break;
}

//must use object and array with const 

let name = ["Pronoy", "Eugin"];
name


== vs ===
// bad practice 
2==2
true
2=="2";
true

// good practice
2===2
2==="2"
console.log();


// access dom less
// bad practice
const ol = document.querySelector(".student-list");
const firstOl = document.querySelector(".first-ol");
console.log();

//good practice
const ol = document.querySelector(".student-list");
const firstOl = ol.children[0];
console.log();


//bad practice
const saveBtn = document.querySelector(".save-btn");
saveBtn.addEventListener("click", () => {
    console.log("clicked");
})
console.log(saveBtn);

//good practice 
document.querySelector(".save-btn").addEventListener("click", () => {
    console.log("clicked");
})
console.log(saveBtn);