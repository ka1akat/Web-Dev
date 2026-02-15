const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const parts = input.split(' ');

class Shape {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
    }

    area() {
        return this.a * this.b;
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side);
    }

    area() {
        return this.a * this.b;
    }
}

let shape;

if (parts[0] === 'rect') {
    const height = Number(parts[1]);
    const width = Number(parts[2]);
    shape = new Rectangle(height, width);
} else if (parts[0] === 'square') {
    const side = Number(parts[1]);
    shape = new Square(side);
}

console.log(shape.area());
