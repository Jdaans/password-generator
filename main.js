const passwordOutput = document.getElementById('password-output');
const copyButton = document.getElementById('copy-button');
const lengthValue = document.getElementById('length-value');
const upperCase = document.getElementById('upper-case');
const lowerCase = document.getElementById('lower-case');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
const lengthSlider = document.querySelector('input[type="range"]');




lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
})

function generatePassword(length, lower, upper, numbers, symbols) {
    let chars = '';

    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789';
    if (symbols) chars += '!@#$%^&*()_+{}[]=<>/,.';

    if (chars === '') return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    
    return password;
}

const generateButton = document.getElementById('generate-button');

generateButton.addEventListener("click", () => {

    const length = parseInt(document.getElementById("length-slider").value);
    const lower = document.getElementById("lower-case").checked;
    const upper = document.getElementById("upper-case").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;


    generatePassword(length, lower, upper, numbers, symbols);

    document.getElementById('password-output').innerHTML = password;

})


