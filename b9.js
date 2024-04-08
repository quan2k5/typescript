"use strict";
let word = 'hello world';
function checkWord() {
    let str = '';
    function callBack(element) {
        for (let i = 0; i < str.length; i++) {
            if (element == str[i]) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < word.length; i++) {
        if (callBack(word[i])) {
            str += word[i];
        }
    }
    return str;
}
console.log(checkWord());
