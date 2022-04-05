let str1 = 'minha string bacanuda'
console.log(str1.replace(/i/g, 'o'))
console.log(str1)

console.log(str1.indexOf('string')) // 6
console.log(str1.lastIndexOf('string')) // 6

console.log(str1.includes('minha'))
console.log(str1.indexOf('minha'))

console.log(str1.slice(2, 7)) // nha s
console.log(str1.substring(2, 7)) // nha s

console.log(str1.toLocaleLowerCase())
console.log(str1.toLocaleUpperCase())

let strAsObj = new String('minha string como objeto')
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())

let str1t = '     minha string     '
console.log(str1t.trim()) // remove os espaços em branco, inicio e fim
// trimStart(), trimEnd()

str1 = '0123456789'
console.log(str1.padStart(20)) // preenche com espaços ou com algum caractere
console.log(str1.padEnd(20, '*'))

let nt = '99999-9999'
console.log(nt.length)
function mascararNT(nt) {
  let hifem = nt.indexOf('-')
  let p1 = nt.slice(0, hifem)
  let p2 = nt.slice(hifem + 1)

  return `${p1[0].padEnd(p1.length, '*')}-${p2.slice(-2).padStart(p2.length, '*')}`
}
console.log(mascararNT(nt))

let str2 = 'hoje é sábado'
console.log(str2.startsWith('hoje')) // começa com hoje? segundo paramentro é opcional, a partir de onde começar a procurar?
console.log(str2.endsWith('hoje')) // termina com hoje? segundo paramentro opcional

let str3 = 'abcdefgh'
console.log(str3.charAt(1)) // retorna um char no indice informado

console.log(str3.charCodeAt(1)) // retorna o unicode do caractere informado