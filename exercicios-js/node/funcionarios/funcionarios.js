const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const nacionalidadeChinesa = lista => lista.pais === 'China'
const generoFeminino = lista => lista.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

const funcionarias = funcionarios
    .filter(nacionalidadeChinesa)
    .filter(generoFeminino)
    .reduce(menorSalario)
    console.log(funcionarias)

})


