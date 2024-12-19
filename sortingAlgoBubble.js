function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(`Swapped: ${arr.join(", ")}`);
            }
        }
    }
    return arr;
}

let arr = [];
const inputNumbers = prompt("Enter numbers separated by commas (e.g., 42,25,12,63,48,10,16,5,30,78):");
if (inputNumbers) {
    inputNumbers.split(",").forEach(num => arr.push(parseInt(num.trim())));
}

console.log("Initial Array:", arr.join(", "));
const sortedArray = bubbleSort(arr);
console.log("Sorted Array:");
sortedArray.forEach(num => console.log(num));