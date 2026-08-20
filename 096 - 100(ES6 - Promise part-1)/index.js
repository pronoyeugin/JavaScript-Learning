/*  ES6 - Promise part-2 */

// how to create promise  - pending, resolve, reject
const promise1 = new Promise ((resolve, reject)   => {

    let completedPromise = true;
    if(completedPromise){
        resolve("Completed promise 1 ")
    }else{
        reject (new Error ("Not completed promise 1"))
    }

});

promise1.then((res) => {
    console.log(res);
})
.catch(err => {
    console.log(err.message);
});



const promise2 = new Promise ((resolve, reject) => {

  resolve("Completed promise 2 ")

});

promise2.then((res) => console.log(res));



// // Promise all ()
Promise.all([promise1, promise2])
.then((res) => console.log(res))



//Promise race 
const promise3 = new Promise ((resolve, reject)   => {

    setTimeout(() =>{
        resolve("Compelete promise 3")
    }, 2000)

});

const promise4 = new Promise ((resolve, reject)   => {

    setTimeout(() =>{
            resolve("Compelete promise 4")
        }, 1000)

});

Promise.race([promise3, promise4]).then((res) => console.log(res));
