/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60*/

let somarNumeros = function(lista) {
    let soma = 0
    for (let i = 0 ; i < lista.length; i++) {
        soma = soma + lista[i]
    }
    return soma
}

console.log(somarNumeros([10, 10, 15]))