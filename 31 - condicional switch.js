let dia = ''
let diaN = 3

switch (diaN) {
  case 0:
    dia = 'dom'
    break
  case 1:
    dia = 'seg'
    break
  case 2:
    dia = 'ter'
    break
  case 3:
    dia = 'qua'
    break
  case 4:
    dia = 'qui'
    break
  case 5:
    dia = 'sex'
    break
  case 6:
    dia = 'sab'
    break
  default:
    dia = '...'
}

console.log(`Hoje é ${dia}`)