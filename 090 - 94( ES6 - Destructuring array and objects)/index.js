/*  ES6 - Destructuring array and objects 

*/

// array destructur
let numbers =[10,20,30,40,50];
let [num1,num2,num3,num4,num5] = numbers;
console.log(num1,num2);

//Add spread operator
let [num1,num2, ...z] = numbers;
console.log(z);


// swap variables 
let a = 10, b=20;
[a,b] = [b,a];
console.log(a,b);


// object destructure
const studentInfo = {

    id:101,
    name:"pronoy",
    fullName:"pronoy Eugin Khalko",
    gpa:3.50,
    languages:{
        native:"Bangla",
        secondary:"English"
    }
}
const{id, fullName,gpa} = studentInfo;
console.log(id, fullName, gpa);



// nested object destructure
const studentInfo1 = {

    id:101,
    name:"pronoy",
    fullName:"pronoy Eugin Khalko",
    gpa:3.50,
    languages:{
        native:"Bangla",
        secondary:"English"
    }
}
const{id, fullName, languages} = studentInfo1;
console.log(languages.native);




//destructure function parameter
const studentInfo2 = ({id, name}) => {
    console.log(`${id}, ${name}`);
}

const student = {
    id: 102,
    name: "Pronoy"
}
studentInfo2(student);