let vetor = [15, 2, 3, 4, 5, 6, 7, 8, 9, 10]
maiorNumero = 0
menorNumero = 0
for ( let i = 0 ; i <vetor.length ; i++) {
    if (i == 0) {
        maiorNumero = vetor[i]
        menorNumero = vetor[i]
    }
    if (vetor[i] > maiorNumero) {
        maiorNumero = vetor[i]
    }
    if(vetor[i] < menorNumero) {
        menorNumero = vetor[i]
    }
}

console.log('Maior: ' + maiorNumero + '\nMenor: ' + menorNumero )