const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let arr = input.split(' ').map(Number);
const newArr = arr.map((val, ind) => val * ind);
console.log(newArr.join(' '));
