//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverseArray(arrayInput){
    let revArray = []
    arrayInput.forEach((element,index) => {
        revArray[arrayInput.length - index -1] = element
    });
    return revArray;
}
//solution: arrayInput.reverse()
console.log(reverseArray(['a','b','c','d','e']))


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function sumSquareArray(arrInput){
    let sum = 0
    arrInput.forEach( element => {
        sum += element * element;
    })
    return sum;
}

function sumCubeArray(arrInput){
    let sum = 0
    arrInput.forEach( element => {
        sum += element * element * element;
    })
    return sum;
}

let a = [1, 2, 3, 4, 5]
let b = [5, 10, 15]
console.log(sumSquareArray(a))
console.log(sumCubeArray(b))
function compareArrSum(arr1, arr2){
    if (sumSquareArray(arr1)>sumCubeArray(arr2)){
        return true;
    } else {
        return false;
    }
}
//solution: return a.reduce((acc,c) => acc + c**2, 0)) > b.reduce((acc,c) => acc + c**3, 0))
console.log(compareArrSum(a,b))



//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function newArr(arr){
    let newArr = []
    arr.forEach((element,index)=> {
        if (element%index == 0){
            newArr.push(element)
        }
    }
    )
    return newArr
}

console.log(newArr([22, -6, 32, 82, 9, 25]))
console.log(newArr([68, -1, 1, -7, 10, 10]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumArr(arr){
    let sum = 0
    arr.forEach(element => {
        sum += parseInt(element)
})
return sum
}

console.log(sumArr(["1",2,"3",4,"5"]))