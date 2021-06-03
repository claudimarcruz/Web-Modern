let mdc = function(x, y) {
    r = x % y
    x = y
    r = y

    return r 
}

console.log(mdc(9, 3))