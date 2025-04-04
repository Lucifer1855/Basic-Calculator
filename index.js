// calculator programm
const display = document.getElementById("display");

function appendToDisplay(input){
      display.value += input;
}

function clearDisplay(){
           display.value = "";
}


function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch{
    display.value = "Error";
  }
}

function back() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
