function tipoTriangulo(x, y, z) {
    if ( x == y && x == z && y == z ) {
        console.log('Triângulo equilátero!')
    } else if ( x == y || x == z || y == z) {
        console.log('Triângulo isósceles!')
    } else {
        console.log('Triângulo escaleno!')
    }
}

tipoTriangulo(9, 6, 9)
tipoTriangulo(5, 5, 5)
tipoTriangulo(5, 8, 12)