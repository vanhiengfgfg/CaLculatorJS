const display=document.getElementById("display")

function appendtoDisplay(input){
    display.value+=input;


}
function clearDisplay(){
    display.value='';
    
}
function calculate(){
    try{
        const result = eval(display.value);
        
        // Kiểm tra kết quả có hợp lệ không
        if (isNaN(result) || result === undefined || result === Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    }
    catch(error){
        display.value='Error';
        
    }
}
