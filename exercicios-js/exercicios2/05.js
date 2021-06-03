/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false*/

let maiorOuIgual = function(x, y) {
    if (x >= y) {
        return true 
    }else {
        return false
    }
}

console.log(maiorOuIgual(0, "0"))

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
    }

console.log(maiorOuIgual2(0, "1"))