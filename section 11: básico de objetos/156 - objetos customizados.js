const t1 = {
  nome: "task 1",
  criarData: new Date(),
  atualizarData: null,
  completo: false,
  mudarNome: function(nome) {
    this.nome = nome
  }
}

const t2 = {
  nome: "task 2",
  criarData: new Date(),
  atualizarData: null,
  completo: false
}

t1.nome = "task 1 atualizado"
t2.nome = "task 2 atualizado"

t1.mudarNome("vai vai vai")

console.log(t1)
console.log(t2)

