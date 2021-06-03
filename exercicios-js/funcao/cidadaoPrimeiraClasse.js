// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function() { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 8))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar função como parâmetro
function run(fun) {
    fun()
}
run (function () { console.log('Executando...') })


// Uma função pode retornar/conter uma funcão 

function soma(a, b) {
    return function(c) {
    console.log((a + b) * c)
    }
}
soma(55, 45)(2)
const cemMais = soma(55, 45)
cemMais(2)