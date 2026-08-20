//27th class task

// using for loop to print 1-100
// for (let i = 1; i<=100; i=i+1){
//     document.write(" "+i);

// }



//using while loop to print 1-100
// let i = 1;
// while(i <= 100){
//     document.write(" "+ i);
//     i = i + 1;
// }


//1+2+3+4+......10 (total)
// let i = 1;
// let sum = 0;

// while (i <= 10){
//     sum = sum + i;
//     i = i + 1;
// }
// document.write(sum);
// document.write("<h1> end </h1>");



//2+4+6+8+......10 (total)
// let i = 2;
// let sum = 0;

// while (i <= 100){
//     sum = sum + i;
//     i = i + 2;
// }
// document.write(sum);
// document.write("<h1> end </h1>");



//Task-06: Write  a program  that will print sum of all the numbers 
// that are divisiable by 3 and 5 from 1-100

let i = 1;
let sum = 0;

while (i <= 100){

    if (i % 3== 0 && i % 5 == 0){
        document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}
document.write(" = " + sum);
document.write("<h1> end </h1>");
