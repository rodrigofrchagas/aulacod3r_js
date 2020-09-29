function formatarEmMoeda(valorDecimal) {
    valorMoeda = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    return valorMoeda;
}

console.log(formatarEmMoeda(0.1 + 0.2));