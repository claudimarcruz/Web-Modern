/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}*/

let inverterObj = function(obj) {
    const objFinal = {}
    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0,
              valor = 1

        objFinal[ parChaveValor[valor]] = parChaveValor[chave]
    })

    return objFinal

}

obj1 = { a: 1,
         b: 2,
         c: 3
    }

console.log(inverterObj(obj1))

