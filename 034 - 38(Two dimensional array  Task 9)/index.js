//38th class task
// Two Dimensinal Array- Task 2 dimensinal array
// Create A function  called highestRunScore that will 
// Receive a 2 dimensinal array called playersinfo
// Based on highest score, return the name of the palyer

// Things  required =====
// Variable, If-else, Loop, Funtion, Array


function highestRunScorer(playersInfo) {
    

    let highestScorer = playersInfo[0][0]; 
    let highestScore = playersInfo[0][1];  

    for (let x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]){
            highestScore = playersInfo [x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}

let playersInfo =[
    ["Asraful", 95],
    ["Mizan", 25],
    ["Rakib", 45],
    ["Rahim", 105],
    ["Rokey", 65],
];
let name = highestRunScorer(playersInfo);
console.log("Highest Scorer: " + name);






