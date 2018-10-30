'use strict';
const numbers = [1, 2, 3, 4];
function max(numbers) {
    let currentMax = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > currentMax) {
            currentMax = numbers[i];
        }
        i++;
    }
    return currentMax;
}

console.log(max(numbers));


function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        }
        i++
    }
    return currentMin;
}

console.log(min(numbers));


function average(array) {
    let sum = 0;
    let i = 0;
    while (i<array.length) {
        sum+=array[i];
        i++;
    }
    return sum / array.length;
}

console.log(average(numbers))

// Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn
// Create two more functions called hello and goodbye:
// hello should log the string 'Hello world'
// goodbye should log the string 'Goodbye world'
// Use your repeat function to call the hello function five times: repeat(hello, 5)
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)

function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
};

function hello() {
    console.log('Hello World');
};

function goodbye() {
    console.log('Goodbye World');
};

repeat(hello, 5);
repeat(goodbye, 5);


function filter(arr, fn) {
    // TASK: Define your function here
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

// Create a function called filter, which takes two arguments:
// First argument is an array: arr
// Second argument is a function: fn
// This function exists to return a new array, so create a newArray initialized to [];
// Now start a loop through the arr passed in
// Inside the loop:
// Write an if statement that checks if invoking the fn function while passing in the current element of arr returns true
// If it does, then push the current element of arr into our newArray
// Finally, outside the loop, we return newArray
// Try calling your filter function using the myNames array above and test that it works

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const accidentWarning = hazardWarningCreator('Accident on road');
const fireWarning = hazardWarningCreator('Fire');

rocksWarning('Main St and Pacific Ave');
accidentWarning('Shopping center');
fireWarning('Forest');

// Create a hazardWarningCreator function which takes one argument typeOfWarning
// Inside the function, create a warningCounter variable that initializes at 0
// Would a number variable expected to change be let or const?
// Return an anonymous function, which takes one argument location
// Inside the inner function:
// Increment warningCounter
// Answer out loud: Why does the inner function have access to warningCounter? Because of sc--- ch---
// Log out: "DANGER! There is a ${typeOfWarning} hazard at ${location}!"
// Log out the message: "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"
// Remember: string interpolation above requires a special character, not ' or "
// Now let's invoke hazardWarningCreator three times, catching the returned function in separate variables, such as:
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// (you create two more of your choice)
// Finally, invoke each of your newly created hazard warning closures several times at different locations:
// rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too



function turtleMove(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i].filter(move => move >= 0))
    }
    return newArray.map(x => {x[0] + x[1];
        if (x.length === 1) {
            
        }
        );
    
}

let turtleArr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
console.log(turtleMove(turtleArr));

// A turtle's movements can be represented by an array which looks like this: [3, 4]. 
// The first item in the array represents the number of steps the turtle takes forwards. 
// The second number in the array is the number of steps the turtle takes to the left.
// Here is an array of different movements made by a turtle: 

// Use the filter method to remove any items where the turtle moves backwards or to the right
//  (i.e. where either the first of second number is an item is negative).
// Use the map method to create a new array containing how many steps the turtle makes in 
// total with each movement (i.e. the first and second number added together).
// Use the forEach method to log out how many steps the turtle took in each case.