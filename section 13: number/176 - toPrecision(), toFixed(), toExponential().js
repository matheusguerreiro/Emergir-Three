let n = 1234567.890

console.log(n.toFixed(2))
console.log(n.toFixed(5))

console.log(n.toPrecision(7))
console.log(n.toPrecision(8))
console.log(n.toPrecision(15))

n = 12.34567
console.log(n.toExponential()) // converte para notação cientifica
console.log(n.toExponential(4))