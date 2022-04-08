// Acessadores JavaScript (Getters e Setters)

// ECMAScript 5 (ES5 2009) introduziu Getter e Setters.
// Getters e setters permitem que você defina Object Accessors (Computed Properties).


// JavaScript Getter (a palavra-chave get)
// Este exemplo usa uma langpropriedade para get o valor da languagepropriedade.


// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
// document.getElementById("demo").innerHTML = person.lang;

// Setter JavaScript (a palavra-chave definida)
// Este exemplo usa uma langpropriedade para set o valor da languagepropriedade.


const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
// document.getElementById("demo").innerHTML = person.language;

/* 

Por que usar getters e setters?

Dá uma sintaxe mais simples
Permite sintaxe igual para propriedades e métodos
Pode garantir uma melhor qualidade de dados
É útil para fazer coisas nos bastidores

*/

// Object.defineProperty()
// O Object.defineProperty()método também pode ser usado para adicionar Getters e Setters:

// Um exemplo de contador
// Define object
const obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;