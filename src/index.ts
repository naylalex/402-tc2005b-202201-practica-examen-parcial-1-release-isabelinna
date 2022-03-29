import './style.css';
import isPalindrome from './checker';
console.log("index.ts/start");

//buttonsSubmitClick
function buttonsSubmitClick(){
//referencia inputtext
const inputText =<HTMLInputElement>document.getElementById('inputText');

//Invocar función isPalindrome
if(inputText){
const bPalindrome = isPalindrome("inputText");
console.log(bPalindrome);
}
}
//Actualizar div result
const divResult = <HTMLDivElement>document.getElementById('divResult');
if(divResult){
    if(isPalindrome("inputText")){
        divResult.innerText = 'Es palindrome!!!';
    }
    else{
        divResult.innerText = 'No es palindrome :c';
    }
}