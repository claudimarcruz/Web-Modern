let notaRecebida = function(nota) {
     divisao = Math.floor(nota / 5)
     restoDivisao = nota - (divisao * 5)
     acrescimo = 5 - restoDivisao
     notaFinal = nota + acrescimo

    if(nota < 38) {
        return 'Aluno reprovado'
    }else {
        if (restoDivisao >= 3) {
            return 'Nota Corrigida: ' + notaFinal
        }else if (restoDivisao <= 2) {
            return 'Nota final: ' + nota

        }
    
}
}

console.log(notaRecebida(41))
