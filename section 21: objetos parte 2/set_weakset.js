const _set = new Set()
const _weakset = new WeakSet()

const arr = [1, 2, 3, 4, 2, 3, 5]

_set.add(1)
_set.add(5)
_set.add(7)
_set.add(2)
_set.add(2)
_set.add(6)
console.log(_set.has(6))
_set.delete(6)
console.log(_set.has(6))
console.log("----")
for (let el of _set) {
    console.log(el)
}
console.log("---- keys")
for (let el of _set.keys()) {
    console.log(el)
}
console.log("---- values")
for (let el of _set.values()) {
    console.log(el)
}

let obj2 = {}
    ; (function () {
        let obj1 = { foo: "bar" }
        let obj2 = { foo2: "bar2" }
        _set.add(obj1)
        _weakset.add(obj2)
    })()

for (let x of _set) {
    console.log(x)
}


console.log("XXXXXXXXXXXX")
console.log(_set.size)
console.log(_weakset.has(obj2))


/* 

Set

Sumário
    O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

Sintaxe
    new Set([iterable]);


Parâmetros

    iterable
        Se um objeto iterável é passado, todos os seus elementos serão adicionados ao novo Set. Se tal parâmetro não for específicado, ou se seu valor for null, o novo Set estará vazio.

Descrição
    Objetos Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no Set pode ocorrer apenas uma vez; ele é único na coleção do Set.

Igualdade de valores
    Como cada valor no Set deve ser único, a igualdade será checada e não é baseada no mesmo algoritmo que aquele usado no operador ===. Especificamente, para Sets, +0 (que é exatamente igual a - 0) e - 0 são valores diferentes. No entanto, isto foi modificado na última especificação ECMAScript 2015. Iniciado com o Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) (bug 952870) e pelo  recent nightly Chrome, +0 e -0 são tratados com sendo o mesmo valor em objetos conjunto (Set). Também, NaN e undefined podem ser armazenados em um conjunto Set.


Propriedades

    Set.length
        O valor da propriedade comprimento é 0.
        Para contar o número de elementos de um Set, use Set.prototype.size (en-US).

    get Set[@@species] (en-US)
        A função construtora usada para criar objetos derivados.

    Set.prototype (en-US)
        Representa o prototype do constructor do Set. Permite a adição de propriedades para todos os objetos do tipo Set.

    Instâncias Set 
        Todas as instâncias de Set herdam de Set.prototype (en-US).


Sintaxe

    add(value)
        Copiar para área de transferência

    Parâmetros
        value
            O valor do elemento a ser adicionado ao Setobjeto.

Valor de retorno
    O objeto Set com valor agregado.


Exemplos

    Usando o método add()
        var mySet = new Set();

        mySet.add(1);
        mySet.add(5).add('some text'); // chainable

        console.log(mySet);
        // Set [1, 5, "some text"]


Set.prototype.clear()
    O clear() método remove todos os elementos de um Setobjeto.

    Usando o método clear()
        var mySet = new Set();
        mySet.add(1);
        mySet.add('foo');

        mySet.size;       // 2
        mySet.has('foo'); // true

        mySet.clear();

        mySet.size;       // 0
        mySet.has('bar')  // false


Set.prototype.delete()
    O delete() método remove um valor especificado de um Setobjeto, se estiver no conjunto.

    Usando o método delete()
        const mySet = new Set();
        mySet.add('foo');

        mySet.delete('bar'); // Returns false. No "bar" element found to be deleted.
        mySet.delete('foo'); // Returns true. Successfully removed.

        mySet.has('foo');    // Returns false. The "foo" element is no longer present.


Set.prototype.entries()
    O entries()método retorna um novo objeto Iterator que contém uma matriz de[value, value] para cada elemento no Setobjeto, na ordem de inserção. Para Setobjetos não há keycomo em Mapobjetos. No entanto, para manter a API semelhante ao Mapobjeto, cada entrada tem o mesmo valor para sua chave e valor aqui, de modo que um array [value, value]seja retornado.

    Usando entradas()
        var mySet = new Set();
        mySet.add('foobar');
        mySet.add(1);
        mySet.add('baz');

        var setIter = mySet.entries();

        console.log(setIter.next().value); // ["foobar", "foobar"]
        console.log(setIter.next().value); // [1, 1]
        console.log(setIter.next().value); // ["baz", "baz"]


Set.prototype.forEach()
    O forEach()método executa uma função fornecida uma vez para cada valor no Setobjeto, na ordem de inserção.

    O código a seguir registra uma linha para cada elemento em um Setobjeto:
        function logSetElements(value1, value2, set) {
            console.log('s[' + value1 + '] = ' + value2);
        }

        new Set(['foo', 'bar', undefined]).forEach(logSetElements);

        // logs:
        // "s[foo] = foo"
        // "s[bar] = bar"
        // "s[undefined] = undefined"


Set.prototype.has()
    O has()método retorna um booleano indicando se um elemento com o valor especificado existe Setou não em um objeto.

    Usando o método has()
        var mySet = new Set();
        mySet.add('foo');

        mySet.has('foo');  // returns true
        mySet.has('bar');  // returns false

        var set1 = new Set();
        var obj1 = {'key1': 1};
        set1.add(obj1);

        set1.has(obj1);        // returns true
        set1.has({'key1': 1}); // returns false because they are different object references
        set1.add({'key1': 1}); // now set1 contains 2 entries


Set.prototype.values()
    O values()método retorna um novo objeto Iterator que contém os valores de cada elemento no Setobjeto na ordem de inserção.

    Usando valores()
        var mySet = new Set();
        mySet.add('foo');
        mySet.add('bar');
        mySet.add('baz');

        var setIter = mySet.values();

        console.log(setIter.next().value); // "foo"
        console.log(setIter.next().value); // "bar"
        console.log(setIter.next().value); // "baz"
        
*/


