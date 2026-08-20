//35th class task


//array 
// let num = [ 10,20,30,40,50];
// console.log (num [0]);
// console.log (num [1]);
// console.log (num [2]);
// console.log (num [3]);
// console.log (num [4]);

//loop array 
// let num = [ 10,20,30,40,50];

// let  sum = 0 ; //sum variable
// for (let i = 0; i<5; i++)
// {
//     console.log (num [i]); //print all array value
//     sum =  sum + num [i]; //sum calculation
// }
// console.log("Total Sum :" + sum);   //print sum value



// User input array
let num = new Array ();
for (let i = 0; i<5; i++) {
    num [i] = parseInt(prompt("Enter value:"));
}
let sum = 0;
for (let i = 0; i<5; i++) {
    console.log(num[i]); 
     sum = sum + num[i]; 
}
console.log("Total : " + sum); 