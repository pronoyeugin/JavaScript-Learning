

/* Keyboard Events
    keydown-- Pressing a key  can repeat
    keypress-- Pressing a key (may not support any browsers)
    keyup-- Releasing a key ( key, code, keycode, shiftkey, ctlkey, repeat)
*/  

console.clear();


const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", function(e) {
    if (e.repeat){
        alert("do not repeat");
    }
});

textarea.addEventListener("keypress", function() {
    console.log("keypress");
});

textarea.addEventListener("keyup", function(e){
    // console.log(e.key);
    // console.log(e.code);
    // console.log(e.keyCode);
    // console.log(e.shiftKey);
    if (e.shiftKey){
        console.log("shift + "  e.key);
    }
});