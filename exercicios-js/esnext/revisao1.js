// let e var
{
    let a = 2 // let tem escopo de bloco
    var b = 3 // var não tem escopo de bloco
    console.log(a)
}

console.log(b)

// Template String

const produto = 'iPad'
console.log(`${produto} é caro!` )

// Destructuring

const [l, e, ...tras] = 'cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome)