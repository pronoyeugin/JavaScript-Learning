/*  ES6 - Arrow function (part-1) */


// Traditional function
function display1 (){

    console.log("Display 1");

}
display1();

// Convert to Arrow function
const display2 = () => {

     console.log("Display 2");

}
display2();


//One line traditional function
function display3() {console.log("Display 3");} display3();

// One line arrow function
const display4 = () => console.log("Display 4"); display4();


// tradition function with return statement
function message1(){

    return "This is a message1";

}
console.log(message1());


// Arrow function with return statement
const message2 = () => {
    return "This is a message2";
};
console.log(message2());

//If remove return keyword and curly braces
const message3 = () => "This is a message3"; 

console.log(message3());


// traditional  function with parameter
function add1 (num1, num2){
    return num1 + num2;
}
console.log(add1(5, 10));

// Arrow function with parameter
const add2 = (num1, num2) => {
    return num1 + num2;
};
console.log(add2(15, 10));

// If remove return keyword and curly braces
const add3 = (num1, num2) => num1 + num2;
console.log(add3(25, 10));