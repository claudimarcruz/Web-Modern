let multVetor = function(vetor, x) {
    
    for (let i = 0 ; i < vetor.length ; i++) {
        if (vetor[i] > 5) {
            resultado = vetor[i] * x
            console.log(resultado)
        } else { (vetor[i] < 5) 
            resultado = vetor[i]
            console.log(resultado)

        }
    }
    
}

let valores = [1, 2, 5, 6, 8]
multVetor(valores, 8)



