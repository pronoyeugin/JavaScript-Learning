/* downwards  1st way */
// const students = document.querySelector(".student-list");
// const studentA = students.querySelectorAll(".student-a");

/* downwards 2nd way */
// const studentList = document.querySelector(".student-list");
// const studentA = studentList.querySelector(".student-a");

/* Downwards children */
// const studentsList = document.querySelector(".student-list");
// //studentList.children
// const studentA = studentsList.children[0];



/* Upwards - parentElement*/
// const studentA = document.querySelector("li");
// const studentList = studentA.parentElement; 


/*sideways - nextElementSibling,  */
// const studentA = document.querySelector("li");
// const studentB = studentA.nextElementSibling;
// const studentC = studentB.nextElementSibling;

/* sideways - previousElementSibling */
// const studentC = document.querySelectorAll("li")[2];
// const studentB = studentC.previousElementSibling;

/*sideways - parentElement + children + index */
const studentA  = document.querySelector("li");
const studentList = studentA.parentElement;
const studentB = studentList.children[1];
const studentC = studentList.children[2];