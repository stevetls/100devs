//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtracts(num1, num2){
    const answer = num1 - num2;
    alert(answer);
}
//create a function that divides three numbers and console logs the quotient
function divides(num1, num2, num3){
    const answer = num1 / num2 / num3;
    console.log(answer)
}
//create a function that multiplys three numbers and returns the product
function multi(num1, num2, num3){
    const answer = num1 * num2 * num3;
    return answer;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addRemainder(num1, num2, num3){
    const answer = (num1 + num2) % num3
    return answer
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function checkMultiply(n1, n2, n3, n4){
    let product = n1 * n2
    if(product > 100){
        console.log( n3 + n4 )
    } else if(product < 100 ){
        console.log( n3 - n4 )
    } else {
        alert( (n1 * n2 * n3) % n4 )
    }
}