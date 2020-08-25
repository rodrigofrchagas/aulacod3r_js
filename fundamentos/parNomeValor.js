// par nome (ou chave, ou identificador)/valor
const saudacao = 'Opa!' // contexto léxico (contexto físico da declaração) 1

function exec() {
    const saudacao = 'Faaaala mlk' // contexto léxico 2
    return saudacao;
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Rodrigo',
    idade: 26,
    peso: 83,
    endereco: {
        logradouro: 'Rua Abuluenapeak',
        numero: 01
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);