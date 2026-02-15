const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const arr = JSON.parse(input);

const sum = arr
  .filter(x => x >= 0)      
  .map(x => x * 2)         
  .reduce((acc, x) => acc + x, 0); 

console.log(sum);
