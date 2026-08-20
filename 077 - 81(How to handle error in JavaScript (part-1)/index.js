/*  Error Handling 
    try, catch, finally, throw

    Syntex error not handle (try, catch, finally)
*/;;



//example 
alert("Hi Everyone");
alert("Bye Everyone");


alert("Hi Everyone");
alert("x");
alert("Bye Everyone");

//main code inside try block
try{
    //code test
    alert("Hi Everyone");
    alert("x");
    alert("Bye Everyone");

// error hander inside catch block
}catch(error404){
    //handle error
    alert("error404");
    console.log("error404.name");  //error name 
    console.log("error404.message"); // error message

//must work if have error or not 
}finally{
    alert("Bye Everyone");
}
