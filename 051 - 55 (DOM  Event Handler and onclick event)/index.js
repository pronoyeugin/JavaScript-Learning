// example 1
function myMessage1(){
    alert("Hello 1");
}
function myMessage2(){
    alert("Hello 2");
}
function myMessage3(){
    alert("Hello 3");
}

//example 2
 let message = document.querySelector("#paraID");
function myMessage1(){
   message.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.";
}

function myMessage2(){
    message.innerHTML = " adipisicing elit. Voluptas, voluptate.";
}


// example 3
let mypicture = document.querySelector("#home");
function picture1(){
   mypicture.src = "images/home.jpg";
}
function picture2(){
   mypicture.src = "images/villa.jpg";
}