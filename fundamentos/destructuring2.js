const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

// teste
const array = [1, 2, 3, 4, 5, 6];
const [nArray] = array[2];
console.log(nArray);