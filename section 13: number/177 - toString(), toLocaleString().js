let n = 15

console.log(n.toString())

console.log(0 .toString(2))
console.log(1 .toString(2))
console.log(2 .toString(2))
console.log(3 .toString(2))
console.log(4 .toString(2))
console.log(5 .toString(2))

console.log(15 .toString(16))

n = 123456.789
console.log(n.toLocaleString())
console.log(n.toLocaleString('pt-br'))
console.log(n.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}))
console.log(n.toLocaleString('pt-br', {style: 'currency', currency: 'usd'}))