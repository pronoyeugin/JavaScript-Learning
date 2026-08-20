/*  ES6 - Synchronous vs Asynchronous 

    => JavaScript by Default Synchronous

*/

// Synchronous and  Aynchronous Programming

const taskOne = () => {
    console.log("Task 1")
}

const taskTwo  = () => {
    setTimeout(dataLoading, 2000);
}

const dataLoading  = () => {
    console.log("Task 2 Data Loading...")
}

const taskThree = () => {
    console.log("Task 3")
}
const taskFour = () => {
    console.log("Task 4")
}
const taskFive = () => {
    console.log("Task 5")
}

taskOne ();
taskTwo ();
taskThree ();
taskFour ();
taskFive ();


