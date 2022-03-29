function isPalindrome(text: string): boolean {
console.log('isPalindrome/start');
console.log(text);
const strReversed = text.split("").reverse().join("");
  
return strReversed === text ? true: false;
}


export default isPalindrome;