function soma() {
  let s = 0
  for (let n of arguments) {
    s += n
  }
  return s
}

/* function media(arr) {
  let m = arr[0] / arr[1]
  return m.toFixed(1)
}

console.log(media(soma(2, 4.7, 3, 9.7))) */

function media() {
  return soma(...arguments) / arguments.length
}

let somaa = soma(2, 2, 2)
console.log(somaa)

let mediaa = media(5.3, 6.3, 7.7, 8.3)
console.log(mediaa)