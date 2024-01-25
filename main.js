const passwordBox = document.querySelector('[type="text"]');
const clickBtn = document.querySelector("[type='button']");
const copyBtn = document.querySelector('.container .display img');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "012345679";
const symboles = "@#$%&*+-/_";

console.log(passwordBox.textContent)
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generatePassword() {
    let password = "";
    for (let i = 1; i <= 3; i++) {
        password += uppercase[getRandInt(0, uppercase.length - 1)];
        password += lowercase[getRandInt(0, lowercase.length - 1)];
        password += number[getRandInt(0, number.length - 1)];
        password += symboles[getRandInt(0, symboles.length - 1)];
    }
    return password;
}
clickBtn.onclick = function () {
    let password = generatePassword();
    passwordBox.value = password;
}
copyBtn.onclick = function () {
    passwordBox.select();
    document.execCommand('copy');
    // Deselect the input field to avoid unwanted text selection
    passwordBox.selectionEnd = passwordBox.selectionStart;
}