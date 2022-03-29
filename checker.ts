function isPalindrome(text: string): boolean {
console.log('isPalindrome/start');
console.log(text);
let j = text.length - 1;
for (let i = 0; i < j; i++, j--) {
    
        i++;
    if (i < j && text[i].toLowerCase() !== text[j].toLowerCase()) {
        return false;
    }
}
return true;
};

export default isPalindrome;