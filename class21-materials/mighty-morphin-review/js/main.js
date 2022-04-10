// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Christmas"
console.log(favHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'apple'
alert( string.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFrom100 (n1, n2, n3, n4, n5){
    alert(Math.abs(100-n1-n2-n3-n4-n5))
}

subtractFrom100(5,4,3,2,1)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function maxAndMin (n1, n2, n3){
    console.log(Math.max(n1, n2, n3))
    console.log(Math.min(n1, n2, n3))
}

maxAndMin(12,-4,31920)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    if (Math.floor(Math.random() * 2)){
        return "heads"
    } else {
        return "tails"
    }
}

console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function countHeadsTails(num){
    let results = []
    for (let i = 0; i < num; i++){
        results.push(headsOrTails())
    }
    console.log(results)
    let numberOfHeads = results.filter( result => result == "heads")
    console.log(`There are ${numberOfHeads.length} heads and ${results.length - numberOfHeads.length} tails.`)
}

countHeadsTails(1000)