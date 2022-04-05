function getRandomNumber(inicio = 1, fim = 10, inteiro = true) {
  if (inteiro) {
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio
  } else {
    return ((Math.random() * (fim - inicio + 1)) + inicio).toFixed(2)
  }
}

console.log(getRandomNumber(0, 10))
console.log(getRandomNumber(90, 100))