let impares = function(valorInicial, valorFinal) {
    if (valorInicial > valorFinal) {
    for (let numero = valorFinal ; numero <= valorInicial ; numero++) {
        if ( numero % 2 == 1) {
            console.log(numero)
        }
    }}else{
        for (let numero = valorInicial ; numero <= valorFinal; numero++) {
            if ( numero % 2 == 1) {
                console.log(numero)
            }
        
    }
}}

impares(100, 1 )

