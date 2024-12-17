let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

function reverseString(str) {
  return str.split('').reverse().join('');
}

function checkPalindrome(original) {
  let reversed = reverseString(original);
  console.log("Original String:", original);
  console.log("Reversed String:", reversed);
  console.log("Is Palindrome?", original === reversed);
}

checkPalindrome(word1);
checkPalindrome(word2);
