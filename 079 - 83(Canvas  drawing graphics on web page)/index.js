/* Variable and function in ES6 
    ES6 = ECMAScript 6


*/

// old method
// var x = 6;
// if (true){
//     var x = 5;
// }
// console.log(x);

// ES6 method scoped function
// let x = 6;
// if (true){
//     let x = 5;
// }
// console.log(x);

// let x = 11;
// for (let x=1; x<=10; x++){
//     console.log(x);
// }
// console.log(x);

/* ES6 string concatenation*/

//old method
// var x= 25;
// var  y = 30;
// var sum = x+y;
// console.log("This is total " + sum + " End.");

//ES6 method 
// let x = 20;
// let  y = 40;
// let sum = x+y;
// console.log(`Total is  ${sum}.`);



/* ES6 function declearation */

//old method 
// function add ( x,y){
//     var sum = x + y;
//     console.log(sum);
// }
// add(20,30);


//ES6 method 
const add  = (x,y) =>{
    let sum = x + y ;
    console.log(sum);
}
add(20,30);