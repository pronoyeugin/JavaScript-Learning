const selectFontSize = document.getElementById('selectFontSize');
const selectBackgroundColor = document.getElementById('selectBackgroundColor');
const resetButton = document.getElementById('reset');
const mainElement = document.querySelector('main');
const setValues = (fontSize, backgroundColor) => {
    selectFontSize.value = fontSize;
    selectBackgroundColor.value = backgroundColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = backgroundColor;
}

//load local storage values
const  intialSetup = () => { 
    const savedFontSize = localStorage.getItem('fontSize');
    const savedBackgroundColor = localStorage.getItem('backgroundColor');

    setValues(savedFontSize || '16px', savedBackgroundColor || 'aqua');
};

intialSetup();

//change font 
const changeFontSize = (event) =>{
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize', selectedFontSize);
}   


// change backgorund color
const changeBackgroundColor = (event) => {
    const selectedBackgroundColor = event.target.value;
    mainElement.style.backgroundColor = selectedBackgroundColor;
    localStorage.setItem('backgroundColor', selectedBackgroundColor);
};


//clear local storage
const clearLocalStorage = (event) =>{
    localStorage.removeItem('fontSize');
    localStorage.removeItem('backgroundColor');
    setValues('16px', 'aqua');
}   


// add event listener 
selectFontSize.addEventListener('change', changeFontSize); 
selectBackgroundColor.addEventListener('change', changeBackgroundColor);
resetButton.addEventListener('click', clearLocalStorage);

