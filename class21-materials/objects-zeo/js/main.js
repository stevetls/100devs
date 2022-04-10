//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'Nike'
stopwatch.hour = 12
stopwatch.minute = 30
stopwatch.second = 20

stopwatch.telltime = function(){
    console.log(`${stopwatch.hour}:${stopwatch.minute}:${stopwatch.second}`)
}

stopwatch.telltime()