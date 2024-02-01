// Check whether a string contains all the vowels a, e, i, o, u
const person = 'Hablu is a Programmer. He try his best to learn programming more and more'
let vowelCheck = ['a', 'e', 'i', 'o', 'u'];
let foundVowels = [];
for (let i = 0; i < person.length; i++) {
    if (vowelCheck.includes(person[i]) && !foundVowels.includes(person[i])) {
        foundVowels.push(person[i]);
        // console.log(foundVowels);
    }
}
let matchVowels = vowelCheck.length === foundVowels.length;
if (matchVowels) {
    console.log('Found all vowels in this string');
} else {
    console.log('Not found all the vowels in this string');
}
console.log(foundVowels); // for check
