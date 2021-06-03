/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"*/

let simboloMais = function(numero) {
    let resultado = ''
    for (i = 0; i < numero; i++) {
        resultado += 'x'    
     }
    return ` "${resultado}"`
    
}

console.log(simboloMais(4))

let simboloMais2 = function(numero) {
    return '+'.repeat(numero)
    
}

console.log(simboloMais2(4))

