const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
//my js script

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error :/";
        setTimeout(() => {clearDisplay();}, 1000); 
    }
}
