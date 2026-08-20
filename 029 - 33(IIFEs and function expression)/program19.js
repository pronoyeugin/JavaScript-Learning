//33th class task


//IIFE (Immediately Invokeable Function Expressions)

//function call
function display (){
    console.log("Hello");
}
display();

//function immediately call
(function display (){
    console.log("Hello");
})();


//parameter pass
(function display (message){
    console.log(message);
})("hello");

//function expression
const display1 = function displayMessage(){
    console.log("Hello this Message");
}
display1();

//function expression parameter pass
const display2 = function displayMessage(message){
    console.log(message);
} 
display2("Hello world");



