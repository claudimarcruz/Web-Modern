const nomefruta = function(fruta) {
    switch(fruta) {
        case 'maça':
            console.log('Não vendemos esta fruta aqui ')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são três reais o quilo')
            break
        default:
            console.log('erro!!!!')
        
    }
}

nomefruta('maça')
nomefruta('kiwi')
nomefruta('melancia')
nomefruta('carambola')