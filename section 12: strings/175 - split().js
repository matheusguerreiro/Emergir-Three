function formatarNome(nomeCompleto) {
  let nomeArray = nomeCompleto.split(' ')
  if (nomeArray.length === 1) {
    return nomeCompleto
  }
  let primeiroNome = nomeArray.shift()
  return nomeArray.join(' ') + ', ' + primeiroNome
}

console.log(formatarNome('Matheus Guerreiro Ferreira'))