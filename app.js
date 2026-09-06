// CALCULATOR 

// Get the HTML element with id="display"
const display = document.getElementById("display");

function appendToDisplay(input){
            display.value += input;   //This function adds whatever the user clicks to the calculator display.
}

function clearDisplay(){
    display.value = "";              //This function clears the calculator.
}

function calculate(){
    
//If something goes wrong inside try, the catch block executes.
    try{
        display.value = eval(display.value); //eval() takes the calculation written as text/string and solves it
    }
    catch{
        display.value = "error";
    }
     
}


