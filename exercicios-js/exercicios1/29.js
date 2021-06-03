let intervalo = function(vetor) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for(let i = 0 ; i < vetor.length ; i++) {
        if (vetor[i] >= 10 && vetor[i] <=20) {
            dentroIntervalo++
        }else {
            foraIntervalo++
        }
    }

    console.log('Entre 10 e 20: ' + dentroIntervalo + '\nFora: ' + foraIntervalo + '\nVetor:' + vetor)
}

valores = [1, 2, 11, 15, 16, 17, 25, 5, 6, 19]
intervalo(valores)

