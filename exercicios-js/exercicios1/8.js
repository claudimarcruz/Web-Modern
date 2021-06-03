let desempenho = function(lista) {
    let piorJogo = lista[0]
    let partidaPiorJogo= 0
    for ( i = 0 ; i < lista.length ; i++) {
        if (lista[i] < piorJogo) {
            piorJogo = lista[i]
            partidaPiorJogo = i + 1
        }

    }
    let melhorJogo = lista[1]
    let quantMelhorJogo = 0
    for ( i = 0 ; i < lista.length ; i++) {
        if (lista[i] > melhorJogo) {
            quantMelhorJogo++
            
        }

    }
console.log(partidaPiorJogo, quantMelhorJogo)

}

pontuacoes = [10, 20, 20, 8, 25, 3, 1, 30]
desempenho(pontuacoes)

