import './style.css';
import isPalindrome from './checker';
console.log("index.ts/start");

//buttonsSubmitClick
function buttonsSubmitClick(){
//referencia inputtext
const inputText =<HTMLInputElement>document.getElementById('inputText');
let bPalindrome= null;
let testooo = inputText.value;
//Invocar función isPalindrome
if(inputText){
const bPalindrome = isPalindrome(testooo);
console.log(bPalindrome);
const divResult = <HTMLDivElement>document.getElementById('divResult');
if(divResult){
    if(bPalindrome){
        divResult.innerText = 'Es palindrome!';
        divResult.className = "palindrome";
    }
    else{
        divResult.innerText = 'No es palindrome';
        divResult.className = "notPalindrome";
    }
}

}
}
//Actualizar div result

const btn= document.querySelector('button');
if (btn) {
    console.log('attaching listener');
    btn.addEventListener('click',buttonsSubmitClick);

}