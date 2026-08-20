/*  ES6 - modules and class */

/* import method 1 */
// import { text} from './myModul.js';

/* import method 2 */
// import { text, setText } from './myModul.js';
// console.log(text);
// (setText("Good bye ES6"))
// console.log(text);


/* import method 3 */
// import { message } from './myModul.js';
// console.log(message);


/* import method 4 */
// import { text as  message } from './myModul.js';
// console.log(message);


/* Class create */
class Student1 {
    //create constructor 
    constructor(id, name){
        this.id = id;
        this.name = name; 
    }
}

/* object create */
let s1 = new Student1 (101, "Pronoy");
console.log(s1.id);
console.log(s1.name);


/*add set method  */
class Student2 {
    //create constructor 
    constructor(id, name){
        this.id = id;
        this.name = name; 
    }

    set studentName2(name){
        this.name = name;
    }
}
s1.studentName2 = "Pronoy Eugin Khalko";
console.log(s1.name);


/*add get method  */
class Student3 {
    //create constructor 
    constructor(id, name){
        this.id = id;
        this.name = name; 
    }

    set studentName3(name){
        this.name = name;
    }

    get studentInfo3 (){
        return this.id + " " + this.name;
    }
}
let s3 = new Student3 (101, "Rohit");
console.log(s3.studentInfo3);