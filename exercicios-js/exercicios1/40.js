let conceito = function(vetor) {
    for (i = 0 ; i < vetor.length ; i++) {
        if (vetor[i] > 0.0 && vetor[i] < 4.9 ) {
            console.log('Nota: ' + vetor[i] + ' Conceito D')
        }else if (vetor[i] > 5.0 && vetor[i] < 6.9) {
            console.log('Nota: ' + vetor[i] + ' Conceito C')
        }else if (vetor[i] > 7.0 && vetor[i] < 8.9) {
            console.log('Nota: ' + vetor[i] + ' Conceito B')
        }else {
            console.log('Nota: ' + vetor[i] + ' Conceito A')
        }
    }
}

notas = [0.5, 1.5, 4.7, 5.5, 6.5, 8.8, 9.7]
conceito(notas)