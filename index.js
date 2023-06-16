function isPalindrome(word) {
  // Write your algorithm here
  const arr = word.split("");
  // console.log(arr);
  for (let i = 0; i <= arr.length/2 - 1; i++){
    if(arr[i] !== arr[arr.length - 1 - i]){
      return false;
    }
  }
  return true;


}
  /* 
  Add your pseudocode here
  split word into array,
  compare from front to back
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
