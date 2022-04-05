function formatarNome(nomeCompleto) {
  nomeCompleto = nomeCompleto.trim()
  let primeiroEspaco = nomeCompleto.indexOf(' ')
  if (primeiroEspaco < 0) {
    return nomeCompleto
  }

  let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
  let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)

  return sobreNome + ', ' + primeiroNome
}

console.log(formatarNome('Matheus Guerreiro Ferreira'))

// metodo split() - resolve isso numa boa

