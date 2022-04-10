// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentance = "What the heck"
sentance.slice(-1) == "?" ? alert(sentance): null

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let text = "I am a jr. dev., you are also a jr. dev"
let newText = text.replace(/jr. dev/g, 'software engineer')
console.log(newText)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let result = Math.random()
    if (result < 0.33){
        return 'rock'
    } else if ( result < 0.66 ){
        return 'paper'
    } else {
        return 'scissors'
    }
}

console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function game(choice){
    let bot = rockPaperScissors()
    if ((choice === 'rock' && bot === 'scissors') || (choice === 'scissors' && bot === 'paper') || (choice === 'paper' && bot === 'rock') ){
        console.log('win')
    } else if ( choice === bot){
        console.log('draw')
    } else {
        console.log('lose')
    }
}

game('rock')
game('rock')
game('rock')
game('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function multiGame(arr){
    let result = arr.map(choice => game(choice))
    return result
}

multiGame(['rock', 'rock', 'rock', 'rock', 'rock', 'rock','rock', 'rock', 'rock'])