function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    montante = capitalInicial + (capitalInicial * (taxaJuros / 100) * tempoAplicacao);
    return montante;
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    montante = capitalInicial * ((1 + (taxaJuros / 100)) ** tempoAplicacao);
    return montante;
}

console.log(jurosSimples(100, 10, 2));
console.log(jurosCompostos(100, 10, 2));