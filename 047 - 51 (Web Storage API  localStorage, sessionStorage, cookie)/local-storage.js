// Web storage API - allows us to store & read data in browser 
// Web storage  API - localStorage, sessionStorage
// localStroage - store, read, update, and remove data
// no expiry data: data never gets lost even if you close the browser


//localStore store data as key value pair - string 

//setItems (key, value)
// localStorage.setItem("userName","Pronoy Eugin");
// localStorage.setItem("Phone", "01863069927");

//getItem(key)
// const userName = localStorage.getItem("userName");
// const userPhone = localStorage.getItem("Phone");
// console.log (userName, userPhone);

// // update
// localStorage.setItem("userName","Pronoy Khalko");
// localStorage.setItem("Phone", "01863069927");

// //removeItems(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("Phone");


//setItems (key, value)
// const countries = ["Australia", "Bangladesh", "Canada"];
// localStorage.setItem("countries", JSON.stringify(countries));


// //getItem(key)
// const countriesList = JSON.parse(localStorage.getItem("countries"));
// console.log(countriesList);

// //clear
// localStorage.clear();
