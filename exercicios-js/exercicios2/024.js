/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1*/

let quantCaractere = function(caractere, string) {
    let numCaractere = 0
    for (let i = 0 ; i < string.length; i++){
        if (string.charAt(i) === caractere) {
            numCaractere++
        }
    }
    return numCaractere
}

console.log(quantCaractere('a', 'aaaA'))