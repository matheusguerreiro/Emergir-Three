let arr = [1, 5, 10, 'ola', true]
let arrN = [3, 7, 3, 5, 7, 9, 4]

/* let soNumeros = arr.some((elemento) => {
  return typeof(elemento) === 'number'
})
console.log(soNumeros) */

/* let arr1 = arr.filter((elemento, indice, arr) => {
  return typeof(elemento) === 'number'
})
console.log(arr1) */

/* let arr1 = arr.forEach((elemento, indice, arr) => {
  console.log(indice, ': ', elemento)
}) */

let arr1 = arrN.map((e, i) => {
  return e += 1
})
console.log(arr1)