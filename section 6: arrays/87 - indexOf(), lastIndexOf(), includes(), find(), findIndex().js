/**
 * every() e some() vão retornar valore booleanos
 * forEach() um loop mais elegante
 * map() vai transformar os elementos de array baseado no retorno da callback
 * filter() vai retornar um novo array filtrado
*/

let arr = [2, 5, 6, 12, 55, 7, 5, 7]

console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))

console.log(arr.includes(7))

console.log(arr.find((el) => {
  return el > 10
}))

console.log(arr.findIndex((el) => {
  return el > 10
}))
