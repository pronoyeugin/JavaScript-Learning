//74th class task ( Budget tracker phase 11 - DOM manipulation)

/* Persoanl Budget Tracker Application */
/* Challenge Requiremnt 
    - Replace prompt() inputs with HTML input fields and buttons.
    - Display results dynamically on the webpage instead of using console.log().
    - Use event listeners for adding expenses and calculating budgets.
    - Allow users to update or reset their budget.
*/

const startBudgetElement =  document.getElementById('startBudget');
const calculateBudgetElement = document.getElementById('calculateBudget');
const startBudgetingElement = document.getElementById('startBudgeting');
const resetBudgetElement = document.getElementById('resetBudget');
const numberOfExpensesElement = document.getElementById('numberOfExpenses');
const userNameElement = document.getElementById('userName');
const incomeElement = document.getElementById('income');
const expensesInputDiv = document.getElementById('expensesInput');

// attached all event listeners 
startBudgetElement.addEventListener('click', getExpenses );
calculateBudgetElement.addEventListener('click', startCalculateBudget );
resetBudgetElement.addEventListener('click', resetBudget );
incomeElement.addEventListener('input', validateForm);
userNameElement.addEventListener('input', validateForm);
numberOfExpensesElement.addEventListener('input', validateForm);

function validateForm() {
    const userNameValid = userNameElement.value.trim().length > 0;
    const incomeValid = parseFloat(incomeElement.value) > 0;
    const numberOfExpensesValid = parseInt(numberOfExpensesElement.value) > 0;

    startBudgetElement.disabled = !(
        userNameValid &&
        incomeValid &&
        numberOfExpensesValid
    );

}

//disable calculate 
calculateBudgetElement.disabled = true;

//function to save budget data to localStorage
function saveBudgettoLocal(userBudget){
    localStorage.setItem("userBudget", JSON.stringify(userBudget));
}

//function to retrieve budget data to localstorage
function getBudgetFormLocal() {
    const saveBudget = localStorage.getItem('userBudget');
    return saveBudget ? JSON.parse(saveBudget) : null;
}

//function to clear budget data to localstorage
function clearBudgetFromLocal(){
    localStorage.removeItem('userBudget');
    alert('Budget data cleared from local storage');
}

// //Function to get user input 
// function getUserInput(promptMessage, isNumber = false) {
//     const userInput = prompt(promptMessage);
//     return isNumber ? parseFloat(userInput) : userInput;
// }

function getExpenses() {
    const numberOfExpenses = numberOfExpensesElement.value;
    expensesInputDiv.innerHTML = ''; // Clear previous inputs

    if (isNaN(numberOfExpenses) || numberOfExpenses <= 0) {
        alert("Please enter a valid number of expenses.");
        return;
    }

    for (let i = 0; i < numberOfExpenses; i++) {
       

        let expenseLabel = document.createElement('label');
        expenseLabel.textContent = `Enter expense ${i + 1}: `;

        let expenseInput = document.createElement('input');
        expenseInput.type = 'number';
        expenseInput.classList.add("expenseValue");

        expensesInputDiv.appendChild(expenseLabel);
        expensesInputDiv.appendChild(expenseInput);
        expensesInputDiv.appendChild(document.createElement('br'));   
    }

    document.getElementById('calculateBudget').style.display = 'inline-block';
    resetBudgetElement.style.display = 'inline-block';
   
}

function resetBudget() {
    clearBudgetFromLocal();
    document.getElementById('results').innerHTML = '';
}
// function resetBudget() {
//     clearBudgetFromLocal(); // Fixed function name from resetBudgetFromLocal
//     document.getElementById('results').innerHTML = ''; // Fixed missing variable reference
// }

function startCalculateBudget(){
    let userBudget = {
        userName: userNameElement.value,
        income: parseFloat(incomeElement.value),
        expenses: [],
        numberOfExpenses: parseInt(numberOfExpensesElement.value),
        totalExpenses: 0,
        tax: 0,
        netIncome: 0,
        balance: 0,
        savings: 0,
        financialStatus: ''
    };

    if (!userBudget.userName ||isNaN(userBudget.income) || userBudget.numberOfExpenses <= 0) {
        alert("Please enter a valid Name and Income  of expenses.");
        return;
    }

    let expenseInputs = document.getElementsByClassName("expenseValue");
    for (let i = 0; i < expenseInputs.length; i++) {

        let expense = parseFloat(expenseInputs[i].value);
        userBudget.expenses.push(isNaN(expense) || expense < 0 ? 0 : expense);
    }

    calculateBudget(userBudget);
    saveBudgettoLocal(userBudget);
    displayResults(userBudget);

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
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <h2>Budget Summary</h2>
        <p><strong>User:</strong> ${userBudget.userName}</p>
        <p><strong>Total Income:</strong> $${userBudget.income}</p>
        <p><strong>Total Expenses:</strong> $${userBudget.totalExpenses}</p>
        <p><strong>Tax Deduction (10%):</strong> $${userBudget.tax}</p>
        <p><strong>Net Income:</strong> $${userBudget.netIncome}</p>
        <p><strong>Balance After Expenses:</strong> $${userBudget.balance}</p>
        <p><strong>Savings (20% of balance):</strong> $${userBudget.savings}</p>
        <p><strong>Financial Status:</strong> ${userBudget.financialStatus}</p>  
    `;

    // const overspendingMessage = checkOverspending(userBudget);
    // if (overspendingMessage) {
    //     console.warn(overspendingMessage);
    // }

    // console.log('Expense Breakdown:');
    // for (let index = 0; index < userBudget.expenses.length; index++) {
    //     console.log(`Expense ${index + 1}: $${userBudget.expenses[index]}`);
    // }
}

// function checkOverspending(userBudget) {
//     return userBudget.totalExpenses > userBudget.income 
//     ? 'Warning: Your expenses exceed your income.' : '' ;
// }

//functions to calculate financial details
function calculateBudget(userBudget) {
    // Get user input for expenses and calculate total expenses
    // userBudget.expenses = getExpenses(getUserInput('How many different expenses do you have? ', true));

    // Calculate total expenses from the expenses array
    userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
    // Tax deduction (10% of income)
    userBudget.tax = calculateTax(userBudget.income); 
    // Net income after tax deduction
    userBudget.netIncome = calculateNetincome(userBudget.income, userBudget.tax);
    // Balance after deducting expenses from net income
    userBudget.balance = calculateBalance(
        userBudget.netIncome,
        userBudget.totalExpenses
    );

    // Savings (20% of balance)
    userBudget.savings = calculateSavings(userBudget.balance, 0.2);
    // Determine financial status based on savings
    userBudget.financialStatus = determineFinancialStatus(userBudget.savings);

    // saveBudgettoLocal(userBudget);

}


function runBudgetTracker() {
    const savedBudget = getBudgetFormLocal();
    if (savedBudget) {
        displayResults(savedBudget);
    }   
}

window.addEventListener('load', runBudgetTracker);