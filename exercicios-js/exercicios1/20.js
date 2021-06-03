let calcularTroco = function(valor) {
    
    let notaCem = Math.floor(valor / 100)
    let notaCinquenta = Math.floor((valor % 100) / 50)
    let notaDez = Math.floor((valor % 50) / 10)
    let notaCinco = Math.floor((valor % 10) / 5)
    let notaUm = Math.floor((valor % 5) / 1)
    console.log('Nota de Cem: ' + notaCem)
    console.log('Nota de Cinquenta: ' + notaCinquenta)
    console.log('Nota de Dez: ' + notaDez)
    console.log('Nota de Cinco: ' + notaCinco)
    console.log('Nota de Um: ' + notaUm)





}

valorInformado = 333
calcularTroco(valorInformado)

