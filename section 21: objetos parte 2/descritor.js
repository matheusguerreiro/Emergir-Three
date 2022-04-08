'use strict'

const pessoa = {
    nome: "daniel"
}

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))
Object.defineProperty(pessoa, "sobrenome", {
    value: "Tapias Morales",
    enumerable: true,
    configurable: true,
    writable: true
})
Object.defineProperty(pessoa, "sobrenome", {
    configurable: false
})
Object.defineProperty(pessoa, "sobrenome", {
    writable: false
})

Object.defineProperties(pessoa, {
    prop1: {
        value: "prop 1",
        writable: true
    },
    prop2: {
        writable: false,
        value: 10
    }
})

console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"))

// delete pessoa.sobrenome
for (let prop in pessoa) {
    console.log(prop)
}


/* 

Object.getOwnPropertyDescriptor()

    O método Object.getOwnPropertyDescriptor() retorna um descritor de propriedades para uma propriedade (isto é, uma diretamente presente, e não pertencente ao objeto por força da cadeia de protótipo do objeto) de um dado objeto.

Sintaxe
    Object.getOwnPropertyDescriptor(obj, prop)

Parâmetros
    obj
        O objeto no qual deve-se procurar pela propriedade.
    prop
        O nome da propriedade cuja descrição é para ser retornada.

Valor de Retorno
    Um descritor de propriedades da propriedade especificada, se esta existir no objeto, ou undefined, caso contrário.

*/
