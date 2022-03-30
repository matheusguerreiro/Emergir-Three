function soma(params) {
  let s = 0
  for (let i = 0; i < params.length; i++) {
    s += params[i]
  }
  return s
}
console.log(soma([1, 2, 3]))

function soma2() {
  let s = 0
  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i]
  }
  return s
}
console.log(soma2(2, 2, 5, 7, 8))