//42th class --- Guessing Game
// gusse a number form 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches random number; then show message won else lost 
// Run the game for 5 times 
//Show the number of wons and losts


let numOfWon = 0;
let numOfLost = 0;

for (let = i=1; i<=5; i++ ){

     let guessNumber = parseInt(prompt("Enter a number 1 to 5 : "));
    let randomNumber = Math.floor(Math.random()*5)+1;
    if (guessNumber == randomNumber){
        console.log("You have won");
        numOfWon++;
    }else{
        console.log("You have lost. Random number was " + randomNumber);
        numOfLost++;
    }
}
document.write  ("Total Number of Won = " + numOfWon + "<br>" );
document.write  ("Total Number of Lost = " + numOfLost + "<br>");
