function isPalindrome(word) {

    for(let i = 0; i <= Math.ceil(word.length / 2); i++) {
      let leftToRight = i;
      let rightToLeft = word.length - (1 + i);
      if(word[leftToRight] === word[rightToLeft]) {
        return true
      } else {
        return false
      }
    }
  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
