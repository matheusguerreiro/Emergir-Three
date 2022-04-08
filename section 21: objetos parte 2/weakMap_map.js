const myMap = new Map()
const myObj = new Object()

myObj.prop1 = "prop 1"

const arr = []

myMap.set(arr, myObj)
console.log(myMap.get(arr))

const myMap2 = new Map([[0, "zero"], [1, "um"], [2, "dois"]])
console.log(myMap2.get(0))
console.log(myMap2.get(2))
console.log(myMap2.keys())
console.log(myMap2.values())
console.log(myMap2.entries())

let keys = myMap2.keys()
for (let k of keys) {
    console.log(k)
}

for (let v of myMap2.values()) {
    console.log(v)
}

let _contador = new WeakMap()
class Contador {
    constructor() {
        // this.contador = 0
        _contador.set(this, 0)
    }
    increment() {
        // this.contador++
        _contador.set(this, _contador.get(this) + 1)
        console.log(_contador.get(this))
    }

    get contador() {
        return _contador.get(this)
    }
}

console.log("-----")
const c1 = new Contador()
c1.increment()
console.log(c1.contador)
c1.increment()
c1.increment()
c1.increment()
console.log(c1.contador)


/* 

Map

    O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor.

Descrição
    Um objeto Map itera seus elementos na order da inserção - um loop for...of retorna um array de [key, value] para cada iteração

Igualdade de chaves
    A igualdade de chaves é baseada no algoritimo sameValueZero.
    O NaN é considerado o mesmo que o NaN (apesar de NaN !== NaN) e todos os outros valores são considerados de acordo com a semântica do operador ===.
    Na especificação atual do ECMAScript, -0 e +0 são considerados iguais, embora não tenha sido nos esboços anteriores. Veja "Equivalência de valor entre -0 e 0" em Compatibilidade com navegadores para mais detalhes;

Objetos vs. Maps
    Um Object é similar o Map - ambos permitem que valores sejam definidos a chaves, retornar esses valores, remover as chaves, e detectar se algo está armazenado na chave. Por esta razão (e porque não existem outras alternativas construídas), o Objeto tem sido usado como Map historicamente.

Construtor
    Map()
        Cria um novo objeto Map.

propriedades estáticas
    get Map[@@species]
        A função do construtor que é usada para criar apartir de objetos.

propriedades da instância
    Map.prototype.size
        Retorna o número de pares chave/valor no objeto Map.


Métodos da instância
    Map.prototype.clear()
        : Remove todos os pares chave/valor do objeto Map.
    Map.prototype.delete(key)
        : Retorna true se o elemento no objeto Map existia e tenha sido removido, ou false
        se o elemento não existia. Map.prototype.has(key) irá retornar false após isso.
    Map.prototype.get(key)
        : Retorna o valor associado à chave, ou undefined se não há nada.
    Map.prototype.has(key)
        : Retorna uma asserção booleana se o valor tenha sido associado à chave no objeto Map ou não.
    Map.prototype.set(key, value)
        : Define o valor para a chave no objeto Map. Retorna o objeto Map


Métodos iterativos
    Map.prototype[@@iterator]()
        Retorna um novo objeto iterador que contèm um array de [chave, valor] para cada elemento do objeto Map na ordem em que foram inseridos.

    Map.prototype.keys()
        Retorna um novo objeto iterador que contèm as chaves de cada elemento do objeto Map na ordem em que foram inseridos.

    Map.prototype.values()
        Retorna um novo objeto iterador que contém os valores para cada elemento do objeto Map na ordem em que foram inseridos.

    Map.prototype.entries()
        Retorna um novo objeto iterador que contèm um array de [chave, valor] para cada elemento no objeto Map na ordem em que foram inseridos.

    Map.prototype.forEach(callbackFn[, thisArg])
        Invoca o callbackFn uma vez para cada par chave-valor presente no objeto Map, na ordem em que foram inseridos. Se um parâmetro thisArg é provido para o forEach, será usado o valor de this para cada callback.
        
*/
