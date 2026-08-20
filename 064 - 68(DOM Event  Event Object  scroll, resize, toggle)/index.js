//load, unload, resize, scroll, toggle
 
//load
window.addEventListener("load", function() {
    console.log("load");
});

//unload
window.addEventListener("unload", function() {
    console.log("unload");
});

//scroll
window.addEventListener("scroll", function(){
    console.log("scroll");
});

//resize
window.addEventListener("resize", function(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`width: ${width}, height: ${height}`);  
    
});

//toggle
const detail = document.querySelector("details");
detail.addEventListener("toggle", function(e){
    console.log(e.target.open);
});


