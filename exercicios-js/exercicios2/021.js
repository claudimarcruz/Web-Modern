/*Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15*/

let menorNumero = function(array) {
    let menor = array[0]
    let posicao = 0
    for (let i = 0 ; i < array.length ; i++ ) {
        if (array[i] < menor) {
        menor = array[i]
        posicao = i 
        
        }

    }

    console.log('Valor: ' + menor +','+' Posição: ' + posicao)
}

menorNumero([10, 5, 35, 65, 4, -3])