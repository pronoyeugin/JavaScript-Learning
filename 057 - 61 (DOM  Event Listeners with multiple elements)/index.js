/* 1st method */
document.querySelectorAll(".my-button")[0].addEventListener("click", function(){

    let text = this.innerHTML;
    document.querySelector("h1").innerHTML = text +  " is clicked";

});

document.querySelectorAll(".my-button")[1].addEventListener("click", function(){
                                                                                                                                                                                                                                                                                  
    let text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";

});
document.querySelectorAll(".my-button")[2].addEventListener("click", function(){

    let text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";

});


/*2nd method */

for( i = 0; i < 3; i++ ){

    document.querySelectorAll(".my-button")[i].addEventListener("click", function(){

        let text = this.innerHTML;
        document.querySelector("h1").innerHTML = text +  " is clicked";

    });

}


/* 3rd method */

 let  len = document.querySelectorAll(".my-button").length;
 for( i = 0; i < len; i++ ){

    document.querySelectorAll(".my-button")[i].addEventListener("click", function(){

        let text = this.innerHTML;
        document.querySelector("h1").innerHTML = text +  " is clicked";

    });

}






