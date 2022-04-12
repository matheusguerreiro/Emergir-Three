let listaDeAlunos = []

const nome = document.getElementById('nome')
const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', function(e) {
  e.preventDefault()
  const aluno = new Aluno(nome.value)
  listaDeAlunos.push(aluno)
  nome.value = ''
  nome.focus()
})