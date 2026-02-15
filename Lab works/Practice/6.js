const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

let value;

if (input === "null") {
    value = null;
} else if (input === "undefined") {
    value = undefined;
} else {
    value = input;
}

const result = value ?? "default";

console.log(result);
