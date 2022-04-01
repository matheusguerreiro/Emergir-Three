let arr = [1, 2, 3]

let obj = {
  nome: 'Maria',
  idade: 45,
  email: 'maria@server.com'
}

// for in - para objs
for (let p in obj) {
  console.log(obj[p])
}

// for of - para arrays
for (n of arr) {
  console.log(n)
}