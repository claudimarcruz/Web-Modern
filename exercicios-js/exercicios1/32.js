let vetor = [10, 20, 30, 40, 50]
let soma = 0
let media = 0
for (i = 0 ; i < vetor.length ; i++) {
    soma = soma + vetor[i]
    media = soma / vetor.length
    
}

console.log(media)

let mediaVetor = function(vetor1) {
    let soma1 = 0
    for (j = 0 ; j < vetor1.length ; j++){
        soma1 = soma1 + vetor1[j]
        media1 = soma1 / vetor1.length

        return media1
    }
}

let valores = [100, 200, 300, 100, 300]
console.log(mediaVetor(valores))
