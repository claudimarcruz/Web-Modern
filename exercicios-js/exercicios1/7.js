function raizQuadrada(x) {
    return Math.sqrt(x)
}

let bhaskara = function(ax2, bx, c) {
    let vetor = []
    delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return 'Delta é negativo'
    }else {
     v1 = (- bx + raizQuadrada(delta)) / 2 * ax2
     v2 = (- bx - raizQuadrada(delta)) / 2 * ax2
    }
    vetor.push(v1, v2)
    return vetor
}

//console.log(bhaskara(4, 2, 2))
console.log(bhaskara(1, 5, 4))



