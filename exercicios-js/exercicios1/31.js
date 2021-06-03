let vetor = [-5, 3, -9, 8, -7, 10, -11, 15]
quantNegativos = 0
for (let i = 0 ; i < vetor.length ; i++) {
    if (vetor[i] < 0) {
        quantNegativos++
    }
}
 
console.log('Números negativos: ' + quantNegativos)