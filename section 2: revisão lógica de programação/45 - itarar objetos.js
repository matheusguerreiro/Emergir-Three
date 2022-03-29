const pessoa = {
  nome: 'Adão',
  idade: 300,
  email: 'adao@email.com'
}
for (let prop in pessoa) {
  console.log(prop)
  console.log(pessoa[prop])
}