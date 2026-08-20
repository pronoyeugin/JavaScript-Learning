
/* clipboard Event 
    <meta>, <title>, <style>, <script>, <link>, <img>, <video>, <audio>, <div>, <span>, <p>, <h1>…<h6>
    <table>, <tr>, <td> ()

    copy - when the user copies content
    cut - when the user cuts content
    paste - when the user pastes content
*/  

console.clear();

const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener("copy", function (){
    // console.log("You have copied text");
    p.textContent = "You have copied text";
});

input.addEventListener("cut",function(){
    console.log("You have cut text");
    p.textContent = " You have cut text";
});

input.addEventListener("paste",function(){
    console.log("You have pasted text");
    p.textContent = " You have pasted text";
});                                                


