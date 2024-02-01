// If a given string has either x, replace x by y. If the given string has X, replace it by Y
let str = 'His name is X. He lives in y.';
let newStr = str
    .replace('X', 'Y')
    .replace('y', 'x');
console.log(newStr);
