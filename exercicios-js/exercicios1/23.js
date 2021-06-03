let resultadoFinal = function(codigoAluno, nota1, nota2, nota3) {
    let maiorNota = nota1
    if (nota2 > maiorNota) {
        maiorNota = nota2
    }if (nota3 > maiorNota) {
        maiorNota = nota3
    }
    let menorNota = nota1
    if (nota2 < menorNota) {
        menorNota = nota2
    }if (nota3 < menorNota) {
        menorNota = nota3
    }

    let notaMeio = nota1
    if (nota2 > notaMeio && nota2 < nota3) {
        notaMeio = nota2
    }if (nota3 > notaMeio && nota3 < nota1) {
        notaMeio = nota3
    }
    console.log(maiorNota, notaMeio, menorNota)

    let mediaFinal = ((maiorNota * 4 + notaMeio * 3 + menorNota * 3) / 10) 
    if (mediaFinal >= 5) {
        console.log('Aprovado')
    }else {
        console.log('Reprovado')
    }

    console.log('Código do aluno: ' + codigoAluno + '\nNota 1: ' + nota1 + '\nNota 2: ' + nota2 + '\nNota 3: ' + nota3 + '\nMédia: ' + mediaFinal)
    


    

}

resultadoFinal(100, 700, 9999, 23587)