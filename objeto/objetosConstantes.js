// variável -> endereço de memória -> { objeto }
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Rodrigo' }
pessoa.nome = 'Douglas';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

// criando objeto com conteúdo constante
const pessoaConstante = Object.freeze({ nome: "Rodrigo"} );
pessoaConstante.nome = 'Douglas';
console.log(pessoaConstante);