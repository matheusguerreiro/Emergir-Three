const pai = {
    nome: "pai",
    falar: function (msg) {
        console.log(`${this.nome} está falando`)
    }
}

const filho = Object.create(pai, { nome: { value: "junior", enumerable: true } })

const obj1 = {
    a: "a",
    b: "b",
    c: "c"
}
const obj2 = {
    b: "b2",
    d: "d2"
}
// Object.defineProperty(obj2, "naoEnumeravel", {
//     value: "nao enumeravel"
// })
Object.defineProperties(obj2, {
    naoEnumeravel: {
        value: "valor nao enumeravel"
    },
    enumeravel: {
        value: "valor enumeravel",
        enumerable: true
    }
})

const filha = Object.assign({}, obj1, filho)

// const clone = Object.assign(obj2, obj1)
const obj5 = Object.assign({}, obj2)
console.log(obj5)

obj2.teste = "valor teste"

const obj3 = { ...obj1, ...obj2 }
const obj4 = { ...obj2, ...obj1 }
console.log(obj3)
console.log(obj4)

console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))


/* 

Object.create()

    O método Object.create() cria um novo objeto, utilizando um outro objecto existente como protótipo para o novo objeto a ser criado.

Sintaxe
    Object.create(proto[, propertiesObject])

Parâmetros
    proto
        O objeto que deve ser o protótipo do objeto recém-criado.
    propertiesObject
        Opcional. Se especificado e não undefined, um objeto cuja as propriedades próprias enumeráveis (isto é, aquelas propriedades definidas sobre si mesmo, e não propriedades enumeráveis ao longo da sua cadeia protótipa) especificam os nomes das propriedades a serem adicionadas ao objeto recém-criado, com os nomes das propriedades correspondentes. Essas propriedades correspondem ao segundo argumento de Object.defineProperties().

Retorno
    Um novo objeto com o protótipo de objeto e propriedades especificadas.

*/

/* 

Object.assign()

    O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.

Sintaxe
    Object.assign(destino, ...origens)

Parâmetros
    destino
        O objeto destino.
    origens
        Um ou mais objetos de origem.

Valor retornado
    O objeto destino será retornado.

*/

/* 

Object.keys()

    O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in  enumera propriedades que estejam na cadeia de protótipos).

Sintaxe
    Object.keys(obj)

Parametros
    obj
        O objeto cujas propriedades são enumeráveis.

Descrição
    Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.

*/

/* 

Object.values()

    O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).

Sintaxe
    Object.values(obj)

Parâmetros
    obj
        O objeto cujos valores das propriedades enumeradas serão retornados.

Valor de retorno
    Um array contendo os valores das propriedades enumeradas do dado objeto.

Descrição
    Object.values() retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto. A ordem das propriedades é a mesma que a dada pelo laço sobre os valores da propriedade do objeto manualmente.

*/

/* 

Object.entries()

    O método Object.entries() retorna uma array dos próprios pares  [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain).

Sintaxe
    Object.entries(obj)

Parâmetros
    obj
        O objeto cujos próprios pares [key, value] de propriedades enumeráveis deverão ser retornados.
        
Valor de retorno
    Uma array de pares [key, value] enumeráveis de propriedades de um dado objeto.

Descrição
    Object.entries() retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto. A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.

*/