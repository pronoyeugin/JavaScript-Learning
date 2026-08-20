/*  BOM - Browser object model
    window object 
    location obejct 
*/  

console.clear();

// href
console.log(location.href);
//protocol
console.log(location.protocol);
// host name
console.log(location.host);
//port 
console.log(location.port);
//path name
console.log(location.pathname); 


let locationDiv = document.querySelector(".location-div");

let p1 = locationDiv.children[0];
p1.textContent = location.href;

let p2 = locationDiv.children[1];
p2.textContent = location.protocol;

let p3 = locationDiv.children[2];
p3.textContent = location.host;

let p4 = locationDiv.children[3];
p4.textContent = location.port;

let p5 = locationDiv.children[4];
p5.textContent = location.pathname;


const visitButton = document.getElementById("visit");
visitButton.addEventListener("click", function() {
    location.assign("https://www.youtube.com");
});