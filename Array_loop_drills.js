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

// console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

