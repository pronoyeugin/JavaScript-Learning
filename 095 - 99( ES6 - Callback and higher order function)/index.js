/*  ES6 - Callback and higher order function */

function square (x) {

    console.log(`square of ${x} : ${x * x}  `);

}
function higherOrderFunction (num, callback){

    callback(num)

}
higherOrderFunction (6, square)

/* ব্যাখ্যা:

 => higherOrderFunction হলো Higher-Order Function, কারণ এটি প্যারামিটার হিসেবে callback নামে আরেকটি ফাংশন গ্রহণ করছে।

 => square হলো Callback Function, কারণ একে higherOrderFunction-এর ভেতর পাস করা হচ্ছে।

 => higherOrderFunction(6, square) কল করার সময় num হিসেবে 6 এবং callback হিসেবে square চলে যায়। ভেতরে callback(6) কল হওয়া মানেই প্রকৃতপক্ষে square(6) রান হওয়া।

 => আউটপুট: square of 6 : 36

 */




const taskOne = (callback) => {
    console.log("Task 1");
    callback();
}

const taskTwo  = (callback) => {
    setTimeout(() => {
        console.log("Task 2 Data Loading...")
        callback();
    }, 2000);
};

const taskThree = (callback) => {
    console.log("Task 3")
    callback();
}
const taskFour = (callback) => {
    console.log("Task 4")
    callback();
}
const taskFive = () => {
    console.log("Task 5")
}

taskOne ( () => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});

/* ব্যাখ্যা:

=> সিরিয়াল অনুযায়ী কাজ চালানো: একটি কাজ শেষ হলে যেন পরের কাজটি শুরু হয়, সেজন্য একের পর এক Callback কল করা হয়েছে।

=> taskTwo এর গুরুত্ব: এখানে setTimeout ব্যবহার করা হয়েছে (যা ২ সেকেন্ড সময় নেয়)। Callbacks ব্যবহার করার কারণে taskTwo-এর ২ সেকেন্ড অপেক্ষা  করার পর Task 3, Task 4, ও Task 5 ক্রমানুসারে রান হবে। 

 => Callback Hell: খেয়াল করুন, শেষে এসে কোডটি সিঁড়ির মতো বা ত্রিভুজের মতো ডানে বেঁকে গেছে। কলব্যাকের ভেতর আবার কলব্যাক দেওয়াকে জাভাস্ক্রিপ্টে  "Callback Hell" বা "Pyramid of Doom" বলা হয়। (বাস্তব প্রোজেক্টে এই জটিলতা এড়াতে Promise বা async/await ব্যবহার করা হয়)।

    আউটপুট (ক্রম অনুযায়ী):
    Task 1 (তাৎক্ষণিক)
    Task 2 Data Loading...(২ সেকেন্ড পজ)
    Task 3
    Task 4
    Task 5

*/



console.log("Hi..");
document.querySelector("button").addEventListener ('click', () => {
    console.log("Button is clicked");
} )
console.log("Bye..");


/* 
ব্যাখ্যা:
1.addEventListener হলো একটি Higher-Order Function
2.() => { console.log("Button is clicked"); } অ্যারো ফাংশনটি হলো Callback Function।
3. জাভাস্ক্রিপ্ট কিন্তু বাটনে ক্লিক হওয়া পর্যন্ত অপেক্ষা না করে সামনে এগিয়ে যায় (Asynchronous আচরণ)।
4. আউটপুট (সিরিয়াল অনুযায়ী):
 Hi..
 Bye..
 Button is clicked (ব্যবহারকারী বাটনে ক্লিক করলে তখন প্রিন্ট হবে)
*/


