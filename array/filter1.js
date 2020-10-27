const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preeco: 18.99, fragil: false }
];

console.log(produtos.filter(function(p) {
    return false;
}));

const ifFrageis = produto => produto.fragil;
const ifCaros = produto => produto.preco >= 500;
const resistente = produto => produto.fragil === false;

const listaFinal = produtos.filter(ifFrageis).filter(ifCaros);
const listaResistentes = produtos.filter(resistente);

console.log(listaFinal, listaResistentes);