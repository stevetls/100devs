//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["star war","toy story","avenger"]

movies.forEach( ( x,i ) => document.querySelector("h2").appendChild(document.createTextNode(x + " ")) )

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
numbers = [1, 3, 5, 7, 9]

numbers.forEach(( x,i ) => numbers[i] += 3) 
console.log(numbers)

//Find the average of all the numbers from question three
let sum = 0 
numbers.forEach(( x,i ) => sum += x )
console.log(sum/numbers.length)