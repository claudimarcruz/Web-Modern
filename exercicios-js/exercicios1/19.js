let valorAPagar = function(codigo, quantidade) {
    let cachorroQuente = 3.00
    let hamburgerSimples = 4.00
    let cheeseburger = 5.50
    let bauru = 7.50
    let refrigerante = 3.50
    let suco = 2.80 
    switch(codigo) {
        case 100:
        return 'R$ ' + ((quantidade * cachorroQuente).toFixed(2).replace('.', ','))
        case 200:
        return 'R$ ' + ((quantidade * hamburgerSimples).toFixed(2).replace('.', ','))
        case 300:
        return 'R$ ' + ((quantidade * cheeseburger).toFixed(2).replace('.', ','))
        case 400:
        return 'R$ ' + ((quantidade * bauru).toFixed(2).replace('.', ','))
        case 500:
        return 'R$ ' + ((quantidade * refrigerante).toFixed(2).replace('.', ','))
        case 600:
        return 'R$ ' + ((quantidade * suco).toFixed(2).replace('.', ','))






    }
}

console.log(valorAPagar(100, 3))
console.log(valorAPagar(200, 3))
console.log(valorAPagar(300, 3))
console.log(valorAPagar(400, 3))
console.log(valorAPagar(500, 3))
console.log(valorAPagar(600, 3))