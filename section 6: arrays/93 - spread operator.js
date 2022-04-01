// ...

let arr = [1, 2, 5, 3, 6, 7, 8, 4]
let arr1 = [3, 4, 9]


function sum() {
  console.log(arguments)
  console.log(arguments.length)
}

sum(...arr)

arr.push(...arr1)
console.log(arr)