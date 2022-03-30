function imc(p = 0, a = 0) {
  let imc = 0
  if (typeof(p) !== 'number' || typeof(a) !== 'number') {
    throw Error('Erro! Digite apenas Números...')
  } else if (p === 0 || a === 0) {
    throw Error('Erro! Parâmetros Obrigatórios...')
  } else {
    imc = p / (a ** 2)
  }
  return imc.toFixed(1)
}

function classificar(imc) {
  if (imc <= 16.9) {
    return `IMC: ${imc} - Classificação: Muito abaixo do peso`
  } else if (imc <= 18.4) {
    return `IMC: ${imc} - Classificação: Abaixo do peso`
  } else if (imc <= 24.9) {
    return `IMC: ${imc} - Classificação: Peso normal`
  } else if (imc <= 29.9) {
    return `IMC: ${imc} - Classificação: Acima do peso`
  } else if (imc <= 34.9) {
    return `IMC: ${imc} - Classificação: Obesidade grau I`
  } else if (imc <= 40) {
    return `IMC: ${imc} - Classificação: Obesidade grau II`
  } else {
    return `IMC: ${imc} - Classificação: Obesidade grau III`
  }
}

console.log(classificar(imc(72, 1.71)))