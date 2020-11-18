const fs = require('fs');
const path = require('path');

function conteudoDoArquivo() {
    return new Promise(resolve => {

        const caminho = path.join(__dirname, 'dados.txt');

        function exibirConteudo(_, conteudo) {
            console.log(conteudo.toString());
        }
        
        resolve(fs.readFile(caminho, exibirConteudo));
    })
}

conteudoDoArquivo()
    .then(console.log());
