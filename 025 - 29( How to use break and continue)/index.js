//29th class task


//first condition check then output print
// for (let i=1; i<=100; i++){
//     if(i == 10){
//         break;
//     }
//     document.write(" " + i )
// }
// document.write("end");


//first output print then condition check
// for (let i=1; i<=100; i++){
//     document.write(" " + i )
//         if(i == 10){
//         break;
//     }
// }
// document.write("end");



for (let i=1; i<=100; i++){
    if(i % 2  != 0 ){
        continue;
    }
    document.write(" " + i )
}
document.write("end");



for (let i=1; i<=100; i++){
    if(i %2  == 0){
        continue;
    }
    document.write(" " + i )
}
document.write("end");