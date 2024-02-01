// Count how many times a string has the letter a or A
const str = 'His name is Akib. He want to go Australia';
const charCount = 'a';
let charSum = 0;
for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase()[i] === charCount) {
        charSum++
    }
}
// console.log(charSum);

// Count by function method
const person = "Akbar is a Banker. He live in Bangladesh. He completed his study in Australia"
const countChar = 'a';
function countOccurrences(person, countChar) {
    let sumChar = 0;
    for (let i = 0; i < person.length; i++) {
        if (place.toLowerCase()[i] === countChar) {
            sumChar++
        }
    }
    return sumChar;
}
let countOccurrence = countOccurrences(person, countChar);
console.log(countOccurrence);