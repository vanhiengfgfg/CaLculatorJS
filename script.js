const display=document.getElementById("display")

function appendtoDisplay(input){
    display.value+=input;


}
function clearDisplay(){
    display.value='';
    
}
function calculate(){
    try{
        display.value=eval(display.value);
        if(isNaN(result) || result === undefined){
            display.value=='';

        }
    }
    catch(error){
        display.value='Error';
        
    }
}
