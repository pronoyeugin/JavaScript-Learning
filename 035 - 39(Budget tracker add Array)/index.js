/* 39th class task ====   Budget tracker add Array */

/* Challenge requirement:
 Ask the user How many expenses they have, then store each expense inside an  array.
 use a loop to process the array and calculate the total expenses */

/* 
Personal Budget tracker 
User Alex 
Total Income : $5000
Total Expenses : $2200
Tax Deducted(10%):$500
Net Income After Tax : $4500
Remainning Balance: $2300
Savings(20% of balance): $450
Needs Improvement. Consider reducing  expenses  
*/

// Ask for user imnput dynamically 
const userName  = prompt('Enter your name : ' );
const income = parseInt(prompt(' Enter your total income :')); 

//Ask how many expenses the user has 
const numberOfExpenses = parseInt(prompt(' How many expenses do you have ? '));

// Validate inputes to ensure they are numbers
if (
    isNaN (income) ||
    isNaN(numberOfExpenses) ||
    income<= 0 ||
    numberOfExpenses < 0
){
    console.log('Invalid input. Please enter valid numbers. ');
} else {
    let totalExpenses = 0;

    // Collect expenses daynamically 
    for (let i =1; i <= numberOfExpenses; i++){
        const expenses = [];
        let expense = parseFloat (prompt (` Enter expense ${i}:`));

        if (isNaN (expense) || expense < 0){
            console.log(`Invalid input for expenses ${i}, setting it it $0 `);
            expenses = 0 ;
        }
        expenses.push (expense);

        //calculate total expenses using the array 
        for (let i=0; i<expenses.length; i++){
            totalExpenses += expenses [i];
        }
    }

    // Tax deduction(10% of income)
    const tax = income * 0.1;

    //Net incoem after the tax 
    const netIncome = income - tax ;




}
