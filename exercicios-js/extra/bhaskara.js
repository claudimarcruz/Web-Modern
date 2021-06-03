let bhaskara = function(a, b, c) {
    if (a < 0) {
        return ('Não é equação do 2 grau')
    }else {
         delta = (b ** 2) - 4 * a * c 
    }if (delta < 0) {
        return('Não existem raízes reais')
    }else {
        r1 = (-b + Math.sqrt(delta)) / 2 * a
        r2 = (-b - Math.sqrt(delta)) / 2 * a
    }
    return r1 + ' e ' + r2

    
}

console.log(bhaskara(-3, 1, 4))