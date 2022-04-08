const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}
const objFreeze = { ...obj }
const objSeal = { ...obj }
const objPrevent = { ...obj }

Object.freeze(objFreeze) //nao pode criar, nem atualizar e nem remover propriedades
Object.seal(objSeal) // nao pode criar, pode atualizar, mas nao pode remover props
Object.preventExtensions(objPrevent) //nao pode criar, pode alterar e pode remover props


/* 

Object.freeze()
    O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

Sintaxe
    Object.freeze(obj)

Parâmetros
    obj
        O objeto a ser congelado.

Valor de retorno
    O objeto congelado.

Descrição
    Nada pode ser adicionado ou removido do conjunto de propriedades de um objeto congelado. Qualquer tentativa de fazê-lo irá falhar, ou silenciosamente ou através de um TypeError exception (mais frequentemente, mas não exclusivamente, quando em strict mode).

    Valores não podem ser alterados para propriedades de dados. As propriedades do Accessor (getters e setters) funcionam da mesma forma (e ainda dão a ilusão de que você está alterando o valor). Observe que valores que são objetos ainda podem ser modificados, a menos que eles também sejam congelados.

*/


/* 

Object.seal()
    O método Object.seal() sela um Objeto, evitando que novas propriedades sejam adicionadas à ele e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).

Sintaxe
    Object.seal(obj)

Parâmetros
    obj
        O Objeto que deve ser selado.

Valor de retorno
    O Objeto sendo selado.

Descrição
    Por padrão, objetos são extensible (novas propriedades podem ser adicionadas à eles). Selar um objeto evita que novas propriedades sejam adicionadas e marca todas as propriedades existentes como não configuráveis. Isto tem o efeito de tornar as propriedades no objeto fixas e imutáveis. Tornando todas as propriedades não configuráveis também evita que as mesmas sejam convertidas de propriedades de dados para propriedades de acesso e vice-versa, mas não evita que os valores das propriedades de dados sejam alterados. A tentativa de deletar ou adicionar propriedades à um objeto selado, ou converter uma propriedade de dado para uma propriedade de acesso ou vice-versa, irá falhar, seja silenciosamente como jogando o erro TypeError (mais comumente, mas não exclusivamente, quando em modo rigoroso strict mode de código).

    A cadeia de prototipação permanece intocada. Entretanto, a propriedade __proto__  é selada também.

    Retorna a referência ao Objeto passado.

*/


/* 

Object.preventExtensions()
    O método Object.preventExtensions() impede que novas propriedades sejam adicionadas a um objeto (isto é, impede futuras extensões ao objeto).

Syntax
    Object.preventExtensions(obj)

Parâmetros
    obj
        O objeto a tornar-se não-extensível.

Valor de retorno
    Um objeto tornado não-extensível.

Descrição
    Um objeto é extensível se novas propriedades puderem der adicionadas ao mesmo. Object.preventExtensions() marca um objeto como não mais extensível, de forma que este nunca terá novas propriedades além daquelas que o objeto tinha quando foi marcado como não-extensível. Note que as propriedades de um objeto não-extensível, em geral, ainda poderão ser apagadas. Tentativas de adicionar novas propriedades a um objeto não-extensível falharão, tanto silenciosamente ou lançando uma exceção TypeError (mais comumente, mas não exclusivamente, quando em strict mode (en-US)).

    Object.preventExtensions() evita apenas a adição de novas propriedades diretas. Proprieades ainda poderão ser adicionadas ao protótipo do objeto.

    É impossível tornar um objeto extensível novamente uma vez que o mesmo tenha se tornado não-extensível.

*/