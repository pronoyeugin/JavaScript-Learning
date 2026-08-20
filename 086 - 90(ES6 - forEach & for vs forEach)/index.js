/*  ES6 - forEach | for vs forEach */

// for loop
var numbers = [10,20,30,40,50];

for (var x=0; x <numbers.length; x++){
    
    console.log(numbers[x]);
}


//for each loop old method
var numbers = [10,20,30,40,50];
numbers.forEach(myFunction)

function myFunction(value){

    console.log(value);

}

//for each loop ES6 method
var numbers = [10,20,30,40,50];
numbers.forEach(function(value) {
    console.log(value);
});


//for each loop critical method
var numbers = [10,20,30,40,50];
var squreNumbers = [];

numbers.forEach(function(value) {
    squreNumbers.push(value * value);
});

console.log(squreNumbers);


//for each loop critical method
var numbers = [10,20,30,40,50];

numbers.forEach(function(value,index,array) {
    array[index] = value+5;
    
});

console.log(numbers);

