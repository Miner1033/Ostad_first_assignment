// Module 10 Assignment - index.js

// 1. Write a function named findMax that takes an array of numbers and returns the largest number from the array.
function findMax(numbers) {
    if (numbers.length === 0) return undefined;
    return Math.max(...numbers);
}

// Test and console.log for problem 1
console.log("Problem 1 - findMax:");
console.log(findMax([1, 5, 3, 9, 2])); // Expected: 9
console.log(findMax([10, 25, 8, 30, 15])); // Expected: 30
console.log("---");

// 2. Write a function named countWords that takes a string and returns the number of words in the string.
function countWords(str) {
    if (str.trim() === '') return 0;
    return str.trim().split(/\s+/).length;
}

// Test and console.log for problem 2
console.log("Problem 2 - countWords:");
console.log(countWords("Hello world JavaScript")); // Expected: 3
console.log(countWords("This is a test string")); // Expected: 5
console.log("---");

// 3. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.
function calculateDifference(first, second) {
    return first - second;
}

// Test and console.log for problem 3
console.log("Problem 3 - calculateDifference:");
console.log(calculateDifference(10, 3)); // Expected: 7
console.log(calculateDifference(5, 8)); // Expected: -3
console.log("---");

// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Test and console.log for problem 4
console.log("Problem 4 - filterEvenNumbers:");
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])); // Expected: [2, 4, 6, 8]
console.log(filterEvenNumbers([10, 15, 20, 25, 30])); // Expected: [10, 20, 30]
console.log("---");

// 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

// Test and console.log for problem 5
console.log("Problem 5 - sortArrayDescending:");
console.log(sortArrayDescending([1, 5, 3, 9, 2])); // Expected: [9, 5, 3, 2, 1]
console.log(sortArrayDescending([100, 25, 75, 50])); // Expected: [100, 75, 50, 25]
console.log("---");

// 6. Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test and console.log for problem 6
console.log("Problem 6 - isLeapYear:");
console.log(isLeapYear(2024)); // Expected: true
console.log(isLeapYear(2023)); // Expected: false
console.log(isLeapYear(1900)); // Expected: false
console.log(isLeapYear(2000)); // Expected: true
console.log("---");

// 7. Write a function named reverseString that takes a string and returns the reversed version of that string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test and console.log for problem 7
console.log("Problem 7 - reverseString:");
console.log(reverseString("JavaScript")); // Expected: "tpircSavaJ"
console.log(reverseString("Hello World")); // Expected: "dlroW olleH"
console.log("---");

// 8. Write a function named sumArray that takes an array of numbers and returns the total sum of all elements.
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Test and console.log for problem 8
console.log("Problem 8 - sumArray:");
console.log(sumArray([1, 2, 3, 4, 5])); // Expected: 15
console.log(sumArray([10, 20, 30, 40])); // Expected: 100
console.log("---");

console.log("All problems completed successfully!");