function isPalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("")
}

function isPalindrome(word){
  return word == reverseString(word)
}

/* 
  Add your pseudocode here
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false  
*/

/*
  Add written explanation of your solution here
  function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord
}

function isPalindrome(word) {
  // reverse the input string by calling reverseString() and assign the return value to a variable reverseWord
  const reversedWord = reverseString(word);
  // test if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
