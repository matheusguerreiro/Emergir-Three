/* 
    # Objetos JavaScript #

Você já aprendeu que as variáveis ​​JavaScript são contêineres para valores de dados.

Este código atribui um valor simples (Fiat) a uma variável chamada car:
*/

let car = "Fiat";

/* 
Objetos também são variáveis. Mas os objetos podem conter muitos valores.

Este código atribui muitos valores (Fiat, 500, branco) a uma variável chamada car1:
*/

const car1 = {type:"Fiat", model:"500", color:"white"};

// Os valores são escritos como pares nome:valor (nome e valor separados por dois pontos).

// É uma prática comum declarar objetos com a palavra-chave const .


/* 
    # Definição do objeto #

Você define (e cria) um objeto JavaScript com um literal de objeto:
*/

// Exemplo
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Espaços e quebras de linha não são importantes. Uma definição de objeto pode abranger várias linhas:

// Exemplo
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


/* 
    # Propriedades do objeto #

Os pares name:values ​​em objetos JavaScript são chamados de propriedades :

Propriedade    Valor da propriedade

primeiro nome  João
último nome    Corça
idade	         50
cor dos olhos  azul
*/

/* 
    # Acessando Propriedades do Objeto #

Você pode acessar as propriedades do objeto de duas maneiras:

objectName.propertyName

ou

objectName["propertyName"]
*/

// Exemplo 1
person.lastName;

// Exemplo2
person["lastName"];

// Objetos JavaScript são contêineres para valores nomeados chamados propriedades.


/* 
    # Métodos de objeto #

Objetos também podem ter métodos .

Métodos são ações que podem ser executadas em objetos.

Os métodos são armazenados em propriedades como definições de função .

Propriedade	   Valor da propriedade

primeiro nome	 João
último nome	   Corça
idade	         50
cor dos olhos	 azul

nome completo	function() {return this.firstName + " " + this.lastName;}

Um método é uma função armazenada como uma propriedade.
*/

// Exemplo
const person2 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/* 
No exemplo acima, this refere-se ao objeto pessoa .

IE this.firstName significa a propriedade firstName deste .

IE this.firstName significa a propriedade firstName de pessoa .
*/


/* 
    # O que é isso? #

Em JavaScript, a palavra-chave this se refere a um objeto .

Qual objeto depende de como this está sendo invocado (usado ou chamado).

A palavra-chave this se refere a objetos diferentes dependendo de como é usada:

Em um método de objeto, this refere-se ao objeto .
Sozinho, this refere-se ao objeto global .
Em uma função, this refere-se ao objeto global .
Em uma função, no modo estrito, this é undefined.
Em um evento, this refere-se ao elemento que recebeu o evento.
Métodos como call(), apply() e bind() podem se referir this a qualquer objeto.

Observação
this não é uma variável. É uma palavra-chave. Você não pode alterar o valor de this.

A palavra-chave this
Em uma definição de função, this refere-se ao "proprietário" da função.

No exemplo acima, this é o objeto pessoa que "possui" a fullNamefunção.

Em outras palavras, this.firstName significa a propriedade firstName deste objeto .
*/


/* 
    # Acessando métodos de objeto #

Você acessa um método de objeto com a seguinte sintaxe:

objectName.methodName()

Exemplo
name = person.fullName();

Se você acessar um método sem os parênteses (), ele retornará a definição da função :

Exemplo
name = person.fullName;
*/




/* 
    # Objetos JavaScript #

Em JavaScript, os objetos são reis. Se você entende objetos, você entende JavaScript.

Em JavaScript, quase "tudo" é um objeto.

Booleanos podem ser objetos (se definidos com a palavra- newchave)
Os números podem ser objetos (se definidos com a palavra- newchave)
Strings podem ser objetos (se definidos com a palavra- newchave)
Datas são sempre objetos
Matemática são sempre objetos
Expressões regulares são sempre objetos
Arrays são sempre objetos
Funções são sempre objetos
Objetos são sempre objetos

Todos os valores JavaScript, exceto primitivos, são objetos.


# Primitivos JavaScript #

Um valor primitivo é um valor que não possui propriedades ou métodos.

3.14 é um valor primitivo

Um tipo de dados primitivo são dados que têm um valor primitivo.

JavaScript define 7 tipos de tipos de dados primitivos:

Exemplos
string
number
boolean
null
undefined
symbol
bigint


# Imutável #

Os valores primitivos são imutáveis ​​(eles são codificados e não podem ser alterados).

se x = 3,14, você pode alterar o valor de x, mas não pode alterar o valor de 3,14.

Valor	     Tipo	Comente

"Olá"	     corda	        "Olá" é sempre "Olá"
3.14	     número	        3,14 é sempre 3,14
true	     boleano	      verdade é sempre verdade
false	     boleano        falso é sempre falso
null	     null (objeto)	null é sempre null
undefined	 Indefinido	    indefinido é sempre indefinido


# Objetos são variáveis #

As variáveis ​​JavaScript podem conter valores únicos:
*/

// Example
let person3 = "John Doe";

/* 
As variáveis ​​JavaScript também podem conter muitos valores.

Objetos também são variáveis. Mas os objetos podem conter muitos valores.

Os valores do objeto são escritos como pares name : value (nome e valor separados por dois pontos).
*/

// Exemplo
let person4 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/* 
Um objeto JavaScript é uma coleção de valores nomeados

É uma prática comum declarar objetos com a palavra- constchave.
*/

// Exemplo
const person5 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


/* 
    # Criando um objeto JavaScript #

Com JavaScript, você pode definir e criar seus próprios objetos.

Existem diferentes maneiras de criar novos objetos:

Crie um único objeto, usando um literal de objeto.
Crie um único objeto, com a palavra-chave new.
Defina um construtor de objeto e, em seguida, crie objetos do tipo construído.
Crie um objeto usando Object.create().
*/

// Este exemplo cria um objeto JavaScript vazio e adiciona 4 propriedades:

// Exemplo
const person6 = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Usando a palavra-chave JavaScript new
// O exemplo a seguir cria um novo objeto JavaScript usando new Object()e adiciona 4 propriedades:

// Exemplo
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

/* 
Os exemplos acima fazem exatamente o mesmo.

Mas não há necessidade de usar new Object().

Para legibilidade, simplicidade e velocidade de execução, use o método literal de objeto.
*/


/* 
    # Objetos JavaScript são mutáveis #

Objetos são mutáveis: eles são endereçados por referência, não por valor.

Se pessoa for um objeto, a seguinte declaração não criará uma cópia de pessoa.
*/

const x = person;  // Will not create a copy of person.

/* 
O objeto x não é uma cópia de pessoa. É pessoa . Tanto x quanto pessoa são o mesmo objeto.

Quaisquer mudanças em x também mudarão de pessoa, porque x e pessoa são o mesmo objeto.
*/

// Exemplo
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x1 = person;
x.age = 10;      // Will change both x.age and person.age