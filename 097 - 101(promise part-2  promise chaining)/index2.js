
console.log("Welcome");

const taskOne = () =>{

    return new Promise ((resolve, reject) => {
        resolve('task 1 is compeletd');
    })
}

const taskTwo = () =>{

    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve('task 2 is compeletd');
        },2000)
    })
}

const taskThree = () =>{

    return new Promise ((resolve, reject) => {
        reject('task 3 is notcompeletd');
    })
}

const taskFour = () =>{

    return new Promise ((resolve, reject) => {
        resolve('task 4 is compeletd');
    })
}


taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res) )
.then(taskThree)
.then((res) => console.log(res))
.then(taskFour)
.then((res) => console.log(res))
.catch (err => console.log(err))
console.log("Bye");