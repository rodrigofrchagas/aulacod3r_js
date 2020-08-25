const notas = [6.7, 7.8, 9.5, 4.3, 3.2];

for (let i in notas) {
     console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Chagas',
    idade: '26',
    peso: '82'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}