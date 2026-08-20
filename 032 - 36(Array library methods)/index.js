//36th class task

let names = ["Pronoy", "Eugin", "Khalko" ];
console.log(names);

// // shift oppsite of pop
// names.shift();
// console.log(names);

// //unshift oppsite of push
// names.unshift("Sabbir");
// console.log(names);

// //splice add element and remove element from array
// names.splice(1, 0, "Rafiq");
// console.log(names);

// //remove elements
// names.splice(2,1);
// console.log(names);

// //slice copy a portion of an array
// let  newArray = names.slice(1,2);
// console.log(newArray);

//sort method(  rearrange the array starting from the letter "A"  )
// let sortedName = names.sort();
// console.log(sortedName);

// //sort method(  rearrange the array starting from the letter "Z"  )
// let sortedName = names.sort();
// names.reverse();
// console.log(sortedName);


//Number sorting(1 to 45)
// let numbers = [20, 5, 25, 45, 1];
// numbers.sort(function(a,b){
//     return a-b;
// }); 
// console.log(numbers);


//Number sorting ( 45 to 1)
let numbers = [ 20,5,25, 45,1];
numbers.sort(function (a, b){
    return b-a;
});
console.log(numbers);


