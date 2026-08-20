/*  ES6 - for of and for in loop */


const names = ["s1", "s2", "s3", "s4", "s5"];

// for of loop
for (const name of names) {
//   console.log(name);
}

// for in loop
let students = {
    ID : 101,
    name: "Pronoy",
    cgpa: 3.5
}

for (let x  in students){
    console.log(`${x}: ${students[x]}`);
}