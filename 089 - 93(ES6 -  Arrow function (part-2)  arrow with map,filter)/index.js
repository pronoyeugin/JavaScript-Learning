/*  ES6 - Arrow function (part-2) | arrow with map,filter
*/

let students = [

    {
        id:101,
        name:"Pronoy",
        cgpa:2.75
    },
    {
        id:102,
        name:"Eugin",
        cgpa:3.75
    },
    {
        id:103,
        name:"Khalko",
        cgpa:3.25
    },
    {
        id:104,
        name:"Rohit",
        cgpa:2.50
    }
]

// traditional function with filter and map
function studentsNames (){
    return students.filter(function(x){
        return x.cgpa > 3.0;
    }).map(function(y){
        return y.name;
    });
}
    

console.log(studentsNames());


// Arrow function with filter and map
const strudentsNames1  = () => {
    return students.filter((x) => x.cgpa < 3.0).map((y) => y.name);
}

console.log(strudentsNames1());