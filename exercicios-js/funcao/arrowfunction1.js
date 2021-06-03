let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 *a
}

divisao = (a, b) => a/b
console.log(divisao(10, 2))

dobro = a => 2 *a 
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())