//40th class task
//How to create an Object 
// How to print the value of an object 
//adding a constractor 


// Student Details

//Single value object 
// let name= "Pronoy";
// let age = 27;
// let cgpa = 3.50;
// let lang = ["Bangla", "English"];
// console.log(name);




//Multiple value object 
// let student1 = {
//     name : "Pronoy Eugin",
//     age : 27,
//     cgpa: 3.50,
//     lang : ["Bangla", "English"],
// }

// let student2 = {
//     name : "Prity Jenevy",
//     age : 20,
//     cgpa: 3.50,
//     lang : ["Bangla", "English"],
// }

// let student3 = {
//     name : "Jony Paul",
//     age : 25,
//     cgpa: 3.50,
//     lang : ["Bangla", "English"],
// }
// let student4 = {
//     name : "Subroto",
//     age : 28,
//     cgpa: 3.50,
//     lang : ["Bangla", "English"],
// }

// console.log(student2.name);


// adding constractor 
// function Student(name, age , cgpa, lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
// }
// let student1 = new Student ("Pronoy Eugin", 27, 3.50, ["Bangla", "English"]);
// let student2 = new Student ("Prity Jenevy", 20, 3.00, ["Bangla", "English"]);
// let student3 = new Student ("Jony Paul", 25, 2.50, ["Bangla", "English"]);
// let student4 = new Student ("Subroto", 28, 2.80, ["Bangla", "English"]);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);
// console.log(student1.lang);


//adding Functions inside a  constrastor 
function Student(name, age , cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

let student1 = new Student ("Pronoy Eugin", 27, 3.50, ["Bangla", "English"]);
let student2 = new Student ("Prity Jenevy", 20, 3.00, ["Bangla", "English"]);
let student3 = new Student ("Jony Paul", 25, 2.50, ["Bangla", "English"]);
let student4 = new Student ("Subroto", 28, 2.80, ["Bangla", "English"]);

student1.display();
student2.display();
student3.display();
student3.display();
