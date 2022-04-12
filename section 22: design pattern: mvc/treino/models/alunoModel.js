function nA() {
  return ((Math.random()*10)+1).toFixed(1)
}

class Aluno {
  constructor(nome) {
    this.nome = nome
    this.notas = [nA(), nA(), nA(), nA()]
    let s = 0
    for (let i = 0; i < this.notas.length; i++) {
      s += parseFloat(this.notas[i])
    }
    this.media = (s/4).toFixed(1)
  }
}
