// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function checkArray(inputArray){
    if (inputArray[0] < inputArray[inputArray.length-1]){
        alert('Hi')
    } else if (inputArray[0] > inputArray[inputArray.length-1]){
        alert('bye')
    } else {
        alert('We close in an hour')
    }
}

let list = [2,4,4,243,234,1]

checkArray(list)