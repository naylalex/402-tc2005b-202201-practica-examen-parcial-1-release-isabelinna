import '/style.css';
import isPalindrome from 'checker';
console.log("index.ts/start");

// obtener refencia denominada inputText
const inputText =<HTMLInputElement>document.getElementById('inputText');

//Invocar función isPalindrome
if(inputText){
const bPalindrome = isPalindrome("inputText");
console.log(bPalindrome);
}

//Actualizar div result
const divResult = <HTMLDivElement>document.getElementById('divResult');