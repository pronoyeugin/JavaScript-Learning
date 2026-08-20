/* DOM - Changing CSS style dynamically*/

function addStyle(){
    let myStyle = document.querySelector("#para");

    //1st method
    // myStyle.style.color = "red";
    // myStyle.style.fontSize = "40px";
    // myStyle.style.fontWeight = "bold";
    // myStyle.style.fontStyle = "italic";

    //2nd method
    myStyle.classList.add("para-style");

}


function removeStyle(){
    let myStyle = document.querySelector("#para");
    //1st method
    // myStyle.style.color = "black";
    // myStyle.style.fontSize = "16px";
    // myStyle.style.fontWeight = "normal";
    // myStyle.style.fontStyle = "normal";

    //2nd method
    myStyle.classList.remove("para-style");
}



/* */

 let myStyle = document.querySelector("#para2");
function addStyle(){
   
    //1st method
    // myStyle.style.color = "red";
    // myStyle.style.fontSize = "40px";
    // myStyle.style.fontWeight = "bold";
    // myStyle.style.fontStyle = "italic";

    //2nd method
    myStyle.classList.add("para-style");

}


function removeStyle(){
    
    //1st method
    // myStyle.style.color = "black";
    // myStyle.style.fontSize = "16px";
    // myStyle.style.fontWeight = "normal";
    // myStyle.style.fontStyle = "normal";

    //2nd method
    myStyle.classList.remove("para-style");
}