//31th class task

// Ask for user input dynamically 
const userName = prompt("Enter your name: ");
const income = parseFloat(prompt("Enter your total income: "));


//Ask how many expense the user has 
const numberofExpenses = parseInt(prompt("How many expenses do you have? "));

//validate inputs to ensure  they are numbers
if (isNaN(income) || isNaN(numberofExpenses) || numberofExpenses < 0) {
    console.log("Please enter valid numbers for income and number of expenses.");
} else {
    let totalExpense = 0;

    //collect each expense dynamically
    for (let i = 1; i <= numberofExpenses; i++) {

        let expense = parseFloat(prompt(`Enter expense ${i}: `));
        if (isNaN(expense) || expense < 0) {
            console.log(` Invalid input for expense  ${i}. setting it to $0 `);
            expense = 0;
        }
        totalExpense += expense; //totalExpenses = totalExpenses + expense
    }

    //tax deduction 
    const tax = income * 0.01;

    //Net  income after the tax 
    const netIncome = income - tax;

    //Calculate remaining balance after expenses
    const balance = netIncome - totalExpense;

    // Saving (20% of the remaing balance)
    const savings = balance * 0.2;

    //Determine the financial health status
    let financialStatus = "";
    if (savings >= 1000) {
        financialStatus = "Excellent";
    } else if (savings >= 500) {
        financialStatus = "Good";
    } else if (savings >= 100) {
        financialStatus = "Fair";
    } else {
        financialStatus = "Critical!! Your savings are too low.";
    }


    //Check if expenses exceed net income
    let overspendingMessage = '';
    if (totalExpense > income) {
        overspendingMessage = "Warning: Your expenses exceed your income!";
    }

    console.log('Personal Budget Tracker App');
    console.log(`User : ${userName}`);
    console.log(`Total Income: $${income}`);
    console.log(`Total Expenses: $${totalExpense}`);
    console.log(`Tax Deducted (10%): $${tax}`);
    console.log(`Net Income after Tax: $${netIncome}`);
    console.log(`Remaining Balance after Expenses: $${balance}`);
    console.log(`Savings (20% of Remaining Balance): $${savings}`);

    console.log('Financial Status');
    if (overspendingMessage) {
        console.log(overspendingMessage);
    }
}


//Output the results to the console
// Personal Budget Tracker App
// index.js:60 User : Pronoy
// index.js:61 Total Income: $5000
// index.js:62 Total Expenses: $2800
// index.js:63 Tax Deducted (10%): $50
// index.js:64 Net Income after Tax: $4950
// index.js:65 Remaining Balance after Expenses: $2150
// index.js:66 Savings (20% of Remaining Balance): $430
// index.js:68 Financial Status