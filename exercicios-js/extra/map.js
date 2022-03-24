const produtos = [
    {
        tv: "samsung",
        preco: 5000 
    },

    {
        tv: "philips",
        preco: 4800
    }
]

const desncontoAVista = produtos.map(p=> p.preco * 0.90)
const nome = produtos.map(p=> p.tv + "!!!")

console.log(desncontoAVista)
console.log(nome)
console.log(produtos)