let divisao = function(dividendo, divisor) {
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo - (resultado * divisor)
    
    console.log(resultado, resto)
}


divisao(27, 4)

