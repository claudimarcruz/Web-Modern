let aumento = function(planoTrabalho, salarioAtual) {
    let planoA = salarioAtual + (salarioAtual * 0.10)
    let planoB = salarioAtual + (salarioAtual * 0.15)
    let planoC = salarioAtual + (salarioAtual * 0.20)
    switch(planoTrabalho) {
       case 'A':
            return ('R$ ' + planoA.toFixed(2).replace('.', ','))
        case 'B':
            return ('R$ ' + planoB.toFixed(2).replace('.', ','))
        case 'C':
            return ('R$ ' + planoC.toFixed(2).replace('.', ','))
            
    }

}

console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))


