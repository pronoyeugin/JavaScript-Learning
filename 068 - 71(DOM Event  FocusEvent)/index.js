
/* focusEvent Object
    <meta>, <title>, <style>, <script>, <link>, <img>, <video>, <audio>, <div>, <span>, <p>, <h1>…<h6>
    <table>, <tr>, <td> ()

    focus - when an element receives focus
    blur - when an element loses focus
    focusin - when an element or any of its descendants receives focus
    focusout - when an element or any of its descendants loses focus
    
*/  

console.clear();

const input = document.querySelector('input');

input.addEventListener("blur", function(e){
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
    // console.log("blur is occured");
    // input.style.backgroundColor = "transparent";
    // input.style.padding = "0";
})

input.addEventListener("focus", function(){
    console.log("focus is occured");
    input.style.backgroundColor = "yellow";
    input.style.padding = "10px";
});

input.addEventListener("focusin", function(){
    console.log("focusin is occured");
});

input.addEventListener("focusout", function(){
    console.log("focusout is occured");
});  
