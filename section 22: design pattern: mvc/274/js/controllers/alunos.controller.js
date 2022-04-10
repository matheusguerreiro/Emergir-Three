class AlunosController {
  constructor(service, view) {
    view.renderizar(service.alunos)
    this.view = view
    this.service = service
  }

  add(aluno) {
    this.service.add(new AlunoModel(aluno))
    this.view.renderizar(this.service.alunos)
  }

}