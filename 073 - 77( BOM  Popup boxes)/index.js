/*  BOM - Browser object model
    popup boxes - alert, confirm, prompt
    
*/  

console.clear();

// alert box 
alert("404 Error");


//confirm box
function deleteSomething(){
    let value = confirm("Do you want to delete?");
    if(value){
        console.log("Deleted");
    }else{
        console.log("Not Deleted");
    }
}
deleteSomething();


//prompt box
function welcomeMessage(){

    let h1 = document.createElement("h1");
    let text ;

    let name = prompt("Enter your name:");
    if(name == null || name == ""){
       text = "No name found";
    }else{
        text = 'Welcome '+ name;
    }
    let textNode = document.createTextNode(text);

    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcomeMessage();
