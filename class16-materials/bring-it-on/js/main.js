// *Variables*
// Create a variable and console log the value
let v1 = 5
console.log(v1)
// Create a variable, add 10 to it, and alert the value
let v2 = 5
alert( v2 + 10 )

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtract4Num(n1, n2, n3, n4){
    alert(n1 - n2 - n3 - n4)
}

// Create a function that divides one number by another and returns the remainder
function remainder2number(n1, n2){
    return n1 % n2
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji(n1, n2){
    if((n1 + n2) > 50){
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3){
    if((n1*n2*n3)%3 == 0){
        alert("ZEBRA")
    }
}

zebra(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordsMulti(text, num){
    for (let i=0; i< num; i++){
        console.log(text)
    }
}