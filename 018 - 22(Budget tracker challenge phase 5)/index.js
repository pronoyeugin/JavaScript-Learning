//22th class task


const userName = 'Pronoy Eugin';
const income = 5000;

//Multiple expenses
const rent = 4200;
const groceries = 600;
const transport = 200;
const entertainment = 300;

//Calculate the expenses
const totalExpenses  =  rent + groceries + transport + entertainment;


//Tax deduction (10% of income)
const tax = income * 0.10;

//Net income after tax
const netIncome = income - tax;

//Calculate remainning balance
const balance = netIncome - totalExpenses;

// Savings (20% of remainning balance)
const saving = balance * 0.2;


//determine the financial health based on savings

let finalStatus = '';

if (saving >= 1000){
    finalStatus = 'Excenlent! You are saving well!';
}
else if (saving >=500){
    finalStatus = 'Good! You are saving a decent amount.';
}
else if (saving >= 100){
    finalStatus = 'Average! You should try to save more.';
}
else{
    finalStatus = 'Needs Improvement! Consider cutting down expenses to save more.';
}

//Check if Expenses  exceeds income
let oversependingMessage = '';
if  (totalExpenses > income){
    oversependingMessage = 'Warning: Your expenses exceed your income!';
}

//Output the results
console.log('Personal Budget Tracker App');
console.log(`User Name : $${userName}`);
console.log (`Total Income : $${income}`);
console.log(`Tatal Expenses : $${totalExpenses}`);
console.log(`Tax Deducted : $${tax}`);
console.log(`Net Income After tax : $${netIncome}`);
console.log (`Remaining Balance : $${balance}`);
console.log(`Savings (20% of balance): $${saving}`);
console.log(finalStatus);


if (oversependingMessage){
    console.log(oversependingMessage);
}


