
for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        let text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);                                                                                                                                                             l;/
    });
}


//keypress
document.addEventListener("keypress", function(event){
    let text = event.key;
    audioPlay(text);
    playAnimation(text);
});



// //Add audio
   function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio('audio/a.mp3');
            audio.play();
            break;
            
        case "b":
            var audio = new Audio('audio/b.mp3');
            audio.play();
            break;
            
        case "c":
            var audio = new Audio('audio/c.mp3');
            audio.play();
            break;
    }
}


// //add & remove  animation
function playAnimation(text){

    let selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    }, 1000 );
}

 
//exmaple - 02
document.addEventListener("keypress",function(event){

    let text = event.key;
    document.querySelector("p").innerHTML = "You have pressed " +  text;
});



// example -03 count text number
let count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    let text = event.key;
    document.querySelector("p").innerHTML = "You have pressed " +  count;
});