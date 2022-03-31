let arr = [1, 3, 5, 2, 4, 6]

// console.log(arr.reverse()) 

console.log(arr.reduce((acumulador, atual) => {
  return acumulador + atual
})) // retorna um único valor