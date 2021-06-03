/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5*/

let contarPalavras = function(frase){
    quantPalavras = 0
    for (let i = 0 ; i < frase.length ; i++) {
        if (frase.charAt(i) === ' '){
            quantPalavras++
        }
    }
    return quantPalavras + 1
}

    

console.log(contarPalavras("sou uma frase"))