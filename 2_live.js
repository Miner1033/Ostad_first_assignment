// 1. Find the smallest number in an array
function findSmallest(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

// 2. Merge two arrays into one
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 3. Find the average of numbers in an array
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// Testing the functions with the provided examples:
console.log("Testing the functions:");

// Test findSmallest
console.log("findSmallest([4, 2, 8, 1, 9]):", findSmallest([4, 2, 8, 1, 9])); // Output: 1

// Test mergeArrays
console.log("mergeArrays([1, 2], [3, 4]):", mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]

// Test findAverage
console.log("findAverage([10, 20, 30, 40]):", findAverage([10, 20, 30, 40])); // Output: 25

// Additional test cases:
console.log("\nAdditional test cases:");
console.log("findSmallest([100, 50, 25, 75]):", findSmallest([100, 50, 25, 75])); // 25
console.log("mergeArrays(['a', 'b'], ['c', 'd']):", mergeArrays(['a', 'b'], ['c', 'd'])); // ['a', 'b', 'c', 'd']
console.log("findAverage([5, 15, 25]):", findAverage([5, 15, 25])); // 15