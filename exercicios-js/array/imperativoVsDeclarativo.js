const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// imperativo

let somaNotas = 0
for (let i = 0; i < alunos.length; i++ ) {
    somaNotas += alunos[i].nota
}
console.log(somaNotas / alunos.length)
  
// declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

