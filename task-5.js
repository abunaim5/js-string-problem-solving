// Capitalize every first letter of each word in a string
let str = 'i am a hardworking person.'
let arrStr = str.split(' ');
console.log(arrStr);
for (i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
    // console.log(i);
}
let newStr = arrStr.join(' ');
console.log(newStr);

