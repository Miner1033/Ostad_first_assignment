// 1. Find the largest number in an array
function findMax(numbers) {
    if (numbers.length === 0) return undefined;
    return Math.max(...numbers);
}

// 2. Count words in a string
function countWords(str) {
    if (!str || str.trim() === '') return 0;
    return str.trim().split(/\s+/).length;
}

// 3. Calculate difference between two numbers
function calculateDifference(first, second) {
    return first - second;
}

// 4. Filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 5. Sort array in descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

// 6. Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 7. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 8. Sum all elements in an array
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage and testing:
console.log("Testing the functions:");

// Test findMax
console.log("findMax([1, 5, 3, 9, 2]):", findMax([1, 5, 3, 9, 2])); // 9

// Test countWords
console.log("countWords('Hello world JavaScript'):", countWords('Hello world JavaScript')); // 3

// Test calculateDifference
console.log("calculateDifference(10, 3):", calculateDifference(10, 3)); // 7

// Test filterEvenNumbers
console.log("filterEvenNumbers([1, 2, 3, 4, 5, 6]):", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Test sortArrayDescending
console.log("sortArrayDescending([3, 1, 4, 1, 5, 9]):", sortArrayDescending([3, 1, 4, 1, 5, 9])); // [9, 5, 4, 3, 1, 1]

// Test isLeapYear
console.log("isLeapYear(2024):", isLeapYear(2024)); // true
console.log("isLeapYear(2023):", isLeapYear(2023)); // false

// Test reverseString
console.log("reverseString('JavaScript'):", reverseString('JavaScript')); // "tpircSavaJ"

// Test sumArray
console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5])); // 15