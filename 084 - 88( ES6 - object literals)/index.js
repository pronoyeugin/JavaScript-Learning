/*  ES6 - object literals
        
*/

//old method 
function  studentInfo1 (name, age ){

    return {
        name:name,
        age:age
    }
}
console.log(studentInfo1("Pronoy", 29));

//ES6 method 
function  studentInfo2 (name, age ){

    return {
        name,
        age
    }
}
console.log(studentInfo2("Pronoy", 29));

//consize old  method
let message = {
    body : function (){
        return `Hello This is object function1 `
    }
}
console.log(message.body());


// consize ES6 method
 let message2 = {
    body (){
        return `Hello This is object function2`
    }
 }
 console.log(message2.body());


  let message3 = {
    'body name'(){
        return `Hello This is object function3`
    }
 }
 console.log(message3['body name']());