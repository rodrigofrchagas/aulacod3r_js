// novo recurso - ES2015

const pessoa = {
    nome: 'Rodrigo',
    idade: 26,
    endereco: {
        logradouro: 'Rua SAS',
        numero: '80'
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n,  idade: i} = pessoa;
console.log(n, i);

const { sobrenome, temCachorro = true} = pessoa;
console.log(sobrenome, temCachorro);

const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

const { conta: { ag, num } } = pessoa;
console.log(ag, num);