//23th class task

let number = Number(prompt("Enter a number"));
// if (number >0){
//     console.log("Positive");
// }
// else{
//     console.log("Negative");
// }



// let result = number > 0 ? "Positive" : "Negative"
// console.log(result);

// number >0 ? console.log("Positve") : console.log("Negative");

// if (number > 0){
//     console.log("Positive");
// }
// else if (number<0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero");  
// }

let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);