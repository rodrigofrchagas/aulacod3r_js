function criarProduto (nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 3000));
console.log(criarProduto('iPad', 2000));
console.log(criarProduto('PS5', 'Um absurdo', 'só imposto kkkkk'));