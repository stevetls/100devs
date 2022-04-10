// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = '     cola    '
console.log(drink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruit = 'I eat apple everyday'
console.log(fruit.search('apple'))
console.log((fruit.includes('apple') !=1 ? 'yes' : 'no'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RPS(){
    let x = Math.random() * 3
    if ( x < 1 ){
        return 'rock'
    } else if ( x < 2){
        return 'paper'
    } else {
        return 'scissors'
    }
}

console.log(RPS())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function game( choice ){
    let bot = RPS()
    if ( choice == bot ){
        return 'draw'
    } else if ( (choice == 'rock' && bot == 'scissors') || 
    (choice == 'paper' && bot == 'rock') ||
    (choice == 'scissors' && bot == 'paper')){
        return 'win'
    } else {
        return 'lose'
    }
}

console.log(game('rock'))
console.log(game('paper'))
console.log(game('scissors'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function multiGame(arr){
    return arr.map(choice => game(choice))

}

console.log(multiGame(['rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock','rock']))
