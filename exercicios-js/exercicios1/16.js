let calculadora = function(x, operacao, y) {
    switch(operacao) {
        case '+':
            console.log(x + y)
            break
        case '-':
            console.log(x - y)
            break
        case '*':
            console.log(x * y)
            break
        case '/':
            console.log(x / y)
            break
        default:
            console.log('Operação inválida')


    }

}
calculadora(30,'+',3)
calculadora(30,'-',3)
calculadora(30,'*',3)
calculadora(30,'/',3)
calculadora(30,'%',3)