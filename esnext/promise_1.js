const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'João', 'José']);
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log);