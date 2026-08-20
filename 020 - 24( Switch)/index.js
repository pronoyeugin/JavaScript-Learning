//24th class task


//Digit Spelling
//0 -Zero - One ...............9 - Nine 10 - Not A valid Digit


//switch, case, break, default
// let digit = prompt("Enter any Digit : " );
// if (digit == 0)
// console.log("Zero");
// else if (digit == 1)
// console.log("One"); 
// else if (digit == 2)
// console.log("Two");
// else if (digit == 3)
// console.log("Three");
// else if (digit == 4)
// console.log("Four");
// else if (digit == 5)
// console.log("Five");
// else if (digit == 6)
// console.log("Six");
// else if (digit == 7)
// console.log("Seven");
// else if (digit == 8)
// console.log("Eight");
// else if (digit == 9)
// console.log("Nine");
// else
// console.log("Not A valid Digit");

//switch, case, break, default
// let digit = prompt("Enter any Digit : " );
// switch(digit){
//     case '0':
//      console.log("Zero");
//      break;
//     case '1':
//         console.log("One");
//         break;
//     case '2':
//         console.log("Two");
//         break;
//     case '3':
//         console.log("Three"); 
//         break ;
//     case '4':
//         console.log("Four");
//         break;
//     case '5':
//         console.log("Five");
//         break;
//     case '6':
//         console.log("Six");
//         break;
//     case '7':
//         console.log("Seven");
//         break;
//     case '8':
//         console.log("Eight");
//         break;
//     case '9':
//         console.log("Nine");
//         break;
//     default:
//         console.log("Not A valid Digit");
     
// }


//Task 5 Input a Letter and check it is vowel or consonant using switch case
let letter  = prompt ("Enter any letter ; ");
letter =letter.toLocaleLowerCase();
switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    console.log("Vowel");
    break;
    default:
        console.log("Consonant");

}