/*  ES6 - String methods | startsWith, endsWith, includes */
// all these methods return a boolean value (true or false)
// all these methods are case sensitive



// startsWith(searchString, position) - checks if a string starts with a specified string/character
const message = "Today is a beautiful day";
console.log(message.startsWith("Today", 0));



// endsWith(searchString, length) - checks if a string ends with a specified string/character
const message1 = "Today is a beautiful day";
console.log(message1.endsWith("day", 10));



// includes(searchString, position) - checks if a string contains a specified string/character
const message2 = "Today is a beautiful day";
console.log(message2.includes("beautiful"));

