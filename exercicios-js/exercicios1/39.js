let trocaDeVetor = function(vetor1, vetor2) {
    if(vetor1.length == vetor2.length) {
        for(let i = 0 ; i < vetor1.length ; i++) {
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
            console.log('Novo valor vetor 1: ' + vetor1)
            console.log('Novo valor vetor 2: ' + vetor2)
        } 
        else {
            console.log('Vetores diferentes')
        }    

}

let vetor1 = [1, 2, 3, 8]
let vetor2 = [4, 5, 6]

trocaDeVetor(vetor1, vetor2)