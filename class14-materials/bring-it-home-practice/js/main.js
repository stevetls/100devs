// *Variables*
// Create a variable and console log the value
let box = "This is a variable"
console.log(box)

// Create a variable, add 10 to it, and alert the value
let taskTwo = 10
alert(taskTwo + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNumbers(num1, num2, num3, num4){
    const answer = num1 - num2 - num3 - num4;
    alert(answer)
}

subtractsFourNumbers(10, 2, 2, 2)
// Create a function that divides one number by another and returns the remainder
function remainderCalculate(num1, num2){
    const answer = num1 % num2;
    return answer;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

for (let i=1; i<101 ; i++){
    if (i%3 == 0 && i%5 ==0){
        console.log("FizzBuzz");
    } else if (i%3 == 0){
        console.log("Fizz");
    } else if (i%5 == 0){
            console.log("Buzz");
    } else {
        console.log(i);
    }
}