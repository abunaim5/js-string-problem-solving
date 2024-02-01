// Count how many times a string has the letter a
const myPlace = 'I live in Bangladesh.';
const char = 'a';
let charSum = 0;
for (let i = 0; i < myPlace.length; i++) {
    // console.log(myPlace[i]);
    if (myPlace[i] === char) {
        charSum = charSum + 1;
    }
}
console.log(charSum);

// Count with function and for loop
const str = 'I studied at Jatiya Kabi Kazi Nazrul Islam University';
const charCount = 'a';
function countOccurrences(str, charCount) {
    let sumChar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charCount) {
            sumChar += 1;
        }
    }
    return sumChar;
}
const occurrenceCount = countOccurrences(str, charCount);
console.log(occurrenceCount);