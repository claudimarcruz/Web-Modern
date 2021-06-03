let planoSaude = function(idade) {
    switch(idade) {
        case 1: 
            console.log('R$ ' + (100 + 80).toFixed(2))
            break
        case 2:
            console.log('R$ ' + (100 + 50).toFixed(2))
            break
        case 3:
            console.log('R$ ' + (100 + 95).toFixed(2))
            break
        case 4:
            console.log('R$ ' + (100 + 130).toFixed(2))
            break
        default:
            console.log('Índice não encontrado na tabela')
    }
}

planoSaude(1)
planoSaude(2)
planoSaude(3)
planoSaude(4)
planoSaude(5)

