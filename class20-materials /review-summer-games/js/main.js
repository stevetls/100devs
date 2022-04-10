//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multi(arr){
    let product = 1
    arr.forEach( (x,i) => product *= x )
    return product
}

testArray = [2,2,,10,2]
console.log(multi(testArray))