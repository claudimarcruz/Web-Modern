// Arrow Function

const soma = (a, b) => a + b //return implícito
console.log(soma(2, 5))

const divisao = (c, d) => {
    return c/d
}
console.log(divisao(10, 2))   

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let soma = 0
    numeros.forEach(n => soma += n)
    return soma 
}
console.log(total(2, 3, 4, 5))