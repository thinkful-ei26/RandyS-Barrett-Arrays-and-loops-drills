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