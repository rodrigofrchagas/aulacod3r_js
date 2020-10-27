// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha branca';
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: 'Rodrigo', idade: 25 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Chagas';
delete pessoa.nome;
pessoa.idade = 26;
console.log(pessoa);

// Object.freeze = selado + valores constantes
const jogo = { nome: 'Horizon Zero Down', preco: 'caro demais' }
Object.freeze(jogo);
console.log('Congelado:', Object.isFrozen(jogo));

jogo.qualidade = 'Ótimo';
jogo.nome = 'Metal Gear Solid';
delete jogo.preco;
console.log(jogo);