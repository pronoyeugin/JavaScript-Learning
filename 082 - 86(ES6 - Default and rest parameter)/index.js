/*  ES6 default and rest parameter
       
*/

"use stirct"
// default parameter
function message(text = "Hello this defaut paramenter"){
    console.log(`${text}`);
}
message();// defaut parameter print
message("I love Js ES6");


//rest parameter
function sum (x,y, ...z){
    console.log(`x= ${x}, y= ${y}, z= ${z}`); //z= rest parameter
}
sum(10,50,5,15,20);