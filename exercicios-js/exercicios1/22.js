let valorAnuidade = function(mes, anuidade) {
    let taxaJuros = 5

    switch(mes) {
        case 1:
            return 'R$ ' + (anuidade.toFixed(2))
        case 2:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 1).toFixed(2)
        case 3:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 2).toFixed(2)
        case 4:
             return 'R$ '+ (anuidade * (1 + taxaJuros / 100) ** 3).toFixed(2)
        case 5:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 4).toFixed(2)
        case 6:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 5).toFixed(2)
        case 7:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 6).toFixed(2)
        case 8:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 7).toFixed(2)
        case 9:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 8).toFixed(2)
        case 10:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 9).toFixed(2)
        case 11:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 10).toFixed(2)
        case 12:
            return 'R$ ' + (anuidade * (1 + taxaJuros / 100) ** 11).toFixed(2)
    }

}

console.log(valorAnuidade(1, 500))
console.log(valorAnuidade(12, 500))

