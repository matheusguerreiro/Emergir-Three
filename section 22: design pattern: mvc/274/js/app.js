// alunos
/* const alunos = [
  {
    _id: 0,
    nome: "chico melato",
    notas: {
      portugues: [1, 1, 2, 2],
      matematica: [2, 2, 2, 2],
      historia: [2, 2, 3, 3],
      ciencias: [3, 3, 3, 3],
    },
  },
  {
    _id: 1,
    nome: "talita lima",
    notas: {
      portugues: [4, 4, 4, 4],
      matematica: [4, 4, 5, 5],
      historia: [5, 5, 6, 6],
      ciencias: [7, 7, 8, 9],
    },
  },
]; */


const alunosServices = new AlunosService()

// calcula a media por materia de cada aluno e cria uma propriedade chamada media
alunos.forEach(aluno => {
  /* aluno.media = {}
  for (let materia in aluno.notas) {
    aluno.media[materia] = avarege(...aluno.notas[materia])
  } */
  alunosServices.add(new AlunoModel(aluno))
});

const alunosView = new AlunosView(document.querySelector('table'))

const alunosController = new AlunosController(alunosServices, alunosView)

/* // inserir no thead nome e cada uma das materias
let htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
  // console.log(materia)
  return `<td>${materia}</td>`
}).join('')
// console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias

document.querySelector('table thead').appendChild(htmlHeader)
 */

/* // percorrer cada aluno e gerar o html para incluir no tbody / renderizar tabela com novo aluno
function renderizar() {
  document.querySelector('table tbody').innerHTML = ''
  alunos.forEach(aluno => {
    const htmlBody = document.createElement('tr')
    let htmlMedias = `<td>${aluno.nome}</td>`
    Object.keys(aluno.notas).forEach(materia => {
      htmlMedias += `<td>${aluno.media[materia]}</td>`
    })
    htmlBody.innerHTML = htmlMedias
    document.querySelector('table tbody').appendChild(htmlBody)
  })
}
renderizar() */


// gerar notas aleatorias
let notaA = function() {
  nA = Math.floor(Math.random() * 10)
  return nA
}


// adicionar aluno
document.querySelector('form').addEventListener('submit', function(evento) {
  evento.preventDefault()
  const nome = document.getElementById('first_name').value
  /* const novoAluno = {
    _id: alunos.length + 1,
    nome: nome,
    notas: {
      portugues: [notaA(), notaA(), notaA(), notaA()],
      matematica: [notaA(), notaA(), notaA(), notaA()],
      historia: [notaA(), notaA(), notaA(), notaA()],
      ciencias: [notaA(), notaA(), notaA(), notaA()],
    },
  }
  novoAluno.media = {}
  for (let materia in novoAluno.notas) {
    novoAluno.media[materia] = avarege(...novoAluno.notas[materia])
  }
  alunos.push(novoAluno)
  renderizar() */
  alunosController.add({nome: nome})
})