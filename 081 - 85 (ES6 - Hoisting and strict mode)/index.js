/*  Hoisting and strict mode
    

*/

//Smoth run 
// x=20;
// console.log(x);
// var x;


//ReferenceError
// x=20;
// console.log(x);
// let x;

//syntex error
// x=20;
// console.log(x);
// const x;


// x=20;
// if(true){
//     y = 10;
//     console.log(`y = ${y}`);
//     var y;
// }
// console.log(`x = ${x}`);
// var y;


/* strict mode  */

"use strict"
x=20;
console.log(`x =${x}`);