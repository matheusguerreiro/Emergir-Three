function nA() {
  return (Math.random()*10).toFixed(1)
}

class Aluno {
  constructor(nome) {
    this.nome = nome
    this.notas = [nA(), nA(), nA(), nA()]
    let somaNotas = 0
    for (let i = 0; i < this.notas.length; i++) {
      somaNotas += parseFloat(this.notas[i])
    }
    this.media = (somaNotas/4).toFixed(1)
  }
}

const nome = document.getElementById('nome')
let listaDeAlunos = []

function cadastrarAluno() {
  const aluno = new Aluno(nome.value)
  listaDeAlunos.push(aluno)
  nome.value = ''
  nome.focus()
}