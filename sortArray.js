let numbers = prompt("Enter numbers separated by commas:").split(',').map(Number);
let names = prompt("Enter names separated by commas:").split(',');

let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);
