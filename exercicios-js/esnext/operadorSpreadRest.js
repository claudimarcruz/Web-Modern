// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12356.66}
const clone = {cargo: 'Gerente', ...funcionario}
console.log(clone)

// usar spread com array

const grupoA  = ['Ana', 'Bia', 'Cris']
const grupoFinal = ['João', ...grupoA, 'Pedro']
console.log(grupoFinal)