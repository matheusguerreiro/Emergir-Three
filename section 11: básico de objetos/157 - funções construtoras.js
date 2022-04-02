// função construtora
function Task(name) {
  "use strict"
  let _name = name
  
  this.createAt = new Date()
  this.updateAt = null
  this.changeName = function(newName) {
    if (newName) {
      _name = newName
      this.updateAt = new Date()
    }
  }
  this.getName = function() {
    return _name
  }
}

const t1 = new Task('minha tarefa')
t1.changeName('outro nome')

const t2 = new Task('outra tarefa')

// console.log(t1)
// console.log(t1.getName())

// console.log(t2)