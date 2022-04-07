// JavaScript Classes

/* 

Syntax
class ClassName {
  constructor() { ... }
} 

*/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// Using a Class
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

// Class Methods
class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car1("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.")
/* document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old."; */

// "use strict"
class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // This will not work
    let date = new Date(); // This will work
    return date.getFullYear() - this.year;
  }
}


// Class Inheritance
class Car3 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car3 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar3 = new Model("Ford", "Mustang");
console.log(myCar3)
// document.getElementById("demo").innerHTML = myCar.show();

/* 

O método super() se refere à classe pai.

Ao chamar o método super() no método construtor, chamamos o método construtor do pai e obtemos acesso às propriedades e métodos do pai.

A herança é útil para reutilização de código: reutilize propriedades e métodos de uma classe existente ao criar uma nova classe.

*/

// Getters e Setters
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar4 = new Car("Ford");
console.log(myCar4)

// document.getElementById("demo").innerHTML = myCar.cnam;

/* 

Nota: mesmo que o getter seja um método, você não usa parênteses quando deseja obter o valor da propriedade.

O nome do método getter/setter não pode ser igual ao nome da propriedade, neste caso carname.

Muitos programadores usam um caractere de sublinhado _ antes do nome da propriedade para separar o getter/setter da propriedade real:

*/

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar5 = new Car("Ford");
console.log(myCar4)
// document.getElementById("demo").innerHTML = myCar.carname;

// Para usar um setter , use a mesma sintaxe de quando você define um valor de propriedade, sem parênteses:

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar6 = new Car("Ford");
myCar.carname = "Volvo";
console.log(myCar4)
// document.getElementById("demo").innerHTML = myCar.carname;

// Hoisting

//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
let myCar = new Car("Ford")

// Nota: Para outras declarações, como funções, você NÃO receberá um erro ao tentar usá-lo antes de ser declarado, porque o comportamento padrão das declarações JavaScript é içamento (mover a declaração para o topo).


// JavaScript Static Methods
/* 

Os métodos de classe estática são definidos na própria classe.

Você não pode chamar um static método em um objeto, apenas em uma classe de objeto. 

*/
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
// document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

// Se você quiser usar o objeto myCar dentro do staticmétodo, pode enviá-lo como parâmetro:
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Ford");
// document.getElementById("demo").innerHTML = Car.hello(myCar);