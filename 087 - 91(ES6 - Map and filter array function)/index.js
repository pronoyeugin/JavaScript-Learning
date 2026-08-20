/*  ES6 - map and filter array function */


//map function
var numbers = [ 2,3,4,5];
var squereNumbers = numbers.map(function(x){

    return x * x;
});
console.log(squereNumbers);

//filter function

var numbers = [ 22,31,4,5,35,26,78];
var filteredNumbers = numbers.filter(function(x){
    return x > 10;
});
console.log(filteredNumbers);

