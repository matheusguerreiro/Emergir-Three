class AlunoModel {
  /* 
    constructor(aluno) {
      this.nome = nome
      ...
    } 
  */
  constructor({nome, _id, notas} = {notas: {}}) {
    this.nome = nome
    this._id = (_id !== undefined) ? _id : this.gerarId()
    this.notas = {...notas}

    if (this._id > AlunoModel.maiorId) {
      AlunoModel.maiorId = this._id
    }

    this.media = {}

    for (let materia in this.notas) {
      this.media[materia] = avarege(...this.notas[materia])
    }
  }
  gerarId() {
    return AlunoModel.maiorId + 1
  }
}

AlunoModel.maiorId = 0