document.querySelector("button").addEventListener("click",function () {
    alert("Button Clicked");
});
    



let myTitle = document.querySelector("h1");

//clickevent
myTitle.addEventListener("click", function () {
    alert("Hello");
});

//mouseover event
myTitle.addEventListener("mouseover", function () {
    alert("Hi");
});

//add style mouseover event
myTitle.addEventListener("mouseover", function () {

    myTitle.classList.add("my-style");
});

//remove style mouseover event
myTitle.addEventListener("mouseout", function () {

    myTitle.classList.remove("my-style");

});
