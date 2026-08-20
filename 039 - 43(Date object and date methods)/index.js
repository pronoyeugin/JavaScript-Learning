//43th class task ( Date object and date methods )

let date = new Date();
console.log(date); // current date and time

let year = date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month); // month is zero-based (0-11)

let currentDate = date.getDate();
console.log(currentDate); // day of the month (1-31)

let currentDay = date.getDay();
console.log(currentDay); // day of the week (0-6)

let currentHour = date.getHours();
console.log(currentHour); // current hour (0-23)

let currentMinutes = date.getMinutes();
console.log(currentMinutes); // current minutes (0-59)

let currentSeconds = date.getSeconds();
console.log(currentSeconds); // current seconds (0-59)