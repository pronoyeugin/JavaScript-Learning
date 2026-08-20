for ( let i=0; i<3; i++){
        document.querySelectorAll(".my-button")[i].addEventListener("click", function(){

            let text = this.innerHTML;
            console.log(text);

            audioPlay(text);
            
            
    });

}

function audioPlay(text){
    switch(text){
                case  "a" :
                var audio = new Audio('audio/a.mp3');
                audio.play();

                case  "b" :
                var audio = new Audio('audio/b.mp3');
                audio.play();

                case  "c" :
                var audio = new Audio('audio/c.mp3');
                audio.play();
            }

}

