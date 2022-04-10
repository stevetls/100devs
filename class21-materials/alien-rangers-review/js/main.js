//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = [ 'pokemon', 'office', 'the suit']

tvShows.forEach(( x , i) => console.log(x))


//Create and array of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Return a new array of numbers that includes every even number from the previous Arrays
let newNumbers = numbers.filter( x => x % 2 == 0 )


console.log(newNumbers)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sum2ndLowN2ndHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted[sorted.length-2])
}

sum2ndLowN2ndHigh(numbers)