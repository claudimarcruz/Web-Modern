function formatarDecimal(valorDecimal) {
    let valorFornecido = 'R$ ' + (valorDecimal.toFixed(2).replace(".", ","))
    console.log(valorFornecido)
}

formatarDecimal(0.1 + 0.2)