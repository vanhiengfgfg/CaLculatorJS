const display=document.getElementById("display")

function appendtoDisplay(input){
    display.value+=input;


}
function clearDisplay(){
    display.value='';
    
}
function calculate(){
    try {
        const result = new Function('return ' + display.value)();
        if (isNaN(result) || result === undefined || result === Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
