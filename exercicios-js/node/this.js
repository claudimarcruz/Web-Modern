// dentro do módulo
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dento de uma funçaõ...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

