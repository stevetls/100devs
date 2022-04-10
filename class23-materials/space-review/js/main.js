//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [1, 2, 3, 4, 5, 6]
let result = numbers.reduce( (a, b) => a + b )
console.log(result)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numbersArr (arr){
    let newArr = arr.map(number => number * number)
    return newArr
}

console.log(numbersArr(numbers))
//Create a function that takes string
//Print the reverse of that string to the console

function reverse(str){
    let arr = str.split("")
    return arr.reverse().join("")
}
console.log(reverse('i am awesome!'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(str){
    if (str == reverse(str)){
        alert(`yes, it is palindrome! ${reverse(str)}`)
    } else {
        alert('no, it\'s not')
    }
}
checkPalindrome("able was I ere I saw eElba")