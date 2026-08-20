//16th class task


const userName = 'Pronoy Eugin';
const income = 5000;

//Multiple Expenses
let rent = 1200;
let groceries = 600;
let transport = 200;
let entertainment = 300;

//Calculate Total Expenses
let totalExpenses = rent +  groceries + transport + entertainment;

//Tax deductions (10% of income)
let tax = income * 0.10;

// Net income after the tax
let netIncome = income -tax;

//Calculate Balance
let balance = netIncome - totalExpenses;


//Saving ( 20% of remaining balance)
let saving = balance *0.20;



console.log('Personal Budget Tracker App');
console.log('User :' + userName);
console.log('Total Income : $' + income);
console.log('Total Expenses : $' + totalExpenses);
console.log('Tax Deducted : $' + tax );
console.log ('Net Income  After tax : $' + netIncome);
console.log ('Remaining Balance : $' + balance);
console.log ('Savings (20% of balance) : $' + saving);