console.log(soma(3, 4));

// Function declaration
function soma(x, y) {
    return x + y;
}

/*
// Function expression
const sub = function (x, y) {
    return x - y;
}
*/

// Function expression com arrow
const sub = (x, y) => x - y;
console.log(sub(3, 4));

// Named funcion expression
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));