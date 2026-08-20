//37th class task

//Create a function call highestScore that will 
// Receive a 1 dimensional array called scores return the highest score
// Things required - Variable, If-else, Loop, Function, Array.


//Task-8

function highestScore (scores) {
    let max = scores [0];
    for (let x=1; x<scores.length; x++){
        if (max < scores [x]){
            max = scores [x];
        }
    }
    return max;

}

let scores =  [21, 28, 1, 30, 90];
let maxScore = highestScore(scores);
console.log(maxScore);
