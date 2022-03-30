function isPalindrome(text: string): boolean {
let middle : number = text.length/2;
let bPalindrome : boolean = true;
if(text.length % 2 != 0){
  middle = middle - 0.5;
}
let iterator : number = text.length - 1;
for(let i = 0; i < middle; i++){
  if(text[i] != text[iterator]){
    bPalindrome = false;
  }
  iterator-=1;
}
return bPalindrome;
}
export default isPalindrome;