function ola() {
  console.log('Olá, Mundo!')
}
ola()

const ola2 = function() {
  console.log('Olá 2!')
}
ola2()

const ola3 = () => {
  console.log('Olá 3!')
}
ola3()

function obtemDiaSemana() {
  return new Date().getDay()
}
let dia = obtemDiaSemana()
console.log(dia)

const soma = (n1 = 0, n2 = 0) => {
  r = n1 + n2
  return r
}
console.log(soma(5, 2))

