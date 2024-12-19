let subArray1 = prompt("Enter names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):")
    .split(",")
    .map(name => name.trim());

let subArray2 = prompt("Enter ages separated by commas (e.g., 24,65,21,5,9):")
    .split(",")
    .map(age => parseInt(age.trim()));

let multiDimensionalArray = [];
for (let i = 0; i < subArray1.length; i++) {
    multiDimensionalArray.push([subArray1[i], subArray2[i]]);
}

console.log("Restructured Multi-dimensional Array:");
multiDimensionalArray.forEach(subArray => console.log(subArray));