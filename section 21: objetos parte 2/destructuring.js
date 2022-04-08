const eu = { nome: "daniel", sobrenome: "tapias morales" }

let { nome: n, sobrenome } = eu
console.log(n)
console.log(sobrenome)

/* 

Desestruturação de array

Atribuição básica de variável
  var foo = ["one", "two", "three"];

  var [one, two, three] = foo;
  console.log(one); // "one"
  console.log(two); // "two"
  console.log(three); // "three"


Atribuição separada da declaração
  Uma variável pode ter seu valor atribuído via desestruturação separadamente da declaração dela.

  var a, b;

  [a, b] = [1, 2];
  console.log(a); // 1
  console.log(b); // 2


Valores padrão
  Uma variável pode ser atribuída de um padrão, no caso em que o valor retirado do array é undefined.

  var a, b;

  [a=5, b=7] = [1];
  console.log(a); // 1
  console.log(b); // 7


Trocando variáveis
  Os valores de duas variáveis podem ser trocados em uma expressão de desestruturação.

  Sem atribuição via desestruturação, trocar dois valores requer uma variável temporária (ou, em algumas linguagens de baixo nível, o Algoritmo XOR Swap).

  var a = 1;
  var b = 3;

  [a, b] = [b, a];
  console.log(a); // 3
  console.log(b); // 1


Analisando um array retornado de uma função
  Sempre foi possível retornar uma matriz de uma função. A desestruturação pode tornar mais conciso o trabalho com um valor de retorno do tipo array.

  Neste exemplo, f() retorna os valores [1, 2] como saída, que podem ser analisados em uma única linha com desestruturação.

  function f() {
    return [1, 2];
  }

  var a, b;
  [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2


Ignorando alguns valores retornados
  Você pode ignorar valores retornados que você não tem interesse:

  function f() {
    return [1, 2, 3];
  }

  var [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3

  Você também pode ignorar todos os valores retornados:
    [,,] = f();


Atribuindo o resto de um array para uma variável
  Ao desestruturar um array, você pode atribuir a parte restante deste em uma viáriável usando o padrão rest:

  var [a, ...b] = [1, 2, 3];
  console.log(a); // 1
  console.log(b); // [2, 3]

*/


/* 

Desestruturação de objeto

Atribuição básica
  var o = {p: 42, q: true};
  var {p, q} = o;

  console.log(p); // 42
  console.log(q); // true


Atribuição sem declaração
  Uma variável pode ter seu valor atribuído via desestruturação separadamente da sua declaração.

  var a, b;

  ({a, b} = {a:1, b:2});

  Os parênteses ( ... ) ao redor da declaração de atribuição é uma sintaxe necessária  quando se utiliza a atribuição via desestruturação de objeto literal sem uma declaração.

  {a, b} = {a:1, b:2} não é uma sintaxe stand-alone válida, pois {a, b} no lado esquerdo é considarada um bloco, não um objeto literal.

  No entanto, ({a, b} = {a:1, b:2}) é valida, assim como var {a, b} = {a:1, b:2}


Atribuição para variáveis com novos nomes
  Uma variável pode ser extraída de um objeto e atribuída a uma variável com um nome diferente da propriedade do objeto.

  var o = {p: 42, q: true};
  var {p: foo, q: bar} = o;

  console.log(foo); // 42
  console.log(bar); // true  


Valores padrão
  Uma variável pode ser atribuída de um padrão, no caso em que o valor retirado do objeto é undefined.

  var {a=10, b=5} = {a: 3};

  console.log(a); // 3
  console.log(b); // 5


Definindo um valor padrão de parâmetro de função
  Versão ES2015
    function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
      console.log(size, cords, radius);
      // do some chart drawing
    }

    drawES2015Chart({
      cords: { x: 18, y: 30 },
      radius: 30
    });


Objeto aninhado e desestruturação de array
  var metadata = {
      title: "Scratchpad",
      translations: [
        {
          locale: "de",
          localization_tags: [ ],
          last_edit: "2014-04-14T08:43:37",
          url: "/de/docs/Tools/Scratchpad",
          title: "JavaScript-Umgebung"
        }
      ],
      url: "/en-US/docs/Tools/Scratchpad"
  };

  var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle);  // "JavaScript-Umgebung"


For de iteração e desestruturação
  var people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith"
      },
      age: 35
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones"
      },
      age: 25
    }
  ];

  for (var {name: n, family: { father: f } } of people) {
    console.log("Name: " + n + ", Father: " + f);
  }

  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"


Extraindo campos de objetos passados como parâmetro de função
  function userId({id}) {
    return id;
  }

  function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(displayName + " is " + name);
  }

  var user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
  };

  console.log("userId: " + userId(user)); // "userId: 42"
  whois(user); // "jdoe is John"

  Isso extrai o id, displayName e firstName do objeto user e os imprime na tela.


Nomes computados de propriedade de objeto e desestruturação
  Nomes computados de propriedades, como em objetos literais, podem ser usados com desestruturação.

  let key = "z";
  let { [key]: foo } = { z: "bar" };

  console.log(foo); // "bar"

*/