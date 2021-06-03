/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]*/

let numIndicePar = function(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i = i + 2) {
        if (numeros[i] % 2 == 0) {
            resultado.push(numeros[i])
           
}
            
            
        }
         return resultado
       
    }
   
    

let nums = [10, 70, 22, 43]
console.log(numIndicePar(nums))