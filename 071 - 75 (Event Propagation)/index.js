/* Event Propagation */  

console.clear();


const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');





outerDiv?.addEventListener('click',
  function() {
    console.log('Outer (clicked)');
}, false); // for capturing  use true

// bubling exmaple
innerDiv?.addEventListener('click',
   function() {
    console.log('Inner (clicked)');
}, true);


