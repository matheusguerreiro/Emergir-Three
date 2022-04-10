class AlunosService {
  constructor() {
    this.alunos = []
  }

  add(aluno) {
    if (!aluno instanceof AlunoModel) {
      throw TypeError('Type não é AlunoModel!')
    }
    this.alunos.push(aluno)
  }
}