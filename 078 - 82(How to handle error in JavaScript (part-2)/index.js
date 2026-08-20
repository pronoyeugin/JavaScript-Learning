                                 /*  Error Handling 
    try, catch, finally, throw

    Syntex error not handle (try, catch, finally)
*/;;



document.querySelector("#checkBtn").addEventListener("click", function(){

    let number = document.querySelector("#numText").value



    try{
        if(number < 5)
        {
            throw "input is too low"
        }else if(number > 10)
        {
            throw "input is too high"
        }

    }catch(error){
        console.log(error);

    }

})
