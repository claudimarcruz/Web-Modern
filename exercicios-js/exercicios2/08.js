/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0*/

let multiplicar = function(x, y) {
    let resultado = 0
    for (let i = 0; i < y; i++) {
        resultado += x
        
    }
    return resultado

    }


console.log(multiplicar(7, 1))



