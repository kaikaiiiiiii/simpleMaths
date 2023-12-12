const puzzle = require("./puzzle.sample")

console.log(puzzle);

function deepCopy(arr) {
    // copy array of objects
    return arr.map(obj => Object.assign({}, obj));
}

