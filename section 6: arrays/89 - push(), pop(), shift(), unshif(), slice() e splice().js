let arr = []

arr.push(3, 5, 1) // coloca

arr.pop() // retira 1

arr.push(2, 4, 6) // coloca

arr.shift() // retira 3

arr.unshift(22) // coloca 22

console.log(arr)

let arrS = arr.slice(0, 2) // corta

let arrSP = arr.splice(2) // remove e adiciona

console.log(arr)
console.log(arrS)
console.log(arrSP)