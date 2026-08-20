//45th class task ( Budget tracker phase 9 - add function )

/* Persoanl Budget Tracker Application */
/* Challenge Requiremnt 
Use an object (userBudget) to store :
- UserName
- Income
- Expenses (array to store multiple expenses)
- Tax
- Net Income
- Balance
- Savings
- Financial Status
2. Modify functions to work with the userBudget object .
*/


//Function to get user input 
function getUserInput(promptMessage, isNumber = false) {
    const userInput = prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
    const expenses = [];
    for (let i = 0; i < numberOfExpenses; i++) {
        // Updated to matching function name
        let expense = getUserInput(`Enter expense ${i + 1}: `, true);
        if (isNaN(expense) || expense < 0) {
            console.log(`Invalid input for expense ${i + 1}, setting it to $0`);
            expense = 0;
        }
        expenses.push(expense);
    }
    return expenses; 
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

function displayResults(userBudget) {
    console.log('--- Personal Budget Tracker ---');
    console.log(`User: ${userBudget.userName}`);
    console.log(`Total Income: $${userBudget.income}`);
    console.log(`Total Expenses: $${userBudget.totalExpenses}`);
    console.log(`Tax Deduction: $${userBudget.tax}`);
    console.log(`Net Income: $${userBudget.netIncome}`);
    console.log(`Balance After Expenses: $${userBudget.balance}`);
    console.log(`Savings (20% of balance): $${userBudget.savings}`);
    console.log(`Financial Status: ${userBudget.financialStatus}`);
    
    const overspendingMessage = checkOverspending(userBudget);
    if (overspendingMessage) {
        console.warn(overspendingMessage);
    }

    console.log('Expense Breakdown:');
    for (let index = 0; index < userBudget.expenses.length; index++) {
        console.log(`Expense ${index + 1}: $${userBudget.expenses[index]}`);
    }
}

function checkOverspending(userBudget) {
    return userBudget.totalExpenses > userBudget.income 
    ? 'Warning: Your expenses exceed your income.' : '' ;
}

//functions to calculate financial details
function calculateBudget(userBudget) {
    // Get user input for expenses and calculate total expenses
    userBudget.expenses = getExpenses(getUserInput('How many different expenses do you have? ', true));
    // Calculate total expenses from the expenses array
    userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
    // Tax deduction (10% of income)
    userBudget.tax = calculateTax(userBudget.income); 
    // Net income after tax deduction
    userBudget.netIncome = calculateNetincome(userBudget.income, userBudget.tax);
    // Balance after deducting expenses from net income
    userBudget.balance = calculateBalance(userBudget.netIncome, userBudget.totalExpenses);
    // Savings (20% of balance)
    userBudget.savings = calculateSavings(userBudget.balance, 0.2);
    // Determine financial status based on savings
    userBudget.financialStatus = determineFinancialStatus(userBudget.savings);

}

//main function to run the budget tracker
function runBudgetTracker() {

    let userBudget = {
        userName: '',
        income: 0,
        expenses: [],
        totalExpenses: 0,
        tax: 0,
        netIncome: 0,
        balance: 0,
        savings: 0,
        financialStatus: ''
    };
    
    userBudget.userName = getUserInput('Enter your name: ');
    userBudget.income = getUserInput('Enter your total income: ', true);

    // ✅ Fixed validation
    if (isNaN(userBudget.income) || userBudget.income < 0) {
        console.log("Invalid Input. Please enter a valid income number.");
        return;
    }

    calculateBudget(userBudget);
    displayResults(userBudget);
}

runBudgetTracker();
