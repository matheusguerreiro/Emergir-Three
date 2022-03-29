const pessoas = [
  {nome: 'Matheus', idade: 30},
  {nome: 'Ellen', idade: 35}
]

for (let i = 0; i < pessoas.length; i++) {
  console.log(`Eu sou ${pessoas[i].nome} e tenho ${pessoas[i].idade} anos.`)
}