let msg = ''
let idade = 17

if (idade >= 18) {
  msgMaiorIdade = 'Maior de idade!'
} else {
  msg = 'Menor de idade!'
}

let msg2 = (idade >= 18) ? 'Maior!' : 'Menor' // operador ternário
console.log(msg, msg2)