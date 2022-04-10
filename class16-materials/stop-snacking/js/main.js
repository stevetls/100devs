//Create a function that grabs the number of snacks from the input and tells you to stop that many times


function sayStop(){
    const numberOfSnack = Number(document.querySelector("input").value)
    document.querySelector('#stops').innerText = ''
    for (let i=0; i < numberOfSnack; i++){
        document.querySelector("#stops").innerText += " Stop!"
    }
}

document.querySelector('#help').addEventListener("click", sayStop)
document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
      // run function
      sayStop();
    }
});


