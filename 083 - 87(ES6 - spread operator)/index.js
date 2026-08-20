/*  ES6 - spread operator
    
*/

// function addNumbers (x,y,z){
//     return x + y + z;
// }
// let numbers = [1, 2, 3]
// console.log(addNumbers(numbers[0], numbers[1], numbers[2]));


function addNumbers (x,y,z){
    return x + y + z;
}
let numbers = [1, 2, 3]
// console.log(addNumbers(...numbers));


let newArry = [5,6,7, ...numbers]
console.log(newArry);


let number1 = [1,2,3]
let number2 = [4,5,6]
let numbers = [...number1, ...number2];
console.log(numbers);


let p1 = {
    name : "Pronoy Eugin",
    age : 29
}

let p2 = {
    nationality : "Bangladeshi",
    occupation : "Developer"
}

let p =  {...p1, ...p2}
console.log(p);