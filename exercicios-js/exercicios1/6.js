const jurosSimples = function (capitalInicial, taxaJuros, tempoAplicacaoAnos) {
    valorEncontrado = capitalInicial * (1 + taxaJuros / 100 * tempoAplicacaoAnos)
    return 'O valor com juros simples é R$ ' + valorEncontrado.toFixed(2)
}
console.log(jurosSimples(18000, 6, 3))

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacaoMeses) {
    return capitalInicial * ((1 + taxaJuros / 100) ** tempoAplicacaoMeses)
}
console.log(`O valor com juros compostos é R$ ${jurosCompostos(500, 5, 1).toFixed(2)}`)