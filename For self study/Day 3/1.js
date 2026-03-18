const input = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split(' ')
    .map(Number);

let sum = 0;

for (let i = 0; i < input.length; i++) {
    sum += input[i];
}

console.log(sum);