const quaseArray = { 0: 'Gato', 1: 'Cachorro', 2: 'Lobo' }
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray);
console.log(quaseArray[0]);

const meuArray = ['Gato', 'Cachorro', 'Lobo'];
console.log(quaseArray.toString(), meuArray);