console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[3]
}

console.log([1, 2, 3, 4].first())
console.log(['a','b', 'c', 'd'].first())

// cuidado!!

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('escola Cod3r'.reverse())