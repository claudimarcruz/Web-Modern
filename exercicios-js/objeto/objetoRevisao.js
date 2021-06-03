// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Nokia'
produto['tipo'] = 'celular'
produto.preco = 235

console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
    modelo: 'civic',
    valor: 25000,
    proprietario: {
        nome: 'Marcos',
        idade: 55,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123

        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'AV Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)


