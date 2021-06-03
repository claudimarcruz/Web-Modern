const nums = [1, 2, 3, 4, 1] 

// For com propósito
let resultado = nums.map(function(e) {
    if (e > 2) {
        return e * 3
    }else { 
        return e       
    }


})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)