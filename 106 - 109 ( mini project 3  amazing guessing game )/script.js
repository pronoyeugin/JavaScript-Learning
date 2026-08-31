//initializing some value
let totalAttemps = 5;
let attempts = 0;
let totalWons = 0 ;
let totalLost = 0;



// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.querySelector("#guessingNumber");
const checkButton = document.querySelector("#check");
const resultText = document.querySelector(".resultText");
const WonsLostMessage = document.createElement("p");
const remainingAttempts = document.querySelector(".remainingAttempts");


form.addEventListener("submit", function(event){
    event.preventDefault();
    
    attempts++;
    if(attempts === 5 ) {
        guessingNumber.disabled =true;
        checkButton.disbaled = true;
    }
    if(attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
         checkResult (guessNumber);
         remainingAttempts.innerHTML = `Remaining attempts: ${totalAttemps-attempts}`;
    }
    guessingNumber.value = " ";
});

function checkResult (guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber === randomNumber){
         resultText.innerHTML = `You have Won`;
         totalWons++;
    }else{
        resultText.innerHTML = `You have lost random number was: ${randomNumber}`;
        totalLost++;
    }

    WonsLostMessage.innerHTML= `Won: ${totalWons}, Lost:${totalLost}`;
    WonsLostMessage.classList.add("large-text");
    cardBody.appendChild(WonsLostMessage);
   
}


function getRandomNumber (limit) {
    return Math.floor(Math.random() * limit) + 1;
}

