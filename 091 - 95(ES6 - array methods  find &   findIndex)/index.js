/*  ES6 - array methods | find() | findIndex()  */

var students = [

    {
        id :101,
        name : "Pornoy",
        cgpa :2.50 j
    },
    {
        id :102,
        name : "Eugin",
        cgpa :3.50 
    },
        {
        id :103,
        name : "Rocky",
        cgpa :4.00 
    },
        {
        id :104,
        name : "Rony",
        cgpa :2.85 
    },
  
]

// traditional function
function studentsName (){
    return students.filter(function(x){
        return x.cgpa > 3.00;
    }).map(function(y){
        return y.name;
    });
}
console.log(studentsName());



// Arrow function
const studentsName1 = () => students.filter((x) => x.cgpa > 3.00).map((y) => y.name);
console.log(studentsName1());