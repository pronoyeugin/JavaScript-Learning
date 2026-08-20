/* mouse event 
    <meta> 
    <title>
    <style>
    <script>
    <link>   
    <base>
*/

/* ALl Mouse Events
    click   dblclick mousedown mouseup mousemove mouseenter mouseleave mouseover mouseout  contextmenu wheel
*/  

console.clear();
const div = document.querySelector('div');

div.addEventListener("click", function(e){
    console.log("click is occured");
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);     
});

div.addEventListener("dblclick", function(){
    console.log("dblclick is occured");
});

div.addEventListener("mousedown", function(){
    console.log("mousedown is occured");
});

div.addEventListener("mouseup", function(){
    console.log("mouseup is occured");
});

div.addEventListener("mousemove", function(e){
    // console.log("mousemove is occured");
    // console.log("clientX = " + e.clientX, "clientY = " + e.clientY);
    console.log("offsetX = " + e.offsetX, "offsetY = " + e.offsetY);
    
});

div.addEventListener("mouseenter", function(){
    console.log("mouseenter is occured");
});

div.addEventListener("mouseleave", function(){
    console.log("mouseleave is occured");
});

div.addEventListener("mouseover", function(){
    console.log("mouseover is occured");
}); 

div.addEventListener("mouseout", function(){
    console.log("mouseout is occured");
});

div.addEventListener("contextmenu", function(){
    console.log("contextmenu is occured");
});

div.addEventListener("wheel", function(){
    console.log("wheel is occured");
});


const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
    button.addEventListener("click", function(e){
        console.log("clicked");  
    });

});
