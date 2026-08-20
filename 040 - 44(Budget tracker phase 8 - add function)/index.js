//44th class task ( Budget tracker phase 8 - add function )

/* Persoanl Budget Tracker Application */
/* Challenge Requiremnt 
Use multiple small function for:
- Getttinng user input (text and number)
- Handling expense (geeting expense, calculating total expenses)
- Performaing financial calcilations (tax, net income, balance, savings)
- Determining financial status 
- Displaying results in a structured format
*/


//Function to get user input 
function getysUserInput(promptMessage, isNumber = false) {
    const userInput = prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
    const expenses = [];
    for (let i = 0; i < numberOfExpenses; i++) {
        let expense = getysUserInput(`Enter expense ${i + 1}: `, true);
        if (isNaN(expense) || expense < 0) {
            console.log(`Invalid input for expense ${i + 1}, setting it to $0`);
            expense = 0;
        }
        expenses.push(expense);
    }
    return expenses; // Fixed: Now returns the array
}

function calculateTotalExpenses(expenses) {
    let totalExpenses = 0;
    // Fixed: Removed space in .length
    for (let index = 0; index < expenses.length; index++) {
        totalExpenses += expenses[index];
    }
    return totalExpenses;
}

function calculateTax(income, taxrate = 0.1) {
    return income * taxrate;
}

function calculateNetincome(income, tax) {
    return income - tax;
}

function calculateBalance(netIncome, totalExpenses) {
    return netIncome - totalExpenses;
}

function calculateSavings(balance, savingPercentage = 0.2) {
    return balance * savingPercentage;
}

function determineFinancialStatus(savings) {
    let financialStatus = "";
    // Fixed: Changed 'balance' to 'savings' to match parameter
    if (savings > 1000) {
        financialStatus = "Excellent";
    } else if (savings >= 500) {
        financialStatus = "Good";
    } else if (savings >= 100) {
        financialStatus = "Needs Improvement";
    } else {
        financialStatus = "Critical";
    }
    return financialStatus;
}

function displayResults(username, income, totalExpenses, tax, netIncome, balance, savings, financialStatus) {
    console.log('--- Personal Budget Tracker ---');
    console.log(`User: ${username}`);
    console.log(`Total Income: $${income}`);
    console.log(`Total Expenses: $${totalExpenses}`);
    console.log(`Tax Deduction: $${tax}`);
    console.log(`Net Income: $${netIncome}`);
    console.log(`Balance After Expenses: $${balance}`);
    console.log(`Savings (20% of balance): $${savings}`);
    console.log(`Financial Status: ${financialStatus}`);
    
    const overspendingMessage = checkOverspending(income, totalExpenses);
    if (overspendingMessage) {
        console.warn(overspendingMessage);
    }

    console.log('Expense Breakdown:');
    for (let index = 0; index < expenses.length; index++) {
        console.log(`Expense ${index + 1}: $${expenses[index]}`);
    }
}

function checkOverspending(income, totalExpenses) {
    return totalExpenses > income 
    ? 'Warning: Your expenses exceed your income. Consider reducing your spending.' : '' ;
}

function runBudgetTracker() {
    const userName = getysUserInput("Enter your name: ");
    const income = getysUserInput("Enter your total income: ", true);
    const numberOfExpenses = getysUserInput("How many different expenses do you have? ", true);

    if (isNaN(income) || isNaN(numberOfExpenses) || income < 0 || numberOfExpenses < 0) {
        console.log("Invalid Input. Please enter valid numbers");
        return;
    } else {
        const expenses = getExpenses(numberOfExpenses);
        const totalExpenses = calculateTotalExpenses(expenses);
        
        // Fixed: Removed undefined 'taxrate' variable
        const tax = calculateTax(income); 

        const netIncome = calculateNetincome(income, tax);
        const balance = calculateBalance(netIncome, totalExpenses);
        const savings = calculateSavings(balance, 0.2);
        let financialStatus = determineFinancialStatus(savings);

        displayResults(userName, income, totalExpenses, tax, netIncome, balance, savings, financialStatus);
    }
}

runBudgetTracker();