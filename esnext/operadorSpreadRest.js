// operadoor ... rest(juntar)/spread(espalhar)

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.67 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// usar spread com array
const grupoA = ['Rodrigo', 'Karina', 'Henrique'];
const grupoFinal = ['Andrea', ...grupoA, 'Douglas'];
console.log(grupoFinal);