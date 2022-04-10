//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenOnly(arr){
    let newArr = []
    arr.forEach( function(num){
        if(num%2 == 0){
            newArr[newArr.length]=num} 
    })
    return newArr
}

let call = evenOnly([2,3,4,5,6,73,423,34,42,9])
console.log(call)

// much better solution
// arr.forEach( n => {
//     if(n % 2 === 0){
//         newArr.push(n)
//     }
// })