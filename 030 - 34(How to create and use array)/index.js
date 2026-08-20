//34th class task
//Array - is an object ; collection of variables

// let name1, name2, mame3, name4, name5;
// name1 = "Prnoy"
// name2 = "Eugin"
// name3 = "Khalko"
// name4 = "Jony"
// name5 = "Paul"
// // console.log(name1);

// let names = ["Pronoy", "Eugin", "khalko", "Jony", "Paul"];
// console.log(names.length);
// console.log(names);
// console.log(names[3]);

// let names = new Array (5);
// names[0] = "Pronoy"
// names[1] = "Eugin"
// names[2] = "Khalko"
// names[3] = "Jony"
// names[4] = "Paul"
// // console.log(names[1]);
// // console.log(names[3]);
// console.log(names.length);


//Array Library functions
let name1, name2, mame3, name4, name5;
name1 = "Prnoy"
name2 = "Eugin"
name3 = "Khalko"
name4 = "Jony"
name5 = "Paul"

let names = ["Pronoy", "Eugin", "khalko", "Jony", "Paul"];
console.log(names);
console.log(names.length);
//add element at last
names.push("Tawhid");
names.push("Rony");
names.push("Riyad");
console.log(names);
console.log(names.length);

//remove last element
names.pop();
console.log (names);

//add element at first
names.unshift("Sakib");
console.log(names);

//remove first element
names.shift();
console.log(names);

//concatination of two arrays
let country1 = ["Bangladesh", "Maldives", "Sri Lanka"];
let country2 = ["India", "Pakistan", "Nepal"];
let countries = country1.concat(country2);
console.log(countries);
