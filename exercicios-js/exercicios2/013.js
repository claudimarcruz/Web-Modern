/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []*/


// não funcionou com as chaves
let SoNumeros = function(array){
    const resultado = []
    for (let itens of array) {
        if ( typeof itens === "number") {
            resultado.push(itens)
            return resultado
    }}
        }

       
    


const nums = [1, 2, "hdfkj", 3]
console.log(SoNumeros(nums))

function filtrarNumeros(array) {
    const resultado = []

    for(let item of array)
    if(typeof item === "number")
    resultado.push(item)
    return resultado
    }

    const nums2 = [1, 2, "hdfkj"]
console.log(filtrarNumeros(nums2))