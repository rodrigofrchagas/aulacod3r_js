function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max];
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo);
    });
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 25, 4000),
        gerarNumerosEntre(1, 25, 3000),
        gerarNumerosEntre(1, 25, 500),
        gerarNumerosEntre(1, 25, 600),
        gerarNumerosEntre(1, 25, 1000),
        gerarNumerosEntre(1, 25, 2000),
    ]);
}

console.time('promise');

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise');
    })