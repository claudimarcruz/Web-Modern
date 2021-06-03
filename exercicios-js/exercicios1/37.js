let progrAritmetica = function(quantTermos, primeiroTermo, razao) {
    let resultado = []
    for (let i = 0 ; i < quantTermos; i++) {
        resultado = (primeiroTermo + (razao * i))
        console.log(resultado)

    }
    let soma = 0
    for (let j = 0 ; j < resultado.length ; j++) {
        soma = soma + resultado[j]
         console.log(soma)
    }
    
    
    
}

progrAritmetica(5, 2, 2)