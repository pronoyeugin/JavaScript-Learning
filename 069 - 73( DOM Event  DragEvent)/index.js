
/* clipboard Event 

    dragstart- 
    drag-
    dragend-
    dragenter-
    dragover-
    dragleave-
    drop-

*/  

console.clear();

const div1 = document.getElementById("div1");
const drag1 = document.getElementById("drag1");

drag1.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("Text", e.target.id);
});

div1.addEventListener("dragover", function(e){
    e.preventDefault();
});

div1.addEventListener("drop", function(e){
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    e.preventDefault();
});