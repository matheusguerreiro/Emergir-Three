function media() {
  let s = 0
  let m = 0
  for (let i = 0; i < arguments.length; i++) {
    if (typeof(arguments[i]) !== 'number') {
      return 'Erro! Digite apenas Números...'
      // ou throw Error('Digite apenas Números...')
    } else {
      s += arguments[i]
    }
  }
  m = (s / arguments.length) || 0
  return m.toFixed(1)
}

console.log(media(2, 4))