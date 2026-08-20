// example - 01
var link  = document.getElementsByTagName('a')[0];
link.innerHTML = 'Google';
link.href = 'https://www.google.com';
link.target = '_blank';
link.style.color = "green";
link.style.fontSize = "20px";

// example - 02
var myHeading1 = document.getElementsByTagName('h1')[0];
myHeading1.innerHTML = 'My New Heading 1';
myHeading1.style.color = "red";

var myHeading2 = document.getElementsByTagName('h1')[1];
myHeading2.innerHTML = 'My New Heading 2';
myHeading2.style.color = "blue";

//create html element
var heading3 = document.createElement('h1');
var text = document.createTextNode('My New Heading 3');
heading3.appendChild(text);

//Add html element to the page
var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

//add html element before another element
var heading4 = document.createElement('h1');
var text2 = document.createTextNode('My New Heading 4');
heading4.appendChild(text2);
var heading1 = document.getElementsByTagName('h1')[0];
myDiv.insertBefore(heading4, heading1);


//remove html element
var  heading2 =   document.getElementsByTagName('h1')[1];
myDiv.removeChild(heading2);

//add class to html element
document.getElementById("my-div").classList;
document.getElementById("my-div").classList.add("my-class");
//remove class from html element
document.getElementById("my-div").classList;
document.getElementById("my-div").classList.remove("my-class");
