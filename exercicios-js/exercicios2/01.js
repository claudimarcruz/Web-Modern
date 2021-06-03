/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
    Exemplos:
    cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
    cumprimentar("Maria") // retornará "Olá, Maria!"*/

const cumprimentar = function(nome) {
    return 'Olá, '.concat(nome).concat('!')
}

console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))