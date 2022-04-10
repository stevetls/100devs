//Write your pseduo code first! 

document.querySelector('#convert').addEventListener("click", convert)
document.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        convert();
    }
})

function convert(){
    let temp = document.querySelector('#inputTemp').value

    temp = temp * 1.8 + 32
    roundedTemp = temp.toFixed(2)

    document.querySelector('#outputTemp').innerText = `${roundedTemp} \u2109`; 
    document.querySelector('#inputTemp').value = " ";
}




//ask for input and select C or F
//
//when submit button is clicked, get the input value
//check if missing value, prompt user
//check if invaild data, prompt user
//if it's C, convert to F (multiply by 1.8 (or 9/5) and add 32)
//else convert to C (subtract 32 and multiply by .5556)
//display result with correct unit on html